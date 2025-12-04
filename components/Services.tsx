import React from 'react';
import { motion } from 'framer-motion';
import { Car, Sun, Shield, Hammer } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Windshield Replacement',
    description: 'OEM quality glass replacement for all makes and models. Calibrated for modern safety systems (ADAS).',
    icon: Car,
    image: '/carMaple.webp'
  },
  {
    id: '2',
    title: 'Rock Chip Repair',
    description: 'Save money and time. If the chip is smaller than a toonie, we can likely repair it instantly.',
    icon: Hammer,
    image: '/rockchip-maple.jpg'
  },
  {
    id: '4',
    title: 'Window Tinting',
    description: 'High-performance films that reject heat, reduce glare, and add privacy to your ride.',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-maple-red font-bold tracking-widest uppercase text-sm">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-2 mb-4">Complete Auto Care</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From the glass that protects you to the seats that comfort you, we are Surrey's one-stop shop for automotive restoration.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-10 right-6 bg-maple-red text-white p-3 rounded-lg shadow-lg">
                    <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <a href="#contact" className="text-maple-red font-semibold text-sm flex items-center gap-1 group/link">
                    Learn More <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ICBC Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-3xl overflow-hidden relative bg-maple-dark"
        >
            <div className="absolute inset-0 opacity-20">
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="text-blue-400 w-8 h-8" />
                        <h3 className="text-2xl md:text-3xl font-bold text-white">ICBC Glass Express Accredited</h3>
                    </div>
                    <p className="text-slate-300 mb-6">
                        Skip the claim center. We handle all your ICBC glass claims directly at our shop.
                        Just bring your insurance papers, and we'll take care of the rest.
                    </p>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>No appointment needed for claims</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>Lifetime warranty on leaks</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>OEM standard glass</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>Courtesy rides available</li>
                    </ul>
                </div>
                <div className="flex-shrink-0">
                    <a href="#contact" className="bg-white text-maple-dark hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors">
                        Book ICBC Appointment
                    </a>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};
