import { Link } from 'react-router-dom';

export const HowItWorks = () => {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <header className="text-center py-20 pt-32">
          <h1 className="text-5xl font-bold text-white mb-4">How Task Roulette Works</h1>
          <p className="text-gray-400 text-lg">
            Simple, effective task selection in four easy steps
          </p>
        </header>

        {/* Content */}
        <article className="max-w-3xl mx-auto mb-12">
          <div className="bg-gray-900 bg-opacity-50 rounded-xl p-8 border border-gray-800">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-6">The Simple Process</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-medium text-white mb-2">Step 1: Add Your Tasks</h3>
                  <p className="text-gray-300">
                    Type in any task you need to complete. Choose the difficulty (easy, medium, hard),
                    estimated time (under 5 minutes to over 1 hour), and frequency (onetime, daily, infinite).
                    Add as many tasks as you want—there's no limit.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-medium text-white mb-2">Step 2: Hit the Spin Button</h3>
                  <p className="text-gray-300">
                    When you're ready to get productive but can't decide what to work on,
                    click the blue "SPIN" button. The roulette wheel randomly selects one eligible task
                    from your list, removing the decision burden completely.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-medium text-white mb-2">Step 3: Complete the Selected Task</h3>
                  <p className="text-gray-300">
                    Focus on the chosen task without second-guessing. The randomization breaks decision paralysis
                    and gives you clear direction. Work on it until it's done—no switching allowed.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-medium text-white mb-2">Step 4: Mark Complete and Repeat</h3>
                  <p className="text-gray-300">
                    When finished, mark the task complete. Task Roulette automatically manages task eligibility:
                    onetime tasks disappear, daily tasks reset at midnight, and infinite tasks stay available
                    for future spins.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Why Randomness Works</h2>
              <p className="text-gray-300 mb-4">
                Random selection removes the cognitive load of choosing between equally important tasks.
                Instead of spending mental energy on decision-making, you channel that energy into actually
                completing work. It's a simple psychological hack that turns indecision into action.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Task Types Explained</h2>
              <div className="grid gap-4 mt-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-blue-400 mb-2">Onetime Tasks</h4>
                  <p className="text-gray-300 text-sm">
                    Perfect for single-use items like "call the dentist" or "file taxes."
                    Once completed, they're removed from your active list permanently.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-green-400 mb-2">Daily Tasks</h4>
                  <p className="text-gray-300 text-sm">
                    Great for habits and routines like "exercise" or "read for 30 minutes."
                    They become available again each day at midnight.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-purple-400 mb-2">Infinite Tasks</h4>
                  <p className="text-gray-300 text-sm">
                    Ideal for ongoing work like "answer emails" or "organize files."
                    They remain available for selection even after completion.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">When to Use Task Roulette</h2>
              <p className="text-gray-300 mb-4">
                Task Roulette works best when you have multiple tasks of similar importance and can't decide
                which to tackle first. It's perfect for breaking procrastination cycles and getting momentum
                on productive days.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">When NOT to Use It</h2>
              <p className="text-gray-300 mb-6">
                Don't use Task Roulette for time-sensitive tasks with hard deadlines, or when you have a clear
                priority order. It's a tool for overcoming indecision, not for managing urgent responsibilities.
              </p>

              <div className="border-t border-gray-700 pt-6 mt-8">
                <p className="text-center">
                  <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors underline mr-4">
                    ← Back to Task Roulette
                  </Link>
                  <Link to="/why-random-helps" className="text-blue-400 hover:text-blue-300 transition-colors underline">
                    Why randomness helps →
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