import { ServiceItem } from '../types';

export const servicesCategories = [
  { id: 'strategy', label: 'AI Strategy & Advisory' },
  { id: 'automation', label: 'Intelligent Automation & Assistants' },
  { id: 'process', label: 'Process & Custom Engineering' },
] as const;

export const allServices: ServiceItem[] = [
  // 1. AI Consulting & Strategy
  {
    id: 'ai-strategy',
    number: '01',
    title: 'AI Consulting & Strategy',
    shortTitle: 'AI Strategy',
    category: 'strategy',
    categoryLabel: 'Strategy & Advisory',
    isFeaturedOnHome: true,
    heroTagline: 'Make sense of AI without the hype or confusion.',
    corePositioning: "You don't need to know what AI tool you need. We'll help you figure that out.",
    description:
      'We help business leaders understand where AI actually makes business sense, where it creates genuine leverage, and where it is a waste of money.',
    bulletPoints: [
      'AI readiness and digital infrastructure assessment',
      'High-impact AI opportunity identification',
      'Practical AI roadmap and ROI prioritization',
      'Vendor-agnostic AI tool selection and evaluation',
      'Implementation planning and adoption guidance',
      'Risk, data privacy, and governance review'
    ],
    practicalExamples: [
      'Evaluating whether your customer support volume justifies an AI assistant',
      'Auditing internal software stacks to identify hidden automation opportunities',
      'Drafting an actionable 90-day AI rollout plan for non-technical teams'
    ],
    targetOutcome: 'A clear, jargon-free roadmap showing exactly what to implement, when, and the expected ROI.',
    iconName: 'Compass',
    colorTheme: 'blue'
  },

  // 2. AI Automation
  {
    id: 'ai-automation',
    number: '02',
    title: 'AI Automation & Workflows',
    shortTitle: 'AI Automation',
    category: 'automation',
    categoryLabel: 'Automation & Operations',
    isFeaturedOnHome: true,
    heroTagline: 'Eliminate repetitive manual tasks across your business.',
    corePositioning: 'Save hours every week and reduce costly manual errors by linking your tools.',
    description:
      'We connect your existing business tools and build intelligent automations that handle repetitive data entry, follow-ups, document routing, and administrative overhead.',
    bulletPoints: [
      'Automated email triage, categorization, and drafting',
      'Data entry and multi-app synchronization',
      'Document parsing, invoice extraction, and receipt filing',
      'Automated lead qualification and CRM updates',
      'Client onboarding sequence automation',
      'Automated reporting and weekly metric summaries'
    ],
    practicalExamples: [
      'Automatically extracting data from incoming vendor PDFs and creating accounting entries',
      'Syncing web inquiries into your CRM, tagging priority leads, and drafting instant personalized replies',
      'Triggering automated client onboarding sequences upon payment receipt'
    ],
    targetOutcome: 'Reclaim 10-25 hours per employee every week by turning multi-step busywork into zero-touch workflows.',
    iconName: 'Zap',
    colorTheme: 'indigo'
  },

  // 3. AI Voice Assistants
  {
    id: 'ai-voice-assistants',
    number: '03',
    title: 'AI Voice Assistants',
    shortTitle: 'Voice Assistants',
    category: 'automation',
    categoryLabel: 'Customer Experience',
    isFeaturedOnHome: false,
    heroTagline: 'Give callers a fast, helpful, and natural conversational experience.',
    corePositioning: 'Give your customers a helpful voice assistant when they call your business—without unrealistic promises.',
    description:
      'We design and deploy practical phone voice agents that answer incoming business calls, answer FAQs, take detailed messages, and schedule appointments 24/7.',
    bulletPoints: [
      '24/7 incoming call answering and triage',
      'Natural-sounding conversational FAQ resolution',
      'Appointment booking directly into your calendar',
      'Caller qualification and urgent call routing to staff',
      'Accurate voicemail transcription and CRM logging',
      'Automated post-call confirmation SMS or email'
    ],
    practicalExamples: [
      'A local clinic or service contractor answering after-hours scheduling calls smoothly',
      'A professional office routing callers directly to the correct department without holding queues',
      'Taking accurate emergency intake details when staff is unavailable'
    ],
    targetOutcome: 'Never miss an inbound customer inquiry or revenue opportunity, even during peak hours or weekends.',
    iconName: 'PhoneCall',
    colorTheme: 'teal'
  },

  // 4. AI Chatbots & Website Assistants
  {
    id: 'ai-chatbots',
    number: '04',
    title: 'AI Chatbots & Website Assistants',
    shortTitle: 'AI Voice & Chat',
    category: 'automation',
    categoryLabel: 'Customer Experience',
    isFeaturedOnHome: true,
    heroTagline: 'Engage visitors, answer inquiries, and qualify leads on your website.',
    corePositioning: 'Turn your website from a static brochure into an interactive consultant that guides visitors.',
    description:
      'We build friendly, accurate conversational assistants tailored to your company knowledge. They assist buyers, answer common questions, and guide leads to conversion.',
    bulletPoints: [
      'Interactive website consultation and intake assistants',
      'Accurate company FAQ and policy resolution',
      'Automated lead capture and calendar scheduling',
      'Product and service recommendation guides',
      'Multi-language customer service support',
      'Seamless human handoff when a complex issue arises'
    ],
    practicalExamples: [
      'A consultation intake assistant just like the one on Spherionix.com',
      'An e-commerce concierge helping shoppers find the right product specifications',
      'A service business assistant qualifying prospective clients before booking a discovery call'
    ],
    targetOutcome: 'Instant 24/7 visitor engagement and higher conversion rates from existing traffic.',
    iconName: 'MessageSquareText',
    colorTheme: 'cyan'
  },

  // 5. SOP Creation & Business Process Documentation
  {
    id: 'sop-documentation',
    number: '05',
    title: 'SOP Creation & Business Process Documentation',
    shortTitle: 'SOPs & Process',
    category: 'process',
    categoryLabel: 'Process & Operations',
    isFeaturedOnHome: true,
    heroTagline: 'Turn how your business works into clear, repeatable processes.',
    corePositioning: 'Document your business processes so your team can work consistently and scale without you.',
    description:
      'We interview your team, extract tribal knowledge trapped in key people’s heads, and create step-by-step operating procedures that make onboarding seamless and automation feasible.',
    bulletPoints: [
      'Extracting informal workflows through structured interviews',
      'Creating standardized, step-by-step operating guides',
      'Auditing and modernizing outdated company procedures',
      'Structuring processes into AI-ready documentation',
      'Building searchable, organized internal knowledge repositories',
      'Eliminating single-person dependencies and bottlenecks'
    ],
    practicalExamples: [
      'Documenting a client onboarding workflow so new staff can execute it flawlessly without supervision',
      'Standardizing quality check checklists before product shipments or project handoffs',
      'Creating clear escalation paths for operational and customer issues'
    ],
    targetOutcome: 'Reduce training time by 60%, ensure consistency across projects, and lay the foundation for smooth automation.',
    iconName: 'FileText',
    colorTheme: 'emerald'
  },

  // 6. AI-Powered Knowledge & Internal Assistants
  {
    id: 'internal-ai-assistants',
    number: '06',
    title: 'AI-Powered Knowledge & Internal Assistants',
    shortTitle: 'Internal Assistants',
    category: 'automation',
    categoryLabel: 'Internal Productivity',
    isFeaturedOnHome: false,
    heroTagline: 'Put your company knowledge at your team’s fingertips.',
    corePositioning: 'Let your employees ask questions in plain English and instantly get answers grounded in company SOPs.',
    description:
      'We index your company manuals, policy documents, past proposals, and notes into a secure private assistant that answers employee questions with exact source citations.',
    bulletPoints: [
      'Private internal search across PDFs, Google Docs, Notion, and Wikis',
      'Instant answers to employee policy and procedure questions',
      'SOP reference assistants for operational teams',
      'New employee onboarding support bot',
      'Strict permission and data privacy controls',
      'Source-linked answers that prevent hallucination'
    ],
    practicalExamples: [
      'An employee asking "What is our policy on client refund requests over $500?" and getting the exact SOP paragraph',
      'A technician in the field pulling up equipment maintenance protocols in seconds',
      'A sales rep referencing past successful proposal clauses instantly'
    ],
    targetOutcome: 'Stop senior managers from answering the same 10 routine questions every day.',
    iconName: 'BrainCircuit',
    colorTheme: 'violet'
  },

  // 7. AI Training & Workshops
  {
    id: 'ai-training',
    number: '07',
    title: 'AI Training & Practical Workshops',
    shortTitle: 'AI Training',
    category: 'strategy',
    categoryLabel: 'Team Enablement',
    isFeaturedOnHome: false,
    heroTagline: 'Empower your team with practical AI skills they can use tomorrow.',
    corePositioning: 'Hands-on, zero-fluff training focused on day-to-day productivity rather than academic theory.',
    description:
      'We provide practical training sessions for business teams on how to effectively prompt, use AI tools in their daily workflows, and safely adopt AI without risking private company data.',
    bulletPoints: [
      'AI productivity fundamentals for non-technical staff',
      'Department-specific workflows (Marketing, Ops, Sales, HR, Finance)',
      'Effective prompting and workflow structuring',
      'Data privacy, security, and responsible AI guidelines',
      'Interactive hands-on workshops tailored to your tools',
      'Custom cheat sheets and prompt templates for your team'
    ],
    practicalExamples: [
      'Training marketing teams to draft first passes of newsletters and social copy in 15 minutes',
      'Teaching operations staff to analyze spreadsheet trends and draft summaries with AI',
      'Educating leadership on secure data policies when using generative AI tools'
    ],
    targetOutcome: 'Immediate lift in everyday team output with clear guidelines that protect your business data.',
    iconName: 'GraduationCap',
    colorTheme: 'amber'
  },

  // 8. Business & Technology Consulting
  {
    id: 'business-tech-consulting',
    number: '08',
    title: 'Business & Technology Consulting',
    shortTitle: 'Tech Consulting',
    category: 'strategy',
    categoryLabel: 'Business Optimization',
    isFeaturedOnHome: false,
    heroTagline: 'Find the right solution—even when the answer is not AI.',
    corePositioning: "Sometimes the answer isn't AI. We'll help you find the right solution.",
    description:
      'Not every problem needs artificial intelligence. We help you untangle clunky tech stacks, evaluate software vendors, fix broken workflows, and choose the simplest tool that works.',
    bulletPoints: [
      'Business process and operational workflow audits',
      'Software stack consolidation and simplification',
      'SaaS vendor evaluation and procurement advice',
      'Digital transformation guidance for legacy businesses',
      'System integration and data flow optimization',
      'Technology strategy aligned with financial goals'
    ],
    practicalExamples: [
      'Consolidating 6 disjointed subscription tools into 2 integrated platforms to cut costs',
      'Redesigning an operational fulfillment bottleneck before applying software',
      'Providing an objective second opinion on a costly software proposal from a vendor'
    ],
    targetOutcome: 'Clean, cost-effective technology infrastructure that supports your business growth instead of complicating it.',
    iconName: 'Layers',
    colorTheme: 'slate'
  },

  // 9. Custom AI Solutions
  {
    id: 'custom-ai-solutions',
    number: '09',
    title: 'Custom AI Solutions',
    shortTitle: 'Custom Solutions',
    category: 'process',
    categoryLabel: 'Custom Engineering',
    isFeaturedOnHome: true,
    heroTagline: 'Tailored intelligent systems built around your exact workflow.',
    corePositioning: 'Custom solutions designed specifically after we thoroughly understand your business requirements.',
    description:
      'When off-the-shelf software falls short, we design, build, and deploy custom AI-powered web applications, internal tools, and specialized pipelines tailored to your exact operational requirements.',
    bulletPoints: [
      'Bespoke AI-powered internal portals and dashboards',
      'Custom document extraction and validation pipelines',
      'Proprietary data ingestion and fine-tuned retrieval systems',
      'API integrations connecting legacy databases with modern AI models',
      'Custom customer-facing intelligence features',
      'Ongoing support, monitoring, and performance refinement'
    ],
    practicalExamples: [
      'A specialized compliance checking tool that verifies supplier documents against safety regulations',
      'An automated estimation calculator for custom manufacturing orders',
      'A custom intake and diagnosis assistant for high-touch service clients'
    ],
    targetOutcome: 'A proprietary competitive advantage built directly into your operational core.',
    iconName: 'Cpu',
    colorTheme: 'purple'
  }
];

export const featuredHomepageServices = allServices.filter(s => s.isFeaturedOnHome);
