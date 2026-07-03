import React from 'react';
import { Dumbbell, Users, Landmark, Award, ArrowRight, Quote } from 'lucide-react';
import Training from './Training';
import CalorieCalculator from '../components/CalorieCalculator';
import Contact from './Contact';

function Home() {
  const stats = [
    { value: '30+', label: 'Premium Studios', icon: Landmark },
    { value: '450+', label: 'Certified Coaches', icon: Award },
    { value: '100k+', label: 'Active Members', icon: Users },
    { value: '3', label: 'Countries Active', icon: Dumbbell }
  ];

  const reviews = [
    {
      name: 'Rohan Sharma',
      role: 'IT Professional (Member 2 Years)',
      text: 'Muscle Factory completely changed my view on fitness. It’s not just a gym where you plug in headphones and lift weights; it’s an energetic community where coaches push you to be your best.',
      rating: 5
    },
    {
      name: 'Priyanka Sen',
      role: 'Corporate Leader (Member 1 Year)',
      text: 'The functional training sessions are intense, fun, and extremely rewarding. I’ve lost 12kg and gained so much strength and focus. The coaches pay attention to every detail of your posture!',
      rating: 5
    },
    {
      name: 'Kabir Verma',
      role: 'Athletic Runner (Member 6 Months)',
      text: 'Top-tier equipment, spacious lockers, clean shower zones, and an amazing vibe. The calorie calculator tools they provide helped me dial in my nutrition for my marathon run. Highly recommended!',
      rating: 5
    }
  ];

  const scrollToSection = (id) => {
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
  };

  return (
    <div className="space-y-6 pb-10 select-none">
      
      <section className="relative min-h-[80vh] flex items-center justify-center pt-24 overflow-hidden bg-brand-bg">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/hero_image.jpg')] bg-cover bg-center opacity-40" />
        {/* Dark Tint Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-brand-bg/25" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 py-12">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/10 border border-brand-accent/20 px-4 py-2 rounded-full text-brand-accent text-xs font-black tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping mr-1" />
            <span>CLAIM YOUR FREE PASS TODAY</span>
          </div>

          <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none text-white max-w-5xl mx-auto">
            BOISAR'S HAPPIEST <span className="text-brand-accent italic drop-shadow-accent-glow">FITNESS</span> COMMUNITY
          </h1>

          <p className="text-brand-muted text-base md:text-xl font-semibold max-w-3xl mx-auto leading-relaxed">
            At Muscle Factory, we break the monotony of traditional workouts. Discover science-backed routines, high-energy group environments, and expert certified coaching. We also take MMA • Boxing • CrossFit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-brand-accent text-brand-bg hover:bg-brand-accentHover hover:shadow-accent-glow-strong font-black tracking-widest px-8 py-4 rounded-xl text-sm transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>JOIN COMMUNITY</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="w-full sm:w-auto bg-brand-card hover:bg-brand-border border border-brand-border hover:border-brand-muted font-extrabold tracking-widest px-8 py-4 rounded-xl text-sm transition-all duration-300"
            >
              FITNESS CALCULATOR
            </button>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-brand-card/50 border border-brand-border rounded-2xl p-6 text-center space-y-2 hover:border-brand-accent/20 transition-all duration-300"
              >
                <div className="mx-auto bg-brand-accent/5 p-3 rounded-lg border border-brand-border w-fit">
                  <Icon className="h-5 w-5 text-brand-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white tracking-tight">{stat.value}</div>
                <div className="text-xs md:text-sm text-brand-muted font-bold tracking-wider uppercase">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Visual Side */}
          <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3] lg:max-h-[420px] group shadow-2xl">
            <img 
              src="/philosophy.jpg" 
              alt="Community workout at Muscle Factory" 
              className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center space-x-3 bg-brand-bg/95 border border-brand-border rounded-xl px-4 py-2.5 backdrop-blur-md">
              <Dumbbell className="h-5 w-5 text-brand-accent animate-spin-slow" />
              <div>
                <div className="text-[10px] text-brand-accent font-extrabold tracking-widest uppercase">THE PHILOSOPHY</div>
                <div className="text-xs font-black text-white">#WeAreMuscleFactory</div>
              </div>
            </div>
          </div>

          {/* Philosophy Text */}
          <div className="space-y-4">
            <span className="text-xs text-brand-accent font-extrabold tracking-widest uppercase block border-l-2 border-brand-accent pl-3">
              Who We Are
            </span>
            <h2 className="font-extrabold text-2xl md:text-3xl tracking-tight text-white">
              We Began With One Dream: To Make Fitness Fun, Simple, and Happy
            </h2>
            <p className="text-brand-muted text-xs leading-relaxed font-semibold">
              Standard gyms only make you lift heavy weights on machines. We do things differently. We focus on natural body movements, strength, and above all, your mental happiness.
            </p>
            <p className="text-brand-muted text-xs leading-relaxed font-semibold">
              Whether you are working in an office and want to improve your posture, or an athlete wanting to train hard, we will help you. Our certified trainers will guide you step by step. There is no judgment here, only a friendly community helping you grow.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('training')}
                className="bg-brand-card hover:bg-brand-border border border-brand-border hover:border-brand-accent/20 text-white font-extrabold tracking-widest px-5 py-3 rounded-xl text-[10px] transition-all duration-300"
              >
                OUR WORKOUT STYLE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Integrated Training Section */}
      <section id="training" className="scroll-mt-20 border-t border-brand-border/40">
        <Training setActivePage={scrollToSection} />
      </section>



      {/* 9. Fitness Tools Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-gradient-to-r from-brand-card to-brand-bg border border-brand-border rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-brand-accent/5 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <span className="text-xs text-brand-accent font-extrabold tracking-widest uppercase bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full w-fit mx-auto lg:mx-0 block">
              FREE FITNESS UTILITIES
            </span>
            <h3 className="font-extrabold text-2xl md:text-3xl tracking-tight text-white leading-tight">
              Want to Know Your Daily Fitness Metrics? Calculate Your Calories Now.
            </h3>
            <p className="text-brand-muted text-sm font-semibold leading-relaxed">
              Use our easy calorie and BMI calculator. Find out how many calories your body burns daily and get simple eating guides to reach your goals.
            </p>
          </div>

          <button
            onClick={() => scrollToSection('calculator')}
            className="bg-brand-accent text-brand-bg hover:bg-brand-accentHover font-black tracking-widest px-8 py-4 rounded-xl text-sm transition-all shadow-accent-glow flex items-center space-x-2 shrink-0"
          >
            <span>LAUNCH CALCULATOR</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* 10. Integrated Fitness Tools (Calorie Calculator) Section */}
      <div id="calculator" className="scroll-mt-20 border-t border-brand-border/40 py-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          <span className="text-xs text-brand-accent font-extrabold tracking-widest uppercase bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full">
            FITNESS TOOLKIT
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl tracking-tight text-white">
            FIND OUT YOUR DAILY CALORIE NEEDS
          </h2>
          <p className="text-brand-muted text-sm font-semibold leading-relaxed">
            Stop guessing what you should eat. Enter your details below to find your daily calorie needs and food splits instantly.
          </p>
        </div>
        <CalorieCalculator />
      </div>

      {/* Video Gallery Section */}
      <section id="gallery" className="scroll-mt-20 border-t border-brand-border/40 py-8 bg-brand-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs text-brand-accent font-extrabold tracking-widest uppercase bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full">
              GYM GALLERY
            </span>
            <h2 className="font-extrabold text-3xl md:text-4xl tracking-tight text-white">
              WATCH US IN ACTION
            </h2>
            <p className="text-brand-muted text-sm font-semibold leading-relaxed">
              Click on any card below to watch our training reels directly on Instagram!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600', 
                profile: 'chetan.powerx',
                url: 'https://www.instagram.com/chetan.powerx/reel/DXCBogZCJkq/',
                title: 'Strength and Power Training' 
              },
              { 
                image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600', 
                profile: 'chetan.powerx',
                url: 'https://www.instagram.com/chetan.powerx/reel/DZZcHmeIbWp/',
                title: 'Heavy Barbell Squats' 
              },
              { 
                image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600', 
                profile: 'musclefactoryhub',
                url: 'https://www.instagram.com/musclefactoryhub/reel/DYqzA4GsNNc/',
                title: 'Boxing and Conditioning' 
              },
              { 
                image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600', 
                profile: 'chetan.powerx',
                url: 'https://www.instagram.com/chetan.powerx/reel/DaPYHbZIX-B/',
                title: 'Bicep Curls Workout' 
              }
            ].map((video, index) => (
              <a 
                key={index} 
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden shadow-lg hover:border-brand-accent/40 transition-all duration-300 relative aspect-[9/16] w-full max-w-[280px] mx-auto group block animate-fadeIn"
              >
                {/* Background Image */}
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

                {/* Play Button Icon Overlay in the center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-brand-accent/90 flex items-center justify-center text-brand-bg shadow-accent-glow scale-90 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-6 w-6 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Profile Header Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between bg-black/40 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center text-[10px] font-black text-brand-bg uppercase">
                      MF
                    </div>
                    <span className="text-[11px] font-bold text-white tracking-tight">
                      @{video.profile}
                    </span>
                  </div>
                  <span
                    className="text-[9px] font-black tracking-wider text-brand-accent uppercase bg-brand-accent/15 border border-brand-accent/25 px-2.5 py-1 rounded-lg"
                  >
                    WATCH
                  </span>
                </div>

                {/* Title Card Overlay at the bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                  <h4 className="font-extrabold text-sm text-white leading-tight">
                    {video.title}
                  </h4>
                  <span className="text-[10px] text-brand-muted font-bold block">
                    Watch Reel on Instagram →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Testimonials Section */}
      <section className="bg-brand-card/30 border-y border-brand-border py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs text-brand-accent font-extrabold tracking-widest uppercase">Member Stories</span>
            <h2 className="font-extrabold text-3xl md:text-4xl tracking-tight text-white">What Our Happy Community Says</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, index) => (
              <div 
                key={index}
                className="bg-brand-card border border-brand-border rounded-2xl p-8 relative flex flex-col justify-between"
              >
                <div className="absolute top-6 right-6 text-brand-accent/15">
                  <Quote className="h-10 w-10 fill-current" />
                </div>
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-brand-accent text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-brand-muted text-sm italic font-semibold leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-brand-border mt-6 flex items-center space-x-3">
                  <div className="bg-brand-accent/10 p-2.5 rounded-lg border border-brand-accent/20">
                    <Users className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">{rev.name}</h4>
                    <span className="text-[10px] text-brand-muted font-bold block mt-0.5">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Integrated Contact Us Section */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

    </div>
  );
}

export default Home;
