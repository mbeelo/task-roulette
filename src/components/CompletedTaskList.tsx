import { useState } from 'react';
import type { Task } from '../types';
import { TaskCard } from './TaskCard';

interface CompletedTaskListProps {
  tasks: Task[];
}

export const CompletedTaskList = ({ tasks }: CompletedTaskListProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      {/* Collapsible header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left mb-4 p-2 rounded hover:bg-gray-800 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-300">
          Completed ({tasks.length})
        </h3>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isExpanded ? 'rotate-90' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Completed tasks list */}
      {isExpanded && (
        <div className="space-y-3">
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              isCompleted={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};