import React, { useState } from 'react';
import { IntakeAnswer, AssessmentResult } from '../../types';
import { generateAIAssessment } from '../../services/aiRecommendationEngine';
import { BrandLogo } from '../common/BrandLogo';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
  Check,
  CheckCircle2,
  PhoneCall,
  FileText,
  Zap,
  Compass,
  Clock
} from 'lucide-react';

interface AIIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleteAssessment: (result: AssessmentResult, answers: IntakeAnswer) => void;
  onDirectConsultationRequest: () => void;
  initialTopic?: string;
}

export const AIIntakeModal: React.FC<AIIntakeModalProps> = ({
  isOpen,
  onClose,
  onCompleteAssessment,
  onDirectConsultationRequest,
  initialTopic = '',
}) => {
  const [stage, setStage] = useState<'questions' | 'analyzing' | 'results' | 'lead-capture' | 'confirmed'>('questions');
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [answers, setAnswers] = useState<IntakeAnswer>({
    visitorRole: 'business-owner',
    businessType: '',
    teamSize: '2-10',
    industry: 'Small Business / Professional',
    primaryGoals: ['save-time'],
    interestedServices: [],
    freeformProblem: initialTopic || '',
    leadInfo: {
      name: '',
      email: '',
      company: '',
      phone: '',
    },
  });

  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);

  if (!isOpen) return null;

  // Question 1 Options: "What would you most like to improve?"
  const q1Options = [
    { id: 'save-time', label: 'Save time & reduce busywork' },
    { id: 'get-customers', label: 'Get more customers & inquiries' },
    { id: 'customer-service', label: 'Improve customer responsiveness' },
    { id: 'organize-business', label: 'Organize processes & SOPs' },
    { id: 'start-ai', label: 'Start using AI practically' },
    { id: 'not-sure', label: "I'm not sure yet — need guidance" },
  ];

  // Question 2 Options: "How large is your team?"
  const q2Options = [
    { id: 'solo', label: 'Just me (1 person)' },
    { id: '2-10', label: '2 – 10 people' },
    { id: '11-50', label: '11 – 50 people' },
    { id: '50+', label: '50+ people' },
  ];

  // Question 3 Options: "What is your biggest day-to-day challenge right now?"
  const q3Options = [
    { id: 'calls', label: '📞 Answering constant customer phone calls & FAQs' },
    { id: 'data', label: '⚡ Repetitive paperwork, data entry, & emails' },
    { id: 'sops', label: '📋 Training new employees / processes exist only in my head' },
    { id: 'leads', label: '💬 Answering website inquiries and following up with leads' },
    { id: 'strategy', label: '🧭 Figuring out which AI tools actually make sense' },
  ];

  const handleAnalyze = async () => {
    setStage('analyzing');
    const result = await generateAIAssessment(answers);
    setAssessmentResult(result);
    setStage('results');
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (assessmentResult) {
      onCompleteAssessment(assessmentResult, answers);
    }
    setStage('confirmed');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <BrandLogo size="sm" isLight withText />
          </div>
          
          <div className="flex items-center gap-3">
            {stage === 'questions' && (
              <span className="text-xs text-blue-300 font-semibold bg-blue-900/40 px-2.5 py-1 rounded-full border border-blue-700/50">
                Question {currentStep} of {totalSteps}
              </span>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">

          {/* ========================================================= */}
          {/* 1. ONE-QUESTION-AT-A-TIME FLOW                           */}
          {/* ========================================================= */}
          {stage === 'questions' && (
            <div className="space-y-6">
              
              {/* Question 1 of 4 */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Question 1 of 4</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">What would you most like to improve?</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q1Options.map((opt) => {
                      const isSelected = answers.primaryGoals.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          onClick={() => setAnswers({ ...answers, primaryGoals: [opt.id] })}
                          className={`p-4 rounded-xl border text-left font-semibold text-xs sm:text-sm flex items-center justify-between transition-all ${
                            isSelected
                              ? 'border-blue-600 bg-blue-50/80 text-blue-950 ring-1 ring-blue-600 shadow-xs'
                              : 'border-slate-200 hover:border-slate-300 text-slate-800 bg-[#fafaf9]'
                          }`}
                        >
                          <span>{opt.label}</span>
                          {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Question 2 of 4 */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Question 2 of 4</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">How large is your team?</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q2Options.map((opt) => {
                      const isSelected = answers.teamSize === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => setAnswers({ ...answers, teamSize: opt.id })}
                          className={`p-4 rounded-xl border text-left font-semibold text-xs sm:text-sm flex items-center justify-between transition-all ${
                            isSelected
                              ? 'border-blue-600 bg-blue-50/80 text-blue-950 ring-1 ring-blue-600 shadow-xs'
                              : 'border-slate-200 hover:border-slate-300 text-slate-800 bg-[#fafaf9]'
                          }`}
                        >
                          <span>{opt.label}</span>
                          {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Question 3 of 4 */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Question 3 of 4</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">What is your biggest day-to-day challenge right now?</h3>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    {q3Options.map((opt) => {
                      const isSelected = (answers.freeformProblem || '').includes(opt.label);
                      return (
                        <button
                          key={opt.id}
                          onClick={() => setAnswers({ ...answers, freeformProblem: opt.label })}
                          className={`w-full p-4 rounded-xl border text-left font-semibold text-xs sm:text-sm flex items-center justify-between transition-all ${
                            isSelected
                              ? 'border-blue-600 bg-blue-50/80 text-blue-950 ring-1 ring-blue-600 shadow-xs'
                              : 'border-slate-200 hover:border-slate-300 text-slate-800 bg-[#fafaf9]'
                          }`}
                        >
                          <span>{opt.label}</span>
                          {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Question 4 of 4 */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Question 4 of 4</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                      In your own words, what is slowing your business down?
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Tell us briefly about what takes up too much time or what you'd like to fix.
                    </p>
                  </div>

                  <textarea
                    value={answers.freeformProblem}
                    onChange={(e) => setAnswers({ ...answers, freeformProblem: e.target.value })}
                    rows={4}
                    placeholder="e.g. We spend too much time answering the same phone questions and copying client details into our spreadsheets..."
                    className="w-full p-4 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none leading-relaxed"
                  />
                </div>
              )}

              {/* Bottom Navigation */}
              <div className="flex items-center justify-between pt-5 border-t border-slate-200">
                {currentStep > 1 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors shadow-xs"
                  >
                    Next Question
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleAnalyze}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:scale-[1.02]"
                  >
                    <Sparkles className="w-4 h-4" />
                    See Where We Can Help
                  </button>
                )}
              </div>

            </div>
          )}

          {/* ========================================================= */}
          {/* 2. ANALYZING STATE                                        */}
          {/* ========================================================= */}
          {stage === 'analyzing' && (
            <div className="py-14 text-center space-y-4">
              <div className="w-12 h-12 rounded-full border-4 border-blue-100 border-t-blue-600 animate-spin mx-auto" />
              <h4 className="text-lg font-bold text-slate-900">Identifying practical opportunities...</h4>
              <p className="text-xs text-slate-500">Matching practical phone, automation, and process solutions.</p>
            </div>
          )}

          {/* ========================================================= */}
          {/* 3. 2–3 CLEAN RECOMMENDATIONS RESULT                       */}
          {/* ========================================================= */}
          {stage === 'results' && assessmentResult && (
            <div className="space-y-6 text-left animate-in fade-in duration-150">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                  <Sparkles className="w-3 h-3" />
                  Spherionix Recommendations
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Here's where we think we can help.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-[#fafaf9] p-3.5 rounded-xl border border-slate-200">
                  {assessmentResult.clientSynthesis}
                </p>
              </div>

              {/* 2–3 Concise Opportunities */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Recommended Next Steps:
                </span>

                {assessmentResult.topOpportunities.slice(0, 3).map((opp, idx) => (
                  <div
                    key={opp.id}
                    className="p-4 rounded-xl border border-slate-200 bg-[#fafaf9] space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}.</span>
                        {opp.title}
                      </h4>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        High Leverage
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700">
                      {opp.whyThisFits}
                    </p>
                  </div>
                ))}
              </div>

              {/* Single Clear CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setStage('questions');
                    setCurrentStep(1);
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800"
                >
                  ← Edit your answers
                </button>

                <button
                  onClick={() => setStage('lead-capture')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
                >
                  Talk to Spherionix →
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 4. LIGHTWEIGHT LEAD CAPTURE                               */}
          {/* ========================================================= */}
          {stage === 'lead-capture' && (
            <form onSubmit={handleLeadSubmit} className="space-y-4 text-left">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Talk to Spherionix</h3>
                <p className="text-xs text-slate-500 mt-1">
                  We'll review your challenge and prepare practical, jargon-free options before our 20-minute chat.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={answers.leadInfo?.name || ''}
                    onChange={(e) => setAnswers({ ...answers, leadInfo: { ...answers.leadInfo!, name: e.target.value } })}
                    placeholder="Sarah Jenkins"
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={answers.leadInfo?.email || ''}
                    onChange={(e) => setAnswers({ ...answers, leadInfo: { ...answers.leadInfo!, email: e.target.value } })}
                    placeholder="sarah@yourcompany.com"
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Company / Business Name *</label>
                  <input
                    type="text"
                    required
                    value={answers.leadInfo?.company || ''}
                    onChange={(e) => setAnswers({ ...answers, leadInfo: { ...answers.leadInfo!, company: e.target.value } })}
                    placeholder="e.g. Apex Logistics"
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    value={answers.leadInfo?.phone || ''}
                    onChange={(e) => setAnswers({ ...answers, leadInfo: { ...answers.leadInfo!, phone: e.target.value } })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setStage('results')}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
                >
                  Request Conversation →
                </button>
              </div>
            </form>
          )}

          {/* ========================================================= */}
          {/* 5. CONFIRMATION                                           */}
          {/* ========================================================= */}
          {stage === 'confirmed' && (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Conversation Request Received!</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold">{answers.leadInfo?.name}</span>. We'll review your business challenge and email you at <span className="font-semibold text-slate-800">{answers.leadInfo?.email}</span> within 1 business day.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                Back to Website →
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
