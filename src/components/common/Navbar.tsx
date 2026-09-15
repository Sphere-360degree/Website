import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { AnalyticsService } from '../../services/analyticsService';

interface NavbarProps {
  onOpenAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssessment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAssessmentClick = (source: string) => {
    AnalyticsService.trackCTAClick('Start Assessment', source, '#assessment');
    onOpenAssessment();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#f8f7f4]/95 backdrop-blur-md border-b border-[#171717]/10 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="/" 
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] rounded-lg"
          aria-label="SPHERIONIX Homepage"
        >
          <BrandLogo size="md" withText />
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider font-semibold text-[#666663]"
        >
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#171717] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] rounded px-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center">
          <button
            type="button"
            onClick={() => handleAssessmentClick('navbar_desktop')}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171717] hover:bg-[#c2410c] text-white text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>Start Assessment</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#171717] hover:bg-[#f1eee7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f8f7f4] border-b border-[#171717]/10 px-5 py-5 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-150 text-left">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono uppercase tracking-wider font-bold text-[#171717] hover:text-[#c2410c] py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              handleAssessmentClick('navbar_mobile');
            }}
            className="w-full py-3 rounded-xl bg-[#171717] text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>Start Assessment →</span>
          </button>
        </div>
      )}
    </header>
  );
};
