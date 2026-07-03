import React from 'react';
import { Dumbbell, Zap, Sparkles, Award, Users, Shield } from 'lucide-react';
import TrainingCard from '../components/TrainingCard';

function Training({ setActivePage }) {
  
  const trainingPrograms = [
    {
      title: 'Functional Training',
      icon: Zap,
      description: 'Build real-world strength, balance, and core power using simple tools like ropes, medicine balls, and bands.',
      details: {
        philosophy: 'Train your body to move naturally in everyday life, rather than just using fixed gym machines.',
        benefits: ['Improves posture & balance', 'Stronger core muscles', 'Burns calories fast', 'Reduces risk of injury'],
        schedule: 'Mon, Wed, Fri at 6:30 AM, 7:30 AM, 6:00 PM, 7:30 PM',
        equipment: 'Kettlebells, battle ropes, medicine balls, TRX suspension anchors, plyo boxes.'
      }
    },
    {
      title: 'Strength Training',
      icon: Dumbbell,
      description: 'Build strong muscles and bones using weights, barbells, dumbbells, and squat racks.',
      details: {
        philosophy: 'Classic weightlifting designed to make you stronger and build a healthy body.',
        benefits: ['Builds lean muscle', 'Helps burn fat', 'Makes bones and joints stronger', 'Helps you lift with ease'],
        schedule: 'Daily classes at 7:00 AM, 8:30 AM, 5:30 PM, 8:00 PM',
        equipment: 'Barbells, dumbbells, squat racks, plates, resistance cables, isolation machines.'
      }
    },
    {
      title: 'MMA & combat',
      icon: Shield,
      description: 'Learn boxing, kickboxing, and self-defense in a safe environment. Great for fitness and stress relief.',
      details: {
        philosophy: 'Mix martial arts with general fitness. Train like a fighter without getting hurt, and boost your energy.',
        benefits: ['Great heart health', 'Learn basic self-defense', 'Better focus and discipline', 'Relieves stress and anxiety'],
        schedule: 'Tue, Thu, Sat at 7:00 AM, 7:00 PM',
        equipment: 'Heavy punching bags, focus mitts, kick shields, agility ladders, grappling mats.'
      }
    },
    {
      title: 'Cardio & Fat Burn',
      icon: Zap,
      description: 'Burn calories and boost your stamina with high-energy exercises, skipping, and cycling.',
      details: {
        philosophy: 'Workouts designed to get your heart rate up and keep you active throughout the day.',
        benefits: ['Helps you stay lean', 'Improves breathing and stamina', 'Boosts daily energy levels', 'Good for your heart'],
        schedule: 'Mon - Fri at 8:00 AM, 6:30 PM',
        equipment: 'Concept2 rowers, SkiErgs, assault bikes, air runners, battle ropes.'
      }
    },
    {
      title: 'Yoga & Flexibility',
      icon: Sparkles,
      description: 'Relax your muscles, improve your range of movement, and calm your mind with simple stretching and yoga.',
      details: {
        philosophy: 'Help your body recover from hard workouts by stretching, relaxing, and breathing deeply.',
        benefits: ['Makes you much more flexible', 'Helps muscles recover faster', 'Calms your mind', 'Improves your focus'],
        schedule: 'Tue, Thu, Sat at 8:00 AM | Sun at 9:00 AM',
        equipment: 'High-density yoga mats, blocks, resistance bands, foam rollers.'
      }
    },
    {
      title: 'Personal Coaching',
      icon: Award,
      description: 'Get 1-on-1 help from a trainer. Track your fitness goals, get custom workouts, and eat the right foods.',
      details: {
        philosophy: 'Fitness coaching built just for your body, lifestyle, and goals.',
        benefits: ['100% custom workouts', 'Help with exercise form', 'Food and nutrition advice', 'Guaranteed progress'],
        schedule: 'Flexible bookings matching your preferred time slot.',
        equipment: 'Full gym setup, body composition analyzers, custom progress tracking software.'
      }
    }
  ];

  const handleBookTrial = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 select-none space-y-10">
      
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs text-brand-accent font-extrabold tracking-widest uppercase bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full">
          TRAINING PROGRAMS
        </span>
        <h1 className="font-extrabold text-4xl md:text-5xl tracking-tight text-white leading-tight">
          MULTIPLE STYLES. ONE PHILOSOPHY.
        </h1>
        <p className="text-brand-muted text-sm font-semibold leading-relaxed">
          We mix strength training, cardio, boxing, and stretching to help you stay healthy and avoid injuries.
        </p>
      </div>

      {/* Grid of Programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainingPrograms.map((program, idx) => (
          <TrainingCard 
            key={idx}
            title={program.title}
            icon={program.icon}
            description={program.description}
            details={program.details}
            onBookTrial={handleBookTrial}
          />
        ))}
      </div>

      {/* Philosophy Callout Grid */}
      <section className="bg-brand-card/50 border border-brand-border rounded-3xl p-8 md:p-12 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs text-brand-accent font-extrabold tracking-widest uppercase">The Difference</span>
          <h2 className="font-extrabold text-2xl md:text-3xl tracking-tight text-white">Why Train At Muscle Factory?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="bg-brand-accent/5 border border-brand-border p-3.5 rounded-xl w-fit">
              <Zap className="h-5 w-5 text-brand-accent" />
            </div>
            <h3 className="font-extrabold text-lg text-white">Interactive Community</h3>
            <p className="text-brand-muted text-xs leading-relaxed font-semibold">
              Meet new friends and stay motivated. Working out in a group makes fitness fun and easy.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-brand-accent/5 border border-brand-border p-3.5 rounded-xl w-fit">
              <Award className="h-5 w-5 text-brand-accent" />
            </div>
            <h3 className="font-extrabold text-lg text-white">Science-Backed Methods</h3>
            <p className="text-brand-muted text-xs leading-relaxed font-semibold">
              Our workouts are simple, safe, and designed by experts to give you the best results.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-brand-accent/5 border border-brand-border p-3.5 rounded-xl w-fit">
              <Users className="h-5 w-5 text-brand-accent" />
            </div>
            <h3 className="font-extrabold text-lg text-white">Elite Certified Coaches</h3>
            <p className="text-brand-muted text-xs leading-relaxed font-semibold">
              Our friendly trainers are certified and trained to help you exercise safely.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Pass Callout */}
      <section className="text-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent py-12 rounded-3xl border border-dashed border-brand-border">
        <h3 className="font-extrabold text-2xl text-white mb-2">Claim Your Guest Pass Online</h3>
        <p className="text-brand-muted text-sm max-w-md mx-auto mb-6 font-semibold">
          Get a free 1-day pass. Try any workout and use all our gym equipment for free!
        </p>
        <button
          onClick={handleBookTrial}
          className="bg-brand-accent text-brand-bg hover:bg-brand-accentHover font-black tracking-widest px-8 py-3.5 rounded-xl text-xs shadow-accent-glow transition-all"
        >
          CLAIM PASS NOW
        </button>
      </section>

    </div>
  );
}

export default Training;
