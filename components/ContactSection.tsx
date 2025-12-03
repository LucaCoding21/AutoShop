import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const contactCards = [
    {
      icon: Phone,
      title: 'Phone',
      primary: '(604) 555-0199',
      secondary: 'Mon-Fri 8am-6pm',
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@precisionglass.ca',
      secondary: '24/7 Online Support',
    },
    {
      icon: MapPin,
      title: 'Location',
      primary: '2450 Main Street',
      secondary: 'Vancouver, BC V5T 3E2',
    },
    {
      icon: Clock,
      title: 'Hours',
      primary: 'Mon - Sat: 8:00 - 18:00',
      secondary: 'Sunday: Closed',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to schedule your auto glass service? Reach out to our friendly
            team and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                <card.icon size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-500 mb-1">{card.primary}</p>
              <p className="text-gray-400 text-sm">{card.secondary}</p>
            </div>
          ))}
        </div>

        {/* Map Area */}
        <div className="mt-16 w-full h-96 bg-gray-200 rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5076870898677!2d-123.10167492357627!3d49.26510647138789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d0a3d5a12d%3A0x6f8f3e3f8f8f8f8f!2s2450%20Main%20St%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1699999999999!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            className="w-full h-full"
          />
          {/* Centered overlay badge */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3 animate-bounce">
              <MapPin className="text-red-600" size={24} fill="currentColor" />
              <span className="font-bold text-gray-900">Locally Owned in Vancouver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
