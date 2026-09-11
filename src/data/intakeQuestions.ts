export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  iconName?: string;
}

export interface IntakeStepConfig {
  step: number;
  title: string;
  subtitle: string;
  helperText?: string;
}

export const intakeRoles: QuestionOption[] = [
  { id: 'business-owner', label: 'Business Owner', description: 'Founder / Managing Director running the business' },
  { id: 'founder', label: 'Startup Founder', description: 'Building an early-stage or high-growth venture' },
  { id: 'manager', label: 'Operations / General Manager', description: 'Leading teams, workflows, and delivery' },
  { id: 'professional', label: 'Professional / Consultant', description: 'Independent or partner in professional services' },
  { id: 'team-lead', label: 'Company / Team Lead', description: 'Exploring technology options for a business unit' },
  { id: 'exploring', label: 'Just Exploring', description: 'Curious about what AI and automation can do' },
];

export const teamSizes: QuestionOption[] = [
  { id: 'solo', label: 'Just me (1 person)' },
  { id: '2-10', label: '2 – 10 people' },
  { id: '11-50', label: '11 – 50 people' },
  { id: '51-200', label: '51 – 200 people' },
  { id: '200+', label: '200+ people' },
];

export const industriesList: string[] = [
  'Professional & Legal Services',
  'Healthcare, Medical & Wellness',
  'E-Commerce & Retail',
  'Construction, Trades & Field Services',
  'Real Estate & Property Management',
  'Manufacturing, Wholesale & Logistics',
  'Financial Services & Accounting',
  'Hospitality, Travel & Dining',
  'Technology, Software & IT',
  'Marketing, Agency & Creative',
  'Education & Training',
  'Other / Diverse Operations'
];

export const challengeGoals: QuestionOption[] = [
  { id: 'save-time', label: 'Save time', description: 'Eliminate hours spent on manual busywork' },
  { id: 'reduce-repetitive', label: 'Reduce repetitive work', description: 'Automate recurring tasks across apps' },
  { id: 'customer-service', label: 'Improve customer service', description: 'Provide faster response times 24/7' },
  { id: 'increase-sales', label: 'Increase sales & lead capture', description: 'Qualify and respond to leads immediately' },
  { id: 'improve-operations', label: 'Improve operations', description: 'Streamline bottlenecks and handoffs' },
  { id: 'organize-sops', label: 'Organize business processes', description: 'Document clear SOPs so work is repeatable' },
  { id: 'start-ai', label: 'Start using AI safely', description: 'Figure out where AI makes real sense' },
  { id: 'build-ai-solution', label: 'Build a custom AI solution', description: 'Develop a dedicated tool for our workflow' },
  { id: 'something-else', label: 'Something else', description: 'A unique challenge or combination of needs' }
];

export const specificInterests: QuestionOption[] = [
  { id: 'ai-automation', label: 'AI Automation & Workflows', description: 'Automate emails, data entry, reports, & app syncing' },
  { id: 'ai-voice', label: 'AI Voice Assistant', description: 'Handle incoming phone calls, FAQs, and appointment booking' },
  { id: 'ai-chatbot', label: 'AI Chatbot for Website', description: 'Engage website visitors and qualify prospects 24/7' },
  { id: 'internal-ai', label: 'Internal AI Assistant', description: 'Search company docs and answer employee questions' },
  { id: 'sop-creation', label: 'SOP Creation & Documentation', description: 'Turn informal workflows into written standard procedures' },
  { id: 'process-improvement', label: 'Business Process Improvement', description: 'Audit workflows and fix operational friction' },
  { id: 'ai-strategy', label: 'AI Strategy & Tool Selection', description: 'Determine the right roadmap before buying tools' },
  { id: 'employee-training', label: 'Employee AI Training', description: 'Practical workshops to upskill your team on AI' },
  { id: 'custom-ai', label: 'Custom AI Solution', description: 'Tailored software or pipeline for your specific business' }
];

export const problemPromptSuggestions = [
  "We are getting overwhelmed with repetitive customer phone calls and FAQs every day.",
  "Our processes exist only in the owner's head, making onboarding new employees difficult.",
  "Our staff spends 10+ hours a week manually copy-pasting data between spreadsheets and our CRM.",
  "We want to use AI to improve our business, but we don't know where to start or what to trust.",
  "Employees constantly interrupt senior managers to ask the same procedural and policy questions.",
  "Leads on our website go cold because we take too long to respond outside business hours."
];
