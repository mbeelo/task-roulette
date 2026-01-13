import type { Task } from '../types';

interface TaskCardProps {
  task: Task;
  isCompleted?: boolean;
  isSelected?: boolean;
  onDelete?: (taskId: string) => void;
}

const getDifficultyColor = (difficulty: Task['difficulty']): string => {
  switch (difficulty) {
    case 'easy': return 'bg-green-900 text-green-300 border border-green-800';
    case 'medium': return 'bg-yellow-900 text-yellow-300 border border-yellow-800';
    case 'hard': return 'bg-red-900 text-red-300 border border-red-800';
  }
};

const getDurationColor = (duration: Task['duration']): string => {
  switch (duration) {
    case '<5min': return 'bg-blue-900 text-blue-300 border border-blue-800';
    case '<1hr': return 'bg-indigo-900 text-indigo-300 border border-indigo-800';
    case '>1hr': return 'bg-purple-900 text-purple-300 border border-purple-800';
  }
};

const getFrequencyColor = (frequency: Task['frequency']): string => {
  switch (frequency) {
    case 'onetime': return 'bg-gray-800 text-gray-300 border border-gray-700';
    case 'daily': return 'bg-orange-900 text-orange-300 border border-orange-800';
    case 'infinite': return 'bg-pink-900 text-pink-300 border border-pink-800';
  }
};

export const TaskCard = ({ task, isCompleted = false, isSelected = false, onDelete }: TaskCardProps) => {
  return (
    <div
      className={`p-6 rounded-xl border transition-all duration-200 ${
        isSelected
          ? 'shadow-lg shadow-white/10'
          : ''
      } ${
        isCompleted
          ? 'opacity-50'
          : 'hover:border-gray-600'
      }`}
      style={{
        backgroundColor: '#1c1c1e',
        borderColor: isSelected ? '#ffffff' : '#2c2c2e',
        boxShadow: isSelected
          ? '0 8px 32px rgba(255, 255, 255, 0.08)'
          : '0 2px 8px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div className="flex items-start justify-between">
        {/* Left side - checkbox (visual only) and content */}
        <div className="flex items-start gap-3 flex-1">
          <div className="mt-1">
            <div
              className={`w-5 h-5 border-2 rounded ${
                isCompleted
                  ? 'bg-green-600 border-green-600'
                  : 'border-gray-500'
              } flex items-center justify-center`}
            >
              {isCompleted && (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </div>

          <div className="flex-1">
            {/* Task name */}
            <h3
              className={`font-semibold text-lg mb-2 ${
                isCompleted ? 'line-through text-gray-400' : 'text-white'
              }`}
            >
              {task.name}
            </h3>

            {/* Badges row */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(task.difficulty)}`}>
                {task.difficulty}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDurationColor(task.duration)}`}>
                {task.duration}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFrequencyColor(task.frequency)}`}>
                {task.frequency}
              </span>
              {task.category && (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-600 text-gray-100">
                  {task.category}
                </span>
              )}

              {/* Delete button */}
              {onDelete && (
                <button
                  onClick={() => onDelete(task.id)}
                  className="ml-2 p-1 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded transition-colors"
                  title="Delete task"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Optional completion info */}
      {isCompleted && task.frequency === 'daily' && task.lastCompletedDate && (
        <div className="mt-2 text-xs text-gray-500">
          Last completed: {new Date(task.lastCompletedDate).toLocaleDateString()}
        </div>
      )}
    </div>
  );
};