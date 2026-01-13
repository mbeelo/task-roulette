import type { Task } from '../types';

interface SpinnerDisplayProps {
  tasks: Task[];
  selectedTask: Task | null;
  isSpinning: boolean;
  onSpin: () => void;
  arrowIndex: number;
}

export const SpinnerDisplay = ({ tasks, isSpinning, onSpin }: SpinnerDisplayProps) => {
  return (
    <div className="text-center mb-6">
      {/* Spin Button */}
      <button
        onClick={onSpin}
        disabled={isSpinning || tasks.length === 0}
        className="text-white px-8 py-4 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
        style={{
          backgroundColor: isSpinning || tasks.length === 0 ? '#2c2c2e' : '#007AFF',
          boxShadow: isSpinning || tasks.length === 0
            ? 'none'
            : '0 8px 24px rgba(0, 122, 255, 0.4)'
        }}
      >
        {isSpinning ? 'SPINNING...' : 'SPIN'}
      </button>

      {/* Status text */}
      <div className="text-gray-400 text-sm mt-2">
        {tasks.length === 0
          ? 'No eligible tasks'
          : `${tasks.length} eligible task${tasks.length === 1 ? '' : 's'}`
        }
      </div>
    </div>
  );
};