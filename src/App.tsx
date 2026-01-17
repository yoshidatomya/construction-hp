import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Strengths } from './components/Strengths';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-corporate-light font-sans text-corporate-black selection:bg-corporate-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Strengths />
        <Gallery />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
