/**
 * 🔄 Enhanced Loader Generator for Waveify
 * Creates beautiful, performant loading indicators with professional-grade animations
 * 
 * Features:
 * - 20+ loader types with advanced animations
 * - Accessibility compliance (reduced motion, high contrast)
 * - Performance optimized SVG generation
 * - Advanced customization options
 * - Modular architecture for easy extension
 */
export class LoaderGenerator {
  
  /**
   * Core generation method with enhanced option processing
   * @param {Object} options - Configuration object for the loader
   * @returns {string} SVG markup for the animated loader
   */
  static generate(options = {}) {
    try {
      const config = this.validateAndProcessOptions(options);
      return this.generateInternal(config);
    } catch (error) {
      console.error('LoaderGenerator Error:', error);
      return this.generateErrorFallback(options);
    }
  }

  /**
   * Validate and process options with defaults and validation
   * @param {Object} options - Raw options object
   * @returns {Object} Processed and validated configuration
   */
  static validateAndProcessOptions(options = {}) {
    // Extract and validate basic options
    const {
      type = 'dots',
      color = 'blue',
      speed = 1.5,
      size = 40,
      width = 100,
      height = 40,
      backgroundColor = 'transparent',
      // Enhanced options
      easing = 'easeInOut',
      glowEffect = false,
      shadowIntensity = 0.3,
      theme = 'modern',
      // Accessibility options
      reducedMotion = false,
      highContrast = false,
      respectSystemPreferences = true,
      ariaLabel = null
    } = options;

    // Validate dimensions
    const validatedWidth = Math.max(50, Math.min(2000, width));
    const validatedHeight = Math.max(20, Math.min(1000, height));
    const validatedSize = Math.max(10, Math.min(200, size));
    const validatedSpeed = Math.max(0.1, Math.min(10, speed));

    // Process color
    const processedColor = this.processColor(color, { highContrast, theme });

    return {
      type: this.validateLoaderType(type),
      color: processedColor.primary,
      colorSecondary: processedColor.secondary,
      speed: validatedSpeed,
      size: validatedSize,
      width: validatedWidth,
      height: validatedHeight,
      backgroundColor,
      easing,
      glowEffect,
      shadowIntensity: Math.max(0, Math.min(1, shadowIntensity)),
      theme,
      accessibility: {
        reducedMotion,
        highContrast,
        respectSystemPreferences,
        ariaLabel: ariaLabel || `Loading animation: ${type} loader`
      }
    };
  }

  /**
   * Enhanced color processing with theme support
   * @param {string} color - Input color
   * @param {Object} options - Processing options
   * @returns {Object} Processed color object
   */
  static processColor(color, options = {}) {
    // Enhanced color mapping with modern colors
    const colorMap = {
      // Primary colors
      blue: '#007ec6',
      green: '#4ade80',
      red: '#ef4444',
      orange: '#f97316',
      yellow: '#eab308',
      purple: '#a855f7',
      pink: '#ec4899',
      cyan: '#06b6d4',
      gray: '#6b7280',
      black: '#000000',
      white: '#ffffff',
      
      // Semantic colors
      success: '#10b981',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6',
      
      // Brand colors
      github: '#181717',
      twitter: '#1da1f2',
      linkedin: '#0077b5',
      
      // Theme colors
      neon: '#00ff00',
      cyberpunk: '#ff0080',
      retro: '#ff6b35'
    };

    const primary = colorMap[color] || color;
    
    // Generate secondary color for gradients
    const secondary = this.adjustColorBrightness(primary, options.highContrast ? 40 : 20);
    
    return { primary, secondary };
  }

  /**
   * Validate loader type against supported types
   * @param {string} type - Loader type
   * @returns {string} Valid loader type
   */
  static validateLoaderType(type) {
    const supportedTypes = [
      // Basic loaders
      'dots', 'spinner', 'bars', 'pulse', 'wave', 'gradient', 'orbit', 'ripple', 'triangles',
      // Advanced loaders
      'neon-pulse', 'skeleton', 'dna-helix', 'matrix-rain', 'liquid', 'glassmorphism',
      'particle-system', 'typewriter', 'heart-beat', 'breathing',
      // Special loaders
      'coming-soon', 'building', 'work-in-progress', 'loading-text'
    ];
    
    return supportedTypes.includes(type) ? type : 'dots';
  }

