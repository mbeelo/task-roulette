import type { Task } from '../types';
import { TaskCard } from './TaskCard';

interface CompletionModalProps {
  task: Task;
  isOpen: boolean;
  onComplete: () => void;
  onSkip: () => void;
}

export const CompletionModal = ({ task, isOpen, onComplete, onSkip }: CompletionModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-card p-6 rounded-lg max-w-md w-full shadow-2xl border border-gray-600">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">🎯 Task Selected!</h3>
          <p className="text-gray-300">Here's your next task to work on:</p>
        </div>

        {/* Selected Task Display */}
        <div className="mb-6">
          <TaskCard task={task} isSelected={true} />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onComplete}
            className="flex-1 bg-green-600 hover:bg-green-500 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Mark Complete
          </button>
          <button
            onClick={onSkip}
            className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Skip for Now
          </button>
        </div>

        {/* Optional: Task frequency info */}
        <div className="mt-4 text-center text-sm text-gray-400">
          {task.frequency === 'daily' && (
            <p>💡 This is a daily task - it will reset tomorrow if completed</p>
          )}
          {task.frequency === 'infinite' && (
            <p>♾️ This task will remain available after completion</p>
          )}
          {task.frequency === 'onetime' && (
            <p>✅ This task will be marked as done once completed</p>
          )}
        </div>
      </div>
    </div>
  );
};