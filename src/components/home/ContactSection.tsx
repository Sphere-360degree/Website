import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { LeadService } from '../../services/leadService';
import { AnalyticsService } from '../../services/analyticsService';
import { FormInput, FormTextarea } from '../ui/FormInput';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
    honeypot: '', // Spam trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = await LeadService.submitLead({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      honeypot: formData.honeypot,
      source: 'contact_section',
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      setReferenceId(result.referenceId || '');
      AnalyticsService.trackLeadSubmission('contact_form');
    } else {
      if (result.errors) {
        setErrors(result.errors);
      }
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#f8f7f4] border-t border-[#171717]/10">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        <div className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#c2410c] font-bold block">
            06 / Direct Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight">
            Let's talk about your business.
          </h2>
          <p className="text-sm sm:text-base text-[#666663]">
            Tell us what's currently slow, frustrating, or repetitive. We review and respond within 1 business day.
          </p>

          {/* Direct Email Link */}
          <div className="pt-1">
            <a
              href="mailto:info@spherionix.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#171717] hover:text-[#c2410c] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#c2410c]" />
              <span>info@spherionix.com</span>
            </a>
          </div>
        </div>

        <div className="bg-[#f1eee7] p-6 sm:p-8 rounded-2xl border border-[#171717]/10 shadow-xs">
          {submitted ? (
            <div className="py-8 text-center space-y-3 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-[#171717]">Message Received</h4>
              <p className="text-xs sm:text-sm text-[#666663] leading-relaxed max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-[#171717]">{formData.name}</span>. We have received your note and will get back to you at <span className="font-semibold text-[#171717]">{formData.email}</span> shortly.
              </p>
              {referenceId && (
                <span className="inline-block text-[11px] font-mono px-2.5 py-1 rounded bg-white text-[#737373] border border-[#171717]/10">
                  Ref: {referenceId}
                </span>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Spam protection honeypot (hidden from screen readers & users) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <input
                  type="text"
                  name="website_honeypot_field"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="Your Name"
                  required
                  placeholder="Sarah Jenkins"
                  value={formData.name}
                  error={errors.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <FormInput
                  label="Email Address"
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  error={errors.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <FormInput
                label="Company or Industry (Optional)"
                placeholder="e.g. Jenkins Roofing / Medical Clinic"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />

              <FormTextarea
                label="How can we help?"
                required
                rows={3}
                placeholder="Briefly describe what's slowing your team down or what you'd like to automate..."
                value={formData.message}
                error={errors.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isSubmitting}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Send Inquiry to Spherionix
                </Button>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#666663]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Confidential</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
