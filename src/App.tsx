import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { News } from './components/News';
import { Services } from './components/Services';
import { Strengths } from './components/Strengths';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Stats } from './components/Stats';

import { Routes, Route } from 'react-router-dom';
import { RecruitPage } from './pages/RecruitPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-corporate-light font-sans text-corporate-black selection:bg-corporate-accent selection:text-white overflow-x-hidden">
            <Navbar />
            <main>
              <Hero />
              <Stats />
              <About />
              <Services />
              <Strengths />
              <Gallery />
              <Process />
              <Contact />
              <News />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/recruit" element={<RecruitPage />} />
      </Routes>
    </>
  );
}

export default App;
