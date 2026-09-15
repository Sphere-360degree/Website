import { IntakeAnswer, AssessmentResult, RecommendedOpportunity } from '../types';
import { allServices } from '../data/servicesData';

/**
 * Intelligent Rule-Based & Heuristic AI Recommendation Engine
 * Structured to allow seamless connection with external LLM APIs (OpenAI / Gemini / Claude)
 * or CRM webhooks in the future.
 */
export async function generateAIAssessment(answers: IntakeAnswer): Promise<AssessmentResult> {
  // Simulate intelligent analysis processing delay (600ms for realistic AI feeling)
  await new Promise((resolve) => setTimeout(resolve, 800));

  const roleText = answers.visitorRole ? formatRole(answers.visitorRole) : 'Business Leader';
  const industryText = answers.industry || 'your industry';
  const teamText = answers.teamSize ? formatTeamSize(answers.teamSize) : 'your team';
  const problemLower = (answers.freeformProblem || '').toLowerCase();
  const selectedGoals = answers.primaryGoals || [];
  const selectedInterests = answers.interestedServices || [];

  // Scored service candidates
  const scores: Record<string, { score: number; why: string; action: string }> = {};

  // Initialize all services
  allServices.forEach((s) => {
    scores[s.id] = { score: 10, why: '', action: '' };
  });

  // Evaluate Free-form Problem keywords
  if (problemLower.includes('phone') || problemLower.includes('call') || problemLower.includes('reception') || problemLower.includes('voicemail') || problemLower.includes('ring')) {
    scores['ai-voice-assistants'].score += 50;
    scores['ai-voice-assistants'].why = `Directly solves incoming call volume and ensures 24/7 phone response for ${industryText}.`;
  }
  if (problemLower.includes('head') || problemLower.includes('sop') || problemLower.includes('document') || problemLower.includes('onboard') || problemLower.includes('training') || problemLower.includes('procedure') || problemLower.includes('inconsistent')) {
    scores['sop-documentation'].score += 45;
    scores['sop-documentation'].why = `Standardizes tribal knowledge into repeatable operating procedures so ${teamText} can work consistently.`;
  }
  if (problemLower.includes('copy') || problemLower.includes('paste') || problemLower.includes('data entry') || problemLower.includes('repetitive') || problemLower.includes('manual') || problemLower.includes('spreadsheet') || problemLower.includes('sync')) {
    scores['ai-automation'].score += 50;
    scores['ai-automation'].why = `Eliminates manual data re-entry and links disparate software tools together automatically.`;
  }
  if (problemLower.includes('question') || problemLower.includes('interrupt') || problemLower.includes('policy') || problemLower.includes('search') || problemLower.includes('internal') || problemLower.includes('find doc')) {
    scores['internal-ai-assistants'].score += 45;
    scores['internal-ai-assistants'].why = `Gives staff an instant AI assistant that answers questions grounded directly in your company documents.`;
  }
  if (problemLower.includes('website') || problemLower.includes('visitor') || problemLower.includes('lead') || problemLower.includes('chat') || problemLower.includes('inquiry') || problemLower.includes('convert')) {
    scores['ai-chatbots'].score += 40;
    scores['ai-chatbots'].why = `Engages website visitors in real-time, answers common inquiries, and qualifies prospective clients.`;
  }
  if (problemLower.includes('where to start') || problemLower.includes('confused') || problemLower.includes('strategy') || problemLower.includes('roadmap') || problemLower.includes('overwhelmed') || problemLower.includes('unclear')) {
    scores['ai-strategy'].score += 45;
    scores['ai-strategy'].why = `Provides an objective assessment to separate high-ROI opportunities from unnecessary technology hype.`;
  }
  if (problemLower.includes('custom') || problemLower.includes('portal') || problemLower.includes('specialized') || problemLower.includes('proprietary') || problemLower.includes('unique workflow')) {
    scores['custom-ai-solutions'].score += 45;
    scores['custom-ai-solutions'].why = `Engineers a tailored intelligent application designed around your exact operational logic.`;
  }

  // Factor in Selected Goals
  selectedGoals.forEach((goal) => {
    if (goal === 'save-time' || goal === 'reduce-repetitive') {
      scores['ai-automation'].score += 25;
      scores['ai-automation'].why = scores['ai-automation'].why || 'Automates recurring manual tasks to reclaim valuable weekly hours.';
    }
    if (goal === 'customer-service') {
      scores['ai-voice-assistants'].score += 20;
      scores['ai-chatbots'].score += 20;
      scores['ai-voice-assistants'].why = scores['ai-voice-assistants'].why || 'Delivers instant, helpful 24/7 phone assistance for customer inquiries.';
    }
    if (goal === 'increase-sales') {
      scores['ai-chatbots'].score += 25;
      scores['ai-automation'].score += 15;
    }
    if (goal === 'organize-sops') {
      scores['sop-documentation'].score += 35;
      scores['internal-ai-assistants'].score += 20;
      scores['sop-documentation'].why = scores['sop-documentation'].why || 'Turns undocumented processes into organized, step-by-step standard operating procedures.';
    }
    if (goal === 'start-ai') {
      scores['ai-strategy'].score += 30;
      scores['ai-training'].score += 20;
    }
    if (goal === 'build-ai-solution') {
      scores['custom-ai-solutions'].score += 30;
    }
  });

  // Factor in Explicit Selected Interests
  selectedInterests.forEach((interest) => {
    if (interest === 'ai-voice') scores['ai-voice-assistants'].score += 35;
    if (interest === 'ai-automation') scores['ai-automation'].score += 35;
    if (interest === 'ai-chatbot') scores['ai-chatbots'].score += 35;
    if (interest === 'internal-ai') scores['internal-ai-assistants'].score += 35;
    if (interest === 'sop-creation') scores['sop-documentation'].score += 35;
    if (interest === 'process-improvement') scores['business-tech-consulting'].score += 30;
    if (interest === 'ai-strategy') scores['ai-strategy'].score += 35;
    if (interest === 'employee-training') scores['ai-training'].score += 35;
    if (interest === 'custom-ai') scores['custom-ai-solutions'].score += 35;
  });

  // Sort services by match score
  const sortedServiceIds = Object.keys(scores).sort((a, b) => scores[b].score - scores[a].score);
  const topThreeIds = sortedServiceIds.slice(0, 3);

  // Default fallback if scores are close
  if (topThreeIds.length < 3) {
    ['ai-strategy', 'ai-automation', 'sop-documentation'].forEach((id) => {
      if (!topThreeIds.includes(id) && topThreeIds.length < 3) {
        topThreeIds.push(id);
      }
    });
  }

  // Construct Recommended Opportunities
  const topOpportunities: RecommendedOpportunity[] = topThreeIds.map((serviceId, index) => {
    const service = allServices.find((s) => s.id === serviceId) || allServices[0];
    const scoreData = scores[serviceId];
    
    // Construct tailored "Why this fits"
    let whyFit = scoreData.why;
    if (!whyFit) {
      if (service.id === 'ai-voice-assistants') whyFit = `Handles incoming calls, answers routine questions, collects information, and routes callers 24/7.`;
      else if (service.id === 'sop-documentation') whyFit = `Documents your business processes so your team can work consistently and onboard faster.`;
      else if (service.id === 'ai-automation') whyFit = `Connects your apps to reduce repetitive administrative work and manual copy-pasting.`;
      else if (service.id === 'ai-chatbots') whyFit = `Engages website visitors, answers service FAQs, and captures qualified inquiries automatically.`;
      else if (service.id === 'internal-ai-assistants') whyFit = `Allows staff to ask questions and instantly retrieve verified company knowledge and SOPs.`;
      else if (service.id === 'ai-strategy') whyFit = `Clarifies your highest-ROI AI initiatives and prevents premature investment in wrong tools.`;
      else if (service.id === 'ai-training') whyFit = `Empowers your employees with hands-on, practical AI productivity skills for everyday tasks.`;
      else if (service.id === 'business-tech-consulting') whyFit = `Audits operational friction and streamlines technology systems before adding complexity.`;
      else whyFit = `Builds a specialized solution tailored around your unique business requirements.`;
    }

    const timeframes = ['1 to 2 weeks', '2 to 3 weeks', '3 to 5 weeks'];
    const nextSteps = [
      'Initial 30-minute discovery & workflow walkthrough with Spherionix',
      'Process mapping & opportunity scoping assessment',
      'Proof-of-concept pilot plan tailored to your existing software'
    ];

    return {
      id: `rec-${service.id}`,
      title: service.title,
      serviceId: service.id,
      matchScore: Math.min(98 - index * 6, Math.max(78, 90 + Math.floor(scoreData.score / 5))),
      whyThisFits: whyFit,
      whatWeDo: service.description,
      estimatedTimeframe: timeframes[index % timeframes.length],
      recommendedNextStep: nextSteps[index % nextSteps.length],
      iconName: service.iconName
    };
  });

  // Construct Synthesis Text
  let synthesis = '';
  if (answers.freeformProblem && answers.freeformProblem.trim().length > 15) {
    synthesis = `Based on what you've shared regarding "${answers.freeformProblem.trim().slice(0, 140)}${answers.freeformProblem.length > 140 ? '...' : ''}", we see clear opportunities to eliminate operational bottlenecks and streamline how ${teamText} operates in the ${industryText} space.`;
  } else if (selectedGoals.length > 0) {
    const goalLabels = selectedGoals.map((g) => formatGoalLabel(g)).join(', ');
    synthesis = `We understand that you're looking to ${goalLabels.toLowerCase()} for your team in ${industryText}. Spherionix focuses on solving these operational pain points with practical, non-intimidating technology.`;
  } else {
    synthesis = `As a ${roleText.toLowerCase()} managing ${teamText} in ${industryText}, your primary leverage comes from streamlining repetitive operations, documenting core workflows, and adopting AI where it delivers immediate ROI.`;
  }

  // Extract Key Pain Points
  const keyPainPoints: string[] = [];
  if (problemLower.includes('phone') || selectedInterests.includes('ai-voice')) {
    keyPainPoints.push('High volume of routine telephone inquiries consuming staff bandwidth');
  }
  if (problemLower.includes('head') || selectedGoals.includes('organize-sops') || selectedInterests.includes('sop-creation')) {
    keyPainPoints.push('Critical business workflows trapped in informal knowledge rather than clear documentation');
  }
  if (problemLower.includes('copy') || selectedGoals.includes('save-time') || selectedGoals.includes('reduce-repetitive')) {
    keyPainPoints.push('Repetitive manual administrative tasks and data transfer between disconnected tools');
  }
  if (problemLower.includes('start') || selectedGoals.includes('start-ai')) {
    keyPainPoints.push('Uncertainty about where AI creates tangible business value vs. software hype');
  }
  if (keyPainPoints.length === 0) {
    keyPainPoints.push('Manual operational steps that slow down team execution and client turnaround');
    keyPainPoints.push('Need for clear systems to ensure consistent output as the company grows');
    keyPainPoints.push('Opportunity to leverage modern automation without adding fragile software');
  }

  // Strategic Advice
  let strategicAdvice = "Start with your highest-friction bottleneck first. We recommend proving ROI on a single focused implementation before rolling out broader automation.";
  if (topThreeIds.includes('sop-documentation') && topThreeIds.includes('ai-automation')) {
    strategicAdvice = "Before automating, we always recommend standardizing the underlying SOPs. Automating a clean process yields 10x the benefit of automating a vague one.";
  }

  return {
    clientSynthesis: synthesis,
    keyPainPoints,
    topOpportunities,
    strategicAdvice,
    estimatedComplexity: topThreeIds.includes('custom-ai-solutions') ? 'Medium' : 'Low',
    suggestedFirstStep: 'Schedule a relaxed, no-pressure discovery conversation to review these 3 opportunities and get an actionable plan.',
    timestamp: new Date().toISOString()
  };
}

function formatRole(role: string): string {
  const map: Record<string, string> = {
    'business-owner': 'Business Owner',
    'founder': 'Founder',
    'manager': 'Operations Manager',
    'professional': 'Professional Practitioner',
    'team-lead': 'Team Lead',
    'exploring': 'Business Explorer'
  };
  return map[role] || role;
}

function formatTeamSize(size: string): string {
  const map: Record<string, string> = {
    'solo': 'your solo practice',
    '2-10': 'your 2–10 person team',
    '11-50': 'your 11–50 person team',
    '51-200': 'your growing organization',
    '200+': 'your enterprise team'
  };
  return map[size] || size;
}

function formatGoalLabel(goal: string): string {
  const map: Record<string, string> = {
    'save-time': 'Save valuable team time',
    'reduce-repetitive': 'Reduce repetitive manual tasks',
    'customer-service': 'Improve customer responsiveness',
    'increase-sales': 'Increase sales & lead capture',
    'improve-operations': 'Improve internal operations',
    'organize-sops': 'Document standard operating procedures',
    'start-ai': 'Identify where AI makes sense',
    'build-ai-solution': 'Build a specialized AI tool',
    'something-else': 'Solve core operational challenges'
  };
  return map[goal] || goal;
}
