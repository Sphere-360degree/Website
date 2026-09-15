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
              <span>Spherionix</span>
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
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#171717] hover:bg-[#c2410c] text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
                </span>
                <span>Start Free Assessment</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-stone-300 group-hover:text-white" />
              </button>

              <button
                onClick={onExploreSolutions}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-[#171717]/20 hover:border-[#171717] text-[#171717] font-semibold text-sm sm:text-base transition-all duration-200 bg-white/70 hover:bg-white hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>See How We Help</span>
                <span className="text-xs font-mono text-[#666663]">↓</span>
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-[#666663] pt-1">
              <span className="inline-flex items-center gap-1.5 text-[#171717] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                1-Minute Diagnostic
              </span>
              <span>•</span>
              <span>No tech knowledge required</span>
              <span>•</span>
              <span>100% Free</span>
            </div>
          </div>

          {/* Right Column: Architectural Idea-Led Visual Note (4 cols) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#f1eee7] border border-[#171717]/10 space-y-3 text-left">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#171717] block">
              The Spherionix Rule:
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
