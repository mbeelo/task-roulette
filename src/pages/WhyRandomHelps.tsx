import { Link } from 'react-router-dom';

export const WhyRandomHelps = () => {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <header className="text-center py-20 pt-32">
          <h1 className="text-5xl font-bold text-white mb-4">Why Random Task Selection Works</h1>
          <p className="text-gray-400 text-lg">
            The psychology behind breaking decision paralysis
          </p>
        </header>

        {/* Content */}
        <article className="max-w-3xl mx-auto mb-12">
          <div className="bg-gray-900 bg-opacity-50 rounded-xl p-8 border border-gray-800">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-6">Understanding Decision Paralysis</h2>
              <p className="text-gray-300 mb-4">
                Decision paralysis happens when you're faced with multiple options and can't choose between them.
                Your brain gets stuck evaluating possibilities instead of taking action. This is especially common
                with todo lists where every task feels equally important.
              </p>
              <p className="text-gray-300 mb-6">
                The more options you have, the harder it becomes to decide. Psychologists call this "choice overload"—
                when having too many choices makes us freeze up rather than move forward.
              </p>

              <h2 className="text-2xl font-semibold mb-6">How Randomness Breaks the Cycle</h2>
              <p className="text-gray-300 mb-4">
                Random selection completely removes the decision burden from your shoulders. Instead of weighing
                pros and cons of each task, you let chance decide. This frees up mental energy you'd normally
                spend on choosing, and redirects it toward actually completing work.
              </p>
              <p className="text-gray-300 mb-6">
                When a task is randomly selected, you're more likely to accept it and begin working immediately.
                There's no second-guessing because the choice wasn't yours—it was chance.
              </p>

              <h2 className="text-2xl font-semibold mb-6">The Momentum Effect</h2>
              <p className="text-gray-300 mb-4">
                Starting any task creates momentum. Once you complete one item, you feel accomplished and ready
                to tackle more. Random selection gets you over the initial hurdle of starting, which is often
                the biggest obstacle to productivity.
              </p>
              <p className="text-gray-300 mb-6">
                This momentum builds throughout the day. Each completed task makes the next one easier to begin,
                creating a positive cycle of productivity.
              </p>

              <h2 className="text-2xl font-semibold mb-6">When Random Selection Makes Sense</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-green-400 mb-2">✓ Multiple tasks of similar importance</h4>
                  <p className="text-gray-300 text-sm">
                    When your list contains several tasks that all need to get done, but none is more urgent than others.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-green-400 mb-2">✓ Procrastination and overwhelm</h4>
                  <p className="text-gray-300 text-sm">
                    When you're stuck staring at your todo list and can't bring yourself to start anything.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-green-400 mb-2">✓ Building productive momentum</h4>
                  <p className="text-gray-300 text-sm">
                    When you want to break out of a low-productivity period and need a push to get moving.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-6">How Task Roulette Applies This Safely</h2>
              <p className="text-gray-300 mb-4">
                Task Roulette uses random selection responsibly. You maintain complete control over what tasks
                are eligible for selection. The randomness only applies to choosing between tasks you've already
                decided need to be done.
              </p>
              <p className="text-gray-300 mb-6">
                You can also categorize tasks by difficulty and time requirements, so the random selection
                happens within appropriate bounds for your current situation.
              </p>

              <h2 className="text-2xl font-semibold mb-6">The Science of "Good Enough" Decisions</h2>
              <p className="text-gray-300 mb-4">
                Research shows that "good enough" decisions often lead to better outcomes than trying to make
                perfect choices. When all your tasks are genuinely important, any choice you make will be productive.
              </p>
              <p className="text-gray-300 mb-6">
                Random selection embraces this principle. Instead of spending 20 minutes deciding between tasks,
                you spend those 20 minutes actually working on one of them.
              </p>

              <div className="bg-yellow-900 bg-opacity-50 border border-yellow-600 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium text-yellow-300 mb-3">Important Disclaimer</h3>
                <p className="text-yellow-100 text-sm">
                  Task Roulette is not a medical or therapeutic tool. It's a simple productivity aid designed to help
                  break indecision around everyday tasks. If you're experiencing persistent decision-making difficulties
                  that interfere with daily life, please consult a healthcare professional.
                </p>
              </div>

              <div className="border-t border-gray-700 pt-6 mt-8">
                <p className="text-center">
                  <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors underline mr-4">
                    ← Back to Task Roulette
                  </Link>
                  <Link to="/how-it-works" className="text-blue-400 hover:text-blue-300 transition-colors underline">
                    How it works →
                  </Link>
                </p>
              </div>

              <p className="text-xs text-gray-500 text-center mt-8 border-t border-gray-800 pt-4">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};