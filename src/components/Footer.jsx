import React from 'react';
import { Dumbbell, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

function Footer() {
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-brand-border select-none">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2.5">
              <img src="/logo.jpg" alt="Muscle Factory Logo" className="h-10 w-10 rounded-lg object-cover" />
              <span className="font-extrabold text-2xl tracking-tighter leading-none text-white">
                MUSCLE<span className="text-brand-accent">FACTORY</span>
              </span>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed max-w-sm font-medium">
              We started with a single vision: to build the happiest, most inclusive fitness community. Combining top-tier facilities with science-backed customized training, we make fitness interactive and life-changing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-brand-card hover:bg-brand-accent hover:text-brand-bg p-3 rounded-lg transition-all duration-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/musclefactoryhub/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-card hover:bg-brand-accent hover:text-brand-bg p-3 rounded-lg transition-all duration-300"
                aria-label="Instagram Link"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-base tracking-wider uppercase text-white mb-6 border-l-2 border-brand-accent pl-3">
              Quick Links
            </h4>
            <ul className="space-y-4 text-brand-muted text-sm font-semibold">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-brand-accent transition-colors text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('training')} className="hover:text-brand-accent transition-colors text-left">
                  Training Programs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('calculator')} className="hover:text-brand-accent transition-colors text-left">
                  Fitness &amp; Calorie Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Training Programs */}
          <div>
            <h4 className="font-extrabold text-base tracking-wider uppercase text-white mb-6 border-l-2 border-brand-accent pl-3">
              Training
            </h4>
            <ul className="space-y-4 text-brand-muted text-sm font-semibold">
              <li>
                <button onClick={() => handleNavClick('training')} className="hover:text-brand-accent transition-colors text-left">
                  Functional Training
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('training')} className="hover:text-brand-accent transition-colors text-left">
                  Strength & Conditioning
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('training')} className="hover:text-brand-accent transition-colors text-left">
                  MMA & Combat Sports
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('training')} className="hover:text-brand-accent transition-colors text-left">
                  Cardio & Endurance
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('training')} className="hover:text-brand-accent transition-colors text-left">
                  Group Classes & Yoga
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-extrabold text-base tracking-wider uppercase text-white mb-6 border-l-2 border-brand-accent pl-3">
              Contact Us
            </h4>
            <ul className="space-y-4 text-brand-muted text-sm font-semibold">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <a href="tel:+917057880958" className="hover:text-brand-accent transition-colors">
                  +91 70578 80958
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <a href="mailto:info@musclefactory.in" className="hover:text-brand-accent transition-colors break-all">
                  info@musclefactory.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <span>
                  1st Floor, Nest 9 Mall, Next to Organe Diagnostic, Behind Sai Complex Chitralaya, Boisar 401501
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-brand-card border-t border-brand-border py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-xs font-semibold text-center md:text-left">
            &copy; {new Date().getFullYear()} Muscle Factory Wellness Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 text-brand-muted text-xs font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy &amp; Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Refund &amp; Cancellations</a>
          </div>
          <button 
            onClick={scrollToTop} 
            className="bg-brand-bg hover:bg-brand-accent hover:text-brand-bg p-3 rounded-lg border border-brand-border hover:border-brand-accent transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
