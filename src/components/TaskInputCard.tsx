import { useState } from 'react';
import type { Difficulty, Duration, Frequency } from '../types';

interface TaskInputCardProps {
  onAddTask: (name: string, difficulty: Difficulty, duration: Duration, frequency: Frequency, category?: string) => void;
}

const DIFFICULTY_OPTIONS: { value: Difficulty; label: string; color: string }[] = [
  { value: 'easy', label: 'E', color: 'bg-green-900 text-green-300 border border-green-800 hover:bg-green-800' },
  { value: 'medium', label: 'M', color: 'bg-yellow-900 text-yellow-300 border border-yellow-800 hover:bg-yellow-800' },
  { value: 'hard', label: 'H', color: 'bg-red-900 text-red-300 border border-red-800 hover:bg-red-800' },
];

const DURATION_OPTIONS: { value: Duration; label: string; color: string }[] = [
  { value: '<5min', label: '<5min', color: 'bg-blue-900 text-blue-300 border border-blue-800 hover:bg-blue-800' },
  { value: '<1hr', label: '<1hr', color: 'bg-indigo-900 text-indigo-300 border border-indigo-800 hover:bg-indigo-800' },
  { value: '>1hr', label: '>1hr', color: 'bg-purple-900 text-purple-300 border border-purple-800 hover:bg-purple-800' },
];

const FREQUENCY_OPTIONS: { value: Frequency; label: string; color: string }[] = [
  { value: 'onetime', label: 'One-time', color: 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700' },
  { value: 'daily', label: 'Daily', color: 'bg-orange-900 text-orange-300 border border-orange-800 hover:bg-orange-800' },
  { value: 'infinite', label: 'Infinite', color: 'bg-pink-900 text-pink-300 border border-pink-800 hover:bg-pink-800' },
];

export const TaskInputCard = ({ onAddTask }: TaskInputCardProps) => {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [duration, setDuration] = useState<Duration>('<1hr');
  const [frequency, setFrequency] = useState<Frequency>('onetime');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddTask(
      name.trim(),
      difficulty,
      duration,
      frequency,
      category.trim() || undefined
    );

    // Reset form
    setName('');
    setCategory('');
  };


  return (
    <div className="p-6 rounded-xl border" style={{
      backgroundColor: '#1c1c1e',
      borderColor: '#2c2c2e',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)'
    }}>
      <form onSubmit={handleSubmit} className="flex items-start justify-between">
        {/* Left side - checkbox (visual) and content */}
        <div className="flex items-start gap-3 flex-1">
          <div className="mt-1">
            <div className="w-5 h-5 border-2 border-gray-500 rounded flex items-center justify-center">
              <span className="text-gray-500 text-xs">+</span>
            </div>
          </div>

          <div className="flex-1">
            {/* Task name input */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter task name..."
              className="w-full bg-transparent text-white text-lg font-semibold mb-2 border-none outline-none placeholder:text-gray-500"
              autoFocus
            />

            {/* Badges row - inline controls */}
            <div className="flex flex-wrap gap-2">
              {/* Difficulty select styled as badge */}
              <div className="relative group" data-tooltip="difficulty">
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                  className={`px-2 py-1 rounded-full text-xs font-medium border outline-none appearance-none cursor-pointer transition-colors ${DIFFICULTY_OPTIONS.find(opt => opt.value === difficulty)?.color}`}
                  aria-label="Task difficulty"
                >
                  {DIFFICULTY_OPTIONS.map(option => (
                    <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration select styled as badge */}
              <div className="relative group" data-tooltip="duration">
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value as Duration)}
                  className={`px-2 py-1 rounded-full text-xs font-medium border outline-none appearance-none cursor-pointer transition-colors ${DURATION_OPTIONS.find(opt => opt.value === duration)?.color}`}
                  aria-label="Task duration"
                >
                  {DURATION_OPTIONS.map(option => (
                    <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Frequency select styled as badge */}
              <div className="relative group" data-tooltip="frequency">
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value as Frequency)}
                  className={`px-2 py-1 rounded-full text-xs font-medium border outline-none appearance-none cursor-pointer transition-colors ${FREQUENCY_OPTIONS.find(opt => opt.value === frequency)?.color}`}
                  aria-label="Task frequency"
                >
                  {FREQUENCY_OPTIONS.map(option => (
                    <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category input styled as badge */}
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="category"
                className="px-2 py-1 rounded-full text-xs font-medium border-none outline-none min-w-16"
                style={{
                  backgroundColor: '#6b7280',
                  color: '#f3f4f6',
                  borderColor: '#4b5563'
                }}
              />

              {/* Add button as badge */}
              <button
                type="submit"
                disabled={!name.trim()}
                className="px-4 py-2 rounded-xl text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: !name.trim() ? '#2c2c2e' : '#007AFF',
                  boxShadow: !name.trim()
                    ? 'none'
                    : '0 4px 12px rgba(0, 122, 255, 0.3)'
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};