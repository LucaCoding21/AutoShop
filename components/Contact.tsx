import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-10"
          >
            <div>
              <span className="text-maple-red font-bold tracking-widest uppercase text-sm">Visit Us Today</span>
              <h2 className="text-4xl font-display font-bold text-slate-900 mt-2">Let's Get You Fixed Up.</h2>
              <p className="text-slate-600 mt-4 text-lg">
                Conveniently located in Surrey. Walk-ins welcome for rock chip repairs. Appointments recommended for full replacements.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0 }}
                className="flex items-start gap-4"
              >
                <div className="bg-red-50 p-3 rounded-lg text-maple-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Our Shop</h4>
                  <p className="text-slate-600">10304 152A St, Surrey, BC V3R 7P6</p>
                  <a href="https://maps.google.com/?q=10304+152A+St,+Surrey,+BC+V3R+7P6" target="_blank" rel="noopener noreferrer" className="text-maple-red text-sm mt-1 hover:underline">Get Directions</a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-red-50 p-3 rounded-lg text-maple-red">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Call Us</h4>
                  <a href="tel:6049571950" className="text-slate-600 hover:text-maple-red transition-colors block text-xl font-medium">604.957.1950</a>
                  <p className="text-slate-500 text-sm mt-1">24/7 Emergency messaging available</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="bg-red-50 p-3 rounded-lg text-maple-red">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Hours</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li className="flex justify-between w-40"><span>Mon - Fri:</span> <span>9:00 AM - 5:00 PM</span></li>
                    <li className="flex justify-between w-40"><span>Saturday:</span> <span>Closed</span></li>
                    <li className="flex justify-between w-40"><span>Sunday:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-slate-50 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-maple-red focus:ring-1 focus:ring-maple-red outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-maple-red focus:ring-1 focus:ring-maple-red outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-maple-red focus:ring-1 focus:ring-maple-red outline-none transition-all" placeholder="(604) 555-0123" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Vehicle (Year Make Model)</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-maple-red focus:ring-1 focus:ring-maple-red outline-none transition-all" placeholder="e.g. 2018 Honda Civic" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-maple-red focus:ring-1 focus:ring-maple-red outline-none transition-all bg-white">
                    <option>Windshield Replacement</option>
                    <option>Rock Chip Repair</option>
                    <option>Window Tinting</option>
                    <option>Other</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-maple-red hover:bg-red-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all mt-4"
              >
                Send Request
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Decorative Map BG (Abstract) */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-5 pointer-events-none">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0F172A" d="M42.7,-73.2C55.9,-67.1,67.3,-57.6,76.5,-46.3C85.7,-35,92.7,-21.9,91.8,-9.1C90.9,3.7,82.1,16.2,72.6,27.1C63.1,38,52.9,47.3,42.1,54.8C31.3,62.3,19.9,68,7.9,69.9C-4.1,71.8,-16.7,69.9,-28.4,64.8C-40.1,59.7,-50.9,51.4,-59.4,41.2C-67.9,31,-74.1,18.9,-75.6,6.1C-77.1,-6.7,-73.9,-20.2,-66.6,-31.6C-59.3,-43,-47.9,-52.3,-35.8,-58.9C-23.7,-65.5,-10.9,-69.4,2.2,-73.2C15.3,-77,33.5,-80.7,42.7,-73.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};
