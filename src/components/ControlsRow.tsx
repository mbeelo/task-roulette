import type { RouletteMode, SortBy } from '../types';

interface ControlsRowProps {
  rouletteMode: RouletteMode;
  sortBy: SortBy;
  onRouletteModeChange: (mode: RouletteMode) => void;
  onSortByChange: (sortBy: SortBy) => void;
}

const ROULETTE_MODE_OPTIONS: { value: RouletteMode; label: string }[] = [
  { value: 'random', label: 'Random' },
  { value: 'easy-first', label: 'Easy First' },
  { value: 'hard-first', label: 'Hard First' },
  { value: 'short-first', label: 'Short First' },
  { value: 'long-first', label: 'Long First' },
];

const SORT_BY_OPTIONS: { value: SortBy; label: string }[] = [
  { value: 'difficulty', label: 'Difficulty' },
  { value: 'duration', label: 'Duration' },
  { value: 'frequency', label: 'Frequency' },
  { value: 'category', label: 'Category' },
];

export const ControlsRow = ({ rouletteMode, sortBy, onRouletteModeChange, onSortByChange }: ControlsRowProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {/* Roulette Rules */}
      <div>
        <h3 className="text-sm font-semibold text-gray-300 mb-2 cursor-help" data-tooltip="Overwhelmed? Easy First • Energized? Hard First • Need momentum? Short First">
          ROULETTE RULES:
        </h3>
        <div className="border border-gray-600 rounded">
          <select
            value={rouletteMode}
            onChange={(e) => onRouletteModeChange(e.target.value as RouletteMode)}
            className="w-full bg-transparent text-white px-3 py-2 border-none outline-none appearance-none cursor-pointer"
          >
            {ROULETTE_MODE_OPTIONS.map(option => (
              <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sort By */}
      <div>
        <h3 className="text-sm font-semibold text-gray-300 mb-2">SORT BY:</h3>
        <div className="border border-gray-600 rounded">
          <select
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value as SortBy)}
            className="w-full bg-transparent text-white px-3 py-2 border-none outline-none appearance-none cursor-pointer"
          >
            {SORT_BY_OPTIONS.map(option => (
              <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};