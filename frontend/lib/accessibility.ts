/**
 * Accessibility utilities for Waveify
 * Ensures WCAG 2.1 AA compliance and better user experience
 */

import { useEffect, useState } from 'react';

// Check if user prefers reduced motion
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

// Check if user prefers high contrast
export function useHighContrast(): boolean {
  const [prefersHighContrast, setPrefersHighContrast] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setPrefersHighContrast(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersHighContrast(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersHighContrast;
}

// Focus management for modal/dialog components
export function useFocusTrap(isActive: boolean) {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusableElement = focusableElements[0] as HTMLElement;
    const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey && document.activeElement === firstFocusableElement) {
        e.preventDefault();
        lastFocusableElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusableElement) {
        e.preventDefault();
        firstFocusableElement.focus();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstFocusableElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isActive]);
}

// Announce content changes to screen readers
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.setAttribute('class', 'sr-only');
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Color contrast ratio calculator
export function getContrastRatio(color1: string, color2: string): number {
  const getLuminance = (color: string) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;

    const getRGB = (val: number) => {
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    };

    return 0.2126 * getRGB(r) + 0.7152 * getRGB(g) + 0.0722 * getRGB(b);
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
}

// Check if color combination meets WCAG guidelines
export function meetsWCAGContrast(
  foreground: string, 
  background: string, 
  level: 'AA' | 'AAA' = 'AA',
  size: 'normal' | 'large' = 'normal'
): boolean {
  const ratio = getContrastRatio(foreground, background);
  
  if (level === 'AAA') {
    return size === 'large' ? ratio >= 4.5 : ratio >= 7;
  } else {
    return size === 'large' ? ratio >= 3 : ratio >= 4.5;
  }
}

// Keyboard navigation helper
export function useKeyboardNavigation(onEscape?: () => void, onEnter?: () => void) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onEscape?.();
          break;
        case 'Enter':
          if (event.target instanceof HTMLButtonElement || 
              event.target instanceof HTMLAnchorElement) {
            onEnter?.();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEscape, onEnter]);
}

// Generate unique IDs for ARIA attributes
export function generateId(prefix: string = 'waveify'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

// Focus visible ring utility
export const focusRing = 'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background';

// High contrast mode styles
export const highContrastStyles = {
  border: 'border-foreground/20 dark:border-foreground/40',
  text: 'text-foreground',
  background: 'bg-background',
  button: 'bg-primary text-primary-foreground border-primary',
};

// Animation variants that respect reduced motion
export const createAccessibleVariants = (prefersReducedMotion: boolean) => ({
  initial: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
  animate: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
  transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.5 },
});

// Ensure minimum touch target size (44px)
export const touchTarget = 'min-h-[44px] min-w-[44px]';

// Text size utilities for better readability
export const readableText = {
  small: 'text-sm leading-5',
  normal: 'text-base leading-6',
  large: 'text-lg leading-7',
  xl: 'text-xl leading-8',
};

// Color combinations that meet WCAG AA standards
export const accessibleColors = {
  light: {
    primary: '#1D4ED8', // Blue-700
    primaryBg: '#FFFFFF',
    secondary: '#374151', // Gray-700
    secondaryBg: '#F9FAFB', // Gray-50
    success: '#059669', // Emerald-600
    successBg: '#ECFDF5', // Emerald-50
    warning: '#D97706', // Amber-600
    warningBg: '#FFFBEB', // Amber-50
    error: '#DC2626', // Red-600
    errorBg: '#FEF2F2', // Red-50
  },
  dark: {
    primary: '#60A5FA', // Blue-400
    primaryBg: '#111827', // Gray-900
    secondary: '#D1D5DB', // Gray-300
    secondaryBg: '#1F2937', // Gray-800
    success: '#34D399', // Emerald-400
    successBg: '#064E3B', // Emerald-900
    warning: '#FBBF24', // Amber-400
    warningBg: '#78350F', // Amber-900
    error: '#F87171', // Red-400
    errorBg: '#7F1D1D', // Red-900
  },
};
