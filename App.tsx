import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AboutUs } from './components/AboutUs';
import { BookAppointment } from './components/BookAppointment';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-maple-red selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <BookAppointment />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;