import React, { useState, useEffect } from 'react';
import { Dumbbell, Users, Landmark, Award, ArrowRight, Quote, Star, Check, X, Calendar } from 'lucide-react';
import Training from './Training';
import Trainers from '../components/Trainers';
import CalorieCalculator from '../components/CalorieCalculator';
import ImageGallery from '../components/ImageGallery';
import Contact from './Contact';

function Home() {
  const stats = [
    { value: '3,500', label: 'Sq. Ft. Area', icon: Landmark },
    { value: 'Since 2021', label: 'Established', icon: Calendar },
    { value: '500+', label: 'Transformations', icon: Users },
    { value: '5.0 ★', label: 'Google Rating', icon: Star }
  ];  const reviews = [
    {
      name: 'Aditya Patil',
      role: 'Local Member (Boisar)',
      text: 'Best gym in Boisar! Trainers actually care about your form. Community vibe is great.',
      rating: 5
    },
    {
      name: 'Amit Sharma',
      role: 'Industrial Engineer (Tarapur MIDC)',
      text: 'Delhi se shift hoke aaya toh sahi gym dhundh raha tha — Muscle Factory ne bilkul disappoint nahi kiya. Top class!',
      rating: 5
    },
    {
      name: 'Snehal Sawant',
      role: 'Home Maker (1 Year Member)',
      text: '4 mahine mein 8kg lose kiya! Coaches bohot supportive hain. Highly recommend karta/karti hoon.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Corporate Manager',
      text: 'Late night workouts after my shift — always safe and a great crowd. Premium equipment, zero compromise.',
      rating: 5
    },
    {
      name: 'Prathamesh Joshi',
      role: 'College Student (1.5 Years)',
      text: 'MMA aur boxing training ekdum mast hai yahan. Coach ka level alag hi hai — Boisar ka best!',
      rating: 5
    },
    {
      name: 'Neha Malhotra',
      role: 'Software Developer',
      text: 'Girls ke liye clean aur safe space. Personal trainers diet bhi customize karte hain. Bohot satisfied hoon!',
      rating: 5
    },
    {
      name: 'Rajesh Gawde',
      role: 'Business Owner (3 Years)',
      text: 'Steam bath, lockers, showers — sab kuch top level pe maintain hai. Worth every rupee.',
      rating: 5
    },
    {
      name: 'Anjali Nair',
      role: 'Bank Employee',
      text: 'The energy here is unmatched. Diet plans and fitness tools actually work. Love this place!',
      rating: 5
    }
  ];

  const comparisonData = [
    { feature: 'Monthly Price', mf: '₹1,199', branded: '₹3,999', local: '₹1,999', isPrice: true },
    { feature: 'Premium Equipment', mf: true, branded: true, local: false },
    { feature: 'Personalized Plans', mf: true, branded: true, local: false },
    { feature: 'Techdriven Workouts', mf: true, branded: false, local: false },
    { feature: 'MMA & Boxing Turf', mf: true, branded: false, local: false },
    { feature: 'Certified Coaches', mf: true, branded: true, local: false },
    { feature: 'Zero Admission Fee', mf: true, branded: false, local: true }
  ];

  const membershipPlans = [
    { name: '1 Month Plan', validity: '30 Days Validity', price: '₹1,199', active: true },
    { name: '3 Months Plan', validity: '90 Days Validity', price: '₹2,999', active: true, popular: true },
    { name: '6 Months Plan', validity: '180 Days Validity', price: '₹3,999', active: true },
    { name: '12 Months Plan', validity: '365 Days Validity', price: '₹6,999', active: true }
  ];

  const reels = [
    { 
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600', 
      profile: 'chetan.powerx',
      link: 'https://www.instagram.com/chetan.powerx/reel/DXCBogZCJkq/',
      title: 'Strength and Power Training'
    },
    { 
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600', 
      profile: 'chetan.powerx',
      link: 'https://www.instagram.com/chetan.powerx/reel/DZZcHmeIbWp/',
      title: 'Heavy Barbell Squats'
    },
    { 
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600', 
      profile: 'musclefactoryhub',
      link: 'https://www.instagram.com/musclefactoryhub/reel/DYqzA4GsNNc/',
      title: 'Boxing and Conditioning'
    },
    { 
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600', 
      profile: 'chetan.powerx',
      link: 'https://www.instagram.com/chetan.powerx/reel/DaPYHbZIX-B/',
      title: 'Bicep Curls Workout'
    }
  ];

  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [calculatorTab, setCalculatorTab] = useState('calorie');
  const [timeLeft, setTimeLeft] = useState(9045); // 2h 30m 45s
  const [selectedPlan, setSelectedPlan] = useState('General Inquiry');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 9045));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    window.openFitnessCalculator = (tab = 'calorie') => {
      setCalculatorTab(tab);
      setCalculatorOpen(true);
    };
    return () => {
      delete window.openFitnessCalculator;
    };
  }, []);

  const scrollToSection = (id) => {
    if (id === 'calculator') {
      setCalculatorOpen(true);
    }
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const navOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, id === 'calculator' ? 120 : 0);
  };

  return (
    <div className="space-y-6 pb-10 select-none">
      
      <section className="relative min-h-[65vh] flex items-center justify-center pt-20 overflow-hidden bg-brand-bg bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/hero_image.jpg')] bg-cover bg-top opacity-35" />
        {/* Dark Tint Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/75 to-brand-bg/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 py-8">
          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-tight text-white max-w-4xl mx-auto">
            BOISAR'S HAPPIEST <span className="text-brand-accent italic drop-shadow-accent-glow">FITNESS</span> COMMUNITY
          </h1>

          <p className="text-brand-muted text-xs md:text-sm font-semibold max-w-xl mx-auto leading-relaxed">
            Break the monotony of traditional workouts. Experience science-backed coaching, high-energy environments, MMA, Boxing, and CrossFit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-brand-accent text-brand-bg hover:bg-brand-accentHover hover:shadow-accent-glow-strong font-bold px-5 py-2.5 rounded-lg text-xs transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <span>Join Community</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="w-full sm:w-auto bg-brand-card hover:bg-brand-border border border-brand-border hover:border-brand-muted font-bold px-5 py-2.5 rounded-lg text-xs transition-all duration-300 cursor-pointer"
            >
              Fitness Calculator
            </button>
          </div>
        </div>
      </section>

      {/* 2. Stats Marquee Ticker with light background and stacked labels */}
      <div className="relative w-full">
        {/* Corner glows just above marquee */}
        <div className="absolute -top-12 left-0 w-48 h-24 pointer-events-none z-30 opacity-60"
          style={{
            background: 'radial-gradient(circle at left bottom, rgba(239, 68, 68, 0.4) 0%, transparent 70%)',
            filter: 'blur(20px)'
          }}
        />
        <div className="absolute -top-12 right-0 w-48 h-24 pointer-events-none z-30 opacity-60"
          style={{
            background: 'radial-gradient(circle at right bottom, rgba(239, 68, 68, 0.4) 0%, transparent 70%)',
            filter: 'blur(20px)'
          }}
        />

        <section className="relative z-20 w-full overflow-hidden border-y border-brand-accent/20 py-4 shadow-sm" style={{ background: 'linear-gradient(135deg, #b91c1c 0%, #ff3131 50%, #991b1b 100%)' }}>
          {/* Fade edges with red gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #b91c1c, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #991b1b, transparent)' }} />

          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...stats, ...stats, ...stats, ...stats].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="inline-flex items-center gap-3.5 px-10 shrink-0">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                    <Icon className="h-5 w-5" style={{ color: '#ffffff' }} />
                  </div>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="font-extrabold text-xl md:text-2xl tracking-tight" style={{ color: '#ffffff' }}>{stat.value}</span>
                    <span className="font-bold text-[10px] md:text-xs uppercase tracking-wider" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{stat.label}</span>
                  </div>
                  <span className="text-white/30 ml-8 text-xl font-light">|</span>
                </div>
              );
            })}
          </div>
        </section>
      </div>


      {/* 3. Philosophy Section */}
      <section className="bg-section-white py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="bg-section-red max-w-5xl mx-auto bg-gradient-to-br from-[#b91c1c] via-[#ff3131] to-[#991b1b] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden text-white">
          {/* Decorative background grid/lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Visual Side */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3] lg:max-h-[320px] group shadow-2xl">
              <img 
                src="/philosophy.jpg" 
                alt="Community workout at Muscle Factory" 
                className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center space-x-3 bg-brand-bg/95 border border-brand-border rounded-xl px-4 py-2.5 backdrop-blur-md">
                <Dumbbell className="h-5 w-5 text-brand-accent animate-spin-slow" />
                <div>
                  <div className="text-[10px] text-brand-accent font-semibold">Our Philosophy</div>
                  <div className="text-xs font-black text-white">#WeAreMuscleFactory</div>
                </div>
              </div>
            </div>

            {/* Philosophy Text */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs text-yellow-300 font-extrabold bg-white/10 border border-white/20 px-3 py-1 rounded-full inline-block uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                We Began With One Dream: To Make Fitness Fun, Simple, and Happy
              </h2>
              <p className="text-white/90 text-xs leading-relaxed font-semibold">
                We focus on natural body movements, strength conditioning, and your well-being. Our friendly community and certified coaches guide you step-by-step to safely reach your goals with zero judgment.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('training')}
                  className="bg-white text-[#b91c1c] hover:bg-white/95 font-black px-6 py-2.5 rounded-lg text-xs transition-all duration-300 cursor-pointer w-fit shadow-md shadow-black/10"
                >
                  Our Workout Style
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Integrated Training Section */}
      <section id="training" className="scroll-mt-20 py-16 bg-slate-50/50 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] relative overflow-hidden border-b border-brand-border/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute -left-20 top-10 w-96 h-96 bg-brand-accent/5 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute -right-20 bottom-10 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="relative z-10">
          <Training setActivePage={scrollToSection} />
        </div>
      </section>

      {/* Why Choose Us / Membership Comparison Section */}
      <section id="pricing" className="scroll-mt-20 bg-section-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-section-red max-w-5xl mx-auto bg-gradient-to-br from-[#b91c1c] via-brand-accent to-[#991b1b] text-white py-12 px-6 sm:px-10 rounded-3xl relative overflow-hidden shadow-2xl">
          {/* Decorative background grid/lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          
          <div className="relative z-10 space-y-12">
            <div className="text-center space-y-2.5">
              <span className="text-xs font-bold tracking-widest text-yellow-300 uppercase">/ WHY CHOOSE US</span>
              <h2 className="font-extrabold text-2xl md:text-4xl tracking-tight text-white leading-tight">
                Experience The Difference
              </h2>
            </div>

          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 scrollbar-thin">
            <div className="bg-black/25 backdrop-blur-md rounded-2xl border border-white/10 p-4 sm:p-6 lg:p-7 min-w-[500px] sm:min-w-0 max-w-4xl mx-auto shadow-2xl">
              {/* Headers row */}
              <div className="grid grid-cols-4 gap-2 pb-3 border-b-2 border-white/20 items-center text-center text-[10px] sm:text-xs md:text-sm font-extrabold tracking-wider">
                <div className="text-left text-white/70 uppercase">Features</div>
                <div className="text-yellow-300 uppercase font-black">Muscle Factory</div>
                <div className="text-white/80 uppercase">Branded Gyms</div>
                <div className="text-white/80 uppercase">Local Gyms</div>
              </div>

            {/* Comparison rows */}
            <div className="divide-y divide-white/10">
              {comparisonData.map((row, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-4 gap-2 py-2 items-center text-center text-xs md:text-sm font-semibold"
                >
                  <div className="text-left text-white/90 pr-1">{row.feature}</div>
                  
                  {/* Muscle Factory column */}
                  <div>
                    {row.isPrice ? (
                      <span className="text-white font-extrabold text-xs sm:text-sm md:text-base">{row.mf}</span>
                    ) : row.mf ? (
                      <div className="h-5 w-5 rounded-full border-2 border-yellow-300 flex items-center justify-center mx-auto bg-yellow-300/10 shadow-lg shadow-yellow-300/10">
                        <Check className="h-3 w-3 text-yellow-300 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto bg-white/5">
                        <X className="h-3 w-3 text-white/20" />
                      </div>
                    )}
                  </div>

                  {/* Branded Gyms column */}
                  <div>
                    {row.isPrice ? (
                      <span className="text-white/70 text-[10px] sm:text-xs md:text-sm">{row.branded}</span>
                    ) : row.branded ? (
                      <div className="h-5 w-5 rounded-full border-2 border-white/60 flex items-center justify-center mx-auto bg-white/10">
                        <Check className="h-3 w-3 text-white/80 stroke-[2.5]" />
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto bg-white/5">
                        <X className="h-3 w-3 text-white/20" />
                      </div>
                    )}
                  </div>

                  {/* Local Gyms column */}
                  <div>
                    {row.isPrice ? (
                      <span className="text-white/70 text-[10px] sm:text-xs md:text-sm">{row.local}</span>
                    ) : row.local ? (
                      <div className="h-5 w-5 rounded-full border-2 border-white/60 flex items-center justify-center mx-auto bg-white/10">
                        <Check className="h-3 w-3 text-white/80 stroke-[2.5]" />
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto bg-white/5">
                        <X className="h-3 w-3 text-white/20" />
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

          {/* Membership Plans Cards */}
          <div className="space-y-6 pt-4">
            <div className="text-center">
              <h3 className="font-extrabold text-xl md:text-2xl text-white">Select Your Membership Plan</h3>
              <p className="text-white/70 text-xs mt-1">Get unlimited access to the gym floor, cardio lines, and CrossFit zones.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {membershipPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-brand-card/95 border rounded-2xl p-5 relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg ${
                    plan.popular 
                      ? 'border-yellow-300 ring-2 ring-yellow-300/20' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 right-4 bg-yellow-300 text-brand-bg text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-md">
                      BEST VALUE
                    </span>
                  )}
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-sm text-white uppercase tracking-tight">{plan.name}</h4>
                      {plan.active && (
                        <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded-md">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    
                    <div>
                      <span className="text-[10px] text-brand-muted font-bold block">{plan.validity}</span>
                      <div className="flex items-baseline mt-1.5">
                        <span className="text-2xl font-black text-white">{plan.price}</span>
                        <span className="text-[10px] text-brand-muted font-bold ml-1">/ term</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedPlan(plan.name);
                      scrollToSection('contact');
                    }}
                    className={`w-full mt-6 py-2.5 rounded-lg text-xs font-black transition-all cursor-pointer text-center ${
                      plan.popular 
                        ? 'bg-yellow-300 text-brand-bg hover:bg-yellow-400 shadow-md shadow-yellow-300/10 border border-yellow-300' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* 5. Integrated Trainers Section */}
      <section id="trainers" className="scroll-mt-20 bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] py-16 relative overflow-hidden border-y border-brand-border/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute -left-28 top-10 w-96 h-96 bg-brand-accent/10 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute -right-28 bottom-10 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="relative z-10">
          <Trainers />
        </div>
      </section>



      {/* 9. Fitness Tools Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 bg-section-white">
        <div className="bg-section-red bg-gradient-to-r from-[#b91c1c] to-[#991b1b] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-[10px] text-yellow-300 font-extrabold bg-white/10 border border-white/20 px-3 py-1 rounded-full w-fit mx-auto lg:mx-0 block uppercase tracking-wider">
              Free Fitness Utilities
            </span>
            <h3 className="font-extrabold text-xl md:text-2xl tracking-tight text-white leading-tight">
              Want to Know Your Daily Fitness Metrics? Calculate Your Calories Now.
            </h3>
            <p className="text-white/80 text-xs md:text-sm font-semibold leading-relaxed">
              Calculate your BMI, BMR, and daily calorie targets instantly to hit your goals.
            </p>
          </div>

          <button
            onClick={() => scrollToSection('calculator')}
            className="bg-white text-[#b91c1c] hover:bg-white/95 font-extrabold px-6 py-3 rounded-lg text-xs transition-all shadow-md flex items-center justify-center space-x-1.5 shrink-0 cursor-pointer"
          >
            <span>Launch Calculator</span>
            <ArrowRight className="h-3.5 w-3.5 animate-bounce-horizontal" />
          </button>
        </div>
      </section>

      {/* 10. Integrated Fitness Tools (Calorie Calculator) Section */}
      {calculatorOpen && (
        <section id="calculator" className="scroll-mt-20 bg-section-white py-16 px-4 sm:px-6 lg:px-8 animate-fadeIn">
          <div className="bg-section-red max-w-5xl mx-auto bg-gradient-to-br from-[#b91c1c] via-brand-accent to-[#991b1b] text-white py-12 px-5 sm:px-8 rounded-3xl relative overflow-hidden shadow-2xl">
            {/* Decorative background grid/lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <div className="text-center space-y-3.5 max-w-3xl mx-auto px-4">
                <span className="text-xs text-yellow-300 font-semibold bg-white/10 border border-white/20 px-3 py-1 rounded-full uppercase">
                  Fitness Toolkit
                </span>
                <h2 className="font-extrabold text-2xl md:text-3xl tracking-tight text-white">
                  Find Out Your Daily Calorie Needs
                </h2>
                <p className="text-white/80 text-xs sm:text-sm font-semibold leading-relaxed">
                  Enter your details below to find your daily calorie needs and food splits instantly.
                </p>
              </div>
              <CalorieCalculator defaultTab={calculatorTab} />

              {/* Close button at the bottom */}
              <div className="text-center pt-4">
                <button
                  onClick={() => setCalculatorOpen(false)}
                  className="border border-white/20 hover:border-white/40 text-white font-bold px-6 py-2.5 rounded-lg text-xs transition-all cursor-pointer bg-black/10 hover:bg-black/20"
                >
                  Close Calculator
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 10. Integrated Gym Image Gallery Section */}
      <section id="gallery" className="scroll-mt-20 bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] py-16 relative overflow-hidden border-y border-brand-border/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute -left-28 bottom-10 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute -right-28 top-10 w-96 h-96 bg-brand-accent/10 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="relative z-10">
          <ImageGallery />
        </div>
      </section>

      {/* Video Gallery Section (Reels) */}
      <section id="reels" className="scroll-mt-20 bg-section-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-section-red max-w-5xl mx-auto bg-gradient-to-br from-[#b91c1c] via-brand-accent to-[#991b1b] text-white py-12 px-6 sm:px-10 rounded-3xl relative overflow-hidden shadow-2xl">
          {/* Decorative background grid/lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <div className="text-center space-y-3.5 max-w-3xl mx-auto px-4">
              <span className="text-xs text-yellow-300 font-semibold bg-white/10 border border-white/20 px-3 py-1 rounded-full uppercase">
                Gym Reels
              </span>
              <h2 className="font-extrabold text-2xl md:text-3xl tracking-tight text-white">
                Watch us in action
              </h2>
              <p className="text-white/80 text-xs sm:text-sm font-semibold leading-relaxed">
                Watch our training reels directly on Instagram.
              </p>
            </div>

          <div className="relative overflow-hidden w-full py-4">

            <div className="flex space-x-6 animate-marquee">
              {/* First iteration */}
              {reels.map((video, index) => (
                <a 
                  key={`reel-1-${index}`} 
                  href={video.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative block rounded-2xl overflow-hidden aspect-[9/16] w-[200px] sm:w-[220px] group shadow-xl border border-white/10 shrink-0 hover:scale-[1.02] transition-transform duration-300 bg-[#0f1115]"
                >
                  {/* Background Image */}
                  <img 
                    src={video.image} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

                  {/* Play Button Icon Overlay in the center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-brand-accent/90 flex items-center justify-center text-brand-bg shadow-accent-glow scale-90 group-hover:scale-110 transition-transform duration-300">
                      <svg className="h-5 w-5 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Profile Header Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between bg-black/40 backdrop-blur-md px-2 py-1.5 rounded-xl border border-white/10 opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-5 h-5 rounded-full bg-brand-accent flex items-center justify-center text-[9px] font-black text-brand-bg uppercase">
                        MF
                      </div>
                      <span className="text-[10px] font-bold text-white tracking-tight">
                        @{video.profile}
                      </span>
                    </div>
                    <span className="text-[8px] font-black tracking-wider text-brand-accent uppercase bg-brand-accent/15 border border-brand-accent/25 px-2 py-0.5 rounded-md">
                      WATCH
                    </span>
                  </div>

                  {/* Title Card Overlay at the bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-left space-y-0.5">
                    <h4 className="font-extrabold text-xs text-white leading-tight">
                      {video.title}
                    </h4>
                    <span className="text-[9px] text-white/50 font-bold block">
                      Watch Reel on Instagram →
                    </span>
                  </div>
                </a>
              ))}
              {/* Second iteration for seamless looping */}
              {reels.map((video, index) => (
                <a 
                  key={`reel-2-${index}`} 
                  href={video.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative block rounded-2xl overflow-hidden aspect-[9/16] w-[200px] sm:w-[220px] group shadow-xl border border-white/10 shrink-0 hover:scale-[1.02] transition-transform duration-300 bg-[#0f1115]"
                >
                  {/* Background Image */}
                  <img 
                    src={video.image} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

                  {/* Play Button Icon Overlay in the center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-brand-accent/90 flex items-center justify-center text-brand-bg shadow-accent-glow scale-90 group-hover:scale-110 transition-transform duration-300">
                      <svg className="h-5 w-5 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Profile Header Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between bg-black/40 backdrop-blur-md px-2 py-1.5 rounded-xl border border-white/10 opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-5 h-5 rounded-full bg-brand-accent flex items-center justify-center text-[9px] font-black text-brand-bg uppercase">
                        MF
                      </div>
                      <span className="text-[10px] font-bold text-white tracking-tight">
                        @{video.profile}
                      </span>
                    </div>
                    <span className="text-[8px] font-black tracking-wider text-brand-accent uppercase bg-brand-accent/15 border border-brand-accent/25 px-2 py-0.5 rounded-md">
                      WATCH
                    </span>
                  </div>

                  {/* Title Card Overlay at the bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-left space-y-0.5">
                    <h4 className="font-extrabold text-xs text-white leading-tight">
                      {video.title}
                    </h4>
                    <span className="text-[9px] text-white/50 font-bold block">
                      Watch Reel on Instagram →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* 11. Testimonials Section */}
      <section id="testimonials" className="scroll-mt-20 bg-section-white border-y border-brand-border/40 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-3 px-4">
            <span className="text-xs text-brand-accent font-semibold bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full inline-block uppercase tracking-wider">
              Member Stories
            </span>
            <h2 className="font-extrabold text-2xl md:text-3xl tracking-tight text-white">What Our Happy Community Says</h2>
          </div>

          <div className="relative overflow-hidden w-full py-4">
            {/* Fade overlays at left and right to match white background */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />

            <div className="flex space-x-5 animate-marquee">
              {/* First iteration */}
              {reviews.map((rev, index) => (
                <div 
                  key={`rev-1-${index}`}
                  className="bg-[#fafafc] border border-slate-200/80 rounded-2xl p-5 relative flex flex-col justify-between w-[320px] sm:w-[350px] shrink-0 shadow-md hover:shadow-lg transition-all duration-300 hover:border-brand-accent/30 border-t-2 border-t-brand-accent/40"
                >
                  <div className="absolute top-4 right-4 text-slate-200/50">
                    <Quote className="h-8 w-8 fill-current" />
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex space-x-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-xs">★</span>
                      ))}
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm italic font-medium leading-relaxed text-left">
                      "{rev.text}"
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center space-x-2.5">
                    <div className="bg-brand-accent/10 p-2 rounded-xl border border-brand-accent/20 text-brand-accent">
                      <Users className="h-4.5 w-4.5 text-brand-accent" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-extrabold text-xs sm:text-sm text-slate-800">{rev.name}</h4>
                      <span className="text-[10px] text-slate-500 font-bold block mt-0.5">{rev.role}</span>
                    </div>
                  </div>
                </div>
              ))}
              {/* Second iteration for seamless looping */}
              {reviews.map((rev, index) => (
                <div 
                  key={`rev-2-${index}`}
                  className="bg-[#fafafc] border border-slate-200/80 rounded-2xl p-5 relative flex flex-col justify-between w-[320px] sm:w-[350px] shrink-0 shadow-md hover:shadow-lg transition-all duration-300 hover:border-brand-accent/30 border-t-2 border-t-brand-accent/40"
                >
                  <div className="absolute top-4 right-4 text-slate-200/50">
                    <Quote className="h-8 w-8 fill-current" />
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex space-x-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-xs">★</span>
                      ))}
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm italic font-medium leading-relaxed text-left">
                      "{rev.text}"
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center space-x-2.5">
                    <div className="bg-brand-accent/10 p-2 rounded-xl border border-brand-accent/20 text-brand-accent">
                      <Users className="h-4.5 w-4.5 text-brand-accent" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-extrabold text-xs sm:text-sm text-slate-800">{rev.name}</h4>
                      <span className="text-[10px] text-slate-500 font-bold block mt-0.5">{rev.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11.5. Special Promotional Yearly Discount Banner */}
      <section className="bg-section-white pb-12 px-4 sm:px-6 lg:px-8 select-none">
        <div className="max-w-4xl mx-auto bg-[#fff5f5] border border-[#fecdd3] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl">
          {/* Badge & Text Container */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            {/* Red Ticket Badge */}
            <div className="bg-[#e11d48] text-white px-3.5 py-2.5 rounded-xl relative font-extrabold flex flex-col items-center justify-center leading-none text-center select-none shadow-md shrink-0 border border-white/10">
              <span className="text-[9px] tracking-widest font-black">BEST</span>
              <span className="text-xs tracking-wider font-black mt-0.5">PRICE</span>
              <span className="text-[8px] mt-1 text-yellow-300">★★★</span>
            </div>

            {/* Promo Text */}
            <div className="space-y-1">
              <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
                Get <span className="text-[#e11d48]">10% Discount</span> On Yearly Plan
              </h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                Limited Time Offer — Closes in:
              </p>
            </div>
          </div>

          {/* Countdown Clock Display */}
          <div className="font-mono text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-widest select-none bg-white px-5 py-2 rounded-2xl border border-slate-100 shadow-inner">
            {formatTime(timeLeft)}
          </div>

          {/* Join CTA Button */}
          <button
            onClick={() => {
              setSelectedPlan('12 Months Plan');
              scrollToSection('contact');
            }}
            className="w-full md:w-auto text-center bg-[#e11d48] hover:bg-[#be123c] text-white font-extrabold px-8 py-3 rounded-xl text-xs tracking-widest uppercase shadow-md shadow-rose-500/10 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-300 shrink-0"
          >
            JOIN NOW
          </button>
        </div>
      </section>

      {/* 12. Integrated Contact Us Section */}
      <section id="contact" className="scroll-mt-20 bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] py-16 relative overflow-hidden border-t border-brand-border/30 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute -left-28 top-10 w-96 h-96 bg-brand-accent/10 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute -right-28 bottom-10 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="relative z-10">
          <Contact selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
        </div>
      </section>

    </div>
  );
}

export default Home;