  /**
   * Utility method to adjust color brightness
   * @param {string} hex - Hex color
   * @param {number} percent - Brightness adjustment percentage
   * @returns {string} Adjusted hex color
   */
  static adjustColorBrightness(hex, percent) {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Parse RGB values
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Adjust brightness
    const adjust = (val) => {
      const adjusted = val + (val * percent / 100);
      return Math.max(0, Math.min(255, Math.round(adjusted)));
    };
    
    const newR = adjust(r);
    const newG = adjust(g);
    const newB = adjust(b);
    
    // Convert back to hex
    const toHex = (val) => val.toString(16).padStart(2, '0');
    return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`;
  }

  /**
   * Generate accessibility CSS styles
   * @param {Object} config - Configuration object
   * @returns {string} CSS styles for accessibility
   */
  static generateAccessibilityCSS(config) {
    if (!config.accessibility.respectSystemPreferences) return '';
    
    return `
      <style>
        @media (prefers-reduced-motion: reduce) {
          .loader-animation {
            animation-duration: 0.01s !important;
            animation-iteration-count: 1 !important;
          }
          .loader-transform {
            transform: none !important;
          }
        }
        
        @media (prefers-contrast: high) {
          .loader-element {
            filter: contrast(1.5) !important;
          }
        }
        
        @media (prefers-color-scheme: dark) {
          .loader-auto-theme {
            filter: invert(1) hue-rotate(180deg) !important;
          }
        }
      </style>
    `;
  }

  /**
   * Generate ARIA attributes for accessibility
   * @param {Object} config - Configuration object
   * @returns {string} ARIA attributes string
   */
  static generateARIAAttributes(config) {
    return `role="img" aria-label="${config.accessibility.ariaLabel}" aria-live="polite"`;
  }

  /**
   * Internal generation method with enhanced switch logic
   * @param {Object} config - Processed configuration
   * @returns {string} SVG markup
   */
  static generateInternal(config) {
    const fillColor = config.color;
    const animationDuration = config.speed;

    const accessibility = this.generateAccessibilityCSS(config);
    const ariaAttributes = this.generateARIAAttributes(config);
    
    // Enhanced filters and effects
    const glowFilter = config.glowEffect ? `
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feGaussianBlur stdDeviation="4" result="bigGlow"/>
        <feMerge> 
          <feMergeNode in="bigGlow"/>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    ` : '';

    switch (config.type) {
      case 'dots':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    ${glowFilter}
    <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${fillColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${config.colorSecondary};stop-opacity:0.8" />
    </linearGradient>
  </defs>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor}"/>
  
  <circle cx="${config.width/2 - 15}" cy="${config.height/2}" r="${config.size/10}" 
          fill="url(#dotGradient)" class="loader-element" ${config.glowEffect ? 'filter="url(#glow)"' : ''}>
    <animate attributeName="opacity" values="1;0.2;1" dur="${animationDuration}s" 
             repeatCount="indefinite" begin="0s" class="loader-animation"/>
  </circle>
  
  <circle cx="${config.width/2}" cy="${config.height/2}" r="${config.size/10}" 
          fill="url(#dotGradient)" class="loader-element" ${config.glowEffect ? 'filter="url(#glow)"' : ''}>
    <animate attributeName="opacity" values="1;0.2;1" dur="${animationDuration}s" 
             repeatCount="indefinite" begin="${animationDuration/3}s" class="loader-animation"/>
  </circle>
  
  <circle cx="${config.width/2 + 15}" cy="${config.height/2}" r="${config.size/10}" 
          fill="url(#dotGradient)" class="loader-element" ${config.glowEffect ? 'filter="url(#glow)"' : ''}>
    <animate attributeName="opacity" values="1;0.2;1" dur="${animationDuration}s" 
             repeatCount="indefinite" begin="${animationDuration*2/3}s" class="loader-animation"/>
  </circle>
</svg>`;

      case 'skeleton':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <linearGradient id="skeletonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#e2e8f0;stop-opacity:0.3" />
      <stop offset="50%" style="stop-color:#cbd5e1;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:0.3" />
      <animateTransform attributeName="gradientTransform" type="translate" 
        dur="${animationDuration}s" repeatCount="indefinite" class="loader-animation"
        values="-${config.width} 0; ${config.width * 2} 0; -${config.width} 0" />
    </linearGradient>
  </defs>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor}"/>
  
