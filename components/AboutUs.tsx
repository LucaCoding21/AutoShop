import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const benefits = [
    'Certified Technicians with 5+ Years Experience',
    'OEM Quality Glass & Materials',
    'Convenient Location in Surrey',
    'Accepted by All Major Insurance Providers',
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

            {/* Image container */}
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="/exteriorMaple.webp"
                alt="Maple Auto Glass exterior"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <span className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Restoring Clarity, Ensuring Safety Since 2013.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For over a decade, we've been the trusted name in auto glass services. Our
              commitment to quality craftsmanship and customer satisfaction has made us the
              go-to choice for drivers across the region.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From minor chip repairs to complete windshield replacements, our team of certified
              technicians uses only the highest quality materials and the latest techniques to
              ensure your safety on the road.
            </p>

            {/* Benefits list */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="text-red-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA link */}
            <a
              href="#contact"
              className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center group"
            >
              Learn more about our services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
