import { Link } from 'react-router-dom';

interface FooterProps {
  onSupportClick?: () => void;
}

export const Footer = ({ onSupportClick }: FooterProps) => {
  return (
    <footer className="mt-12 py-8 border-t" style={{ borderColor: '#2c2c2e', backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center gap-8">
          {/* Navigation grid with category headers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-8 text-sm">
            {/* Learn */}
            <div className="space-y-3">
              <h3 className="text-white font-medium mb-3">learn</h3>
              <Link
                to="/how-it-works"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                how it works
              </Link>
              <Link
                to="/why-random-helps"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                why smart selection
              </Link>
            </div>

            {/* Help */}
            <div className="space-y-3">
              <h3 className="text-white font-medium mb-3">help</h3>
              {onSupportClick && (
                <button
                  onClick={onSupportClick}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                >
                  support
                </button>
              )}
              <a
                href="/contact.html"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                contact
              </a>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h3 className="text-white font-medium mb-3">legal</h3>
              <a
                href="/privacy.html"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                privacy policy
              </a>
              <a
                href="/terms.html"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                terms of service
              </a>
            </div>

            {/* More Apps */}
            <div className="space-y-3">
              <h3 className="text-white font-medium mb-3">more apps</h3>
              <a
                href="https://behelo.com?utm_source=task-roulette&utm_medium=footer&utm_campaign=cross-app-promotion"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                discover more tools
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2026 <Link to="/" className="hover:text-gray-300 transition-colors">Task Roulette</Link>. all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};