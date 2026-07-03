import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const navLinks = [
    { id: 'calculator', label: 'FITNESS TOOLS' },
    { id: 'contact', label: 'CONTACT US' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for nav height
      
      let currentSection = '';
      
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = link.id;
            break;
          }
        }
      }
      
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav border-b border-brand-border select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <img 
              src="/logo.jpg" 
              alt="Muscle Factory Logo" 
              className="h-12 w-12 rounded-lg object-cover border border-brand-border group-hover:border-brand-accent transition-all duration-300"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tighter leading-none text-white font-sans">
                MUSCLE<span className="text-brand-accent">FACTORY</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-brand-muted font-semibold uppercase">
                Boisar's Premium Fitness Club
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold tracking-wider transition-all duration-300 ${
                    activeLink === link.id
                      ? 'text-brand-accent border-b-2 border-brand-accent rounded-none'
                      : 'text-white hover:text-brand-accent'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+917057880958" 
                className="flex items-center text-sm font-semibold text-brand-muted hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mr-1 text-brand-accent animate-pulse" />
                <span>+91 70578 80958</span>
              </a>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2.5 text-brand-muted hover:text-brand-accent rounded-xl border border-brand-border bg-brand-card hover:bg-brand-border transition-all duration-300 cursor-pointer flex items-center justify-center"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="bg-brand-accent text-brand-bg hover:bg-brand-bg hover:text-brand-accent hover:shadow-accent-glow border border-brand-accent px-5 py-2.5 rounded-lg text-sm font-extrabold tracking-widest transition-all duration-300"
              >
                BOOK FREE TRIAL
              </button>
            </div>
          </div>

          {/* Mobile menu actions */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="text-brand-accent p-2 rounded-lg bg-brand-card border border-brand-border"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
            <a href="tel:+917057880958" className="text-brand-accent p-2 rounded-lg bg-brand-card">
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-muted hover:text-white hover:bg-brand-card focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state */}
      <div 
        className={`lg:hidden fixed inset-y-0 right-0 w-full max-w-xs bg-brand-bg border-l border-brand-border shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-brand-border">
          <div className="flex items-center space-x-2">
            <img src="/logo.jpg" alt="Muscle Factory Logo" className="h-8 w-8 rounded-md object-cover" />
            <span className="font-extrabold text-xl tracking-tighter text-white">
              MUSCLE<span className="text-brand-accent">FACTORY</span>
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-brand-muted hover:text-white hover:bg-brand-card focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left py-3 px-4 rounded-lg text-base font-bold tracking-wider transition-all duration-300 ${
                activeLink === link.id
                  ? 'bg-brand-accent text-brand-bg font-extrabold shadow-accent-glow'
                  : 'text-white hover:bg-brand-card hover:text-brand-accent'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-6 border-t border-brand-border space-y-4">
            <div className="flex items-center justify-center space-x-2 text-brand-muted">
              <Phone className="h-4 w-4 text-brand-accent" />
              <span className="font-semibold text-sm">+91 70578 80958</span>
            </div>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full bg-brand-accent text-brand-bg hover:bg-brand-accentHover text-center py-3.5 rounded-lg text-base font-extrabold tracking-widest shadow-accent-glow transition-all"
            >
              BOOK FREE TRIAL
            </button>
          </div>
        </div>
      </div>
      {/* Background Overlay when mobile menu open */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}
    </nav>
  );
}

export default Navbar;
