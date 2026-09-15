import React, { useState } from 'react';
import { allServices, servicesCategories } from '../../data/servicesData';
import { ServiceItem } from '../../types';
import { IconHelper } from '../common/IconHelper';
import { X, Search, CheckCircle2, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string | null;
  onSelectServiceForIntake: (serviceTitle: string) => void;
}

export const ServicesModal: React.FC<ServicesModalProps> = ({
  isOpen,
  onClose,
  selectedServiceId = null,
  onSelectServiceForIntake,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeServiceId, setActiveServiceId] = useState<string>(
    selectedServiceId || allServices[0].id
  );

  // Update active service if selectedServiceId changes
  React.useEffect(() => {
    if (selectedServiceId) {
      setActiveServiceId(selectedServiceId);
      const service = allServices.find((s) => s.id === selectedServiceId);
      if (service) {
        setActiveCategory(service.category);
      }
    }
  }, [selectedServiceId]);

  if (!isOpen) return null;

  const filteredServices = allServices.filter((service) => {
    const matchesCategory =
      activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.corePositioning.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentService: ServiceItem =
    allServices.find((s) => s.id === activeServiceId) || filteredServices[0] || allServices[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Top Modal Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-600/30 border border-brand-500/40 flex items-center justify-center text-brand-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">Spherionix Complete Services Directory</h2>
              <p className="text-xs text-slate-400 hidden sm:block">
                All 9 practical advisory, automation, and custom engineering services
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          {/* Categories Pill Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              All Services (9)
            </button>
            {servicesCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services or topics..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>
        </div>

        {/* Main Content Area: Split View */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-0">
          
          {/* Left Column: Services List (4 cols) */}
          <div className="md:col-span-4 border-r border-slate-200 overflow-y-auto p-3 space-y-1.5 bg-slate-50/50 max-h-[35vh] md:max-h-full">
            {filteredServices.map((service) => {
              const isSelected = service.id === currentService.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-white border-brand-500 shadow-sm ring-1 ring-brand-500'
                      : 'border border-transparent hover:bg-white hover:border-slate-200'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                      isSelected
                        ? 'bg-brand-600 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    <IconHelper name={service.iconName} className="w-4 h-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 truncate">
                        {service.title}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 ml-1">
                        {service.number}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {service.heroTagline}
                    </span>
                  </div>
                </button>
              );
            })}

            {filteredServices.length === 0 && (
              <div className="p-6 text-center text-xs text-slate-400">
                No services match your search query.
              </div>
            )}
          </div>

          {/* Right Column: Detailed View of Selected Service (8 cols) */}
          <div className="md:col-span-8 overflow-y-auto p-6 sm:p-8 space-y-6 bg-white min-h-0">
            {currentService && (
              <div className="space-y-6 animate-in fade-in duration-150">
                
                {/* Title & Category Badge */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-semibold border border-brand-200">
                      {currentService.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Service {currentService.number} / 09
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {currentService.title}
                  </h3>

                  <p className="text-base font-medium text-brand-700">
                    "{currentService.corePositioning}"
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentService.description}
                </p>

                {/* What We Deliver / What This Includes */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    What This Service Includes
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {currentService.bulletPoints.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real-World Examples */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Practical Real-World Use Cases
                  </h4>
                  <div className="space-y-2">
                    {currentService.practicalExamples.map((ex, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-blue-50/50 border border-blue-100 text-xs text-slate-700 flex items-start gap-2.5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expected Business Outcome */}
                <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                    Target Business Outcome
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {currentService.targetOutcome}
                  </p>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">
                    Wondering if {currentService.shortTitle} fits your business?
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectServiceForIntake(currentService.title);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-all shadow-sm"
                  >
                    Start AI Assessment For This Service
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
