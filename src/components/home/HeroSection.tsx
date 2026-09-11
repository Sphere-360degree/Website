import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenAssessment: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAssessment,
  onExploreSolutions,
}) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-[#f8f7f4] border-b border-[#171717]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          
          {/* Main Editorial Text (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#c2410c] font-bold">
              <span>Spheroinix</span>
              <span>/</span>
              <span>Boutique Business Consulting</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#171717] tracking-tight leading-[1.08]">
              Have a business problem?{' '}
              <span className="font-serif italic font-normal text-[#666663] block sm:inline">
                Let's solve it.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#666663] max-w-xl leading-relaxed">
              AI, automation, and practical business solutions — without the tech jargon.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenAssessment}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#171717] hover:bg-[#c2410c] text-white font-semibold text-sm sm:text-base transition-colors shadow-xs"
              >
                Start Free Assessment →
              </button>

              <button
                onClick={onExploreSolutions}
                className="inline-flex items-center justify-center gap-1.5 px-6 py-4 rounded-xl border border-[#171717]/20 hover:border-[#171717] text-[#171717] font-semibold text-sm sm:text-base transition-colors bg-white/50"
              >
                See How We Help
              </button>
            </div>

            <p className="text-xs font-mono text-[#666663] pt-1">
              No technical knowledge required.
            </p>
          </div>

          {/* Right Column: Architectural Idea-Led Visual Note (4 cols) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#f1eee7] border border-[#171717]/10 space-y-3 text-left">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#171717] block">
              The Spheroinix Rule:
            </span>
            <p className="text-xs text-[#666663] leading-relaxed">
              We start with your business problem instead of trying to sell you technology just because it's popular.
            </p>
            <div className="pt-2 border-t border-[#171717]/10 text-[11px] font-mono text-[#c2410c] font-bold">
              Problem → Clarity → Solution
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
