/**
 * Accessibility React components for Waveify
 * Provides reusable accessible UI components
 */

import React from 'react';

// Screen reader only content
export const ScreenReaderOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

// Skip link component for keyboard navigation
export const SkipLink: React.FC<{ href: string; children: React.ReactNode }> = ({ 
  href, 
  children 
}) => (
  <a
    href={href}
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border focus:rounded-md focus:shadow-lg"
  >
    {children}
  </a>
);

// Aria live region for dynamic content updates
export const LiveRegion: React.FC<{
  children: React.ReactNode;
  priority?: 'polite' | 'assertive';
  atomic?: boolean;
}> = ({ children, priority = 'polite', atomic = false }) => (
  <div
    aria-live={priority}
    aria-atomic={atomic}
    className="sr-only"
  >
    {children}
  </div>
);

// Accessible loading indicator
export const LoadingIndicator: React.FC<{
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ label = 'Loading...', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div
      role="status"
      aria-label={label}
      className="flex items-center justify-center"
    >
      <div
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-primary ${sizeClasses[size]}`}
      />
      <ScreenReaderOnly>{label}</ScreenReaderOnly>
    </div>
  );
};

// Accessible button with proper focus management
export const AccessibleButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
  ariaDescribedBy?: string;
  className?: string;
}> = ({ 
  children, 
  onClick, 
  disabled = false, 
  variant = 'primary',
  size = 'md',
  ariaLabel,
  ariaDescribedBy,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground'
  };

  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 text-lg'
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

// Accessible form field with proper labeling
export const AccessibleFormField: React.FC<{
  label: string;
  id: string;
  children: React.ReactNode;
  error?: string;
  description?: string;
  required?: boolean;
}> = ({ label, id, children, error, description, required = false }) => {
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  
  return (
    <div className="space-y-2">
      <label 
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      
      {description && (
        <p id={descriptionId} className="text-sm text-muted-foreground">
          {description}
        </p>
      )}
      
      <div
        aria-describedby={[descriptionId, errorId].filter(Boolean).join(' ') || undefined}
      >
        {children}
      </div>
      
      {error && (
        <p id={errorId} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

// Accessible modal dialog
export const AccessibleModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ isOpen, onClose, title, children, className = '' }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus trap logic would go here
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 id="modal-title" className="text-lg font-semibold leading-none tracking-tight">
            {title}
          </h2>
        </div>
        
        <div className={className}>
          {children}
        </div>

        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Close modal"
        >
          <span className="sr-only">Close</span>
          ✕
        </button>
      </div>
    </div>
  );
};

// Accessible tooltip
export const AccessibleTooltip: React.FC<{
  content: string;
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
}> = ({ content, children, side = 'top' }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const tooltipId = React.useId();

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        aria-describedby={isVisible ? tooltipId : undefined}
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={`absolute z-50 px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md shadow-md ${
            side === 'top' ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-2' :
            side === 'right' ? 'left-full top-1/2 transform -translate-y-1/2 ml-2' :
            side === 'bottom' ? 'top-full left-1/2 transform -translate-x-1/2 mt-2' :
            'right-full top-1/2 transform -translate-y-1/2 mr-2'
          }`}
        >
          {content}
          <div
            className={`absolute w-2 h-2 bg-primary transform rotate-45 ${
              side === 'top' ? 'top-full left-1/2 -translate-x-1/2 -mt-1' :
              side === 'right' ? 'right-full top-1/2 -translate-y-1/2 -mr-1' :
              side === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 -mb-1' :
              'left-full top-1/2 -translate-y-1/2 -ml-1'
            }`}
          />
        </div>
      )}
    </div>
  );
};
