import React, { useState, useEffect } from 'react';
import { Calculator, RotateCcw, Activity, Apple, Dumbbell, Flame, Scale } from 'lucide-react';

function CalorieCalculator({ defaultTab = 'calorie' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('25');
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('175');
  const [activity, setActivity] = useState('1.375');
  const [goal, setGoal] = useState('maintain');
  const [results, setResults] = useState(null);

  // When parent changes defaultTab (via navbar click), switch tab
  useEffect(() => {
    setActiveTab(defaultTab);
    setResults(null);
  }, [defaultTab]);

  const tabs = [
    { id: 'calorie', label: 'Calories', icon: Flame },
    { id: 'bmi',     label: 'BMI',      icon: Scale },
    { id: 'bmr',     label: 'BMR',      icon: Activity },
    { id: 'macros',  label: 'Macros',   icon: Apple },
  ];

  const activityOptions = [
    { value: '1.2',   label: 'Sedentary (Little/no exercise)' },
    { value: '1.375', label: 'Lightly Active (1-3 days/week)' },
    { value: '1.55',  label: 'Moderately Active (3-5 days/week)' },
    { value: '1.725', label: 'Very Active (6-7 days/week)' },
    { value: '1.9',   label: 'Super Active (Hard job & training)' },
  ];

  const calculate = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
    const act = parseFloat(activity);
    if (isNaN(w) || isNaN(h) || isNaN(a)) return;

    const hm = h / 100;
    const bmi = w / (hm * hm);
    let bmiStatus = 'Normal', bmiColor = 'text-green-400';
    if (bmi < 18.5) { bmiStatus = 'Underweight'; bmiColor = 'text-yellow-400'; }
    else if (bmi >= 25 && bmi < 29.9) { bmiStatus = 'Overweight'; bmiColor = 'text-orange-400'; }
    else if (bmi >= 29.9) { bmiStatus = 'Obese'; bmiColor = 'text-red-500'; }

    const bmr = gender === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;

    const tdee = bmr * act;
    let targetCal = tdee;
    if (goal === 'lose') targetCal = tdee - 500;
    if (goal === 'gain') targetCal = tdee + 300;

    const protein = Math.round(targetCal * 0.30 / 4);
    const carbs   = Math.round(targetCal * 0.45 / 4);
    const fats    = Math.round(targetCal * 0.25 / 9);

    setResults({ bmi: bmi.toFixed(1), bmiStatus, bmiColor, bmr: Math.round(bmr), tdee: Math.round(tdee), targetCal: Math.round(targetCal), macros: { protein, carbs, fats } });
  };

  const handleReset = () => {
    setGender('male'); setAge('25'); setWeight('70'); setHeight('175');
    setActivity('1.375'); setGoal('maintain'); setResults(null);
  };

  const inputCls = "w-full bg-brand-card border border-brand-border rounded-lg px-3 py-2 focus:outline-none focus:border-brand-accent text-white text-sm font-bold transition-all";
  const btnToggle = (active) => `py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${active ? 'bg-brand-accent text-brand-bg border-brand-accent shadow-accent-glow' : 'bg-brand-card text-brand-muted border-brand-border hover:text-white hover:border-brand-muted'}`;

  const sharedForm = (
    <form onSubmit={calculate} className="space-y-4">
      {/* Gender */}
      <div>
        <label className="block text-[11px] font-semibold text-brand-muted mb-1.5">Gender</label>
        <div className="grid grid-cols-2 gap-3">
          <button type="button" onClick={() => setGender('male')}   className={btnToggle(gender === 'male')}>MALE</button>
          <button type="button" onClick={() => setGender('female')} className={btnToggle(gender === 'female')}>FEMALE</button>
        </div>
      </div>
      {/* Age, Height, Weight */}
      <div className="grid grid-cols-3 gap-3">
        {[['Age', age, setAge, 10, 100], ['Height (cm)', height, setHeight, 100, 250], ['Weight (kg)', weight, setWeight, 30, 250]].map(([lbl, val, setter, mn, mx]) => (
          <div key={lbl}>
            <label className="block text-[11px] font-semibold text-brand-muted mb-1.5">{lbl}</label>
            <input type="number" min={mn} max={mx} required value={val} onChange={e => setter(e.target.value)} className={inputCls} />
          </div>
        ))}
      </div>
      {/* Activity (shown for calorie, bmr, macros tabs) */}
      {(activeTab === 'calorie' || activeTab === 'bmr' || activeTab === 'macros') && (
        <div>
          <label className="block text-[11px] font-semibold text-brand-muted mb-1.5">Activity Level</label>
          <select value={activity} onChange={e => setActivity(e.target.value)} className={inputCls + ' cursor-pointer'}>
            {activityOptions.map(o => <option key={o.value} value={o.value} className="bg-brand-card text-white">{o.label}</option>)}
          </select>
        </div>
      )}
      {/* Goal (calorie & macros only) */}
      {(activeTab === 'calorie' || activeTab === 'macros') && (
        <div>
          <label className="block text-[11px] font-semibold text-brand-muted mb-1.5">Fitness Goal</label>
          <div className="grid grid-cols-3 gap-2">
            {[['lose','Weight Loss'],['maintain','Maintenance'],['gain','Muscle Gain']].map(([v, l]) => (
              <button key={v} type="button" onClick={() => setGoal(v)} className={`py-1.5 px-1 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${goal === v ? 'bg-brand-accent text-brand-bg border-brand-accent shadow-accent-glow' : 'bg-brand-card text-brand-muted border-brand-border hover:text-white'}`}>{l}</button>
            ))}
          </div>
        </div>
      )}
      {/* Buttons */}
      <div className="flex space-x-3 pt-1">
        <button type="submit" className="flex-1 bg-brand-accent text-brand-bg hover:bg-brand-accentHover font-extrabold tracking-widest py-2.5 rounded-lg text-xs transition-all shadow-accent-glow flex items-center justify-center space-x-2 cursor-pointer">
          <Calculator className="h-3.5 w-3.5" /><span>CALCULATE</span>
        </button>
        <button type="button" onClick={handleReset} className="px-4 bg-brand-card border border-brand-border hover:border-brand-muted rounded-lg transition-all flex items-center justify-center text-brand-muted hover:text-white cursor-pointer">
          <RotateCcw className="h-4.5 w-4.5" />
        </button>
      </div>
    </form>
  );

  const renderResult = () => {
    if (!results) return (
      <div className="h-full border border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center p-6 text-center bg-black/10 min-h-[220px]">
        <Calculator className="h-10 w-10 text-white/40 mb-3 animate-pulse" />
        <p className="text-white/70 font-bold text-xs">Enter your metrics and press Calculate.</p>
        <p className="text-[10px] text-white/50 mt-1 max-w-xs">Uses Mifflin-St Jeor formula — the most accurate metabolic model.</p>
      </div>
    );

    if (activeTab === 'bmi') return (
      <div className="bg-brand-card/40 border border-brand-border rounded-xl p-5 space-y-4 animate-fadeIn">
        <h4 className="font-extrabold text-sm text-white border-b border-brand-border pb-2">BMI Result</h4>
        <div className="text-center py-4">
          <div className="text-6xl font-black text-white mb-1">{results.bmi}</div>
          <div className={`text-base font-extrabold ${results.bmiColor}`}>{results.bmiStatus}</div>
          <p className="text-[11px] text-brand-muted mt-2">Body Mass Index (kg/m²)</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-bold">
          {[['< 18.5','Underweight','text-yellow-400'],['18.5–24.9','Normal','text-green-400'],['25–29.9','Overweight','text-orange-400'],['≥ 30','Obese','text-red-400']].map(([r,l,c]) => (
            <div key={l} className="bg-brand-card rounded-lg p-2 border border-brand-border">
              <div className={`font-extrabold ${c}`}>{r}</div>
              <div className="text-brand-muted mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </div>
    );

    if (activeTab === 'bmr') return (
      <div className="bg-brand-card/40 border border-brand-border rounded-xl p-5 space-y-4 animate-fadeIn">
        <h4 className="font-extrabold text-sm text-white border-b border-brand-border pb-2">BMR Result</h4>
        <div className="text-center py-4">
          <div className="text-6xl font-black text-white mb-1">{results.bmr}</div>
          <div className="text-sm font-bold text-brand-accent">kcal / day</div>
          <p className="text-[11px] text-brand-muted mt-2">Basal Metabolic Rate — calories burned at complete rest</p>
        </div>
        <div className="bg-brand-card rounded-xl p-3 border border-brand-border text-center">
          <div className="text-[11px] text-brand-muted font-semibold">TDEE (with activity)</div>
          <div className="text-2xl font-black text-yellow-300">{results.tdee} <span className="text-sm font-bold">kcal</span></div>
        </div>
      </div>
    );

    if (activeTab === 'macros') return (
      <div className="bg-brand-card/40 border border-brand-border rounded-xl p-5 space-y-3 animate-fadeIn">
        <h4 className="font-extrabold text-sm text-white border-b border-brand-border pb-2">Daily Macros</h4>
        <div className="text-center text-[10px] text-brand-muted font-semibold mb-2">Target: <span className="text-yellow-300 font-black text-sm">{results.targetCal} kcal</span></div>
        {[
          { label: 'Protein (30%)',       val: results.macros.protein, unit: 'g', color: 'bg-yellow-400', textColor: 'text-yellow-300', pct: 30 },
          { label: 'Carbohydrates (45%)', val: results.macros.carbs,   unit: 'g', color: 'bg-blue-500',   textColor: 'text-blue-400',   pct: 45 },
          { label: 'Fats (25%)',          val: results.macros.fats,    unit: 'g', color: 'bg-orange-500', textColor: 'text-orange-400', pct: 25 },
        ].map(m => (
          <div key={m.label} className="space-y-1">
            <div className="flex justify-between text-[11px] font-bold">
              <span className="text-white">{m.label}</span>
              <span className={m.textColor}>{m.val}{m.unit}</span>
            </div>
            <div className="w-full bg-brand-bg rounded-full h-2">
              <div className={`${m.color} h-2 rounded-full transition-all duration-700`} style={{ width: `${m.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    );

    // calorie tab (default)
    return (
      <div className="bg-brand-card/40 border border-brand-border rounded-xl p-5 space-y-3 animate-fadeIn">
        <h4 className="font-extrabold text-sm text-white border-b border-brand-border pb-2">Calorie Result</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-brand-card p-3 rounded-lg border border-brand-border text-center">
            <div className="text-[10px] text-brand-muted font-semibold mb-1">BMR</div>
            <div className="text-xl font-black text-white">{results.bmr}</div>
            <div className="text-[9px] text-brand-muted font-bold">kcal/day (rest)</div>
          </div>
          <div className="bg-brand-card p-3 rounded-lg border border-brand-border text-center">
            <div className="text-[10px] text-brand-muted font-semibold mb-1">TDEE</div>
            <div className="text-xl font-black text-white">{results.tdee}</div>
            <div className="text-[9px] text-brand-muted font-bold">kcal/day (active)</div>
          </div>
        </div>
        <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
          <span className="text-[10px] text-yellow-300 font-semibold block">Target Daily Calories</span>
          <div className="text-3xl font-black text-yellow-300 tracking-tight">{results.targetCal}</div>
          <span className="text-[10px] text-white/70 font-bold uppercase block mt-0.5">
            kcal to {goal === 'lose' ? 'lose fat' : goal === 'gain' ? 'gain mass' : 'maintain weight'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto glass-card rounded-xl p-5 md:p-7 border border-brand-border">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-5">
        <div className="bg-brand-accent/10 p-2 rounded-lg border border-brand-accent/20">
          <Calculator className="h-5 w-5 text-brand-accent" />
        </div>
        <div>
          <h3 className="font-extrabold text-lg md:text-xl tracking-tight">Fitness Calculator Toolkit</h3>
          <p className="text-brand-muted text-xs font-semibold">BMI · BMR · Calories · Macros — all in one place.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1.5 mb-6 bg-brand-card/50 rounded-xl p-1 border border-brand-border overflow-x-auto sm:overflow-x-visible">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => { setActiveTab(id); setResults(null); }}
            className={`flex-1 flex items-center justify-center gap-1 py-2 px-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all duration-300 cursor-pointer shrink-0 sm:shrink ${activeTab === id ? 'bg-brand-accent text-white shadow-md' : 'text-brand-muted hover:text-white'}`}
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {sharedForm}
        <div className="h-full">{renderResult()}</div>
      </div>
    </div>
  );
}

export default CalorieCalculator;
