import type { Task } from '../types';
import { TaskCard } from './TaskCard';

interface ActiveTaskListProps {
  tasks: Task[];
  selectedTask: Task | null;
  arrowIndex: number;
  onDelete?: (taskId: string) => void;
}

export const ActiveTaskList = ({ tasks, selectedTask, onDelete }: ActiveTaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        <p className="text-lg">No active tasks</p>
        <p className="text-sm">Add some tasks above to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          isSelected={selectedTask?.id === task.id}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};