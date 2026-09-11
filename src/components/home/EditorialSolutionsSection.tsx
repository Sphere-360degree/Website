import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EditorialSolutionsSectionProps {
  onSelectTopic: (topic: string) => void;
}

export const EditorialSolutionsSection: React.FC<EditorialSolutionsSectionProps> = ({
  onSelectTopic,
}) => {
  const problems = [
    {
      num: '01',
      question: "Missing calls while you're busy?",
      solution: "Never miss an important customer.",
      description: "A voice assistant answers common questions, collects information, and helps customers when you're unavailable.",
      topic: "Voice Assistant for Inbound Calls"
    },
    {
      num: '02',
      question: "Does everyone do things differently?",
      solution: "Make your business easier to run.",
      description: "We document the way your business works and turn it into simple instructions your team can follow.",
      topic: "SOPs and Process Documentation"
    },
    {
      num: '03',
      question: "Doing the same task every day?",
      solution: "Spend less time on repetitive work.",
      description: "We look for tasks your team repeats every day and find ways technology can handle them automatically.",
      topic: "Workflow Automation"
    },
    {
      num: '04',
      question: "Not sure where AI actually fits?",
      solution: "Honest, non-technical advice.",
      description: "We review your operations and tell you what's worth doing—and what's a waste of time and money.",
      topic: "Practical AI Strategy"
    },
  ];

  return (
    <section id="solutions" className="py-20 sm:py-32 bg-[#f8f7f4] border-b border-[#171717]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Statement Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#c2410c] font-bold">
            02 / Problem-First Approach
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.15]">
            Your business doesn't need more technology.{' '}
            <span className="font-serif italic font-normal text-[#666663] block sm:inline">
              It needs the right technology.
            </span>
          </h2>
          <p className="text-base text-[#666663] pt-1">
            We start with what frustrates your team, then find the simplest practical fix.
          </p>
        </div>

        {/* Asymmetric Editorial Narrative Rows */}
        <div className="divide-y divide-[#171717]/10">
          {problems.map((item) => (
            <div
              key={item.num}
              className="py-10 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group"
            >
              {/* Number and Question (5 cols) */}
              <div className="md:col-span-5 space-y-1">
                <span className="font-mono text-xs text-[#666663] block">
                  {item.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#171717] group-hover:text-[#c2410c] transition-colors">
                  {item.question}
                </h3>
              </div>

              {/* Solution & Description (5 cols) */}
              <div className="md:col-span-5 space-y-1">
                <h4 className="text-sm sm:text-base font-semibold text-[#171717]">
                  {item.solution}
                </h4>
                <p className="text-xs sm:text-sm text-[#666663] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Link (2 cols) */}
              <div className="md:col-span-2 flex justify-start md:justify-end pt-1">
                <button
                  onClick={() => onSelectTopic(item.topic)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171717] hover:text-[#c2410c] transition-colors"
                >
                  <span>Solve this</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
