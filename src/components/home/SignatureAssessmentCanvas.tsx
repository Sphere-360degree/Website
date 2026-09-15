import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  RotateCcw, 
  PhoneCall, 
  FileSpreadsheet, 
  Compass, 
  BrainCircuit, 
  Copy, 
  CheckCheck,
  Building2,
  Stethoscope,
  Wrench,
  ShoppingBag,
  Briefcase,
  Sparkles,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';

interface DiagnosticState {
  industry: string;
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
  const [copied, setCopied] = useState(false);
  
  const [state, setState] = useState<DiagnosticState>({
    industry: 'Professional Services / Agency',
    primaryFriction: null,
    secondaryFriction: null,
    desiredGoal: null,
  });

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Industry Presets
  const industries = [
    { id: 'agency', label: 'Services & Agencies', icon: Briefcase },
    { id: 'trades', label: 'Contractors & Trades', icon: Wrench },
    { id: 'healthcare', label: 'Clinics & Healthcare', icon: Stethoscope },
    { id: 'realestate', label: 'Real Estate & Property', icon: Building2 },
    { id: 'ecommerce', label: 'Retail & E-Commerce', icon: ShoppingBag },
  ];

  // Step 1 Options
  const step1Options = [
    { 
      id: 'calls', 
      title: 'Missing customer calls & leads', 
      subtitle: 'Calls go to voicemail while on jobs, during meetings, or after hours.',
      icon: PhoneCall,
      timeImpact: '8–14 hrs/wk lost',
    },
    { 
      id: 'paperwork', 
      title: 'Drowning in repetitive paperwork', 
      subtitle: 'Manual data entry, spreadsheets, invoices, and re-typing client info.',
      icon: FileSpreadsheet,
      timeImpact: '10–18 hrs/wk lost',
    },
    { 
      id: 'head', 
      title: 'Processes exist only in my head', 
      subtitle: 'Delegating is painful, training takes forever, and quality varies.',
      icon: Compass,
      timeImpact: '12–20 hrs/wk lost',
    },
    { 
      id: 'ai-unsure', 
      title: 'Unsure where AI actually helps', 
      subtitle: 'Overwhelmed by AI hype and need honest, practical guidance for our budget.',
      icon: BrainCircuit,
      timeImpact: 'High uncertainty',
    },
  ];

  // Step 2 Options
  const step2Options = [
    { id: 'questions', label: 'Answering the same 10 repetitive customer questions every day' },
    { id: 'syncing', label: 'Constantly copying customer details between emails, forms, and tools' },
    { id: 'followups', label: 'Leads and follow-up quotes slipping through the cracks' },
    { id: 'training', label: 'New employee onboarding requires constant founder interruption' },
  ];

  // Step 3 Options
  const step3Options = [
    { id: 'revenue', label: 'Focusing on high-value client work and closing deals', metric: '+35% founder time' },
    { id: 'operations', label: 'Running daily operations smoothly without chaos or fires', metric: 'Stress reduction' },
    { id: 'scale', label: 'Taking on more clients without immediately hiring more overhead', metric: '2x capacity' },
    { id: 'balance', label: 'Leaving work on time knowing customer inquiries are handled', metric: '24/7 coverage' },
  ];

  const handleSelectStep1 = (id: string) => {
    setState((prev) => ({ ...prev, primaryFriction: id }));
    setStep(2);
  };

  const handleSelectStep2 = (id: string) => {
    setState((prev) => ({ ...prev, secondaryFriction: id }));
    setStep(3);
  };

  const handleSelectStep3 = (id: string) => {
    setState((prev) => ({ ...prev, desiredGoal: id }));
    setStep(4);
  };

  const handleReset = () => {
    setState({
      industry: 'Professional Services / Agency',
      primaryFriction: null,
      secondaryFriction: null,
      desiredGoal: null,
    });
    setStep(1);
    setSubmitted(false);
    setCopied(false);
  };

