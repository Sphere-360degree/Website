import React from 'react';

export const HowWeWorkSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Tell Us What’s Difficult',
      desc: "Explain what's eating your team's time or causing operational friction.",
    },
    {
      num: '02',
      title: 'Get Clear Options',
      desc: 'We show you 2–3 straightforward fixes with realistic costs and timelines.',
    },
    {
      num: '03',
      title: 'We Put It In Place',
      desc: 'We set up the technology or SOPs and ensure your team is confident using it.',
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-[#f8f7f4] border-b border-[#171717]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#c2410c] font-bold">
            03 / Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.15]">
            From confusion to clarity{' '}
            <span className="font-serif italic font-normal text-[#666663]">
              in 3 steps.
            </span>
          </h2>
          <p className="text-base text-[#666663]">
            Low-friction, plain-English collaboration designed for busy business owners.
          </p>
        </div>

        {/* 3 Numbered Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.num}
              className="space-y-3 pt-6 border-t-2 border-[#171717] text-left"
            >
              <span className="font-mono text-xs font-bold text-[#c2410c] uppercase">
                Step {step.num}
              </span>

              <h3 className="text-xl font-bold text-[#171717]">
                {step.title}
              </h3>

              <p className="text-sm text-[#666663] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
