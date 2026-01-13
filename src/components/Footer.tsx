interface FooterProps {
  onSupportClick: () => void;
}

export const Footer = ({ onSupportClick }: FooterProps) => {
  return (
    <footer className="mt-12 py-8 border-t" style={{ borderColor: '#2c2c2e', backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-wrap justify-between items-center text-sm text-gray-400">
          <div className="mb-4 sm:mb-0">
            © 2026 Task Roulette. all rights reserved.
          </div>
          <div className="flex flex-wrap gap-6">
            <button
              onClick={onSupportClick}
              className="hover:text-white transition-colors cursor-pointer"
            >
              support
            </button>
            <a
              href="https://behelo.com?utm_source=task-roulette&utm_medium=footer&utm_campaign=cross-app-promotion"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              more apps
            </a>
            <a
              href="/contact.html"
              className="hover:text-white transition-colors"
            >
              contact
            </a>
            <a
              href="/privacy.html"
              className="hover:text-white transition-colors"
            >
              privacy policy
            </a>
            <a
              href="/terms.html"
              className="hover:text-white transition-colors"
            >
              terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};