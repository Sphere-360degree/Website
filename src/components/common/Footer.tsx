import React from 'react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenAssessment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAssessment }) => {
  return (
    <footer className="bg-[#171717] text-[#f8f7f4] py-16 border-t border-[#262626]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#333333]">
          <div className="space-y-2">
            <BrandLogo size="sm" isLight withText />
            <p className="text-xs text-[#a3a3a3] max-w-sm leading-relaxed">
              Boutique AI, automation, and business consulting for small businesses. Problem first, technology second.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-[#d4d4d4]">
            <a href="#assessment" className="hover:text-white transition-colors">Diagnostic</a>
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
            <a href="#about" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <button
              onClick={onOpenAssessment}
              className="px-4 py-2 rounded-xl bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs font-semibold transition-colors"
            >
              Start Assessment →
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#737373]">
          <div>
            © 2026 SPHERIONIX LLC. All rights reserved.
          </div>
          <div>
            <a href="mailto:info@spherionix.com" className="hover:text-white">info@spherionix.com</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
