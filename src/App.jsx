import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import { MessageSquare } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback timer to prevent infinite loader if some asset fails to load
      const fallback = setTimeout(handleLoad, 1500);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-brand-bg">
      {/* Premium Fullscreen Logo Preloader */}
      {loading && (
        <div 
          className={`fixed inset-0 z-50 bg-[#0d0f12] flex flex-col items-center justify-center transition-opacity duration-500 ${
            fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="relative flex flex-col items-center space-y-6">
            {/* Pulsing gym logo wrapper */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand-accent/40 shadow-accent-glow animate-pulse">
              <img 
                src="/logo.jpg" 
                alt="Muscle Factory Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Spinning load track */}
            <div className="w-8 h-8 rounded-full border-4 border-white/5 border-t-brand-accent animate-spin" />
            
            <span className="text-[10px] text-brand-muted font-bold tracking-widest uppercase">
              Loading Muscle Factory
            </span>
          </div>
        </div>
      )}

      {/* Navigation Navbar Header */}
      <Navbar />

      {/* Main Page Viewport */}
      <main className="flex-grow">
        <Home />
      </main>

      {/* Credit Line */}
      <div className="w-full bg-black border-t border-white/10 py-3 text-center select-none">
        <span className="text-white/30 text-[11px] font-semibold tracking-wide">
          Developed by{' '}
          <a href="https://buildlabs.in" target="_blank" rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors font-bold"
          >buildlabs.in</a>
        </span>
      </div>

      {/* WhatsApp Conversion Floating Action Button */}
      <a
        href="https://wa.me/917057880936?text=Hi!%20I%27d%20like%20to%20enquire%20about%20Muscle%20Factory%20gym%20memberships."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:shadow-accent-glow hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="h-6 w-6 fill-current text-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 font-extrabold text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap leading-none">
          WHATSAPP CHAT
        </span>
      </a>
    </div>
  );
}

export default App;
