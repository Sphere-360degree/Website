import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface NotSureSectionProps {
  onOpenIntake: () => void;
}

export const NotSureSection: React.FC<NotSureSectionProps> = ({ onOpenIntake }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#fafaf9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Not sure where to start?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tell us what's going on. We'll help you find the right direction.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <button
              onClick={onOpenIntake}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Free Assessment →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
