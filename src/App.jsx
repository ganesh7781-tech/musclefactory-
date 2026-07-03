import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-brand-bg">
      {/* Navigation Navbar Header */}
      <Navbar />

      {/* Main Page Viewport */}
      <main className="flex-grow">
        <Home />
      </main>

      {/* Footer Branding Info */}
      <Footer />

      {/* WhatsApp Conversion Floating Action Button */}
      <a
        href="https://wa.me/917057880958?text=Hi!%20I%27d%20like%20to%20enquire%20about%20Muscle%20Factory%20gym%20memberships."
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
