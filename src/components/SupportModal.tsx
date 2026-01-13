import { analytics } from '../utils/analytics';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal = ({ isOpen, onClose }: SupportModalProps) => {
  if (!isOpen) return null;

  const handleEnableAds = () => {
    localStorage.setItem('task_roulette_ads_enabled', 'true');
    // Clear any existing dismissal for current session
    sessionStorage.removeItem('task_roulette_ad_dismissed');

    // Track ads enabled
    analytics.trackSupportAction('ads_enabled');

    onClose();
  };

  const handleDonate = () => {
    // Track donation click
    analytics.trackSupportAction('donate_clicked');

    window.open('https://buymeacoffee.com/behelo?utm_source=task-roulette&utm_medium=support-modal&utm_campaign=donation', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="rounded-xl p-8 max-w-md w-full mx-4 relative border" style={{
        backgroundColor: '#1c1c1e',
        borderColor: '#2c2c2e',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          Support Task Roulette
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-center mb-6 leading-relaxed">
          Thank you so much for thinking about supporting this project. It would not be possible without you and your continued support. 💛
        </p>

        {/* Action buttons */}
        <div className="space-y-4">
          {/* Donate button */}
          <div className="text-center">
            <button
              onClick={handleDonate}
              className="w-full px-6 py-3 rounded-xl font-medium transition-all duration-200 mb-2 hover:scale-105"
              style={{
                backgroundColor: '#007AFF',
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(0, 122, 255, 0.3)'
              }}
            >
              Donate
            </button>
            <p className="text-sm text-gray-400 leading-relaxed">
              Buy us a coffee to help keep Task Roulette running and support continued development.
            </p>
          </div>
        </div>

        {/* Footer message */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Every bit of support helps us improve task management for everyone.
        </p>
      </div>
    </div>
  );
};