  // Compute dynamic synthesis
  const getSynthesis = () => {
    let frictionSummary = 'Routine phone calls and missed leads';
    let hoursSaved = '10–16 hrs/week';
    let pilotTimeline = '5–7 Business Days';
    let primaryTool = '24/7 AI Voice & SMS Dispatcher';
    let recommendations = [
      {
        tag: 'Voice Assistant',
        title: '24/7 Intelligent Phone Receptionist',
        desc: 'Answers inbound calls within 2 rings, answers common business questions accurately, captures caller details, and schedules appointments directly to your calendar.',
      },
      {
        tag: 'Instant Automation',
        title: 'Automated SMS & CRM Sync',
        desc: 'Instantly pushes caller summaries, audio transcripts, and next steps to your email, WhatsApp, or CRM so no customer waits.',
      }
    ];

    if (state.primaryFriction === 'paperwork') {
      frictionSummary = 'Manual data entry, invoice copying & spreadsheet sync';
      hoursSaved = '12–18 hrs/week';
      pilotTimeline = '7–10 Business Days';
      primaryTool = 'Zero-Entry Workflow Automation Pipeline';
      recommendations = [
        {
          tag: 'Workflow Automation',
          title: 'Document & Spreadsheet Auto-Sync',
          desc: 'Automatically extracts data from incoming emails, PDFs, and client forms, instantly populating your billing software or operational sheets with 0 manual typing.',
        },
        {
          tag: 'Process Improvement',
          title: 'Frictionless Pipeline Handoffs',
          desc: 'Eliminates repetitive manual handoffs so jobs and client deliverables move forward automatically with zero dropped balls.',
        }
      ];
    } else if (state.primaryFriction === 'head') {
      frictionSummary = 'Unwritten processes and delegating bottlenecks';
      hoursSaved = '14–20 hrs/week';
      pilotTimeline = '7–12 Business Days';
      primaryTool = 'Structured SOP System & Team Playbook';
      recommendations = [
        {
          tag: 'SOP Creation',
          title: 'Step-by-Step Operating Playbooks',
          desc: 'We extract and format your core business workflows into clear, visual, bite-sized standard operating procedures your team can execute independently.',
        },
        {
          tag: 'Internal Knowledge',
          title: 'Searchable Team Knowledge Base',
          desc: 'Gives your employees an instant, searchable guide for everyday questions so they stop interrupting you throughout the day.',
        }
      ];
    } else if (state.primaryFriction === 'ai-unsure') {
      frictionSummary = 'Technology confusion & lack of practical AI roadmap';
      hoursSaved = '8–14 hrs/week';
      pilotTimeline = '3–5 Business Days';
      primaryTool = 'Tailored Practical AI Blueprint';
      recommendations = [
        {
          tag: 'AI Advisory',
          title: 'Practical AI Opportunity Audit',
          desc: 'A no-nonsense review of your exact business workflows identifying the top 2 places AI creates immediate ROI—and highlighting which hype to ignore.',
        },
        {
          tag: 'Implementation',
          title: 'Low-Risk Pilot Blueprint',
          desc: 'A plain-English implementation plan using affordable, proven tools with full team training and zero technical complexity.',
        }
      ];
    }

    return { frictionSummary, hoursSaved, pilotTimeline, primaryTool, recommendations };
  };

  const synthesis = getSynthesis();

  const handleCopySummary = () => {
    const summaryText = `SPHERIONIX DIAGNOSTIC REPORT\n--------------------------\nIndustry: ${state.industry}\nPrimary Friction: ${synthesis.frictionSummary}\nEstimated Reclaimed Time: ${synthesis.hoursSaved}\nRecommended System: ${synthesis.primaryTool}\nPilot Timeline: ${synthesis.pilotTimeline}\n\nSolutions:\n1. ${synthesis.recommendations[0].title} - ${synthesis.recommendations[0].desc}\n2. ${synthesis.recommendations[1].title} - ${synthesis.recommendations[1].desc}\n\nGenerated via spherionix.com`;
    
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onDirectConsultation(
      `Diagnostic Plan: ${synthesis.frictionSummary} | Industry: ${state.industry} | Reclaimed Goal: ${state.desiredGoal} | Contact: ${contactName} (${contactEmail})`
    );
  };

