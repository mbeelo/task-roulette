import { useEffect } from 'react';
import type { Task } from '../types';
import { todayDateString } from './taskUtils';

// Hook to handle daily task resets
export const useDailyReset = (tasks: Task[], setTasks: (tasks: Task[]) => void) => {
  useEffect(() => {
    const today = todayDateString();
    let needsUpdate = false;

    const updatedTasks = tasks.map(task => {
      if (task.frequency === 'daily' && task.lastCompletedDate && task.lastCompletedDate !== today) {
        needsUpdate = true;
        return { ...task, lastCompletedDate: undefined };
      }
      return task;
    });

    if (needsUpdate) {
      setTasks(updatedTasks);
    }
  }, [tasks, setTasks]);
};