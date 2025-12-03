import React from 'react';
import { ArrowRight, Star, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2940"
          alt="Luxury Car Interior"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - adjusted for better mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50 md:via-slate-900/80 md:to-slate-900/30"></div>
      </div>

      {/* Content - pt-32 sm:pt-36 md:pt-40 ensures content clears the navbar */}
      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
            Clear Vision. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-maple-red to-red-400">
              Premium Comfort.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed">
            Surrey's trusted experts for auto glass replacement, repair, and custom upholstery. We handle the paperwork so you can handle the road.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a href="tel:6049571950" className="bg-maple-red hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-red-900/20 group">
              <Phone className="group-hover:animate-pulse" size={20} />
              Call Now - Free Quote
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all flex items-center justify-center gap-2">
              Book Online
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>

          <div className="pt-6 sm:pt-8 flex items-center gap-4 text-white/80">
            <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-900" alt="Customer" />
                ))}
            </div>
            <div className="flex flex-col">
                <div className="flex text-yellow-400 text-sm">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-xs sm:text-sm">Trusted by 500+ locals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};