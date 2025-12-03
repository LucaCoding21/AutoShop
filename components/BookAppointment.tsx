import React from 'react';
import { Clock, Car, Info, Calendar } from 'lucide-react';

export const BookAppointment: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Most replacements take less than 90 minutes.',
    },
    {
      icon: Car,
      title: 'We Come to You',
      description: 'Mobile service available at your home or work.',
    },
    {
      icon: Info,
      title: 'Insurance Approved',
      description: 'We handle the paperwork with your insurance.',
    },
  ];

  return (
    <section className="py-24 bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column - Info */}
          <div className="w-full lg:w-5/12 text-white">
            <span className="text-white/80 font-semibold tracking-wider uppercase text-sm mb-3 block">
              Book an Appointment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Fix Your Glass?</h2>
            <p className="text-red-100 mb-10 leading-relaxed text-lg">
              Schedule your appointment today and experience the convenience of professional auto
              glass service. We'll have you back on the road safely in no time.
            </p>

            {/* Feature cards */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-red-100 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Service</h3>

              <form onSubmit={(e) => e.preventDefault()}>
                {/* Row 1: Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Row 2: Car Make, Model, Year */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Car Make</label>
                    <input
                      type="text"
                      placeholder="Toyota"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                    <input
                      type="text"
                      placeholder="Camry"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                    <input
                      type="text"
                      placeholder="2020"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Row 3: Service Type and Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white text-gray-700">
                      <option>Windshield Replacement</option>
                      <option>Chip Repair</option>
                      <option>Side Window</option>
                      <option>Rear Windshield</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar
                        className="absolute left-3 top-3 text-gray-400"
                        size={20}
                      />
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
                >
                  Schedule Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
