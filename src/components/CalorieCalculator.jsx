import React, { useState } from 'react';
import { Calculator, RotateCcw, Activity, Apple, Dumbbell } from 'lucide-react';

function CalorieCalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('25');
  const [weight, setWeight] = useState('70'); // in kg
  const [height, setHeight] = useState('175'); // in cm
  const [activity, setActivity] = useState('1.375'); // multiplier
  const [goal, setGoal] = useState('maintain'); // lose, maintain, gain
  const [results, setResults] = useState(null);

  const activityOptions = [
    { value: '1.2', label: 'Sedentary (Little/no exercise)' },
    { value: '1.375', label: 'Lightly Active (Exercise 1-3 days/week)' },
    { value: '1.55', label: 'Moderately Active (Exercise 3-5 days/week)' },
    { value: '1.725', label: 'Very Active (Exercise 6-7 days/week)' },
    { value: '1.9', label: 'Super Active (Hard physical job & training)' },
  ];

  const calculateFitness = (e) => {
    e.preventDefault();
    
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
    const act = parseFloat(activity);

    if (isNaN(w) || isNaN(h) || isNaN(a)) return;

    // 1. Calculate BMI
    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);

    let bmiStatus = 'Normal';
    let bmiColor = 'text-green-400';
    if (bmi < 18.5) {
      bmiStatus = 'Underweight';
      bmiColor = 'text-yellow-400';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiStatus = 'Overweight';
      bmiColor = 'text-orange-400';
    } else if (bmi >= 29.9) {
      bmiStatus = 'Obese';
      bmiColor = 'text-red-500';
    }

    // 2. Calculate BMR (Mifflin-St Jeor Equation)
    let bmr = 0;
    if (gender === 'male') {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    // 3. Calculate TDEE
    const tdee = bmr * act;

    // 4. Target Calories based on goals
    let targetCal = tdee;
    if (goal === 'lose') targetCal = tdee - 500;
    if (goal === 'gain') targetCal = tdee + 300;

    // 5. Macronutrients (Protein: 30%, Carbs: 45%, Fats: 25%)
    // 1g Protein = 4 kcal, 1g Carb = 4 kcal, 1g Fat = 9 kcal
    const proteinCal = targetCal * 0.30;
    const carbsCal = targetCal * 0.45;
    const fatsCal = targetCal * 0.25;

    const proteinGrams = Math.round(proteinCal / 4);
    const carbsGrams = Math.round(carbsCal / 4);
    const fatsGrams = Math.round(fatsCal / 9);

    setResults({
      bmi: bmi.toFixed(1),
      bmiStatus,
      bmiColor,
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      targetCal: Math.round(targetCal),
      macros: {
        protein: proteinGrams,
        carbs: carbsGrams,
        fats: fatsGrams
      }
    });
  };

  const handleReset = () => {
    setGender('male');
    setAge('25');
    setWeight('70');
    setHeight('175');
    setActivity('1.375');
    setGoal('maintain');
    setResults(null);
  };

  return (
    <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 md:p-10 border border-brand-border">
      <div className="flex items-center space-x-3 mb-8">
        <div className="bg-brand-accent/10 p-3 rounded-xl border border-brand-accent/20">
          <Calculator className="h-6 w-6 text-brand-accent" />
        </div>
        <div>
          <h3 className="font-extrabold text-2xl tracking-tight">Fitness Calculator Toolkit</h3>
          <p className="text-brand-muted text-sm font-medium">Calculate your BMI, daily caloric expenditure, and optimal macronutrients.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Input Form */}
        <form onSubmit={calculateFitness} className="space-y-6">
          {/* Gender selection */}
          <div>
            <label className="block text-sm font-extrabold tracking-wider uppercase mb-2">Gender</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setGender('male')}
                className={`py-3 rounded-xl font-bold border transition-all ${
                  gender === 'male'
                    ? 'bg-brand-accent text-brand-bg border-brand-accent shadow-accent-glow'
                    : 'bg-brand-card text-brand-muted border-brand-border hover:text-white hover:border-brand-muted'
                }`}
              >
                MALE
              </button>
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`py-3 rounded-xl font-bold border transition-all ${
                  gender === 'female'
                    ? 'bg-brand-accent text-brand-bg border-brand-accent shadow-accent-glow'
                    : 'bg-brand-card text-brand-muted border-brand-border hover:text-white hover:border-brand-muted'
                }`}
              >
                FEMALE
              </button>
            </div>
          </div>

          {/* Age, Height, Weight row */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-extrabold tracking-wider uppercase mb-2">Age</label>
              <input
                type="number"
                min="10"
                max="100"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent text-white font-bold transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-extrabold tracking-wider uppercase mb-2">Height (cm)</label>
              <input
                type="number"
                min="100"
                max="250"
                required
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent text-white font-bold transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-extrabold tracking-wider uppercase mb-2">Weight (kg)</label>
              <input
                type="number"
                min="30"
                max="250"
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent text-white font-bold transition-all"
              />
            </div>
          </div>

          {/* Activity dropdown */}
          <div>
            <label className="block text-sm font-extrabold tracking-wider uppercase mb-2">Activity Level</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent text-white font-bold transition-all cursor-pointer"
            >
              {activityOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-brand-card text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Goal selection */}
          <div>
            <label className="block text-sm font-extrabold tracking-wider uppercase mb-2">Fitness Goal</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'lose', label: 'Weight Loss' },
                { value: 'maintain', label: 'Maintenance' },
                { value: 'gain', label: 'Muscle Gain' }
              ].map((g) => (
                <button
                  key={g.value}
                  type="button"
                  onClick={() => setGoal(g.value)}
                  className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all ${
                    goal === g.value
                      ? 'bg-brand-accent text-brand-bg border-brand-accent shadow-accent-glow'
                      : 'bg-brand-card text-brand-muted border-brand-border hover:text-white'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-4 pt-2">
            <button
              type="submit"
              className="flex-1 bg-brand-accent text-brand-bg hover:bg-brand-accentHover font-extrabold tracking-widest py-3.5 rounded-xl text-sm transition-all shadow-accent-glow flex items-center justify-center space-x-2"
            >
              <Calculator className="h-4 w-4" />
              <span>CALCULATE</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-5 bg-brand-card border border-brand-border hover:border-brand-muted rounded-xl transition-all flex items-center justify-center text-brand-muted hover:text-white"
            >
              <RotateCcw className="h-5 w-5" />
            </button>
          </div>
        </form>

        {/* Results Showcase */}
        <div className="h-full">
          {results ? (
            <div className="bg-brand-card/40 border border-brand-border rounded-xl p-6 space-y-6 h-full transition-all duration-500 animate-fadeIn">
              <h4 className="font-extrabold text-lg text-white border-b border-brand-border pb-3">Your Profile Results</h4>
              
              <div className="grid grid-cols-2 gap-4">
                {/* BMI Card */}
                <div className="bg-brand-card p-4 rounded-xl border border-brand-border">
                  <div className="flex items-center space-x-2 mb-1">
                    <Activity className="h-4 w-4 text-brand-accent" />
                    <span className="text-xs text-brand-muted font-bold tracking-wider uppercase">BMI Score</span>
                  </div>
                  <div className="text-2xl font-black text-white">{results.bmi}</div>
                  <div className={`text-xs font-extrabold mt-1 ${results.bmiColor}`}>{results.bmiStatus}</div>
                </div>

                {/* Maintenance Calorie */}
                <div className="bg-brand-card p-4 rounded-xl border border-brand-border">
                  <div className="flex items-center space-x-2 mb-1">
                    <Dumbbell className="h-4 w-4 text-brand-accent" />
                    <span className="text-xs text-brand-muted font-bold tracking-wider uppercase">BMR Burn</span>
                  </div>
                  <div className="text-2xl font-black text-white">{results.bmr}</div>
                  <span className="text-[10px] text-brand-muted font-bold uppercase">kcal / day (Resting)</span>
                </div>
              </div>

              {/* Target Calories */}
              <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-xl p-5 text-center">
                <span className="text-xs text-brand-accent font-extrabold tracking-widest uppercase block mb-1">Target Daily Calories</span>
                <div className="text-4xl font-black text-brand-accent tracking-tight">{results.targetCal}</div>
                <span className="text-xs text-brand-muted font-bold uppercase block mt-1">kcal required to {goal === 'lose' ? 'lose fat' : goal === 'gain' ? 'gain mass' : 'maintain weight'}</span>
              </div>

              {/* Macros Breakdown */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Apple className="h-4 w-4 text-brand-accent" />
                  <span className="text-xs font-extrabold tracking-wider uppercase text-white">Daily Macronutrients Split</span>
                </div>
                
                {/* Protein Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-white">Protein (30%)</span>
                    <span className="text-brand-accent">{results.macros.protein}g</span>
                  </div>
                  <div className="w-full bg-brand-bg rounded-full h-2">
                    <div className="bg-brand-accent h-2 rounded-full" style={{ width: '30%' }} />
                  </div>
                </div>

                {/* Carbs Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-white">Carbohydrates (45%)</span>
                    <span className="text-blue-400">{results.macros.carbs}g</span>
                  </div>
                  <div className="w-full bg-brand-bg rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>

                {/* Fats Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-white">Fats (25%)</span>
                    <span className="text-orange-400">{results.macros.fats}g</span>
                  </div>
                  <div className="w-full bg-brand-bg rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '25%' }} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full border border-dashed border-brand-border rounded-xl flex flex-col items-center justify-center p-8 text-center bg-brand-card/10">
              <Calculator className="h-12 w-12 text-brand-muted mb-4 animate-pulse" />
              <p className="text-brand-muted font-bold text-sm">Enter your metrics and press Calculate to reveal your fitness analysis.</p>
              <p className="text-[11px] text-brand-muted/60 mt-1 max-w-xs">We use the Mifflin-St Jeor formula, widely recognized as the most accurate model for daily metabolic burns.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CalorieCalculator;
