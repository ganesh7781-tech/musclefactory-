import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon, ChevronDown } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const navLinks = [
    {
      id: 'training',
      label: 'Training',
      dropdown: [
        { label: 'Functional Training', id: 'training' },
        { label: 'Strength Training', id: 'training' },
        { label: 'MMA & Combat', id: 'training' },
        { label: 'Cardio & Fat Burn', id: 'training' },
        { label: 'Yoga & Flexibility', id: 'training' },
        { label: 'Personal Coaching', id: 'training' }
      ]
    },
    { id: 'trainers', label: 'Coaches' },
    { id: 'gallery', label: 'Gallery' },
    {
      id: 'calculator',
      label: 'Fitness Tools',
      dropdown: [
        { label: 'Calorie Calculator', id: 'calculator', tab: 'calorie' },
        { label: 'BMI Calculator', id: 'calculator', tab: 'bmi' },
        { label: 'BMR Calculator', id: 'calculator', tab: 'bmr' },
        { label: 'Macros Calculator', id: 'calculator', tab: 'macros' }
      ]
    },
    { id: 'contact', label: 'Contact Us' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // 1. Hide navbar when scrolling down, show when scrolling up
      if (currentScrollPos < 10) {
        setVisible(true);
      } else {
        if (Math.abs(prevScrollPos - currentScrollPos) > 5) {
          setVisible(prevScrollPos > currentScrollPos);
        }
      }
      setPrevScrollPos(currentScrollPos);

      // 2. Dynamic active section highlight logic
      const scrollPosition = currentScrollPos + 200; // offset for nav height
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
  }, [prevScrollPos]);

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
    if (id === 'calculator' && typeof window.openFitnessCalculator === 'function') {
      window.openFitnessCalculator('calorie');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const el = document.getElementById('calculator');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }));
      return;
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 0);
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 select-none transition-transform duration-300 pointer-events-none ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="flex items-center justify-between">

            {/* Logo — floating top-left, no pill */}
            <div
              onClick={handleLogoClick}
              className="pointer-events-auto flex items-center space-x-2 cursor-pointer group transition-all duration-300"
            >
              <img
                src="/logo.jpg"
                alt="Muscle Factory Logo"
                className="h-9 w-9 rounded-lg object-cover border border-white/20 group-hover:border-brand-accent transition-all duration-300 shadow-md"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tighter leading-none text-white font-sans drop-shadow-md">
                  MUSCLE<span className="text-brand-accent">FACTORY</span>
                </span>
                <span className="text-[7px] tracking-[0.18em] text-white/60 font-semibold uppercase leading-none mt-0.5 drop-shadow-sm">
                  Boisar's Fitness Club
                </span>
              </div>
            </div>

            {/* Desktop Nav — floating center pill */}
            <div className="hidden lg:flex pointer-events-auto items-center bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 shadow-lg gap-1">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.id} className="relative group">
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${activeLink === link.id
                        ? 'bg-brand-accent text-white'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-60" />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-[#0d0f12]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                      {/* Arrow */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0d0f12] border-l border-t border-white/10 rotate-45" />
                      {link.dropdown.map((subItem, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => {
                            if (subItem.id === 'calculator' && typeof window.openFitnessCalculator === 'function') {
                              window.openFitnessCalculator(subItem.tab || 'calorie');
                            } else {
                              handleNavClick(subItem.id);
                            }
                          }}
                          className="w-full text-left px-4 py-2.5 text-xs font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors cursor-pointer rounded-lg mx-auto"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${activeLink === link.id
                      ? 'bg-brand-accent text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {link.label}
                  </button>
                )
              ))}
            </div>

            {/* Right: Phone + CTA — floating */}
            <div className="hidden lg:flex pointer-events-auto items-center gap-2">
              <a
                href="tel:+917057880936"
                className="p-2.5 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl text-brand-accent hover:border-brand-accent/40 transition-all duration-300 flex items-center justify-center shadow-lg"
                aria-label="Call Us"
              >
                <Phone className="h-4 w-4 animate-pulse" />
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className="pointer-events-auto bg-brand-accent text-white hover:bg-red-700 px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer shadow-lg shadow-brand-accent/20"
              >
                Book Free Trial
              </button>
            </div>

            {/* Mobile: Phone + Hamburger */}
            <div className="lg:hidden pointer-events-auto flex items-center gap-2">
              <a href="tel:+917057880936" className="bg-black/30 backdrop-blur-md border border-white/10 text-brand-accent p-2 rounded-xl shadow-md">
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-black/30 backdrop-blur-md border border-white/10 inline-flex items-center justify-center p-2 rounded-xl text-white/80 hover:text-white shadow-md transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

      </nav>

      {/* ── Mobile Menu Panel (outside nav so pointer-events-none doesn't cascade) ── */}
      <div
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: '100%', maxWidth: '320px',
          background: '#0d0f12',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '-8px 0 40px rgba(0,0,0,0.6)',
          zIndex: 9999,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms ease-in-out',
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: '64px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: '#0d0f12' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo.jpg" alt="Muscle Factory Logo" style={{ height: '34px', width: '34px', borderRadius: '8px', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.2)' }} />
            <span style={{ fontWeight: 900, fontSize: '15px', letterSpacing: '-0.04em', color: '#fff' }}>
              MUSCLE<span style={{ color: '#b91c1c' }}>FACTORY</span>
            </span>
          </div>
          <button onClick={() => setIsOpen(false)} style={{ padding: '8px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={20} />
          </button>
        </div>

        {/* Nav Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 12px', background: '#0d0f12' }}>
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.id} style={{ marginBottom: '2px' }}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === link.id ? null : link.id)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', textAlign: 'left', padding: '12px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', background: mobileExpanded === link.id ? 'rgba(255,255,255,0.06)' : 'transparent', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
                >
                  <span>{link.label}</span>
                  <ChevronDown size={16} style={{ color: 'rgba(255,255,255,0.4)', transform: mobileExpanded === link.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                </button>
                {mobileExpanded === link.id && (
                  <div style={{ paddingLeft: '12px', paddingBottom: '4px' }}>
                    {link.dropdown.map((subItem, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => {
                          setIsOpen(false);
                          setMobileExpanded(null);
                          if (subItem.id === 'calculator' && typeof window.openFitnessCalculator === 'function') {
                            window.openFitnessCalculator(subItem.tab || 'calorie');
                            requestAnimationFrame(() => requestAnimationFrame(() => {
                              const el = document.getElementById('calculator');
                              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }));
                          } else {
                            handleNavClick(subItem.id);
                          }
                        }}
                        style={{ display: 'flex', alignItems: 'center', width: '100%', textAlign: 'left', padding: '10px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', background: 'transparent', border: 'none', cursor: 'pointer', gap: '8px' }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(185,28,28,0.5)', flexShrink: 0 }} />
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: 700, color: activeLink === link.id ? '#fff' : 'rgba(255,255,255,0.85)', background: activeLink === link.id ? '#b91c1c' : 'transparent', border: 'none', cursor: 'pointer', marginBottom: '2px', transition: 'background 0.2s' }}
              >
                {link.label}
              </button>
            )
          ))}

          {/* Footer */}
          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <a href="tel:+917057880936" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', padding: '10px', marginBottom: '10px' }}>
              <Phone size={16} style={{ color: '#b91c1c' }} />
              <span style={{ fontWeight: 600, fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>+91 70578 80936</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              style={{ display: 'block', width: '100%', background: '#b91c1c', color: '#fff', padding: '14px', borderRadius: '12px', fontSize: '14px', fontWeight: 800, border: 'none', cursor: 'pointer', boxShadow: '0 4px 16px rgba(185,28,28,0.4)' }}
            >
              Book Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', zIndex: 9998 }}
        />
      )}
    </>
  );
}

export default Navbar;
