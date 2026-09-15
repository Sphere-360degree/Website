export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: 'strategy' | 'automation' | 'process';
  categoryLabel: string;
  isFeaturedOnHome: boolean;
  heroTagline: string;
  description: string;
  corePositioning: string;
  bulletPoints: string[];
  practicalExamples: string[];
  targetOutcome: string;
  iconName: string;
  colorTheme?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'process' | 'pricing' | 'technical' | 'security';
}

export interface LeadSubmissionPayload {
  name: string;
  email: string;
  message?: string;
  phone?: string;
  company?: string;
  industry?: string;
  assessmentData?: {
    primaryFriction?: string;
    secondaryFriction?: string;
    desiredGoal?: string;
    synthesis?: string;
  };
  source?: string;
  honeypot?: string; // Spam trap
  timestamp?: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  message: string;
  referenceId?: string;
  errors?: Record<string, string>;
}

export type AnalyticsEvent = 
  | { name: 'cta_click'; properties: { location: string; label: string; href?: string } }
  | { name: 'assessment_step_complete'; properties: { step: number; choiceId: string; industry?: string } }
  | { name: 'assessment_completed'; properties: { friction: string; goal: string; industry: string } }
  | { name: 'lead_form_submitted'; properties: { source: 'contact_form' | 'assessment_canvas' } }
  | { name: 'copy_diagnostic_report'; properties: { industry: string } }
  | { name: 'faq_expanded'; properties: { faqId: string; question: string } };

export interface IntakeAnswer {
  visitorRole: string;
  businessType: string;
  teamSize: string;
  industry: string;
  primaryGoals: string[];
  interestedServices: string[];
  freeformProblem: string;
  leadInfo?: {
    name: string;
    email: string;
    company: string;
    phone?: string;
    budget?: string;
    timeline?: string;
  };
}

export interface RecommendedOpportunity {
  id: string;
  title: string;
  serviceId: string;
  matchScore: number;
  whyThisFits: string;
  whatWeDo: string;
  estimatedTimeframe: string;
  recommendedNextStep: string;
  iconName: string;
}

export interface AssessmentResult {
  clientSynthesis: string;
  keyPainPoints: string[];
  topOpportunities: RecommendedOpportunity[];
  strategicAdvice: string;
  estimatedComplexity: 'Low' | 'Medium' | 'High';
  suggestedFirstStep: string;
  timestamp: string;
}

export interface UseCaseItem {
  id: string;
  problem: string;
  problemContext: string;
  solution: string;
  serviceId: string;
  serviceName: string;
  practicalApproach: string;
  outcome: string;
  badge: string;
}