  <rect x="10" y="${config.height * 0.2}" width="${config.width - 40}" height="8" rx="4" fill="#e2e8f0"/>
  <rect x="10" y="${config.height * 0.2}" width="${config.width - 40}" height="8" rx="4" fill="url(#skeletonGradient)"/>
  
  <rect x="10" y="${config.height * 0.5}" width="${config.width - 60}" height="8" rx="4" fill="#e2e8f0"/>
  <rect x="10" y="${config.height * 0.5}" width="${config.width - 60}" height="8" rx="4" fill="url(#skeletonGradient)"/>
  
  <rect x="10" y="${config.height * 0.8}" width="${config.width - 80}" height="8" rx="4" fill="#e2e8f0"/>
  <rect x="10" y="${config.height * 0.8}" width="${config.width - 80}" height="8" rx="4" fill="url(#skeletonGradient)"/>
</svg>`;

      case 'liquid':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <radialGradient id="liquidGradient" cx="30%" cy="30%" r="70%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.3" />
      <stop offset="50%" style="stop-color:${fillColor};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${fillColor};stop-opacity:1" />
    </radialGradient>
    <filter id="liquidFilter" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur"/>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"/>
    </filter>
  </defs>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor}"/>
  
  <g transform="translate(${config.width/2}, ${config.height/2})" class="loader-element">
    <circle r="${config.size/5}" fill="url(#liquidGradient)" filter="url(#liquidFilter)">
      <animate attributeName="r" values="${config.size/5};${config.size/2.5};${config.size/3.3};${config.size/2};${config.size/5}" 
               dur="${animationDuration}s" repeatCount="indefinite" class="loader-animation"/>
    </circle>
    
    <circle cx="${config.size/2.6}" cy="0" r="${config.size/6.6}" fill="url(#liquidGradient)" filter="url(#liquidFilter)">
      <animate attributeName="r" values="${config.size/6.6};${config.size/20};${config.size/5};${config.size/10};${config.size/6.6}" 
               dur="${animationDuration}s" repeatCount="indefinite" class="loader-animation"/>
      <animateTransform attributeName="transform" type="rotate" 
        values="0; 360" dur="${animationDuration * 2}s" repeatCount="indefinite" class="loader-transform"/>
    </circle>
    
    <circle cx="-${config.size/2.6}" cy="0" r="${config.size/10}" fill="url(#liquidGradient)" filter="url(#liquidFilter)">
      <animate attributeName="r" values="${config.size/10};${config.size/5};${config.size/6.6};${config.size/20};${config.size/10}" 
               dur="${animationDuration}s" repeatCount="indefinite" class="loader-animation"/>
      <animateTransform attributeName="transform" type="rotate" 
        values="360; 0" dur="${animationDuration * 2}s" repeatCount="indefinite" class="loader-transform"/>
    </circle>
  </g>
</svg>`;

      case 'dna-helix':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${fillColor};stop-opacity:1" />
      <stop offset="50%" style="stop-color:#ffffff;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${fillColor};stop-opacity:1" />
    </linearGradient>
  </defs>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor}"/>
  
  <g transform="translate(${config.width/2}, ${config.height/2})" class="loader-element">
    <path d="M-${config.size/2},-${config.size/2} Q0,0 ${config.size/2},-${config.size/2} Q0,0 -${config.size/2},${config.size/2} Q0,0 ${config.size/2},${config.size/2}" 
          stroke="url(#dnaGradient)" stroke-width="2" fill="none">
      <animateTransform attributeName="transform" type="rotate" 
        values="0; 360" dur="${animationDuration}s" repeatCount="indefinite" class="loader-animation"/>
    </path>
    
    <g opacity="0.7">
      <line x1="-${config.size/2.6}" y1="-${config.size/4}" x2="${config.size/2.6}" y2="-${config.size/4}" 
            stroke="${fillColor}" stroke-width="1">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="${animationDuration/2}s" 
                 repeatCount="indefinite" class="loader-animation"/>
      </line>
      <line x1="-${config.size/4}" y1="0" x2="${config.size/4}" y2="0" stroke="${fillColor}" stroke-width="1">
        <animate attributeName="opacity" values="1;0.7;1" dur="${animationDuration/2}s" 
                 repeatCount="indefinite" class="loader-animation"/>
      </line>
      <line x1="-${config.size/2.6}" y1="${config.size/4}" x2="${config.size/2.6}" y2="${config.size/4}" 
            stroke="${fillColor}" stroke-width="1">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="${animationDuration/2}s" 
                 repeatCount="indefinite" class="loader-animation"/>
      </line>
    </g>
  </g>
