import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-maple-red selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        {/* About / Showcase Section - "The Maple Difference" */}
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-maple-red/10 rounded-full blur-2xl"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                             <img src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=80&w=1200" alt="Detailed upholstery work" className="w-full h-full object-cover" />
                        </div>
                        {/* Floating Experience Badge */}
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                            <p className="text-4xl font-display font-bold text-maple-red">20+</p>
                            <p className="text-slate-600 text-sm font-medium uppercase tracking-wide">Years of<br/>Excellence</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <span className="text-maple-red font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
                        <h2 className="text-4xl font-display font-bold text-slate-900 mt-2 mb-6">More Than Just Glass. <br/>We Are Craftsmen.</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            At Maple Auto Glass, we combine traditional craftsmanship with modern technology. Whether it's calibrating a 2024 windshield camera or stitching a vintage leather seat, we treat every vehicle as if it were our own.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-maple-red font-bold">01</div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Korean Precision & Quality</h4>
                                    <p className="text-slate-500 text-sm">Proudly serving the community with dedication.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-maple-red font-bold">02</div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Lifetime Leak Warranty</h4>
                                    <p className="text-slate-500 text-sm">We stand behind our glass installations forever.</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-maple-red font-bold">03</div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Direct Insurance Billing</h4>
                                    <p className="text-slate-500 text-sm">Authorized for ICBC and major private insurers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;