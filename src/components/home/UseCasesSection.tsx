import React, { useState } from 'react';
import { useCasesData } from '../../data/useCasesData';
import { ArrowRight, CheckCircle2, Sparkles, HelpCircle, ArrowUpRight } from 'lucide-react';

interface UseCasesSectionProps {
  onOpenIntakeWithPrompt: (prompt: string) => void;
  onExploreServiceDetails: (serviceId: string) => void;
}

export const UseCasesSection: React.FC<UseCasesSectionProps> = ({
  onOpenIntakeWithPrompt,
  onExploreServiceDetails,
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(useCasesData[0].id);

  const activeCase = useCasesData.find((c) => c.id === selectedCaseId) || useCasesData[0];

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Business Problem → Practical Solution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real problems. Practical solutions.
          </h2>
          <p className="text-base text-slate-600">
            Click on any common business bottleneck below to see how Spherionix solves it without unnecessary complexity.
          </p>
        </div>

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Problem Switcher Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {useCasesData.map((item, index) => {
              const isSelected = item.id === activeCase.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedCaseId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-1 ring-slate-900'
                      : 'bg-[#fafaf9] text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          isSelected ? 'bg-slate-800 text-brand-300' : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          isSelected ? 'text-brand-400' : 'text-brand-600'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h3
                      className={`text-sm sm:text-base font-bold ${
                        isSelected ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {item.problem}
                    </h3>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                      isSelected ? 'text-brand-400 translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Side: Rich Solution Blueprint Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#fafaf9] border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            
            {/* Header: Problem vs Solution */}
            <div className="space-y-4 pb-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Business Challenge
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold border border-brand-200">
                  {activeCase.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                "{activeCase.problem}"
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-white p-4 rounded-xl border border-slate-200">
                <span className="font-semibold text-slate-900 block mb-1">Context:</span>
                {activeCase.problemContext}
              </p>
            </div>

            {/* Practical Spheroinix Solution */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 block">
                Spherionix Practical Implementation: {activeCase.solution}
              </span>

              <p className="text-sm text-slate-700 leading-relaxed">
                {activeCase.practicalApproach}
              </p>
            </div>

            {/* Measurable Business Outcome */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Target Business Outcome
              </div>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium">
                {activeCase.outcome}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => onExploreServiceDetails(activeCase.serviceId)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
              >
                Learn more about {activeCase.serviceName}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenIntakeWithPrompt(activeCase.problem)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-brand-600 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-300" />
                Solve This In My Business
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
