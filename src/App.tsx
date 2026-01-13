import { useState, useEffect } from 'react';
import type { Task, RouletteMode, SortBy, Difficulty, Duration, Frequency } from './types';
import { loadTasks, saveTasks, loadRouletteMode, saveRouletteMode, loadSortBy, saveSortBy } from './utils/storage';
import { selectTask, completeTask, sortTasks, isEligible, createTask } from './utils/taskUtils';
import { analytics } from './utils/analytics';
import { Header } from './components/Header';
import { ControlsRow } from './components/ControlsRow';
import { TaskInputCard } from './components/TaskInputCard';
import { ActiveTaskList } from './components/ActiveTaskList';
import { CompletedTaskList } from './components/CompletedTaskList';
import { CompletionModal } from './components/CompletionModal';
import { Footer } from './components/Footer';
import { SupportModal } from './components/SupportModal';
import { AdBanner } from './components/AdBanner';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [rouletteMode, setRouletteMode] = useState<RouletteMode>('random');
  const [sortBy, setSortBy] = useState<SortBy>('difficulty');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [arrowIndex, setArrowIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    setTasks(loadTasks());
    setRouletteMode(loadRouletteMode());
    setSortBy(loadSortBy());
    setIsInitialized(true);
  }, []);

  // Save tasks to localStorage whenever they change (but only after initialization)
  useEffect(() => {
    if (isInitialized) {
      saveTasks(tasks);
    }
  }, [tasks, isInitialized]);

  // Save settings to localStorage when they change
  useEffect(() => {
    saveRouletteMode(rouletteMode);
    // Track roulette mode changes (skip initial load)
    if (tasks.length > 0) {
      analytics.trackSettingsChange('roulette_mode', rouletteMode);
    }
  }, [rouletteMode]);

  useEffect(() => {
    saveSortBy(sortBy);
    // Track sort changes (skip initial load)
    if (tasks.length > 0) {
      analytics.trackSettingsChange('sort_by', sortBy);
    }
  }, [sortBy]);

  const activeTasks = tasks.filter(isEligible);
  const completedTasks = tasks.filter(task => !isEligible(task));
  const sortedActiveTasks = sortTasks(activeTasks, sortBy);

  const handleAddTask = (name: string, difficulty: Difficulty, duration: Duration, frequency: Frequency, category?: string) => {
    const newTask = createTask(name, difficulty, duration, frequency, category);
    setTasks(prevTasks => [newTask, ...prevTasks]);

    // Track task creation
    analytics.trackTaskCreate(difficulty, duration, frequency);
  };

  const handleSpin = () => {
    if (sortedActiveTasks.length === 0) return;

    const task = selectTask(tasks, rouletteMode);
    if (!task) return;

    // Track roulette spin
    analytics.trackSpinRoulette(rouletteMode, sortedActiveTasks.length);

    setIsSpinning(true);
    setSelectedTask(task);

    // Spinner animation - cycle through tasks
    const targetIndex = sortedActiveTasks.findIndex(t => t.id === task.id);
    let currentIndex = 0;
    let speed = 100;
    let spinningState = true;

    const animate = () => {
      if (!spinningState) return;

      setArrowIndex(currentIndex % sortedActiveTasks.length);
      currentIndex++;

      // Gradually slow down
      if (currentIndex > 15) {
        speed += 30;
      }

      // Stop at target after enough cycles
      if (currentIndex > 20 && (sortedActiveTasks.length === 1 || currentIndex % sortedActiveTasks.length === targetIndex)) {
        spinningState = false;
        setIsSpinning(false);
        setArrowIndex(targetIndex);
        setShowCompletionModal(true);
        return;
      }

      setTimeout(animate, speed);
    };

    animate();
  };

  const handleCompleteTask = () => {
    if (!selectedTask) return;

    // Track task completion
    analytics.trackTaskComplete(selectedTask.difficulty, selectedTask.frequency);

    const completedTask = completeTask(selectedTask);
    setTasks(tasks.map(task =>
      task.id === selectedTask.id ? completedTask : task
    ));
    setShowCompletionModal(false);
    setSelectedTask(null);
  };

  const handleSkip = () => {
    if (selectedTask) {
      // Track task skip
      analytics.trackTaskSkip(selectedTask.difficulty);
    }

    setShowCompletionModal(false);
    setSelectedTask(null);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));

    // If the deleted task was selected, clear selection
    if (selectedTask && selectedTask.id === taskId) {
      setSelectedTask(null);
      setShowCompletionModal(false);
    }
  };

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <Header />

        {/* Ad Banner */}
        <AdBanner className="mb-6" />

        {/* Task Input Card */}
        <TaskInputCard onAddTask={handleAddTask} />

        {/* Active Tasks List */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Active Tasks</h3>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">
                {sortedActiveTasks.length === 0
                  ? 'No eligible tasks'
                  : `${sortedActiveTasks.length} eligible task${sortedActiveTasks.length === 1 ? '' : 's'}`
                }
              </span>
              <button
                onClick={handleSpin}
                disabled={isSpinning || sortedActiveTasks.length === 0}
                className="text-white px-6 py-3 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: isSpinning || sortedActiveTasks.length === 0 ? '#2c2c2e' : '#007AFF',
                  boxShadow: isSpinning || sortedActiveTasks.length === 0
                    ? 'none'
                    : '0 6px 20px rgba(0, 122, 255, 0.4)'
                }}
              >
                {isSpinning ? 'SPINNING...' : 'SPIN'}
              </button>
            </div>
          </div>

          {/* Controls Row */}
          <ControlsRow
            rouletteMode={rouletteMode}
            sortBy={sortBy}
            onRouletteModeChange={setRouletteMode}
            onSortByChange={setSortBy}
          />
          <ActiveTaskList
            tasks={sortedActiveTasks}
            selectedTask={selectedTask}
            arrowIndex={arrowIndex}
            onDelete={handleDeleteTask}
          />
        </div>

        {/* Completed Tasks List */}
        <CompletedTaskList tasks={completedTasks} />

        {/* Completion Modal */}
        {showCompletionModal && selectedTask && (
          <CompletionModal
            task={selectedTask}
            isOpen={showCompletionModal}
            onComplete={handleCompleteTask}
            onSkip={handleSkip}
          />
        )}

        {/* Support Modal */}
        <SupportModal
          isOpen={showSupportModal}
          onClose={() => setShowSupportModal(false)}
        />
      </div>

      {/* Footer */}
      <Footer onSupportClick={() => setShowSupportModal(true)} />
    </div>
  );
}

export default App;
