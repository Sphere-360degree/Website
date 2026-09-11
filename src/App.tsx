import React from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/home/HeroSection';
import { SignatureAssessmentCanvas } from './components/home/SignatureAssessmentCanvas';
import { EditorialSolutionsSection } from './components/home/EditorialSolutionsSection';
import { HowWeWorkSection } from './components/home/HowWeWorkSection';
import { AboutSection } from './components/home/AboutSection';
import { ContactSection } from './components/home/ContactSection';

export function App() {
  const handleScrollToAssessment = () => {
    const el = document.getElementById('assessment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSolutions = () => {
    const el = document.getElementById('solutions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (context?: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f7f4] text-[#171717] font-sans selection:bg-[#c2410c] selection:text-white">
      {/* Editorial Navigation */}
      <Navbar onOpenAssessment={handleScrollToAssessment} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero: Idea-led, Editorial Asymmetry */}
        <HeroSection
          onOpenAssessment={handleScrollToAssessment}
          onExploreSolutions={handleScrollToSolutions}
        />

        {/* 2. Signature Interaction: The Problem-to-Clarity Diagnostic Canvas */}
        <SignatureAssessmentCanvas
          onDirectConsultation={handleScrollToContact}
        />

        {/* 3. Problem-First Editorial Solutions Matrix */}
        <EditorialSolutionsSection
          onSelectTopic={(topic) => handleScrollToAssessment()}
        />

        {/* 4. The 3-Step Process */}
        <HowWeWorkSection />

        {/* 5. Philosophy & Core Stand */}
        <AboutSection />

        {/* 6. Contact & Direct Dialogue */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenAssessment={handleScrollToAssessment} />
    </div>
  );
}
