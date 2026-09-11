import { UseCaseItem } from '../types';

export const useCasesData: UseCaseItem[] = [
  {
    id: 'phone-overload',
    problem: 'A business gets too many phone calls',
    problemContext:
      'Front-desk staff spends hours answering repetitive questions about hours, pricing, and scheduling, while urgent customer calls go to voicemail.',
    solution: 'AI Voice Assistant',
    serviceId: 'ai-voice-assistants',
    serviceName: 'AI Voice Assistants',
    badge: 'Customer Operations',
    practicalApproach:
      'We deploy a natural-sounding voice assistant to answer routine calls 24/7, answer common questions, book calendar slots, and seamlessly route high-priority callers to human staff.',
    outcome: 'Zero missed inbound opportunities, 75% reduction in routine call load on human staff, and 24/7 customer responsiveness.'
  },
  {
    id: 'internal-questions',
    problem: 'Employees keep asking the same questions',
    problemContext:
      'Senior managers and founders are constantly interrupted by team members asking how to handle specific tasks, client exceptions, or internal policies.',
    solution: 'Internal AI Assistant & Knowledge Base',
    serviceId: 'internal-ai-assistants',
    serviceName: 'AI-Powered Knowledge & Internal Assistants',
    badge: 'Team Productivity',
    practicalApproach:
      'We organize company SOPs and documents into a private, secure AI assistant that answers employee questions instantly with direct citations from company guidelines.',
    outcome: 'Saves 5+ hours weekly per manager, eliminates bottlenecks, and gives staff instant confidence on how to execute standard tasks.'
  },
  {
    id: 'knowledge-in-head',
    problem: "Business processes exist only in the owner's head",
    problemContext:
      'The company relies on the founder or key employees for every minor operational decision. Onboarding takes months and quality varies when the owner is absent.',
    solution: 'SOP Documentation & Standardization',
    serviceId: 'sop-documentation',
    serviceName: 'SOP Creation & Business Process Documentation',
    badge: 'Business Scalability',
    practicalApproach:
      'We conduct structured interviews with your team to extract and structure undocumented workflows into clear, step-by-step operating guides that anyone can follow.',
    outcome: 'Reduces onboarding time by over 50%, ensures consistent service delivery, and prepares your business for smooth automation or eventual sale.'
  },
  {
    id: 'repetitive-admin',
    problem: 'Employees spend hours doing repetitive administrative work',
    problemContext:
      'Staff members spend hours re-typing data from customer forms into software, manually sending follow-up emails, and creating weekly status spreadsheets.',
    solution: 'AI Automation & Workflow Integration',
    serviceId: 'ai-automation',
    serviceName: 'AI Automation & Workflows',
    badge: 'Operational Efficiency',
    practicalApproach:
      'We connect your existing tools (CRM, Email, Billing, Google Sheets) and build automated triggers that process documents, sync records, and send notifications automatically.',
    outcome: 'Eliminates 15-20 hours of manual busywork per week, removes copy-paste human errors, and frees your team to focus on high-value client work.'
  },
  {
    id: 'no-direction',
    problem: "Business doesn't know where to start with AI",
    problemContext:
      'Leadership hears about AI daily but feels overwhelmed by conflicting software pitches, exaggerated claims, and fear of making costly mistakes.',
    solution: 'AI Readiness & Practical Strategy',
    serviceId: 'ai-strategy',
    serviceName: 'AI Consulting & Strategy',
    badge: 'Strategic Clarity',
    practicalApproach:
      'We perform an objective operational audit of your business, identify the top 2-3 high-leverage opportunities, and deliver a simple, actionable implementation plan.',
    outcome: 'Clear, unbiased roadmap with realistic ROI projections—preventing wasted software spend and accelerating practical adoption.'
  }
];
