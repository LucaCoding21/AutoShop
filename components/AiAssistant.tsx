import React, { useState } from 'react';
import { MessageSquare, Sparkles, AlertCircle, CheckCircle, Wrench, Send } from 'lucide-react';
import { analyzeDamageDescription } from '../services/geminiService';
import { AdviceType, AiResponse } from '../types';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    setResult(null);
    try {
      const response = await analyzeDamageDescription(input);
      setResult(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-maple-dark hover:bg-slate-800 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 group border-2 border-maple-red/50"
      >
        <Sparkles className="w-6 h-6 animate-pulse" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          AI Damage Advisor
        </span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="bg-maple-dark p-6 flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="text-maple-red w-5 h-5" />
                  AI Damage Advisor
                </h3>
                <p className="text-slate-400 text-sm mt-1">Describe your damage, get an instant opinion.</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto flex-grow">
              {!result ? (
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm">
                    Tell us what happened. Examples:
                  </p>
                  <ul className="space-y-2 text-xs text-slate-500 italic">
                    <li className="bg-slate-50 p-2 rounded border border-slate-100">"I have a quarter-sized rock chip in the center of my windshield."</li>
                    <li className="bg-slate-50 p-2 rounded border border-slate-100">"My driver's seat leather is tearing at the seam."</li>
                  </ul>
                  
                  <form onSubmit={handleSubmit} className="mt-4 relative">
                    <textarea 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Describe the damage here..."
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-maple-red focus:border-transparent outline-none resize-none text-slate-800 text-sm min-h-[100px]"
                    />
                    <button 
                      type="submit" 
                      disabled={loading || !input}
                      className="absolute bottom-3 right-3 bg-maple-red text-white p-2 rounded-lg disabled:opacity-50 hover:bg-red-700 transition-colors"
                    >
                      {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Send size={18} />}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in-up">
                  <div className={`p-4 rounded-xl border-l-4 shadow-sm ${
                    result.advice === AdviceType.REPAIR ? 'bg-green-50 border-green-500' :
                    result.advice === AdviceType.REPLACE ? 'bg-orange-50 border-orange-500' :
                    'bg-blue-50 border-blue-500'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      {result.advice === AdviceType.REPAIR && <CheckCircle className="text-green-600" />}
                      {result.advice === AdviceType.REPLACE && <AlertCircle className="text-orange-600" />}
                      {result.advice === AdviceType.CONSULT && <Wrench className="text-blue-600" />}
                      <h4 className="font-bold text-lg uppercase tracking-wide text-slate-800">
                        Recommendation: {result.advice}
                      </h4>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{result.explanation}</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Estimated Cost</span>
                    <div className="text-2xl font-display font-bold text-slate-900 mt-1">{result.estimatedCostRange}</div>
                    <p className="text-xs text-slate-400 mt-1">*Estimates vary by vehicle make and model.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => {setResult(null); setInput('');}} className="w-full py-3 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50">
                      Check Another
                    </button>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="w-full py-3 rounded-lg bg-maple-dark text-white text-sm font-medium hover:bg-slate-800 flex items-center justify-center">
                      Book Now
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};