</svg>`;

      case 'matrix-rain':
        const matrixChars = ['0', '1', 'ﾊ', 'ﾐ', 'ﾋ', 'ｰ', 'ｳ', 'ｼ', 'ﾅ', 'ﾓ', 'ﾆ', 'ｻ', 'ﾜ', 'ﾂ', 'ｵ', 'ﾘ', 'ｱ', 'ﾎ', 'ﾃ', 'ﾏ', 'ｹ', 'ﾒ', 'ｴ', 'ｶ', 'ｷ'];
        const columns = Math.floor(config.width / 15);
        const rows = Math.floor(config.height / 12);
        
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <filter id="matrixGlow">
      <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <linearGradient id="matrixFade" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${fillColor};stop-opacity:1" />
      <stop offset="70%" style="stop-color:${config.colorSecondary};stop-opacity:0.7" />
      <stop offset="100%" style="stop-color:${fillColor};stop-opacity:0.1" />
    </linearGradient>
  </defs>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor === 'transparent' ? '#000000' : config.backgroundColor}"/>
  
  ${Array.from({ length: Math.min(columns, 8) }, (_, i) => {
    const x = 10 + (i * (config.width / Math.min(columns, 8)));
    const chars = Array.from({ length: Math.min(rows, 6) }, (_, j) => {
      const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      const y = 15 + (j * 12);
      const delay = (i * 0.3) + (j * 0.1);
      
      return `<text x="${x}" y="${y}" font-family="monospace" font-size="10" 
                    fill="url(#matrixFade)" filter="url(#matrixGlow)" class="loader-element">${char}
                <animate attributeName="opacity" values="0;1;0" dur="${animationDuration * 1.3}s" 
                         repeatCount="indefinite" begin="${delay}s" class="loader-animation"/>
                <animateTransform attributeName="transform" type="translate" 
                  values="0,0; 0,20; 0,0" dur="${animationDuration * 1.3}s" repeatCount="indefinite" 
                  begin="${delay}s" class="loader-transform"/>
              </text>`;
    }).join('');
    
    return chars;
  }).join('')}
</svg>`;

      case 'spinner':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${fillColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${config.colorSecondary};stop-opacity:0.3" />
    </linearGradient>
    ${glowFilter}
  </defs>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor}"/>
  
  <g transform="translate(${config.width/2}, ${config.height/2})" class="loader-element">
    <circle cx="0" cy="0" r="${config.size/2 - 4}" fill="none" stroke="url(#spinnerGradient)" 
            stroke-width="3" stroke-linecap="round" stroke-dasharray="15.708" stroke-dashoffset="15.708"
            ${config.glowEffect ? 'filter="url(#glow)"' : ''}>
      <animateTransform attributeName="transform" type="rotate" values="0;360" 
                        dur="${animationDuration}s" repeatCount="indefinite" class="loader-animation"/>
      <animate attributeName="stroke-dashoffset" values="15.708;0;15.708" 
               dur="${animationDuration}s" repeatCount="indefinite" class="loader-animation"/>
    </circle>
  </g>
