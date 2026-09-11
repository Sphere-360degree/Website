import React from 'react';
import { Compass, Zap, PhoneCall, FileText, ArrowRight } from 'lucide-react';

interface SimpleWaysSectionProps {
  onOpenIntakeWithTopic: (topic: string) => void;
}

export const SimpleWaysSection: React.FC<SimpleWaysSectionProps> = ({ onOpenIntakeWithTopic }) => {
  const services = [
    {
      icon: <Compass className="w-6 h-6 text-blue-600" />,
      title: 'AI Consulting',
      description: 'Find practical ways AI can help your business.',
      topic: 'AI Consulting'
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      title: 'Automation',
      description: 'Let technology handle repetitive work.',
      topic: 'Automation'
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-emerald-600" />,
      title: 'Voice Assistants',
      description: "Answer calls and help customers, even when you're busy.",
      topic: 'Voice Assistants'
    },
    {
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      title: 'SOPs & Processes',
      description: 'Turn the way you work into simple, repeatable steps.',
      topic: 'SOPs & Processes'
    },
  ];

  return (
    <section id="ways" className="py-16 sm:py-24 bg-white border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Help
          </h2>
          <p className="text-base text-slate-600 max-w-md mx-auto">
            Practical ways to save time and streamline your business.
          </p>
        </div>

        {/* 4 Ultra-Clean Short Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {services.map((item, idx) => (
            <button
              key={idx}
              onClick={() => onOpenIntakeWithTopic(item.topic)}
              className="p-6 sm:p-7 rounded-2xl bg-[#fafaf9] border border-slate-200/90 text-left hover:border-blue-300 hover:shadow-md hover:bg-white transition-all group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-800">
                <span>Explore {item.title}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
