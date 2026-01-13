import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { HowItWorks } from './pages/HowItWorks';
import { WhyRandomHelps } from './pages/WhyRandomHelps';
import { Footer } from './components/Footer';
import { SupportModal } from './components/SupportModal';

function App() {
  const [showSupportModal, setShowSupportModal] = useState(false);

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-random-helps" element={<WhyRandomHelps />} />
        </Routes>
      </div>

      {/* Footer on all pages */}
      <Footer onSupportClick={() => setShowSupportModal(true)} />

      {/* Support Modal for all pages */}
      <SupportModal
        isOpen={showSupportModal}
        onClose={() => setShowSupportModal(false)}
      />
    </div>
  );
}

export default App;
