import React, { useState } from 'react';
import { Dumbbell, ShieldAlert, Award, ChevronRight, X, Clock, Compass, Target, CheckCircle2 } from 'lucide-react';

function TrainingCard({ title, icon: Icon, description, details, onBookTrial }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="glass-card rounded-2xl overflow-hidden border border-brand-border hover:border-brand-accent/40 group flex flex-col h-full transition-all duration-300">
        {/* Decorative Top Line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-brand-accent/30 to-brand-accent transition-all duration-300 group-hover:via-brand-accent group-hover:to-brand-accent" />
        
        <div className="p-8 flex flex-col flex-grow">
          {/* Icon Header */}
          <div className="bg-brand-accent/5 p-4 rounded-xl border border-brand-border group-hover:border-brand-accent/20 w-fit mb-6 transition-all duration-300 group-hover:scale-110">
            <Icon className="h-7 w-7 text-brand-accent" />
          </div>
          
          <h3 className="font-extrabold text-xl tracking-tight text-white mb-3 group-hover:text-brand-accent transition-colors">
            {title}
          </h3>
          
          <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-grow font-medium">
            {description}
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center space-x-2 text-xs font-extrabold tracking-widest text-brand-accent group-hover:text-white uppercase transition-colors"
          >
            <span>LEARN MORE</span>
            <ChevronRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Detail Overlay Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn select-none">
          <div className="glass-card w-full max-w-2xl rounded-2xl overflow-hidden border border-brand-border shadow-accent-glow-strong flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-brand-border bg-black/40">
              <div className="flex items-center space-x-3">
                <div className="bg-brand-accent/10 p-2.5 rounded-lg border border-brand-accent/20">
                  <Icon className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="font-extrabold text-2xl tracking-tight text-white">{title} Overview</h3>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="text-brand-muted hover:text-white p-2 hover:bg-brand-card rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto custom-scrollbar">
              
              {/* Slogan & Philosophy */}
              <div>
                <span className="text-xs text-brand-accent font-extrabold tracking-widest uppercase block mb-1">PROGRAM METRICS</span>
                <p className="text-white text-base font-semibold leading-relaxed">
                  {details.philosophy}
                </p>
              </div>

              {/* Grid split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Benefits */}
                <div className="space-y-3">
                  <span className="text-xs text-brand-accent font-extrabold tracking-widest uppercase flex items-center space-x-1.5">
                    <Target className="h-3.5 w-3.5" />
                    <span>Key Target Outcomes</span>
                  </span>
                  <ul className="space-y-2.5">
                    {details.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-brand-muted font-medium">
                        <CheckCircle2 className="h-4.5 w-4.5 text-brand-accent shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Equipment & Info */}
                <div className="space-y-4">
                  {/* Schedule */}
                  <div className="space-y-2">
                    <span className="text-xs text-brand-accent font-extrabold tracking-widest uppercase flex items-center space-x-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>Class Schedules</span>
                    </span>
                    <p className="text-sm font-semibold text-white bg-brand-card border border-brand-border px-4 py-2.5 rounded-xl">
                      {details.schedule}
                    </p>
                  </div>

                  {/* Gear/Equipment */}
                  <div className="space-y-2">
                    <span className="text-xs text-brand-accent font-extrabold tracking-widest uppercase flex items-center space-x-1.5">
                      <Compass className="h-3.5 w-3.5" />
                      <span>Gear &amp; Equipment Used</span>
                    </span>
                    <p className="text-xs font-semibold text-brand-muted leading-relaxed">
                      {details.equipment}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 border-t border-brand-border bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-[10px] text-brand-muted font-bold tracking-widest uppercase block">READY TO START?</span>
                <span className="text-sm font-extrabold text-white">Claim your free guest pass today!</span>
              </div>
              <div className="flex space-x-3 w-full sm:w-auto">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 sm:flex-none border border-brand-border hover:border-brand-muted text-brand-muted hover:text-white px-6 py-3 rounded-xl text-xs font-extrabold tracking-widest transition-all"
                >
                  DISMISS
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    onBookTrial(title);
                  }}
                  className="flex-1 sm:flex-none bg-brand-accent text-brand-bg hover:bg-brand-accentHover px-6 py-3 rounded-xl text-xs font-black tracking-widest shadow-accent-glow transition-all"
                >
                  BOOK FREE SESSION
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default TrainingCard;
