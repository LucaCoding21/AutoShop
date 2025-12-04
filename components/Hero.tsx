import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero2.jpg"
          alt="View through car windshield"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/30"></div>
      </div>

      {/* Content - pt-32 sm:pt-36 md:pt-40 ensures content clears the navbar */}
      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight"
          >
            Clear Vision. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-maple-red to-red-400">
              Premium Comfort.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed"
          >
            Surrey's trusted experts for auto glass replacement, repair, and window tinting. We handle the paperwork so you can handle the road.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
          >
            <a href="tel:6049571950" className="bg-maple-red hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-red-900/20 group">
              <Phone className="group-hover:animate-pulse" size={20} />
              Call Now - Free Quote
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all flex items-center justify-center gap-2">
              Book Online
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="pt-6 sm:pt-8 flex items-center gap-4 text-white/80"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};