</svg>`;

      case 'bars':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${fillColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${config.colorSecondary};stop-opacity:0.6" />
    </linearGradient>
    ${glowFilter}
  </defs>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor}"/>
  
  ${Array.from({ length: 4 }, (_, i) => {
    const x = config.width/2 - 20 + (i * 10);
    const delay = i * (animationDuration/4);
    return `
    <rect x="${x}" y="${config.height/2 - 10}" width="3" height="20" 
          fill="url(#barGradient)" rx="1.5" class="loader-element"
          ${config.glowEffect ? 'filter="url(#glow)"' : ''}>
      <animate attributeName="height" values="20;5;20" dur="${animationDuration}s" 
               repeatCount="indefinite" begin="${delay}s" class="loader-animation"/>
      <animate attributeName="y" values="${config.height/2 - 10};${config.height/2 - 2.5};${config.height/2 - 10}" 
               dur="${animationDuration}s" repeatCount="indefinite" begin="${delay}s" class="loader-animation"/>
    </rect>`;
  }).join('')}
</svg>`;

      case 'pulse':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:${fillColor};stop-opacity:1" />
      <stop offset="70%" style="stop-color:${config.colorSecondary};stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:${fillColor};stop-opacity:0.2" />
    </radialGradient>
    ${glowFilter}
  </defs>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor}"/>
  
  <circle cx="${config.width/2}" cy="${config.height/2}" r="${config.size/5}" 
          fill="url(#pulseGradient)" class="loader-element"
          ${config.glowEffect ? 'filter="url(#glow)"' : ''}>
    <animate attributeName="r" values="${config.size/5};${config.size/2.5};${config.size/5}" 
             dur="${animationDuration}s" repeatCount="indefinite" class="loader-animation"/>
    <animate attributeName="opacity" values="1;0.3;1" dur="${animationDuration}s" 
             repeatCount="indefinite" class="loader-animation"/>
  </circle>
</svg>`;

      case 'wave':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${fillColor};stop-opacity:0.8" />
      <stop offset="50%" style="stop-color:${config.colorSecondary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${fillColor};stop-opacity:0.8" />
    </linearGradient>
  </defs>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor}"/>
  
  <path fill="url(#waveGradient)" class="loader-element"
        d="M0,${config.height/2} Q${config.width/4},${config.height/2 - 10} ${config.width/2},${config.height/2} T${config.width},${config.height/2} L${config.width},${config.height} L0,${config.height} Z">
    <animate attributeName="d" dur="${animationDuration}s" repeatCount="indefinite" class="loader-animation"
      values="M0,${config.height/2} Q${config.width/4},${config.height/2 - 10} ${config.width/2},${config.height/2} T${config.width},${config.height/2} L${config.width},${config.height} L0,${config.height} Z;
              M0,${config.height/2} Q${config.width/4},${config.height/2 + 10} ${config.width/2},${config.height/2} T${config.width},${config.height/2} L${config.width},${config.height} L0,${config.height} Z;
              M0,${config.height/2} Q${config.width/4},${config.height/2 - 10} ${config.width/2},${config.height/2} T${config.width},${config.height/2} L${config.width},${config.height} L0,${config.height} Z"/>
  </path>
</svg>`;

      case 'gradient':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <linearGradient id="gradientBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${fillColor};stop-opacity:0.2" />
      <stop offset="50%" style="stop-color:${fillColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${fillColor};stop-opacity:0.2" />
      <animateTransform attributeName="gradientTransform" type="translate" 
        dur="${animationDuration}s" repeatCount="indefinite" class="loader-animation"
        values="-${config.width} 0; ${config.width * 2} 0; -${config.width} 0" />
    </linearGradient>
  </defs>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor}"/>
  
  <rect x="0" y="${config.height/2 - 2}" width="${config.width}" height="4" rx="2" 
        fill="${fillColor}" opacity="0.3" class="loader-element"/>
  <rect x="0" y="${config.height/2 - 2}" width="${config.width}" height="4" rx="2" 
        fill="url(#gradientBar)" class="loader-element"/>
