/**
 * Lazy loading utilities for Waveify
 * Optimizes component loading and bundle size
 */
"use client";


import React, { lazy, Suspense, ComponentType } from 'react';

// Simple loading indicator component
const LoadingIndicator = () => (
  <div className="flex items-center justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

// Generic lazy loading wrapper with custom loading component
export function withLazyLoading<T extends Record<string, any>>(
  importFn: () => Promise<{ default: ComponentType<T> }>,
  fallback?: React.ComponentType
) {
  const LazyComponent = lazy(importFn);
  const FallbackComponent = fallback || LoadingIndicator;

  return function LazyWrapper(props: T) {
    return (
      <Suspense fallback={<FallbackComponent />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

// Intersection Observer hook for lazy loading on scroll
export function useIntersectionObserver(
  ref: React.RefObject<Element | null>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);

  return isIntersecting;
}

// Lazy image component with loading states
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}> = ({ src, alt, className = '', placeholder, onLoad, onError }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const isInView = useIntersectionObserver(imgRef as React.RefObject<Element>);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-md" />
      )}
      
      {isInView && (
        <img
          src={hasError ? placeholder : src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
    </div>
  );
};

// Lazy section component that loads content when in view
export const LazySection: React.FC<{
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}> = ({ 
  children, 
  fallback = <LoadingIndicator />, 
  className = '',
  threshold = 0.1,
  rootMargin = '100px'
}) => {
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(sectionRef as React.RefObject<Element>, { threshold, rootMargin });

  React.useEffect(() => {
    if (isInView) {
      setShouldLoad(true);
    }
  }, [isInView]);

  return (
    <div ref={sectionRef} className={className}>
      {shouldLoad ? children : fallback}
    </div>
  );
};

// Bundle analyzer utility (development only)
export function analyzeBundleSize() {
  if (typeof window !== 'undefined') {
    // Analyze loaded chunks
    const chunks = performance.getEntriesByType('navigation').concat(
      performance.getEntriesByType('resource')
    ).filter(entry => 
      entry.name.includes('_next/static/chunks/') || 
      entry.name.includes('_next/static/js/')
    );

    console.group('Bundle Analysis');
    chunks.forEach(chunk => {
      const size = (chunk as PerformanceResourceTiming).transferSize || 0;
      console.log(`${chunk.name}: ${(size / 1024).toFixed(2)}KB`);
    });
    console.groupEnd();
  }
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

// Dynamic import with retry logic
export async function dynamicImportWithRetry<T>(
  importFn: () => Promise<T>,
  retries: number = 3
): Promise<T> {
  try {
    return await importFn();
  } catch (error) {
    if (retries > 0) {
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, 1000));
      return dynamicImportWithRetry(importFn, retries - 1);
    }
    throw error;
  }
}

// Memory usage monitoring for lazy loaded components
export function monitorMemoryUsage() {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    const memory = (performance as any).memory;
    
    if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
      console.warn('High memory usage detected. Consider implementing more aggressive cleanup.');
    }
  }
}
