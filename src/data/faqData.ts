import { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    id: 'tech-knowledge',
    category: 'general',
    question: 'Do my employees or I need technical skills to work with you?',
    answer:
      'No. We design every solution and standard operating procedure for non-technical teams. We explain everything in plain English, handle the entire technical setup, and provide simple 1-page guides and hands-on walkthroughs so your team feels completely confident.',
  },
  {
    id: 'is-ai-required',
    category: 'process',
    question: 'What if AI is not the right answer for our business problem?',
    answer:
      'We will tell you honestly. Often the most effective fix for operational friction is a simple spreadsheet formula, an off-the-shelf software integration, or a clear checklist rather than expensive custom AI. We start with the bottleneck, not the technology.',
  },
  {
    id: 'timeline',
    category: 'process',
    question: 'How long does a typical implementation take?',
    answer:
      'Most lightweight pilots (such as a 24/7 AI voice assistant or an automated data-entry pipeline) are built and live within 5 to 10 business days. Comprehensive process documentation and team SOP systems typically take 2 to 3 weeks with zero disruption to your daily operations.',
  },
  {
    id: 'data-privacy',
    category: 'security',
    question: 'How is our company data and client privacy protected?',
    answer:
      'Your business data belongs strictly to you. We implement enterprise-grade security practices, sign non-disclosure agreements (NDAs) prior to onboarding, and ensure that AI models and automated workflows are configured never to use your proprietary information for public model training.',
  },
  {
    id: 'pricing-structure',
    category: 'pricing',
    question: 'How does Spherionix structure pricing?',
    answer:
      'We work on clear, fixed-scope project agreements or straightforward monthly advisory retainers. You receive an upfront, transparent proposal with zero hidden fees or unexpected surprise hours before any work begins.',
  },
  {
    id: 'getting-started',
    category: 'general',
    question: 'What does the initial consultation look like?',
    answer:
      'It is a 20-minute, zero-sales-pressure discovery call. We ask about what is currently taking up too much of your time, review your current tools, and give you 2 to 3 practical options you can review with your leadership team.',
  },
];
