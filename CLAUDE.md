# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle (requires TypeScript compilation to pass)
- `npm run lint` - Run ESLint on all source files
- `npm run preview` - Preview production build locally

## Architecture

**Task Roulette** is a client-side task management app that helps users overcome decision paralysis through gamified task selection.

### Core Data Flow
1. **Storage Layer** (`src/utils/storage.ts`): All data persists in localStorage with prefixed keys (`tr-tasks`, `tr-roulette-mode`, `tr-sort-by`)
2. **State Management** (`src/App.tsx`): Uses React hooks with initialization guard to prevent localStorage race conditions
3. **Task Logic** (`src/utils/taskUtils.ts`): Handles task eligibility, roulette selection algorithms, and sorting

### Key Components Architecture
- **App.tsx**: Main state container with localStorage persistence and roulette animation logic
- **TaskInputCard**: Badge-style inline form controls for task creation
- **ActiveTaskList/CompletedTaskList**: Render filtered task collections
- **TaskCard**: Individual task display with delete functionality

### Critical Implementation Details

**Task Eligibility Logic:**
- `onetime` tasks become ineligible once completed
- `daily` tasks reset eligibility at midnight (compared by date string)
- `infinite` tasks remain eligible after completion

**Roulette Selection Modes:**
- `random`: Pure random selection from eligible tasks
- `easy-first/hard-first`: Weighted selection favoring difficulty levels
- `short-first/long-first`: Weighted selection favoring duration estimates

**localStorage Race Condition Fix:**
The app uses an `isInitialized` state flag to prevent saving empty task arrays before localStorage data loads. Always maintain this pattern when modifying state management.

**Styling Consistency:**
Badge colors are defined in both `TaskInputCard` and `TaskCard` components and must match exactly. Use the pattern: `bg-{color}-900 text-{color}-300 border border-{color}-800` for dark theme consistency.

### Type System
- All core types defined in `src/types.ts`
- localStorage schema is typed via `LocalStorageSchema` interface
- Task metadata uses strict union types for consistency

### Analytics
The analytics system (`src/utils/analytics.ts`) is privacy-first and disabled on localhost. It tracks user interactions without collecting personal data, ready for Google Analytics integration when needed.
- always use UTMs for external links