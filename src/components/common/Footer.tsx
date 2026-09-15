import React from 'react';
import { BrandLogo } from './BrandLogo';
import { siteConfig } from '../../config/siteConfig';
import { AnalyticsService } from '../../services/analyticsService';

interface FooterProps {
  onOpenAssessment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAssessment }) => {
  const handleAssessmentClick = () => {
    AnalyticsService.trackCTAClick('Start Assessment', 'footer', '#assessment');
    onOpenAssessment();
  };

  return (
    <footer className="bg-[#171717] text-[#f8f7f4] py-16 border-t border-[#262626]" aria-label="Site Footer">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#333333] text-left">
          <div className="space-y-2">
            <BrandLogo size="sm" isLight withText />
            <p className="text-xs text-[#a3a3a3] max-w-sm leading-relaxed">
              Boutique AI, automation, and business consulting for small and mid-sized businesses. Problem first, technology second.
            </p>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-[#d4d4d4]">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleAssessmentClick}
              className="px-4 py-2 rounded-xl bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Start Assessment →
            </button>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#737373]">
          <div>
            © 2026 {siteConfig.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
              {siteConfig.contact.email}
            </a>
            <span>•</span>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap (XML)
            </a>
            <span>•</span>
            <a href="/robots.txt" className="hover:text-white transition-colors">
              Robots.txt
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
