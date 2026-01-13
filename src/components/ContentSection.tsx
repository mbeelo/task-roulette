import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ContentSection = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className="mb-8 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gray-900 bg-opacity-50 rounded-xl p-6 border border-gray-800">
          <div className="flex items-center justify-center mb-4 relative">
            <h2 className="text-2xl font-semibold text-white">
              What is Task Roulette?
            </h2>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white transition-colors p-1 absolute right-0"
              aria-label={isExpanded ? "Minimize section" : "Expand section"}
            >
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {isExpanded && (
            <>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>
                  Ever stare at your todo list, unable to decide what to tackle first? Task Roulette uses smart task selection
                  based on your current energy level and available time. Set your preferences, and get tasks matched to how you feel.
                </p>

                <p>
                  <strong>For example:</strong> Feeling tired? Get easy tasks like "answer emails." High energy? Tackle
                  "workout" or "deep work." The selection matches your current state, not random chance.
                </p>

                <p>
                  Perfect for anyone who gets stuck choosing between important tasks. Free, no signup required—get the
                  right task for right now.
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};