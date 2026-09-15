import React, { useState } from 'react';
import { faqData } from '../../data/faqData';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { AnalyticsService } from '../../services/analyticsService';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const toggleFAQ = (id: string, question: string) => {
    const nextState = openId === id ? null : id;
    setOpenId(nextState);
    if (nextState) {
      AnalyticsService.trackEvent({
        name: 'faq_expanded',
        properties: { faqId: id, question },
      });
    }
  };

  return (
    <Section id="faq" bg="bone" withBorder>
      <Container size="md">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#c2410c] font-bold block">
            05 / Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12]">
            Straightforward answers{' '}
            <span className="font-serif italic font-normal text-[#666663] block sm:inline">
              for business owners.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#666663]">
            Clear, honest information before you decide to speak with us.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 text-left">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#171717]/10 bg-white transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id, faq.question)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:bg-[#f1eee7]/50"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-bold text-base sm:text-lg text-[#171717] hover:text-[#c2410c] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-[#f1eee7] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#c2410c] text-white' : 'text-[#171717]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#666663] leading-relaxed border-t border-[#171717]/5 animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-[#f1eee7] border border-[#171717]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <span className="font-bold text-sm text-[#171717] flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#c2410c]" />
              Have a specific question about your workflow?
            </span>
            <p className="text-xs text-[#666663]">
              Send an email to <a href="mailto:info@spherionix.com" className="font-semibold text-[#171717] hover:underline">info@spherionix.com</a> and our advisory team will answer directly.
            </p>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-[#171717] hover:bg-[#c2410c] text-white text-xs font-semibold transition-colors shrink-0"
          >
            Ask a Question →
          </a>
        </div>

      </Container>
    </Section>
  );
};
