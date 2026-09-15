import { AnalyticsEvent } from '../types';

/**
 * Analytics & User Event Service
 * Provides structured tracking for CTAs, assessment progress, and conversions
 * without tightly coupling third-party tracking scripts to UI components.
 */
export class AnalyticsService {
  private static isInitialized = false;

  public static trackEvent(event: AnalyticsEvent): void {
    if (import.meta.env.DEV) {
      // Clean console log during development for verification
      console.debug(`[Analytics Event: ${event.name}]`, event.properties);
    }

    // Window dataLayer / Google Tag Manager / Custom Analytics integration bridge
    if (typeof window !== 'undefined') {
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      if (Array.isArray(w.dataLayer)) {
        w.dataLayer.push({
          event: event.name,
          ...event.properties,
          timestamp: new Date().toISOString(),
        });
      }
    }
  }

  public static trackCTAClick(label: string, location: string, href?: string): void {
    this.trackEvent({
      name: 'cta_click',
      properties: { label, location, href },
    });
  }

  public static trackAssessmentStep(step: number, choiceId: string, industry?: string): void {
    this.trackEvent({
      name: 'assessment_step_complete',
      properties: { step, choiceId, industry },
    });
  }

  public static trackLeadSubmission(source: 'contact_form' | 'assessment_canvas'): void {
    this.trackEvent({
      name: 'lead_form_submitted',
      properties: { source },
    });
  }
}
