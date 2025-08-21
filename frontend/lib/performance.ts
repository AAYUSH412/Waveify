/**
 * Performance monitoring utilities for Waveify
 * Tracks Core Web Vitals and component performance
 */

// Core Web Vitals monitoring
export function reportWebVitals(metric: any) {
  if (typeof window !== 'undefined') {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${metric.name}:`, metric);
    }

    // Track performance metrics
    switch (metric.name) {
      case 'FCP':
        // First Contentful Paint
        trackMetric('first_contentful_paint', metric.value);
        break;
      case 'LCP':
        // Largest Contentful Paint
        trackMetric('largest_contentful_paint', metric.value);
        break;
      case 'CLS':
        // Cumulative Layout Shift
        trackMetric('cumulative_layout_shift', metric.value);
        break;
      case 'FID':
        // First Input Delay
        trackMetric('first_input_delay', metric.value);
        break;
      case 'TTFB':
        // Time to First Byte
        trackMetric('time_to_first_byte', metric.value);
        break;
      case 'INP':
        // Interaction to Next Paint
        trackMetric('interaction_to_next_paint', metric.value);
        break;
    }
  }
}

// Generic metric tracking function
function trackMetric(metricName: string, value: number) {
  // In production, you would send this to your analytics service
  // For now, we'll store it in localStorage and log it
  if (typeof window !== 'undefined') {
    try {
      const metrics = JSON.parse(localStorage.getItem('waveify_performance') || '{}');
      metrics[metricName] = {
        value,
        timestamp: Date.now(),
        url: window.location.pathname
      };
      localStorage.setItem('waveify_performance', JSON.stringify(metrics));
      
      // Also track to analytics if available
      if ((window as any).gtag) {
        (window as any).gtag('event', 'performance_metric', {
          metric_name: metricName,
          metric_value: value,
          page_path: window.location.pathname
        });
      }
    } catch (error) {
      console.warn('Failed to track performance metric:', error);
    }
  }
}

// Component performance timer
export class PerformanceTimer {
  private startTime: number;
  private componentName: string;

  constructor(componentName: string) {
    this.componentName = componentName;
    this.startTime = performance.now();
  }

  end() {
    const endTime = performance.now();
    const duration = endTime - this.startTime;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Component Performance] ${this.componentName}: ${duration.toFixed(2)}ms`);
    }
    
    trackMetric(`component_${this.componentName.toLowerCase()}`, duration);
    return duration;
  }
}

// Hook for measuring component render time
export function usePerformanceTimer(componentName: string) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    const timer = new PerformanceTimer(componentName);
    
    // Clean up on unmount
    return () => timer.end();
  }
  
  return () => {};
}

// Bundle size tracker
export function trackBundleSize() {
  if (typeof window !== 'undefined') {
    // Track initial bundle size using Resource Timing API
    window.addEventListener('load', () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      let totalSize = 0;
      
      resources.forEach(resource => {
        if (resource.name.includes('_next/static/')) {
          totalSize += resource.transferSize || 0;
        }
      });
      
      trackMetric('bundle_size', totalSize);
    });
  }
}

// Image loading performance
export function trackImagePerformance(imageName: string, startTime: number) {
  const loadTime = performance.now() - startTime;
  trackMetric(`image_load_${imageName}`, loadTime);
}

// API performance tracking
export function trackAPIPerformance(endpoint: string, duration: number, success: boolean) {
  trackMetric(`api_${endpoint.replace(/[^a-zA-Z0-9]/g, '_')}`, duration);
  
  if (!success) {
    trackMetric(`api_error_${endpoint.replace(/[^a-zA-Z0-9]/g, '_')}`, 1);
  }
}

// Memory usage tracking
export function trackMemoryUsage() {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    const memory = (performance as any).memory;
    trackMetric('memory_used', memory.usedJSHeapSize);
    trackMetric('memory_total', memory.totalJSHeapSize);
    trackMetric('memory_limit', memory.jsHeapSizeLimit);
  }
}

// Export performance summary
export function getPerformanceSummary() {
  if (typeof window !== 'undefined') {
    try {
      const metrics = JSON.parse(localStorage.getItem('waveify_performance') || '{}');
      return metrics;
    } catch {
      return {};
    }
  }
  return {};
}

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window !== 'undefined') {
    // Preload critical fonts
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/fonts/inter-var.woff2';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    // Preload hero images
    const heroImage = new Image();
    heroImage.src = '/images/hero-background.webp';
  }
}

// Memory usage monitoring for lazy loaded components
export function monitorMemoryUsage() {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    const memory = (performance as any).memory;
    
    trackMetric('memory_used', memory.usedJSHeapSize);
    trackMetric('memory_total', memory.totalJSHeapSize);
    trackMetric('memory_limit', memory.jsHeapSizeLimit);
    
    if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
      console.warn('High memory usage detected. Consider implementing more aggressive cleanup.');
    }
  }
}
