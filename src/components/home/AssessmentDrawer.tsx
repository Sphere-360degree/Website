import React, { useState } from 'react';
import { AssessmentResult } from '../../types';
import { Sparkles, ChevronUp, ChevronDown, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface AssessmentDrawerProps {
  assessment: AssessmentResult;
  onOpenFullAssessment: () => void;
  onBookConsultation: () => void;
  onDismiss: () => void;
}

export const AssessmentDrawer: React.FC<AssessmentDrawerProps> = ({
  assessment,
  onOpenFullAssessment,
  onBookConsultation,
  onDismiss,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 max-w-md w-[calc(100vw-2rem)] sm:w-auto animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700/80 overflow-hidden">
        
        {/* Collapsed Header / Toggle */}
        <div className="p-4 flex items-center justify-between gap-3 bg-slate-900">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2.5 text-left min-w-0"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-400/30 flex items-center justify-center text-brand-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white">Your Spherionix Assessment</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-[11px] text-slate-400 truncate">
                {assessment.topOpportunities.length} high-leverage opportunities identified
              </p>
            </div>
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded-md text-slate-400 hover:text-white"
              title="Toggle preview"
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
            <button
              onClick={onDismiss}
              className="p-1 rounded-md text-slate-400 hover:text-white"
              title="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Expanded Body Preview */}
        {isExpanded && (
          <div className="p-4 pt-0 space-y-3 bg-slate-900/95 border-t border-slate-800 animate-in fade-in duration-200">
            <div className="space-y-1.5 pt-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400">
                Top Identified Opportunities:
              </span>
              <div className="space-y-1">
                {assessment.topOpportunities.map((opp, idx) => (
                  <div
                    key={opp.id}
                    className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-800/80 border border-slate-700/60"
                  >
                    <span className="text-slate-200 font-medium truncate max-w-[200px]">
                      0{idx + 1}. {opp.title}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400">
                      {opp.matchScore}% Match
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={onOpenFullAssessment}
                className="flex-1 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center transition-colors"
              >
                View Full Assessment
              </button>
              <button
                onClick={onBookConsultation}
                className="flex-1 py-2 px-3 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
              >
                Discuss Plan
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
