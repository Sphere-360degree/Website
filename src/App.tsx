import React from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { SEOHead } from './components/common/SEOHead';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { HeroSection } from './components/home/HeroSection';
import { SignatureAssessmentCanvas } from './components/home/SignatureAssessmentCanvas';
import { EditorialSolutionsSection } from './components/home/EditorialSolutionsSection';
import { HowWeWorkSection } from './components/home/HowWeWorkSection';
import { AboutSection } from './components/home/AboutSection';
import { FAQSection } from './components/home/FAQSection';
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
    <ErrorBoundary>
      {/* Dynamic SEO Meta, OpenGraph, Canonical & Schema.org JSON-LD */}
      <SEOHead />

      {/* Accessible Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#171717] focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="min-h-screen flex flex-col bg-[#f8f7f4] text-[#171717] font-sans selection:bg-[#c2410c] selection:text-white">
        {/* Navigation Header */}
        <Navbar onOpenAssessment={handleScrollToAssessment} />

        {/* Main Content Flow */}
        <main id="main-content" className="flex-1">
          {/* 1. Hero Section */}
          <HeroSection
            onOpenAssessment={handleScrollToAssessment}
            onExploreSolutions={handleScrollToSolutions}
          />

          {/* 2. Interactive Problem Diagnostic Canvas */}
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

          {/* 6. Frequently Asked Questions (with FAQ Schema) */}
          <FAQSection />

          {/* 7. Contact & Direct Consultation */}
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer onOpenAssessment={handleScrollToAssessment} />
      </div>
    </ErrorBoundary>
  );
}
export default App;
