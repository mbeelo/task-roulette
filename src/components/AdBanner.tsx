import { useState } from 'react';

interface AdBannerProps {
  className?: string;
}

export const AdBanner = ({ className = '' }: AdBannerProps) => {
  const [adsEnabled] = useState(() => {
    // Hide ads until AdSense approval - always return false for now
    return false;
  });

  const [isDismissed, setIsDismissed] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('task_roulette_ad_dismissed') === 'true';
    }
    return false;
  });

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('task_roulette_ad_dismissed', 'true');
  };

  if (!adsEnabled || isDismissed) return null;

  return (
    <div className={`relative ${className}`}>
      <div
        className="p-6 rounded-xl border border-dashed text-center relative"
        style={{
          backgroundColor: '#1c1c1e',
          borderColor: '#48484a'
        }}
      >
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-300 transition-colors"
          title="Dismiss ad"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Ad content placeholder */}
        <div className="text-gray-400 text-sm mb-1">ADVERTISEMENT</div>
        <div className="p-6 bg-gray-700 bg-opacity-30 rounded border-2 border-dashed border-gray-500">
          <div className="text-gray-400 font-medium">Ad Space - Your tasteful ad here</div>
          <div className="text-gray-500 text-sm mt-1">
            Thank you for supporting Task Roulette! 💛
          </div>
        </div>
      </div>
    </div>
  );
};