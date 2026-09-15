import React, { useState } from 'react';
import { Send, Mail, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#f8f7f4]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        <div className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#c2410c] font-bold block">
            05 / Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight">
            Let's talk about your business.
          </h2>
          <p className="text-base text-[#666663]">
            Tell us what's on your mind. We respond within 1 business day.
          </p>

          {/* Direct Email Callout */}
          <div className="pt-2">
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
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-bold">
                ✓
              </div>
              <h4 className="text-xl font-bold text-[#171717]">Message Received</h4>
              <p className="text-sm text-[#666663]">
                Thank you, {formData.name}. We will review your note and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#171717] font-bold mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Sarah Jenkins"
                  className="w-full p-3.5 rounded-xl border border-[#171717]/20 text-sm focus:border-[#171717] outline-none bg-white"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#171717] font-bold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@yourcompany.com"
                  className="w-full p-3.5 rounded-xl border border-[#171717]/20 text-sm focus:border-[#171717] outline-none bg-white"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#171717] font-bold mb-1">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you're trying to improve or fix..."
                  className="w-full p-3.5 rounded-xl border border-[#171717]/20 text-sm focus:border-[#171717] outline-none bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#171717] hover:bg-[#c2410c] text-white font-semibold text-sm transition-colors shadow-xs"
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
