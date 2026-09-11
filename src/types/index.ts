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
