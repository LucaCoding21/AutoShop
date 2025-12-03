import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
            <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-2xl tracking-tight uppercase">Maple</span>
                <span className="text-xs font-medium tracking-widest opacity-60 uppercase">Auto Glass & Upholstery</span>
            </div>
            <p className="text-slate-500 text-sm mt-2">© {new Date().getFullYear()} Maple Auto Glass. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>

        <div className="text-right">
             <p className="text-slate-500 text-sm">Serving the Lower Mainland</p>
             <p className="text-white font-bold">Surrey, BC</p>
        </div>
      </div>
    </footer>
  );
};