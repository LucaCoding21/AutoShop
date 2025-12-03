import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-maple-red p-1.5 rounded-lg transform -rotate-6 shadow-md">
                {/* Abstract Maple Leaf / Glass Shield Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className={`flex flex-col leading-none ${scrolled ? 'text-maple-dark' : 'text-white'}`}>
                <span className="font-display font-bold text-xl tracking-tight uppercase">Maple</span>
                <span className="text-xs font-medium tracking-widest opacity-80 uppercase">Auto Glass</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-maple-red transition-colors uppercase tracking-wider ${
                  scrolled ? 'text-slate-800' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
                href="tel:6049571950"
                className="bg-maple-red hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-transform transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
                <Phone size={16} />
                <span>604.957.1950</span>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-800 hover:text-maple-red hover:bg-red-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
             <a 
                href="tel:6049571950"
                className="w-full mt-4 bg-maple-red text-white py-3 rounded-lg font-bold text-center block"
            >
                Call 604.957.1950
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};