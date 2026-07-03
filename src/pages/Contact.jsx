import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Clock, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'general', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 select-none space-y-10">
      
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs text-brand-accent font-extrabold tracking-widest uppercase bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full">
          GET IN TOUCH
        </span>
        <h1 className="font-extrabold text-3xl md:text-4xl tracking-tight text-white leading-tight">
          CONNECT WITH THE <span className="text-brand-accent italic">FAMILY</span>
        </h1>
        <p className="text-brand-muted text-xs font-semibold leading-relaxed">
          Have questions? Fill out the form or contact us directly. We will reply to you as soon as possible.
        </p>
      </div>

      {/* Main Grid: Info vs Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          <div className="bg-brand-card/30 border border-brand-border rounded-2xl p-6 space-y-4 flex-1">
            <h3 className="font-extrabold text-lg text-white">Direct Contact</h3>
            <p className="text-brand-muted text-xs font-semibold leading-relaxed">
              Call or email us anytime. We are happy to help you start your fitness journey!
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-xs text-brand-muted">
                <Phone className="h-4 w-4 text-brand-accent shrink-0" />
                <a href="tel:+917057880958" className="text-white hover:text-brand-accent font-bold">
                  +91 70578 80958
                </a>
              </div>

              <div className="flex items-center space-x-3 text-xs text-brand-muted">
                <Mail className="h-4 w-4 text-brand-accent shrink-0" />
                <a href="mailto:info@musclefactory.in" className="text-white hover:text-brand-accent font-bold break-all">
                  info@musclefactory.in
                </a>
              </div>

              <div className="flex items-start space-x-3 text-xs text-brand-muted">
                <MapPin className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-white font-semibold">
                  1st Floor, Nest 9 Mall, Next to Organe Diagnostic, Behind Sai Complex Chitralaya, Boisar 401501
                </span>
              </div>
            </div>
          </div>

          <div className="bg-brand-card/30 border border-brand-border p-6 rounded-2xl space-y-3">
            <div className="flex items-center space-x-2 text-brand-accent">
              <Clock className="h-4 w-4" />
              <span className="text-xs font-extrabold tracking-wider uppercase">Active Gym Hours</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-brand-muted">
              <div>
                <span className="text-white block font-extrabold">MON - SAT</span>
                <span>5:00 AM - 10:00 PM</span>
              </div>
              <div>
                <span className="text-white block font-extrabold">SUNDAYS</span>
                <span>8:00 AM - 1:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-brand-card/30 border border-brand-border rounded-2xl p-6 flex flex-col justify-between">
          <h3 className="font-extrabold text-lg text-white mb-4 text-center lg:text-left">Send A Message</h3>

          {submitted ? (
            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-8 text-center space-y-3 animate-fadeIn h-full flex flex-col justify-center items-center">
              <CheckCircle2 className="h-10 w-10 text-brand-accent" />
              <h3 className="font-extrabold text-lg text-white">Message Sent!</h3>
              <p className="text-brand-muted text-xs font-semibold max-w-sm">
                We received your message and will email you back shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold tracking-wider uppercase text-brand-muted">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-brand-card border border-brand-border rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-accent text-white font-semibold text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold tracking-wider uppercase text-brand-muted">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-brand-card border border-brand-border rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-accent text-white font-semibold text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold tracking-wider uppercase text-brand-muted">Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-brand-card border border-brand-border rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-accent text-white font-semibold text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold tracking-wider uppercase text-brand-muted">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-brand-card border border-brand-border rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-accent text-white font-semibold text-xs cursor-pointer"
                  >
                    <option value="general">General Gym Query</option>
                    <option value="membership">Membership Plans</option>
                    <option value="pt">Personal Training</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-extrabold tracking-wider uppercase text-brand-muted">Your Message</label>
                <textarea
                  required
                  placeholder="Write your questions here..."
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-card border border-brand-border rounded-xl px-3 py-2.5 focus:outline-none focus:border-brand-accent text-white font-semibold text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-accent text-brand-bg hover:bg-brand-accentHover font-black tracking-widest py-3 rounded-xl text-xs transition-all shadow-accent-glow flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Map Segment */}
      <section className="bg-brand-card/30 border border-brand-border rounded-3xl p-8 space-y-4">
        <div className="flex items-center justify-center space-x-2 text-brand-accent">
          <MapPin className="h-5 w-5" />
          <span className="text-xs font-extrabold tracking-wider uppercase">Gym Location Map</span>
        </div>
        <div className="text-center">
          <h3 className="font-extrabold text-xl text-white">Find Us in Nest 9 Mall, Boisar</h3>
          <p className="text-brand-muted text-xs font-bold mt-1">
            Behind Sai Complex Chitralaya, Boisar 401501.
          </p>
        </div>
        <div className="w-full h-[400px] bg-brand-card border border-brand-border rounded-2xl overflow-hidden relative shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=Nest%209%20Mall,%20Boisar&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          />
        </div>
        <div className="text-center pt-2">
          <a 
            href="https://maps.app.goo.gl/SJvDG3ABxempaoFx5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex bg-brand-accent text-brand-bg hover:bg-brand-accentHover font-black tracking-widest px-6 py-2.5 rounded-xl text-xs transition-all shadow-accent-glow"
          >
            OPEN IN GOOGLE MAPS
          </a>
        </div>
      </section>

    </div>
  );
}

export default Contact;
