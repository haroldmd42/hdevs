import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1E2023] text-[#F7F7F5] font-sans antialiased selection:bg-[#FF6B4A] selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills & Arsenal Section */}
        <Skills />

        {/* Featured Projects with emphasis on Playwright, State News Extension, and Contador de Caracteres */}
        <Projects />

        {/* Academic Studies & Certifications */}
        <Education />

        {/* Contact Channel with EmailJS Form */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
