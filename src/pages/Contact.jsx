import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Clock, Send, Calendar } from 'lucide-react';

function Contact({ selectedPlan = 'General Inquiry', setSelectedPlan }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    gender: '', 
    city: 'Boisar', 
    date: new Date().toISOString().split('T')[0],
    plan: 'General Inquiry'
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.gender || !formData.city || !formData.date) return;
    
    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          gender: '', 
          city: 'Boisar', 
          date: new Date().toISOString().split('T')[0],
          plan: selectedPlan || 'General Inquiry'
        });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setSubmitError(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitError('Connection error. Please check if the server is running.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 select-none space-y-8">
      
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto px-4">
        <span className="text-xs text-brand-accent font-semibold bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full inline-block">
          Get In Touch
        </span>
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight text-white leading-tight">
          Connect with the <span className="text-brand-accent italic">Family</span>
        </h1>
        <p className="text-brand-muted text-xs font-semibold leading-relaxed max-w-xl mx-auto">
          Have questions? Fill out the form below or reach out to us directly.
        </p>
      </div>

      {/* Main Grid: Info vs Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-4 flex flex-col">

          {/* Direct Contact Card */}
          <div className="flex-1 rounded-2xl p-6 relative overflow-hidden"
            style={{ background: '#ffffff', border: '1px solid #e5e7eb', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(185,28,28,0.07) 0%, transparent 70%)' }} />

            <div className="relative z-10 space-y-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: '#b91c1c' }}>Reach Out</span>
                <h3 className="font-extrabold text-xl mt-0.5" style={{ color: '#111827' }}>Direct Contact</h3>
              </div>

              <div className="space-y-3">
                <a href="tel:+917057880936" className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-105"
                    style={{ background: '#fef2f2', border: '1px solid #fecaca' }}>
                    <Phone className="h-4 w-4" style={{ color: '#b91c1c' }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold" style={{ color: '#9ca3af' }}>Phone</div>
                    <div className="text-sm font-extrabold" style={{ color: '#111827' }}>+91 70578 80936</div>
                  </div>
                </a>

                <a href="mailto:musclefactoryhub@gmail.com" className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-105"
                    style={{ background: '#fef2f2', border: '1px solid #fecaca' }}>
                    <Mail className="h-4 w-4" style={{ color: '#b91c1c' }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold" style={{ color: '#9ca3af' }}>Email</div>
                    <div className="text-sm font-extrabold break-all" style={{ color: '#111827' }}>musclefactoryhub@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: '#fef2f2', border: '1px solid #fecaca' }}>
                    <MapPin className="h-4 w-4" style={{ color: '#b91c1c' }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold" style={{ color: '#9ca3af' }}>Address</div>
                    <div className="text-sm font-bold leading-snug" style={{ color: '#374151' }}>1st Floor, Nest 9 Mall,<br/>Boisar 401501</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gym Hours Card */}
          <div className="rounded-2xl p-5 relative overflow-hidden"
            style={{ background: '#ffffff', border: '1px solid #e5e7eb', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#fef2f2', border: '1px solid #fecaca' }}>
                <Clock className="h-4 w-4" style={{ color: '#b91c1c' }} />
              </div>
              <span className="text-xs font-extrabold tracking-wide uppercase" style={{ color: '#b91c1c' }}>Active Gym Hours</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl p-3 text-center" style={{ background: '#f9fafb', border: '1px solid #e5e7eb' }}>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Mon – Sat</div>
                <div className="font-extrabold text-sm" style={{ color: '#111827' }}>5:00 AM</div>
                <div className="text-[10px] font-bold my-1" style={{ color: '#d1d5db' }}>to</div>
                <div className="font-extrabold text-sm" style={{ color: '#111827' }}>10:00 PM</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ background: '#f9fafb', border: '1px solid #e5e7eb' }}>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Sunday</div>
                <div className="font-extrabold text-sm" style={{ color: '#111827' }}>8:00 AM</div>
                <div className="text-[10px] font-bold my-1" style={{ color: '#d1d5db' }}>to</div>
                <div className="font-extrabold text-sm" style={{ color: '#111827' }}>1:00 PM</div>
              </div>
            </div>
          </div>

        </div>


        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-gradient-to-br from-[#800b0b] via-[#b91c1c] to-[#500404] border border-white/10 rounded-2xl p-6 relative overflow-hidden shadow-2xl flex flex-col justify-between">
          {/* Membership Gold Ribbon */}
          <div className="absolute top-0 right-6 bg-gradient-to-b from-[#eab308] to-[#ca8a04] text-brand-bg font-extrabold text-[10px] sm:text-xs py-2 px-3 rounded-b-lg shadow-lg flex flex-col items-center leading-tight z-10 select-none uppercase">
            <span className="tracking-widest">JOIN</span>
            <span className="tracking-widest">NOW</span>
          </div>

          {submitted ? (
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center space-y-3 animate-fadeIn h-full flex flex-col justify-center items-center py-16">
              <CheckCircle2 className="h-10 w-10 text-yellow-300" />
              <h3 className="font-extrabold text-lg text-white">Registration Successful!</h3>
              <p className="text-white/80 text-xs font-medium max-w-sm leading-relaxed text-center">
                {formData.plan === 'General Inquiry' 
                  ? 'Your request has been registered successfully. Show this confirmation screen at the Muscle Factory front desk or wait for our team to contact you.'
                  : `Your request for the ${formData.plan} is registered. Show this confirmation screen at the Muscle Factory desk to complete activation.`}
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="space-y-1.5 text-left pr-12">
                {formData.plan === 'General Inquiry' ? (
                  <>
                    <h3 className="font-extrabold text-lg sm:text-xl md:text-2xl text-white leading-tight">
                      Start Your Fitness Journey Today
                    </h3>
                    <p className="text-white/80 text-[10px] sm:text-xs font-semibold leading-relaxed">
                      Select a plan or inquire to get started with Boisar's premium club.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="font-extrabold text-lg sm:text-xl md:text-2xl text-white leading-tight">
                      Join Muscle Factory: Register For <span className="text-yellow-300">{formData.plan}</span>
                    </h3>
                    <p className="text-white/80 text-[10px] sm:text-xs font-semibold leading-relaxed">
                      Complete your registration below. Show the success screen at the gym counter.
                    </p>
                  </>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {submitError && (
                  <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-2.5 rounded-lg text-xs font-semibold text-center">
                    {submitError}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-semibold text-white/90 flex items-center">
                      <span>Full Name</span>
                      <span className="text-yellow-300 ml-1 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2.5 focus:outline-none focus:border-yellow-300 text-white font-semibold text-xs transition-all placeholder-white/40"
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-semibold text-white/90 flex items-center">
                      <span>Email</span>
                      <span className="text-yellow-300 ml-1 font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="xyz@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2.5 focus:outline-none focus:border-yellow-300 text-white font-semibold text-xs transition-all placeholder-white/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-semibold text-white/90 flex items-center">
                      <span>Phone Number</span>
                      <span className="text-yellow-300 ml-1 font-bold">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2.5 focus:outline-none focus:border-yellow-300 text-white font-semibold text-xs transition-all placeholder-white/40"
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-semibold text-white/90 flex items-center">
                      <span>Select Gender</span>
                      <span className="text-yellow-300 ml-1 font-bold">*</span>
                    </label>
                    <select
                      required
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2.5 focus:outline-none focus:border-yellow-300 text-white font-semibold text-xs cursor-pointer transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center] bg-[size:16px_16px] bg-no-repeat pr-8"
                    >
                      <option value="" disabled className="text-black bg-white">Select Gender</option>
                      <option value="male" className="text-black bg-white">Male</option>
                      <option value="female" className="text-black bg-white">Female</option>
                      <option value="other" className="text-black bg-white">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-[10px] font-semibold text-white/90 flex items-center">
                    <span>Selected Plan</span>
                    <span className="text-yellow-300 ml-1 font-bold">*</span>
                  </label>
                  <select
                    required
                    value={formData.plan}
                    onChange={(e) => {
                      setFormData({ ...formData, plan: e.target.value });
                      if (setSelectedPlan) setSelectedPlan(e.target.value);
                    }}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2.5 focus:outline-none focus:border-yellow-300 text-white font-semibold text-xs cursor-pointer transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center] bg-[size:16px_16px] bg-no-repeat pr-8"
                  >
                    <option value="General Inquiry" className="text-black bg-white">General Inquiry / Custom Plan</option>
                    <option value="1 Month Plan" className="text-black bg-white">1 Month Plan (₹1,199)</option>
                    <option value="3 Months Plan" className="text-black bg-white">3 Months Plan (₹2,999)</option>
                    <option value="6 Months Plan" className="text-black bg-white">6 Months Plan (₹3,999)</option>
                    <option value="12 Months Plan" className="text-black bg-white">12 Months Plan (₹6,999)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-semibold text-white/90 flex items-center">
                      <span>Select City</span>
                      <span className="text-yellow-300 ml-1 font-bold">*</span>
                    </label>
                    <select
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2.5 focus:outline-none focus:border-yellow-300 text-white font-semibold text-xs cursor-pointer transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center] bg-[size:16px_16px] bg-no-repeat pr-8"
                    >
                      <option value="Boisar" className="text-black bg-white">Boisar</option>
                    </select>
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-semibold text-white/90 flex items-center">
                      <span>Select Date</span>
                      <span className="text-yellow-300 ml-1 font-bold">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2.5 focus:outline-none focus:border-yellow-300 text-white font-semibold text-xs transition-all"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`bg-gradient-to-r from-[#eab308] to-[#ca8a04] hover:from-[#facc15] hover:to-[#eab308] text-brand-bg font-extrabold px-8 py-2.5 rounded-lg text-xs shadow-lg shadow-yellow-500/10 cursor-pointer transition-all duration-300 ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {submitting ? 'Submitting...' : 'Continue'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Map Segment */}
      <section className="bg-brand-card/30 border border-brand-border rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-center space-x-2 text-brand-accent">
          <MapPin className="h-4.5 w-4.5" />
          <span className="text-xs font-semibold">Gym Location Map</span>
        </div>
        <div className="text-center">
          <h3 className="font-extrabold text-lg text-white">Find Us in Nest 9 Mall, Boisar</h3>
          <p className="text-brand-muted text-xs font-bold mt-1">
            Behind Sai Complex Chitralaya, Boisar 401501.
          </p>
        </div>
        <div className="w-full h-[300px] bg-brand-card border border-brand-border rounded-xl overflow-hidden relative shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=Nest%209%20Mall,%20Boisar&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          />
        </div>
        <div className="text-center pt-1">
          <a 
            href="https://maps.app.goo.gl/SJvDG3ABxempaoFx5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex bg-brand-accent text-brand-bg hover:bg-brand-accentHover font-extrabold px-5 py-2 rounded-lg text-xs transition-all shadow-accent-glow cursor-pointer"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

    </div>
  );
}

export default Contact;
