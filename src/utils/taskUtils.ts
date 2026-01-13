import type { Task, RouletteMode, SortBy } from '../types';

export const todayDateString = (): string => {
  return new Date().toISOString().split('T')[0];
};

export const generateId = (): string => {
  return crypto.randomUUID();
};

export const isEligible = (task: Task): boolean => {
  if (task.completed && task.frequency === 'onetime') return false;
  if (task.frequency === 'daily' && task.lastCompletedDate === todayDateString()) return false;
  return true;
};

export const randomFrom = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const selectTask = (tasks: Task[], mode: RouletteMode): Task | null => {
  const eligible = tasks.filter(isEligible);

  if (eligible.length === 0) return null;

  if (mode === 'random') {
    return randomFrom(eligible);
  }

  if (mode === 'easy-first') {
    const easy = eligible.filter(t => t.difficulty === 'easy');
    if (easy.length > 0) return randomFrom(easy);
    const medium = eligible.filter(t => t.difficulty === 'medium');
    if (medium.length > 0) return randomFrom(medium);
    return randomFrom(eligible.filter(t => t.difficulty === 'hard'));
  }

  if (mode === 'hard-first') {
    const hard = eligible.filter(t => t.difficulty === 'hard');
    if (hard.length > 0) return randomFrom(hard);
    const medium = eligible.filter(t => t.difficulty === 'medium');
    if (medium.length > 0) return randomFrom(medium);
    return randomFrom(eligible.filter(t => t.difficulty === 'easy'));
  }

  if (mode === 'short-first') {
    const short = eligible.filter(t => t.duration === '<5min');
    if (short.length > 0) return randomFrom(short);
    const medium = eligible.filter(t => t.duration === '<1hr');
    if (medium.length > 0) return randomFrom(medium);
    return randomFrom(eligible.filter(t => t.duration === '>1hr'));
  }

  if (mode === 'long-first') {
    const long = eligible.filter(t => t.duration === '>1hr');
    if (long.length > 0) return randomFrom(long);
    const medium = eligible.filter(t => t.duration === '<1hr');
    if (medium.length > 0) return randomFrom(medium);
    return randomFrom(eligible.filter(t => t.duration === '<5min'));
  }

  return randomFrom(eligible);
};

export const completeTask = (task: Task): Task => {
  if (task.frequency === 'onetime') {
    return { ...task, completed: true };
  }
  if (task.frequency === 'daily') {
    return { ...task, lastCompletedDate: todayDateString() };
  }
  // infinite: no state change, stays in pool
  return task;
};

export const sortTasks = (tasks: Task[], sortBy: SortBy): Task[] => {
  const sortOrders = {
    difficulty: ['easy', 'medium', 'hard'],
    duration: ['<5min', '<1hr', '>1hr'],
    frequency: ['onetime', 'daily', 'infinite'],
  };

  return [...tasks].sort((a, b) => {
    if (sortBy === 'category') {
      const aCategory = a.category || 'zzz'; // uncategorized at end
      const bCategory = b.category || 'zzz';
      return aCategory.localeCompare(bCategory);
    }

    const order = sortOrders[sortBy];
    const aIndex = order.indexOf(a[sortBy] as string);
    const bIndex = order.indexOf(b[sortBy] as string);

    if (aIndex === bIndex) {
      // secondary sort by name
      return a.name.localeCompare(b.name);
    }

    return aIndex - bIndex;
  });
};

export const createTask = (
  name: string,
  difficulty: Task['difficulty'],
  duration: Task['duration'],
  frequency: Task['frequency'],
  category?: string
): Task => {
  return {
    id: generateId(),
    name: name.trim(),
    difficulty,
    duration,
    frequency,
    category: category?.trim() || undefined,
    completed: false,
    createdAt: new Date().toISOString(),
  };
};