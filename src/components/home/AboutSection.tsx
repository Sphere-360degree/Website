import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-[#f1eee7] border-b border-[#171717]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        <span className="font-mono text-xs uppercase tracking-widest text-[#c2410c] font-bold block">
          04 / Philosophy
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12]">
          We start with the problem,{' '}
          <span className="font-serif italic font-normal text-[#666663] block sm:inline">
            not the technology.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-[#666663] leading-relaxed max-w-2xl">
          You don't need to know which AI tool you need. Tell us what's slowing your business down. We'll help you understand whether AI, automation, better processes, or another solution makes sense.
        </p>

        {/* 3 Simple Editorial Cards */}
        <div className="grid sm:grid-cols-3 gap-5 pt-4">
          <div className="p-6 rounded-2xl bg-[#f8f7f4] border border-[#171717]/10 space-y-2">
            <span className="text-base font-bold text-[#171717] block">
              Plain English
            </span>
            <p className="text-xs text-[#666663] leading-relaxed">
              No tech buzzwords or confusing jargon. Clear English you can evaluate with confidence.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#f8f7f4] border border-[#171717]/10 space-y-2">
            <span className="text-base font-bold text-[#171717] block">
              Honest Advice
            </span>
            <p className="text-xs text-[#666663] leading-relaxed">
              We never push tools just because they're trending. If a simple checklist solves it, we'll tell you.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#f8f7f4] border border-[#171717]/10 space-y-2">
            <span className="text-base font-bold text-[#171717] block">
              Built for Real Teams
            </span>
            <p className="text-xs text-[#666663] leading-relaxed">
              Solutions designed so your actual employees can comfortably use and appreciate them every day.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