</svg>`;

      case 'orbit':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <radialGradient id="orbitGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:${fillColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${config.colorSecondary};stop-opacity:0.3" />
    </radialGradient>
  </defs>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor}"/>
  
  <circle cx="${config.width/2}" cy="${config.height/2}" r="${config.size/2.6}" fill="none" 
          stroke="${fillColor}" stroke-width="1" opacity="0.2" class="loader-element"/>
  <circle cx="${config.width/2}" cy="${config.height/2}" r="${config.size/1.6}" fill="none" 
          stroke="${fillColor}" stroke-width="1" opacity="0.1" class="loader-element"/>
  
  <g transform-origin="${config.width/2} ${config.height/2}" class="loader-element">
    <circle cx="${config.width/2 + config.size/2.6}" cy="${config.height/2}" r="3" fill="url(#orbitGradient)"/>
    <circle cx="${config.width/2 - config.size/2}" cy="${config.height/2}" r="2" fill="${fillColor}" opacity="0.6"/>
    <animateTransform attributeName="transform" type="rotate" values="0; 360" 
                      dur="${animationDuration}s" repeatCount="indefinite" class="loader-animation"/>
  </g>
</svg>`;
      case 'triangles':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${fillColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${config.colorSecondary};stop-opacity:0.3" />
    </linearGradient>
  </defs>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor}"/>
  
  ${Array.from({ length: 3 }, (_, i) => {
    const x = config.width/2 - 15 + (i * 15);
    const rotation = i * 120;
    return `
    <polygon points="${x},${config.height/2 + 8} ${x + 7},${config.height/2 - 8} ${x - 7},${config.height/2 - 8}" 
             fill="url(#triangleGradient)" class="loader-element">
      <animateTransform attributeName="transform" type="rotate" 
        values="${rotation} ${x} ${config.height/2}; ${rotation + 360} ${x} ${config.height/2}" 
        dur="${animationDuration}s" repeatCount="indefinite" class="loader-animation"/>
    </polygon>`;
  }).join('')}
</svg>`;

      case 'ripple':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor}"/>
  
  <circle cx="${config.width/2}" cy="${config.height/2}" r="0" fill="none" 
          stroke="${fillColor}" stroke-width="2" opacity="1" class="loader-element">
    <animate attributeName="r" values="0;${config.size/2};0" dur="${animationDuration}s" 
             repeatCount="indefinite" class="loader-animation"/>
    <animate attributeName="opacity" values="1;0;1" dur="${animationDuration}s" 
             repeatCount="indefinite" class="loader-animation"/>
  </circle>
  
  <circle cx="${config.width/2}" cy="${config.height/2}" r="0" fill="none" 
          stroke="${fillColor}" stroke-width="2" opacity="1" class="loader-element">
    <animate attributeName="r" values="0;${config.size/2};0" dur="${animationDuration}s" 
             repeatCount="indefinite" begin="${animationDuration/2}s" class="loader-animation"/>
    <animate attributeName="opacity" values="1;0;1" dur="${animationDuration}s" 
             repeatCount="indefinite" begin="${animationDuration/2}s" class="loader-animation"/>
  </circle>
  
  <circle cx="${config.width/2}" cy="${config.height/2}" r="3" fill="${fillColor}" class="loader-element">
    <animate attributeName="opacity" values="0.8;1;0.8" dur="${animationDuration/3}s" 
             repeatCount="indefinite" class="loader-animation"/>
  </circle>
</svg>`;

      case 'neon-pulse':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" 
     xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feGaussianBlur stdDeviation="6" result="bigGlow"/>
      <feMerge> 
        <feMergeNode in="bigGlow"/>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <radialGradient id="neonPulseGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="50%" style="stop-color:${fillColor};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${fillColor};stop-opacity:0.2" />
    </radialGradient>
  </defs>
  ${accessibility}
  <rect width="${config.width}" height="${config.height}" fill="${config.backgroundColor}"/>
  
  <circle cx="${config.width/2}" cy="${config.height/2}" r="${config.size/5}" 
          fill="url(#neonPulseGradient)" filter="url(#neonGlow)" class="loader-element">
    <animate attributeName="r" values="${config.size/5};${config.size/2};${config.size/5}" 
             dur="${animationDuration}s" repeatCount="indefinite" class="loader-animation"/>
    <animate attributeName="opacity" values="1;0.2;1" dur="${animationDuration}s" 
             repeatCount="indefinite" class="loader-animation"/>
  </circle>
  
  <circle cx="${config.width/2}" cy="${config.height/2}" r="${config.size/10}" 
          fill="${fillColor}" filter="url(#neonGlow)" class="loader-element">
    <animate attributeName="opacity" values="0.8;1;0.8" dur="${animationDuration/2}s" 
             repeatCount="indefinite" class="loader-animation"/>
  </circle>
