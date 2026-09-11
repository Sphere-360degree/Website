import React, { useState } from 'react';
import { ArrowRight, Check, RotateCcw, Sparkles } from 'lucide-react';

interface DiagnosticState {
  primaryFriction: string | null;
  secondaryFriction: string | null;
  desiredGoal: string | null;
}

interface SignatureAssessmentCanvasProps {
  onDirectConsultation: (summary: string) => void;
}

export const SignatureAssessmentCanvas: React.FC<SignatureAssessmentCanvasProps> = ({
  onDirectConsultation,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [state, setState] = useState<DiagnosticState>({
    primaryFriction: null,
    secondaryFriction: null,
    desiredGoal: null,
  });

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Step 1 Options
  const step1Options = [
    { id: 'calls', label: 'Missing customer phone calls', detail: 'Calls go to voicemail when on jobs or after hours' },
    { id: 'paperwork', label: 'Drowning in repetitive paperwork', detail: 'Re-typing data, invoices, and manual spreadsheets' },
    { id: 'head', label: 'Processes exist only in my head', detail: 'Delegating is difficult and quality is inconsistent' },
    { id: 'ai-unsure', label: 'Unsure if AI can actually help us', detail: 'Confused by AI hype and want practical advice' },
  ];

  // Step 2 Options
  const step2Options = [
    { id: 'questions', label: 'Answering the same routine questions daily' },
    { id: 'syncing', label: 'Copying data between different tools & emails' },
    { id: 'training', label: 'Training new employees takes too long' },
    { id: 'leads', label: 'Customer inquiries sitting unaddressed' },
  ];

  // Step 3 Options
  const step3Options = [
    { id: 'high-value', label: 'Focusing on high-value client work & delivery' },
    { id: 'growth', label: 'Growing the business without adding chaos' },
    { id: 'peace', label: 'Leaving work on time without operational stress' },
  ];

  const handleSelectStep1 = (id: string) => {
    setState({ ...state, primaryFriction: id });
    setStep(2);
  };

  const handleSelectStep2 = (id: string) => {
    setState({ ...state, secondaryFriction: id });
    setStep(3);
  };

  const handleSelectStep3 = (id: string) => {
    setState({ ...state, desiredGoal: id });
    setStep(4);
  };

  const handleReset = () => {
    setState({ primaryFriction: null, secondaryFriction: null, desiredGoal: null });
    setStep(1);
    setSubmitted(false);
  };

  // Compute dynamic synthesis
  const getSynthesis = () => {
    let frictionSummary = 'Routine customer calls';
    let recommendations = [
      {
        tag: 'Voice Assistant',
        title: '24/7 Phone Assistant',
        desc: 'Answers common questions, takes detailed messages, and schedules appointments automatically.',
      },
      {
        tag: 'Automation',
        title: 'Instant SMS / Email Follow-ups',
        desc: 'Sends confirmations and caller details straight to your phone or CRM.',
      }
    ];

    if (state.primaryFriction === 'paperwork') {
      frictionSummary = 'Repetitive manual data entry';
      recommendations = [
        {
          tag: 'Automation',
          title: 'Document & Spreadsheet Sync',
          desc: 'Extracts info from incoming forms or invoices and updates your software automatically.',
        },
        {
          tag: 'Process Improvement',
          title: 'Clean Workflow Mapping',
          desc: 'Removes unnecessary handoffs so work moves faster with fewer mistakes.',
        }
      ];
    } else if (state.primaryFriction === 'head') {
      frictionSummary = 'Undocumented business procedures';
      recommendations = [
        {
          tag: 'SOP Creation',
          title: 'Step-by-Step Operating Guides',
          desc: 'We document your core workflows into clear instructions anyone on your team can follow.',
        },
        {
          tag: 'Internal Knowledge',
          title: 'Searchable Team Guides',
          desc: 'Your team can find answers instantly instead of constantly interrupting you.',
        }
      ];
    } else if (state.primaryFriction === 'ai-unsure') {
      frictionSummary = 'Technology uncertainty';
      recommendations = [
        {
          tag: 'AI Advisory',
          title: 'Practical AI Assessment',
          desc: 'We review your business and show you 2–3 specific places AI makes sense—and what to ignore.',
        },
        {
          tag: 'Tool Selection',
          title: 'Simple, Non-Technical Roadmap',
          desc: 'A plain-English plan focused only on tools that deliver clear ROI for your budget.',
        }
      ];
    }

    return { frictionSummary, recommendations };
  };

  const synthesis = getSynthesis();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onDirectConsultation(`Diagnostic: ${synthesis.frictionSummary} | Goal: ${state.desiredGoal}`);
  };

  return (
    <section id="assessment" className="py-20 sm:py-28 bg-[#f1eee7] border-y border-[#171717]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-[#171717]/10 gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#c2410c] font-bold">
              01 / Diagnostic
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
              Let's figure this out together.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#666663]">
              Step {step} of 4
            </span>
            {step > 1 && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#171717] hover:text-[#c2410c] transition-colors ml-2"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* The Diagnostic Canvas */}
        <div className="bg-[#f8f7f4] rounded-2xl border border-[#171717]/10 p-6 sm:p-10 shadow-xs">
          
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#c2410c] uppercase tracking-wider">
                  Step 1 — Identify the friction
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  What's currently taking up too much time or causing friction?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {step1Options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectStep1(opt.id)}
                    className="p-5 rounded-xl border border-[#171717]/10 hover:border-[#171717] bg-white text-left transition-all hover:translate-y-[-1px] group flex flex-col justify-between space-y-2"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#171717] group-hover:text-[#c2410c] transition-colors">
                      {opt.label}
                    </span>
                    <span className="text-xs text-[#666663] leading-relaxed">
                      {opt.detail}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#c2410c] uppercase tracking-wider">
                  Step 2 — Day-to-day bottleneck
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  What else is slowing your team down?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {step2Options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectStep2(opt.id)}
                    className="p-5 rounded-xl border border-[#171717]/10 hover:border-[#171717] bg-white text-left font-semibold text-sm text-[#171717] hover:text-[#c2410c] transition-all"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#c2410c] uppercase tracking-wider">
                  Step 3 — Desired Outcome
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  What would you rather spend that reclaimed time doing?
                </h3>
              </div>

              <div className="space-y-3 pt-1">
                {step3Options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectStep3(opt.id)}
                    className="w-full p-5 rounded-xl border border-[#171717]/10 hover:border-[#171717] bg-white text-left font-semibold text-sm sm:text-base text-[#171717] hover:text-[#c2410c] transition-all flex items-center justify-between"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#666663] shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: SITUATION MAP & RECOMMENDATIONS */}
          {step === 4 && (
            <div className="space-y-8 animate-in fade-in duration-200 text-left">
              
              {/* Visual Path Summary */}
              <div className="p-5 rounded-xl bg-white border border-[#171717]/10 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#666663] font-bold block">
                  Here is what we heard:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#171717]">
                  <span className="px-3 py-1.5 rounded-lg bg-[#f1eee7] border border-[#171717]/10">
                    Bottleneck: {synthesis.frictionSummary}
                  </span>
                  <span className="text-[#666663]">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#f1eee7] border border-[#171717]/10">
                    Goal: Reclaim focus & simplify operations
                  </span>
                </div>
              </div>

              {/* Specific Solution Pair */}
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#c2410c] font-bold block">
                  Where Spheroinix can help:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {synthesis.recommendations.map((rec, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-white border border-[#171717]/10 space-y-2"
                    >
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#f1eee7] text-[#171717] inline-block">
                        {rec.tag}
                      </span>
                      <h4 className="text-base font-bold text-[#171717]">
                        {rec.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#666663] leading-relaxed">
                        {rec.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking Action */}
              <div className="pt-4 border-t border-[#171717]/10">
                {submitted ? (
                  <div className="p-4 rounded-xl bg-white border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-medium">
                    ✓ Thank you, {contactName}. We have received your situation summary and will reach out to {contactEmail} within 1 business day.
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    <span className="text-xs font-bold text-[#171717] block">
                      Let's talk about this for 20 minutes (No sales pressure):
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Your Name"
                        className="p-3 rounded-xl border border-[#171717]/20 text-xs sm:text-sm bg-white focus:border-[#171717] outline-none"
                      />
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="Your Email"
                        className="p-3 rounded-xl border border-[#171717]/20 text-xs sm:text-sm bg-white focus:border-[#171717] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#171717] hover:bg-[#c2410c] text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs"
                    >
                      Discuss This Plan With Spheroinix →
                    </button>
                  </form>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
