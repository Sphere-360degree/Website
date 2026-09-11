import React from 'react';
import { featuredHomepageServices, allServices } from '../../data/servicesData';
import { IconHelper } from '../common/IconHelper';
import { ArrowRight, CheckCircle2, Sparkles, Layers, ChevronRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenServicesModal: (serviceId?: string) => void;
  onOpenIntake: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenServicesModal,
  onOpenIntake,
}) => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold">
              <Layers className="w-3.5 h-3.5 text-brand-600" />
              Core Consulting & Implementation Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Practical capabilities built around real business needs.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We don't sell monolithic software or unnecessary complexity. We help you solve specific operational bottlenecks using the right tool for the job.
            </p>
          </div>

          <button
            onClick={() => onOpenServicesModal()}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 shadow-xs transition-colors"
          >
            <span>Explore All 9 Services in Full Detail</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </button>
        </div>

        {/* 5 Homepage Featured Service Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredHomepageServices.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl border border-slate-200/90 p-7 flex flex-col justify-between hover:border-brand-300 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ${
                index === 0 ? 'lg:col-span-2 bg-gradient-to-br from-white via-white to-slate-50' : ''
              }`}
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <IconHelper name={service.iconName} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {service.number} / 05
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 block mb-1">
                  {service.categoryLabel}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-slate-700 mb-3 italic">
                  "{service.corePositioning}"
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Deliverables:
                  </span>
                  {service.bulletPoints.slice(0, 3).map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenServicesModal(service.id)}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors"
                >
                  View Details
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenIntake(service.title)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 group-hover:bg-brand-600 text-white text-xs font-semibold transition-colors"
                >
                  <span>Assess Fit</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick 6th Card: Additional 4 Services Callout */}
          <div className="bg-slate-900 text-white rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Specialized Services
              </div>

              <h3 className="text-xl font-bold text-white">
                Looking for Knowledge Bases, Voice AI, or Team Training?
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Explore our full service catalog including AI Voice Call Handlers, Company Knowledge Systems, Employee Productivity Workshops, and Vendor Evaluations.
              </p>
            </div>

            <button
              onClick={() => onOpenServicesModal()}
              className="relative z-10 mt-6 inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              Browse Complete 9-Service Directory
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
