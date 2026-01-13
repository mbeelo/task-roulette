import type { Task, RouletteMode, SortBy } from '../types';

const STORAGE_KEYS = {
  TASKS: 'tr-tasks',
  ROULETTE_MODE: 'tr-roulette-mode',
  SORT_BY: 'tr-sort-by',
} as const;

export const loadTasks = (): Task[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.TASKS);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
};

export const saveTasks = (tasks: Task[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};

export const loadRouletteMode = (): RouletteMode => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.ROULETTE_MODE);
    return (stored as RouletteMode) || 'random';
  } catch (error) {
    console.error('Error loading roulette mode from localStorage:', error);
    return 'random';
  }
};

export const saveRouletteMode = (mode: RouletteMode): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.ROULETTE_MODE, mode);
  } catch (error) {
    console.error('Error saving roulette mode to localStorage:', error);
  }
};

export const loadSortBy = (): SortBy => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.SORT_BY);
    return (stored as SortBy) || 'difficulty';
  } catch (error) {
    console.error('Error loading sort preference from localStorage:', error);
    return 'difficulty';
  }
};

export const saveSortBy = (sortBy: SortBy): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.SORT_BY, sortBy);
  } catch (error) {
    console.error('Error saving sort preference to localStorage:', error);
  }
};