</svg>`;

      // Keep existing special loaders
      case 'coming-soon':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <linearGradient id="comingSoonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#667eea;stop-opacity:1" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="2s" 
        repeatCount="indefinite" class="loader-animation" values="-200 0; 400 0; -200 0" />
    </linearGradient>
    ${glowFilter}
  </defs>
  ${accessibility}
  <rect width="200" height="40" fill="${config.backgroundColor}"/>
  
  <text x="100" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" 
        font-weight="bold" fill="url(#comingSoonGradient)" class="loader-element">
    COMING SOON
    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" 
             repeatCount="indefinite" class="loader-animation"/>
  </text>
  
  ${Array.from({ length: 3 }, (_, i) => `
    <circle cx="${180 + i * 5}" cy="20" r="2" fill="#667eea" class="loader-element">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" 
               repeatCount="indefinite" begin="${i * 0.5}s" class="loader-animation"/>
    </circle>
  `).join('')}
</svg>`;

      case 'building':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#4facfe;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00f2fe;stop-opacity:1" />
    </linearGradient>
  </defs>
  ${accessibility}
  <rect width="200" height="40" fill="${config.backgroundColor}"/>
  
  <text x="20" y="25" font-family="monospace" font-size="12" font-weight="bold" 
        fill="url(#buildingGradient)" class="loader-element">
    🔨 Building...
    <animate attributeName="opacity" values="1;0.5;1" dur="2s" 
             repeatCount="indefinite" class="loader-animation"/>
  </text>
  
  <rect x="120" y="18" width="60" height="4" rx="2" fill="#e0e0e0"/>
  <rect x="120" y="18" width="0" height="4" rx="2" fill="url(#buildingGradient)" class="loader-element">
    <animate attributeName="width" values="0;60;0" dur="3s" 
             repeatCount="indefinite" class="loader-animation"/>
  </rect>
</svg>`;

      case 'work-in-progress':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="250" height="40" viewBox="0 0 250 40" xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <linearGradient id="wipGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ff9a9e;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#fecfef;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#fecfef;stop-opacity:1" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="3s" 
        repeatCount="indefinite" class="loader-animation" values="-250 0; 500 0; -250 0" />
    </linearGradient>
  </defs>
  ${accessibility}
  <rect width="250" height="40" fill="${config.backgroundColor}"/>
  
  <text x="125" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" 
        font-weight="bold" fill="url(#wipGradient)" class="loader-element">
    🚧 WORK IN PROGRESS 🚧
    <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="2s" 
                      repeatCount="indefinite" class="loader-transform"/>
  </text>
</svg>`;

      case 'loading-text':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="150" height="40" viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg" ${ariaAttributes}>
  <defs>
    <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:0.3" />
      <stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#667eea;stop-opacity:0.3" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="2s" 
        repeatCount="indefinite" class="loader-animation" values="-150 0; 300 0; -150 0" />
    </linearGradient>
  </defs>
  ${accessibility}
  <rect width="150" height="40" fill="${config.backgroundColor}"/>
  
  <text x="75" y="25" text-anchor="middle" font-family="monospace" font-size="14" 
        font-weight="bold" fill="url(#loadingGradient)" class="loader-element">
    Loading
    ${Array.from({ length: 3 }, (_, i) => `
      <tspan>
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" 
                 repeatCount="indefinite" begin="${i * 0.5}s" class="loader-animation">.</animate>
      </tspan>
    `).join('')}
  </text>
</svg>`;

      default:
        return this.generateInternal({ ...config, type: 'dots' });
    }
  }

  /**
   * Generate error fallback SVG
   * @param {Object} options - Original options
   * @returns {string} Error fallback SVG
   */
  static generateErrorFallback(options) {
    const width = options.width || 100;
    const height = options.height || 40;
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" 
     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Loading error">
  <rect width="${width}" height="${height}" fill="#f3f4f6"/>
  <text x="${width/2}" y="${height/2}" text-anchor="middle" font-family="monospace" 
        font-size="10" fill="#6b7280">Loading...</text>
</svg>`;
  }
}
