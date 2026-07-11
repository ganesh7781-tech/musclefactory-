import React from 'react';
import { Dumbbell, Zap, Sparkles, Award, Users, Shield } from 'lucide-react';
import TrainingCard from '../components/TrainingCard';

function Training({ setActivePage }) {
  
  const trainingPrograms = [
    {
      title: 'Functional Training',
      icon: Zap,
      description: 'Unlock athletic mobility, core power, and real-world durability using kettlebells, battle ropes, and dynamic bodyweight movements.',
      details: {
        philosophy: 'Train your body to move as a unified unit, building functional strength that carries over directly to your daily life.',
        benefits: ['Improves posture & balance', 'Stronger core muscles', 'Burns calories fast', 'Reduces risk of injury'],
        schedule: 'Mon, Wed, Fri at 6:30 AM, 7:30 AM, 6:00 PM, 7:30 PM',
        equipment: 'Kettlebells, battle ropes, medicine balls, TRX suspension anchors, plyo boxes.'
      }
    },
    {
      title: 'Strength Training',
      icon: Dumbbell,
      description: 'Sculpt a powerful, lean physique. Target hypertrophy and raw power using heavy barbells, premium dumbbells, and structured progressive loading.',
      details: {
        philosophy: 'Scientific strength conditioning focused on absolute power, muscle recruitment, and joint integrity.',
        benefits: ['Builds lean muscle', 'Helps burn fat', 'Makes bones and joints stronger', 'Helps you lift with ease'],
        schedule: 'Daily classes at 7:00 AM, 8:30 AM, 5:30 PM, 8:00 PM',
        equipment: 'Barbells, dumbbells, squat racks, plates, resistance cables, isolation machines.'
      }
    },
    {
      title: 'MMA & Combat',
      icon: Shield,
      description: 'Master high-intensity combat conditioning. Learn authentic striking, boxing, and self-defense under the supervision of expert coaches.',
      details: {
        philosophy: 'Train like a professional fighter. Boost cardio, hand-eye coordination, and mental focus without the physical combat risk.',
        benefits: ['Great heart health', 'Learn basic self-defense', 'Better focus and discipline', 'Relieves stress and anxiety'],
        schedule: 'Tue, Thu, Sat at 7:00 AM, 7:00 PM',
        equipment: 'Heavy punching bags, focus mitts, kick shields, agility ladders, grappling mats.'
      }
    },
    {
      title: 'Cardio & Fat Burn',
      icon: Zap,
      description: 'Ignite your metabolism. High-intensity cardio blocks, assault bikes, and interval training designed to maximize caloric burn.',
      details: {
        philosophy: 'High-octane conditioning to optimize cardiovascular capacity, improve stamina, and keep you running at peak levels.',
        benefits: ['Helps you stay lean', 'Improves breathing and stamina', 'Boosts daily energy levels', 'Good for your heart'],
        schedule: 'Mon - Fri at 8:00 AM, 6:30 PM',
        equipment: 'Concept2 rowers, SkiErgs, assault bikes, air runners, battle ropes.'
      }
    },
    {
      title: 'Yoga & Flexibility',
      icon: Sparkles,
      description: 'Restore mobility, align posture, and accelerate muscle recovery. A perfect blend of restorative stretching, posture training, and breathwork.',
      details: {
        philosophy: 'Release tension, reset your joints, and optimize recovery to unlock your body\'s full range of motion.',
        benefits: ['Makes you much more flexible', 'Helps muscles recover faster', 'Calms your mind', 'Improves your focus'],
        schedule: 'Tue, Thu, Sat at 8:00 AM | Sun at 9:00 AM',
        equipment: 'High-density yoga mats, blocks, resistance bands, foam rollers.'
      }
    },
    {
      title: 'Personal Coaching',
      icon: Award,
      description: 'Accelerate your results with elite 1-on-1 guidance. Tailored workouts, body composition analysis, and custom nutrition frameworks.',
      details: {
        philosophy: 'A custom blueprint built specifically for your biomechanics, schedule, and personal goals.',
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 select-none space-y-8">
      
      {/* Page Header */}
      <div className="text-center space-y-3.5 max-w-4xl mx-auto px-4">
        <span className="text-xs text-brand-accent font-semibold bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full inline-block">
          Training Programs
        </span>
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-tight md:whitespace-nowrap">
          Elite Training. Limitless Results.
        </h1>
        <p className="text-brand-muted text-xs sm:text-sm font-semibold leading-relaxed max-w-2xl mx-auto">
          Discover specialized fitness programs designed to push your limits, elevate your strength, and accelerate your performance.
        </p>
      </div>

      {/* Grid of Programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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



    </div>
  );
}

export default Training;
