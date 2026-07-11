import React from 'react';
import { Award, Users } from 'lucide-react';

function Trainers() {
  const trainers = [
    {
      name: 'Chetan Powerx',
      role: 'Head Strength Coach',
      certifications: 'K11 Certified Personal Trainer',
      specialty: 'Powerlifting & Strength Conditioning',
      instagram: 'chetan.powerx',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600'
    },
    {
      name: 'Rahul Verma',
      role: 'MMA & Combat Head',
      certifications: 'National Wushu Medalist',
      specialty: 'MMA, Kickboxing & Combat Conditioning',
      instagram: 'musclefactoryhub',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600'
    },
    {
      name: 'Priya Sen',
      role: 'Functional & Mobility Coach',
      certifications: 'ACE Certified Group Fitness',
      specialty: 'Functional Mobility, Cardio & Yoga',
      instagram: 'musclefactoryhub',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 select-none space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-3.5 max-w-3xl mx-auto px-4">
        <span className="text-xs text-brand-accent font-semibold bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full inline-block">
          Expert Coaches
        </span>
        <h2 className="font-extrabold text-2xl md:text-3xl tracking-tight text-white leading-tight">
          Train with the best coaches in Boisar
        </h2>
        <p className="text-brand-muted text-xs sm:text-sm font-semibold leading-relaxed max-w-xl mx-auto">
          Our certified coaches are committed to perfecting your lifting posture, safety, and guiding your daily transformation journey.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {trainers.map((trainer, index) => (
          <div 
            key={index}
            className="bg-brand-card/40 border border-brand-border rounded-xl overflow-hidden hover:border-brand-accent/40 group transition-all duration-300 flex flex-col"
          >
            {/* Visual Part */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              {/* Instagram Handle Overlay */}
              <a 
                href={`https://www.instagram.com/${trainer.instagram}/`}
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-brand-bg/95 hover:bg-brand-accent border border-brand-border hover:border-brand-accent text-white hover:text-brand-bg p-2 rounded-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg"
                aria-label={`Follow ${trainer.name} on Instagram`}
              >
                <svg 
                  className="h-4.5 w-4.5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>

            {/* Info details */}
            <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] text-brand-accent font-semibold block">
                  {trainer.role}
                </span>
                <h3 className="font-extrabold text-base text-white group-hover:text-brand-accent transition-colors">
                  {trainer.name}
                </h3>
              </div>

              <div className="pt-2.5 border-t border-brand-border space-y-2 text-xs font-semibold text-brand-muted">
                <div className="flex items-center space-x-2">
                  <Award className="h-3.5 w-3.5 text-brand-accent shrink-0" />
                  <span className="leading-snug">{trainer.certifications}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-3.5 w-3.5 text-brand-accent shrink-0" />
                  <span className="leading-snug">{trainer.specialty}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trainers;
