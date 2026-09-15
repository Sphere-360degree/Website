import React from 'react';
import { AssessmentResult } from '../../types';
import { Sparkles, ArrowRight, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

interface AssessmentSummaryCardProps {
  assessment: AssessmentResult;
  onBookConsultation: () => void;
  compact?: boolean;
}

export const AssessmentSummaryCard: React.FC<AssessmentSummaryCardProps> = ({
  assessment,
  onBookConsultation,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-left">
      {/* Header */}
      <div className="bg-slate-900 text-white p-5 sm:p-7 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          Spherionix AI Assessment
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          What We Recommend For Your Business
        </h3>

        <div className="p-3.5 sm:p-4 rounded-xl bg-slate-800/90 text-slate-200 text-xs sm:text-sm leading-relaxed border border-slate-700/60">
          <span className="font-semibold text-blue-300 block mb-1">Our Understanding:</span>
          {assessment.clientSynthesis}
        </div>
      </div>

      {/* Recommended Opportunities */}
      <div className="p-5 sm:p-7 space-y-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
            Top Practical Opportunities:
          </span>

          <div className="space-y-3">
            {assessment.topOpportunities.map((opp, idx) => (
              <div
                key={opp.id}
                className="p-4 rounded-xl border border-slate-200 bg-[#fafaf9] hover:border-blue-300 transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {opp.title}
                    </h4>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200 shrink-0">
                    {opp.matchScore}% Fit
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  {opp.whyThisFits}
                </p>

                <div className="text-[11px] text-slate-500 pt-1 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-slate-400" />
                  Estimated setup: {opp.estimatedTimeframe}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note from Consultant */}
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-900 block">Spherionix Advice:</span>
            <span>{assessment.strategicAdvice}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <button
            onClick={onBookConsultation}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all hover:scale-[1.01]"
          >
            Discuss These Options In a Quick 20-Min Call
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
