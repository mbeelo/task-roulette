export interface Task {
  id: string; // uuid
  name: string;
  difficulty: 'easy' | 'medium' | 'hard';
  duration: '<5min' | '<1hr' | '>1hr';
  frequency: 'onetime' | 'daily' | 'infinite';
  category?: string;
  completed: boolean;
  lastCompletedDate?: string; // ISO date string, for daily reset logic
  createdAt: string; // ISO timestamp
}

export type RouletteMode = 'random' | 'easy-first' | 'hard-first' | 'short-first' | 'long-first';

export type SortBy = 'difficulty' | 'duration' | 'frequency' | 'category';

export interface LocalStorageSchema {
  'tr-tasks': Task[];
  'tr-roulette-mode': RouletteMode;
  'tr-sort-by': SortBy;
}

export type Difficulty = 'easy' | 'medium' | 'hard';
export type Duration = '<5min' | '<1hr' | '>1hr';
export type Frequency = 'onetime' | 'daily' | 'infinite';