  return (
    <section id="assessment" className="py-20 sm:py-28 bg-[#f1eee7] border-y border-[#171717]/10 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-6 border-b border-[#171717]/10 gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#c2410c] font-bold">
                01 / Interactive Diagnostic
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#171717] text-white font-semibold">
                Live Engine
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
              Let's diagnose your operational friction.
            </h2>
            <p className="text-xs sm:text-sm text-[#666663]">
              Answer 3 simple questions to receive a tailored, plain-English roadmap.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#171717] bg-white px-3 py-1.5 rounded-lg border border-[#171717]/10">
              <span className="text-[#c2410c]">Step {step}</span>
              <span className="text-[#999996]">/ 4</span>
            </div>
            {step > 1 && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-[#171717]/10 text-xs font-semibold text-[#171717] hover:text-[#c2410c] hover:border-[#c2410c] transition-all cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Step Progression Breadcrumb Bar */}
        <div className="grid grid-cols-4 gap-2 mb-6 text-center text-xs font-mono">
          <button
            onClick={() => setStep(1)}
            className={`py-2 px-1 rounded-lg border transition-all text-[11px] font-semibold flex items-center justify-center gap-1.5 cursor-pointer ${
              step === 1
                ? 'bg-[#171717] text-white border-[#171717]'
                : step > 1
                ? 'bg-white text-[#171717] border-emerald-500/40 hover:bg-white/80'
                : 'bg-white/50 text-[#999996] border-[#171717]/10'
            }`}
          >
            {step > 1 ? <Check className="w-3 h-3 text-emerald-600" /> : <span>1.</span>}
            <span className="hidden sm:inline">Friction</span>
          </button>

          <button
            onClick={() => state.primaryFriction && setStep(2)}
            disabled={!state.primaryFriction}
            className={`py-2 px-1 rounded-lg border transition-all text-[11px] font-semibold flex items-center justify-center gap-1.5 ${
              step === 2
                ? 'bg-[#171717] text-white border-[#171717] cursor-pointer'
                : step > 2
                ? 'bg-white text-[#171717] border-emerald-500/40 cursor-pointer'
                : 'bg-white/50 text-[#999996] border-[#171717]/10 cursor-not-allowed'
            }`}
          >
            {step > 2 ? <Check className="w-3 h-3 text-emerald-600" /> : <span>2.</span>}
            <span className="hidden sm:inline">Bottleneck</span>
          </button>

          <button
            onClick={() => state.secondaryFriction && setStep(3)}
            disabled={!state.secondaryFriction}
            className={`py-2 px-1 rounded-lg border transition-all text-[11px] font-semibold flex items-center justify-center gap-1.5 ${
              step === 3
                ? 'bg-[#171717] text-white border-[#171717] cursor-pointer'
                : step > 3
                ? 'bg-white text-[#171717] border-emerald-500/40 cursor-pointer'
                : 'bg-white/50 text-[#999996] border-[#171717]/10 cursor-not-allowed'
            }`}
          >
            {step > 3 ? <Check className="w-3 h-3 text-emerald-600" /> : <span>3.</span>}
            <span className="hidden sm:inline">Goal</span>
          </button>

          <button
            onClick={() => state.desiredGoal && setStep(4)}
            disabled={!state.desiredGoal}
            className={`py-2 px-1 rounded-lg border transition-all text-[11px] font-semibold flex items-center justify-center gap-1.5 ${
              step === 4
                ? 'bg-[#c2410c] text-white border-[#c2410c] cursor-pointer shadow-xs'
                : 'bg-white/50 text-[#999996] border-[#171717]/10 cursor-not-allowed'
            }`}
          >
            <span>4.</span>
            <span className="hidden sm:inline">Roadmap</span>
          </button>
        </div>

        {/* The Diagnostic Canvas Frame */}
        <div className="bg-[#f8f7f4] rounded-2xl border border-[#171717]/10 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          {/* Industry Preset Selector (Top of Steps 1-3) */}
          {step < 4 && (
            <div className="mb-6 pb-5 border-b border-[#171717]/10 space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#666663] font-bold block">
                Select your industry context:
              </label>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => {
                  const Icon = ind.icon;
                  const isSelected = state.industry === ind.label;
                  return (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setState({ ...state, industry: ind.label })}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#171717] text-white shadow-xs'
                          : 'bg-white border border-[#171717]/10 text-[#666663] hover:text-[#171717] hover:border-[#171717]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{ind.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#c2410c] uppercase tracking-wider">
                  Step 1 of 3 — Primary Friction
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  What is currently draining the most time or causing friction?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {step1Options.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = state.primaryFriction === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectStep1(opt.id)}
                      className={`p-5 rounded-xl border text-left transition-all duration-200 group flex flex-col justify-between space-y-3 cursor-pointer ${
                        isSelected
                          ? 'border-[#c2410c] bg-orange-50/50 shadow-sm ring-1 ring-[#c2410c]'
                          : 'border-[#171717]/10 hover:border-[#171717] bg-white hover:-translate-y-0.5 shadow-xs'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="w-9 h-9 rounded-lg bg-[#f1eee7] group-hover:bg-[#c2410c] group-hover:text-white text-[#171717] flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f1eee7] text-[#666663] font-semibold">
                          {opt.timeImpact}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="font-bold text-sm sm:text-base text-[#171717] group-hover:text-[#c2410c] transition-colors block">
                          {opt.title}
                        </span>
                        <p className="text-xs text-[#666663] leading-relaxed">
                          {opt.subtitle}
                        </p>
                      </div>

                      <div className="pt-1 flex items-center justify-between text-xs font-semibold text-[#171717] group-hover:text-[#c2410c]">
                        <span>Select this issue</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#c2410c] uppercase tracking-wider">
                  Step 2 of 3 — Day-to-Day Bottleneck
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Which specific recurring situation is most frustrating?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {step2Options.map((opt) => {
                  const isSelected = state.secondaryFriction === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectStep2(opt.id)}
                      className={`p-5 rounded-xl border text-left transition-all duration-200 group flex items-start justify-between gap-3 cursor-pointer ${
                        isSelected
                          ? 'border-[#c2410c] bg-orange-50/50 ring-1 ring-[#c2410c]'
                          : 'border-[#171717]/10 hover:border-[#171717] bg-white hover:-translate-y-0.5 shadow-xs'
                      }`}
                    >
                      <span className="font-semibold text-sm text-[#171717] group-hover:text-[#c2410c] leading-snug">
                        {opt.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#999996] group-hover:text-[#c2410c] shrink-0 mt-0.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-mono text-[#666663] hover:text-[#171717] font-semibold flex items-center gap-1 cursor-pointer"
                >
                  ← Back to Step 1
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#c2410c] uppercase tracking-wider">
                  Step 3 of 3 — Core Desired Outcome
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  What is your primary goal once this friction is removed?
                </h3>
              </div>

              <div className="space-y-3 pt-1">
                {step3Options.map((opt) => {
                  const isSelected = state.desiredGoal === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectStep3(opt.id)}
                      className={`w-full p-5 rounded-xl border text-left transition-all duration-200 group flex items-center justify-between gap-4 cursor-pointer ${
                        isSelected
                          ? 'border-[#c2410c] bg-orange-50/50 ring-1 ring-[#c2410c]'
                          : 'border-[#171717]/10 hover:border-[#171717] bg-white hover:-translate-y-0.5 shadow-xs'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="font-semibold text-sm sm:text-base text-[#171717] group-hover:text-[#c2410c] block">
                          {opt.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#f1eee7] text-[#c2410c] font-bold">
                          {opt.metric}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#999996] group-hover:text-[#c2410c] transition-transform group-hover:translate-x-1" />
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-mono text-[#666663] hover:text-[#171717] font-semibold flex items-center gap-1 cursor-pointer"
                >
                  ← Back to Step 2
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: THE SPHERIONIX TAILORED ROADMAP REPORT */}
          {step === 4 && (
            <div className="space-y-8 animate-in fade-in duration-300 text-left">
              
              {/* Official Report Header Banner */}
              <div className="p-6 rounded-2xl bg-[#171717] text-white space-y-4 shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#ea580c]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#ea580c] font-bold">
                      Spherionix Diagnostic Report
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#a3a3a3]">
                    <span>REF: #SPH-2026</span>
                    <span>•</span>
                    <span>{state.industry}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono text-[#a3a3a3] uppercase block">
                      Identified Bottleneck
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      {synthesis.frictionSummary}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono text-[#a3a3a3] uppercase block">
                      Est. Reclaimed Time
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400 block">
                      ~{synthesis.hoursSaved}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono text-[#a3a3a3] uppercase block">
                      Pilot Implementation
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-amber-300 block">
                      {synthesis.pilotTimeline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Specific Recommended Solutions */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#c2410c] font-bold">
                    Recommended Custom Implementation:
                  </span>
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#171717] hover:text-[#c2410c] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Summary</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {synthesis.recommendations.map((rec, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-white border border-[#171717]/10 space-y-2.5 shadow-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#f1eee7] text-[#171717]">
                          {rec.tag}
                        </span>
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      </div>
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

              {/* 3-Phase Action Roadmap */}
              <div className="p-5 rounded-xl bg-[#f1eee7] border border-[#171717]/10 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#171717] font-bold block">
                  How we implement this without disrupting your team:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="space-y-1">
                    <span className="font-mono font-bold text-[#c2410c] block">Phase 1: Discovery (15 Min)</span>
                    <p className="text-[#666663]">We map your exact workflow and review sample customer inquiries.</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono font-bold text-[#c2410c] block">Phase 2: Pilot Build (7 Days)</span>
                    <p className="text-[#666663]">We build and test the solution in a safe staging environment.</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono font-bold text-[#c2410c] block">Phase 3: Rollout & SOPs</span>
                    <p className="text-[#666663]">We hand over documentation and train your staff in plain English.</p>
                  </div>
                </div>
              </div>

              {/* Direct Booking Action */}
              <div className="pt-2 border-t border-[#171717]/10">
                {submitted ? (
                  <div className="p-6 rounded-xl bg-white border border-emerald-400 text-emerald-950 space-y-2 shadow-xs">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600" />
                      <h4 className="text-base font-bold">Diagnostic Request Received</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#444442] leading-relaxed">
                      Thank you, {contactName}. We have logged your assessment details and will email your full review to <span className="font-bold">{contactEmail}</span> within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="p-6 rounded-2xl bg-white border border-[#171717]/10 shadow-xs space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#171717] flex items-center gap-2">
                        <CalendarCheck className="w-4 h-4 text-[#c2410c]" />
                        <span>Ready to discuss this diagnostic with Spherionix?</span>
                      </h4>
                      <p className="text-xs text-[#666663]">
                        No sales pressure. A free 20-minute conversation to walk through your options.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-[#171717] font-semibold mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Alex Morgan"
                          className="w-full p-3 rounded-xl border border-[#171717]/20 text-xs sm:text-sm bg-white focus:border-[#171717] focus:ring-1 focus:ring-[#171717] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase text-[#171717] font-semibold mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="alex@yourcompany.com"
                          className="w-full p-3 rounded-xl border border-[#171717]/20 text-xs sm:text-sm bg-white focus:border-[#171717] focus:ring-1 focus:ring-[#171717] outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#171717] hover:bg-[#c2410c] text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                      >
                        <span>Discuss This Plan With Spherionix</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-[#171717]/20 hover:border-[#171717] text-[#666663] hover:text-[#171717] text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Retake Assessment</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#666663]">
                      <span>✓ Confidential</span>
                      <span>•</span>
                      <span>✓ We reply within 1 business day</span>
                      <span>•</span>
                      <span>✓ info@spherionix.com</span>
                    </div>
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
