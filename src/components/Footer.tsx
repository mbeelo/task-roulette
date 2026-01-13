import { Link } from 'react-router-dom';

interface FooterProps {
  onSupportClick?: () => void;
}

export const Footer = ({ onSupportClick }: FooterProps) => {
  return (
    <footer className="mt-12 py-8 border-t" style={{ borderColor: '#2c2c2e', backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Left side - Branding */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg font-semibold text-white hover:text-gray-300 transition-colors">
              Task Roulette
            </Link>
            <p className="text-xs text-gray-500 mt-1">
              © 2026 all rights reserved.
            </p>
          </div>

          {/* Right side - Navigation grid */}
          <div className="flex-grow max-w-md">
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-400">
              {/* Left column */}
              <div className="space-y-2">
                <Link
                  to="/how-it-works"
                  className="block hover:text-white transition-colors"
                >
                  how it works
                </Link>
                <Link
                  to="/why-random-helps"
                  className="block hover:text-white transition-colors"
                >
                  why random helps
                </Link>
                <a
                  href="https://behelo.com?utm_source=task-roulette&utm_medium=footer&utm_campaign=cross-app-promotion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  more apps
                </a>
              </div>

              {/* Right column */}
              <div className="space-y-2">
                {onSupportClick && (
                  <button
                    onClick={onSupportClick}
                    className="block hover:text-white transition-colors text-left"
                  >
                    support
                  </button>
                )}
                <a
                  href="/contact.html"
                  className="block hover:text-white transition-colors"
                >
                  contact
                </a>
                <a
                  href="/privacy.html"
                  className="block hover:text-white transition-colors"
                >
                  privacy policy
                </a>
                <a
                  href="/terms.html"
                  className="block hover:text-white transition-colors"
                >
                  terms of service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};