import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X } from 'lucide-react';

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Diagnostic', href: '#assessment' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Process', href: '#how-it-works' },
    { label: 'Philosophy', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

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
        <a href="#" className="flex items-center gap-2">
          <BrandLogo size="md" withText />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider font-semibold text-[#666663]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#171717] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenAssessment}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171717] hover:bg-[#c2410c] text-white text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>Start Assessment</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#171717] hover:bg-[#f1eee7]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f8f7f4] border-b border-[#171717]/10 px-5 py-5 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
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
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAssessment();
            }}
            className="w-full py-3 rounded-xl bg-[#171717] text-white text-xs font-semibold shadow-xs"
          >
            Start Assessment →
          </button>
        </div>
      )}
    </header>
  );
};
