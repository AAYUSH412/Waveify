/**
 * Web Vitals reporting for Next.js
 * Measures Core Web Vitals and sends to analytics
 */

import { reportWebVitals as trackPerformanceMetric } from '@/lib/performance';

export function reportWebVitals(metric: any) {
  // Report to our performance monitoring system
  trackPerformanceMetric(metric);
  
  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
  
  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
}
