import { Link } from 'react-router-dom';

export const ContentSection = () => {
  return (
    <section className="mb-8 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gray-900 bg-opacity-50 rounded-xl p-6 border border-gray-800">
          <h2 className="text-2xl font-semibold text-white mb-4">
            What is Task Roulette?
          </h2>

          <div className="text-gray-300 leading-relaxed space-y-3">
            <p>
              Ever stare at your todo list, unable to decide what to tackle first? Task Roulette solves choice paralysis
              by randomly selecting your next task. Add your tasks, hit spin, and let randomness break the decision deadlock.
            </p>

            <p>
              <strong>For example:</strong> If your list includes "answer emails," "work out," and "clean the kitchen,"
              Task Roulette picks one so you can stop debating and start moving.
            </p>

            <p>
              Perfect for anyone who gets stuck choosing between important tasks. Free, no signup required—start being
              productive in under 30 seconds.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
            <Link
              to="/how-it-works"
              className="text-blue-400 hover:text-blue-300 transition-colors underline font-medium"
            >
              How it works
            </Link>
            <span className="text-gray-500">•</span>
            <Link
              to="/why-random-helps"
              className="text-blue-400 hover:text-blue-300 transition-colors underline font-medium"
            >
              Why randomness helps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};