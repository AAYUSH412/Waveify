/**
 * 🌊 Professional Wave Generator for Waveify
 * Creates stunning, animated SVG wave banners with modern design principles
 * 
 * Features:
 * - Advanced gradient systems with dynamic animations
 * - Multi-layered depth effects for professional appearance
 * - Optimized performance with smooth 60fps animations
 * - Accessibility-compliant with reduced motion support
 * - Mobile-responsive and GitHub README optimized
 */
export class WaveGenerator {
  /**
   * Generate a professional default wave with enhanced visual effects
   * Perfect for modern project headers and professional presentations
   */
  static generate(options = {}) {
    const {
      color = '#007CF0',
      height = 150,
      speed = 4,
      width = 1200,
      amplitude = 20,
      frequency = 2
    } = options;

    // Enhanced color processing for better gradients
    const primaryColor = color;
    const lighterShade = this._adjustColorBrightness(color, 20);
    const darkerShade = this._adjustColorBrightness(color, -15);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated wave banner">
  <defs>
    <!-- Professional gradient system with depth -->
    <linearGradient id="waveGradientMain" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${darkerShade};stop-opacity:0.7">
        <animate attributeName="stop-opacity" dur="${speed * 2}s" repeatCount="indefinite"
          values="0.7;0.9;0.7" />
      </stop>
      <stop offset="25%" style="stop-color:${primaryColor};stop-opacity:1">
        <animate attributeName="offset" dur="${speed * 1.5}s" repeatCount="indefinite"
          values="25%;35%;25%" />
      </stop>
      <stop offset="75%" style="stop-color:${lighterShade};stop-opacity:0.95">
        <animate attributeName="offset" dur="${speed * 1.8}s" repeatCount="indefinite"
          values="75%;65%;75%" />
      </stop>
      <stop offset="100%" style="stop-color:${darkerShade};stop-opacity:0.8">
        <animate attributeName="stop-opacity" dur="${speed * 2.2}s" repeatCount="indefinite"
          values="0.8;0.6;0.8" />
      </stop>
    </linearGradient>
    
    <!-- Ambient background gradient -->
    <radialGradient id="waveGradientAmbient" cx="50%" cy="30%" r="80%">
      <stop offset="0%" style="stop-color:${lighterShade};stop-opacity:0.3" />
      <stop offset="70%" style="stop-color:${primaryColor};stop-opacity:0.15" />
      <stop offset="100%" style="stop-color:${darkerShade};stop-opacity:0.1" />
      <animateTransform attributeName="gradientTransform" type="scale" dur="${speed * 3}s" repeatCount="indefinite"
        values="1 1; 1.2 0.8; 1 1" />
    </radialGradient>
    
    <!-- Professional glow effect -->
    <filter id="professionalGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="softGlow"/>
      <feGaussianBlur stdDeviation="4" result="mediumGlow"/>
      <feMerge>
        <feMergeNode in="mediumGlow"/>
        <feMergeNode in="softGlow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <!-- Subtle shadow for depth -->
    <filter id="subtleShadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.1"/>
    </filter>
    
    <!-- Motion blur for smooth animation -->
    <filter id="motionBlur">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0,1" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Ambient background layer -->
  <ellipse cx="${width/2}" cy="${height * 0.7}" rx="${width * 0.6}" ry="${height * 0.4}" 
           fill="url(#waveGradientAmbient)" opacity="0.4">
    <animateTransform attributeName="transform" type="scale" dur="${speed * 4}s" repeatCount="indefinite"
      values="1 1; 1.05 0.95; 1 1; 0.95 1.05; 1 1" />
  </ellipse>
  
  <!-- Enhanced wave path with professional curves -->
  <path fill="url(#waveGradientMain)" filter="url(#professionalGlow)" 
        d="M0,${height/2} 
           C${width/6},${height/2 - amplitude*0.8} ${width/3},${height/2 + amplitude*0.6} ${width/2},${height/2}
           C${width*2/3},${height/2 - amplitude*0.7} ${width*5/6},${height/2 + amplitude*0.5} ${width},${height/2}
           L${width},${height} L0,${height} Z">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="M0,${height/2} 
              C${width/6},${height/2 - amplitude*0.8} ${width/3},${height/2 + amplitude*0.6} ${width/2},${height/2}
              C${width*2/3},${height/2 - amplitude*0.7} ${width*5/6},${height/2 + amplitude*0.5} ${width},${height/2}
              L${width},${height} L0,${height} Z;
              M0,${height/2} 
              C${width/6},${height/2 + amplitude*0.9} ${width/3},${height/2 - amplitude*0.5} ${width/2},${height/2}
              C${width*2/3},${height/2 + amplitude*0.8} ${width*5/6},${height/2 - amplitude*0.6} ${width},${height/2}
              L${width},${height} L0,${height} Z;
              M0,${height/2} 
              C${width/6},${height/2 - amplitude*0.8} ${width/3},${height/2 + amplitude*0.6} ${width/2},${height/2}
              C${width*2/3},${height/2 - amplitude*0.7} ${width*5/6},${height/2 + amplitude*0.5} ${width},${height/2}
              L${width},${height} L0,${height} Z" />
    <animateTransform attributeName="transform" type="scale" dur="${speed * 2.5}s" repeatCount="indefinite"
      values="1 1; 1.01 0.99; 1 1; 0.99 1.01; 1 1" />
  </path>
  
  <!-- Accessibility: Reduced motion alternative -->
  <style>
    @media (prefers-reduced-motion: reduce) {
      * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
    }
  </style>
</svg>`;
  }

  /**
   * Generate professional sine wave with advanced mathematical precision
   * Features smooth layering, dynamic gradients, and enhanced visual depth
   */
  static generateSine(options = {}) {
    const {
      color = '#007CF0',
      height = 150,
      speed = 4,
      width = 1200,
      amplitude = 20,
      frequency = 2
    } = options;

    const centerY = height / 2;
    const numPoints = 120; // Increased for smoother curves
    
    // Enhanced color palette
    const primaryColor = color;
    const accentColor = this._adjustColorBrightness(color, 30);
    const shadowColor = this._adjustColorBrightness(color, -20);
    
    // Generate mathematically precise sine wave paths
    const generateSinePath = (phase = 0, ampMultiplier = 1, freqMultiplier = 1, smoothness = 1) => {
      const points = [];
      for (let i = 0; i <= numPoints; i++) {
        const x = (i / numPoints) * width;
        const t = ((i / numPoints) * Math.PI * 2 * frequency * freqMultiplier) + phase;
        
        // Enhanced sine calculation with harmonic overtones
        const mainWave = Math.sin(t) * amplitude * ampMultiplier;
        const harmonic = Math.sin(t * 3) * amplitude * 0.1 * ampMultiplier * smoothness;
        const microVariation = Math.sin(t * 7) * amplitude * 0.05 * smoothness;
        
        const y = centerY + mainWave + harmonic + microVariation;
        points.push(`${x},${y}`);
      }
      return `M0,${centerY} L${points.join(' L')} L${width},${height} L0,${height} Z`;
    };

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Professional sine wave animation">
  <defs>
    <!-- Advanced gradient system for sine waves -->
    <linearGradient id="sineGradientPrimary" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${shadowColor};stop-opacity:0.9">
        <animate attributeName="stop-color" dur="${speed * 2}s" repeatCount="indefinite"
          values="${shadowColor};${primaryColor};${shadowColor}" />
      </stop>
      <stop offset="30%" style="stop-color:${accentColor};stop-opacity:1">
        <animate attributeName="offset" dur="${speed * 1.5}s" repeatCount="indefinite"
          values="30%;40%;30%" />
      </stop>
      <stop offset="70%" style="stop-color:${primaryColor};stop-opacity:0.95">
        <animate attributeName="offset" dur="${speed * 1.8}s" repeatCount="indefinite"
          values="70%;60%;70%" />
      </stop>
      <stop offset="100%" style="stop-color:${shadowColor};stop-opacity:0.8">
        <animate attributeName="stop-opacity" dur="${speed * 2.2}s" repeatCount="indefinite"
          values="0.8;0.6;0.8" />
      </stop>
      <animateTransform attributeName="gradientTransform" type="translate" dur="${speed * 1.5}s" repeatCount="indefinite"
        values="0 0; ${width * 0.5} 0; 0 0" />
    </linearGradient>
    
    <linearGradient id="sineGradientSecondary" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${primaryColor};stop-opacity:0.4" />
      <stop offset="50%" style="stop-color:${accentColor};stop-opacity:0.7" />
      <stop offset="100%" style="stop-color:${primaryColor};stop-opacity:0.4" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="${speed * 2}s" repeatCount="indefinite"
        values="${width} 0; -${width} 0; ${width} 0" />
    </linearGradient>
    
    <!-- Professional glow effects -->
    <filter id="sineGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="1.5" result="softGlow"/>
      <feGaussianBlur stdDeviation="3" result="mediumGlow"/>
      <feGaussianBlur stdDeviation="6" result="wideGlow"/>
      <feMerge>
        <feMergeNode in="wideGlow"/>
        <feMergeNode in="mediumGlow"/>
        <feMergeNode in="softGlow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <!-- Depth and dimension filter -->
    <filter id="sineDepth">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="${shadowColor}" flood-opacity="0.3"/>
      <feGaussianBlur stdDeviation="0.5" result="crisp"/>
    </filter>
    
    <!-- Mathematical precision overlay -->
    <filter id="mathematicalPrecision">
      <feColorMatrix type="saturate" values="1.1"/>
      <feComponentTransfer>
        <feFuncA type="gamma" amplitude="1" exponent="0.95"/>
      </feComponentTransfer>
    </filter>
  </defs>
  
  <!-- Ambient background wave -->
  <ellipse cx="${width/2}" cy="${height * 0.8}" rx="${width * 0.8}" ry="${height * 0.3}" 
           fill="url(#sineGradientSecondary)" opacity="0.3">
    <animateTransform attributeName="transform" type="scale" dur="${speed * 4}s" repeatCount="indefinite"
      values="1 1; 1.1 0.9; 1 1; 0.9 1.1; 1 1" />
  </ellipse>
  
  <!-- Secondary wave layer for depth -->
  <path fill="url(#sineGradientSecondary)" opacity="0.6" filter="url(#sineDepth)"
        d="${generateSinePath(Math.PI/3, 0.7, 1.2, 0.8)}">
    <animate attributeName="d" dur="${speed * 2.5}s" repeatCount="indefinite"
      values="${generateSinePath(0, 0.7, 1.2, 0.8)};${generateSinePath(Math.PI, 0.9, 1.1, 0.6)};${generateSinePath(2*Math.PI, 0.5, 1.3, 1)};${generateSinePath(0, 0.7, 1.2, 0.8)}" />
    <animateTransform attributeName="transform" type="scale" dur="${speed * 3}s" repeatCount="indefinite"
      values="1 1; 1.02 0.98; 1 1; 0.98 1.02; 1 1" />
  </path>
  
  <!-- Primary sine wave with mathematical precision -->
  <path fill="url(#sineGradientPrimary)" filter="url(#sineGlow)"
        d="${generateSinePath()}">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateSinePath(0)};${generateSinePath(Math.PI/2)};${generateSinePath(Math.PI)};${generateSinePath(3*Math.PI/2)};${generateSinePath(0)}" />
    <animateTransform attributeName="transform" type="scale" dur="${speed * 2.5}s" repeatCount="indefinite"
      values="1 1; 1.005 0.995; 1 1; 0.995 1.005; 1 1" />
  </path>
  
  <!-- Mathematical overlay for enhanced precision -->
  <path fill="none" stroke="${accentColor}" stroke-width="0.5" opacity="0.6" filter="url(#mathematicalPrecision)"
        d="${generateSinePath().replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')}">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateSinePath(0).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateSinePath(Math.PI/2).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateSinePath(Math.PI).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateSinePath(3*Math.PI/2).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateSinePath(0).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')}" />
    <animate attributeName="opacity" dur="${speed * 1.5}s" repeatCount="indefinite"
      values="0.6;0.8;0.6;0.4;0.6" />
  </path>
  
  <!-- Accessibility support -->
  <style>
    @media (prefers-reduced-motion: reduce) {
      * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
    }
  </style>
</svg>`;
  }

  /**
   * Generate modern square wave with rounded corners and premium effects
   * Features digital aesthetics with smooth morphing and professional gradients
   */
  static generateSquare(options = {}) {
    const {
      color = '#007CF0',
      height = 150,
      speed = 4,
      width = 1200,
      amplitude = 20,
      frequency = 2
    } = options;

    const centerY = height / 2;
    const waveWidth = width / frequency;
    
    // Modern color scheme with digital aesthetics
    const primaryColor = color;
    const accentColor = this._adjustColorBrightness(color, 40);
    const shadowColor = this._adjustColorBrightness(color, -25);
    const highlightColor = this._adjustColorBrightness(color, 60);
    
    // Generate modern square wave with adaptive corner radius
    const generateSquarePath = (phase = 0, morphFactor = 1, cornerRadius = 8) => {
      let pathData = `M0,${centerY}`;
      
      for (let i = 0; i < frequency; i++) {
        const x1 = i * waveWidth;
        const x2 = x1 + waveWidth * 0.4;
        const x3 = x1 + waveWidth * 0.6;
        const x4 = x1 + waveWidth;
        
        // Dynamic amplitude with breathing effect
        const breathingAmplitude = amplitude * (1 + Math.sin(phase + i * 0.8) * 0.3);
        const yTop = centerY - breathingAmplitude * morphFactor;
        const yBottom = centerY + breathingAmplitude * morphFactor;
        
        // Modern rounded corners with smooth transitions
        const dynamicRadius = cornerRadius * morphFactor;
        
        // Create smooth square wave segments
        pathData += ` L${x1},${yBottom}`;
        pathData += ` Q${x1 + dynamicRadius},${yBottom} ${x1 + dynamicRadius},${yBottom - dynamicRadius}`;
        pathData += ` L${x1 + dynamicRadius},${yTop + dynamicRadius}`;
        pathData += ` Q${x1 + dynamicRadius},${yTop} ${x1 + dynamicRadius * 2},${yTop}`;
        pathData += ` L${x3 - dynamicRadius},${yTop}`;
        pathData += ` Q${x3},${yTop} ${x3},${yTop + dynamicRadius}`;
        pathData += ` L${x3},${yBottom - dynamicRadius}`;
        pathData += ` Q${x3},${yBottom} ${x3 + dynamicRadius},${yBottom}`;
        pathData += ` L${x4},${yBottom}`;
      }
      
      pathData += ` L${width},${height} L0,${height} Z`;
      return pathData;
    };

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Modern digital square wave animation">
  <defs>
    <!-- Premium gradient system for digital aesthetics -->
    <linearGradient id="squareGradientMain" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${highlightColor};stop-opacity:1">
        <animate attributeName="stop-color" dur="${speed * 2}s" repeatCount="indefinite"
          values="${highlightColor};${accentColor};${highlightColor}" />
      </stop>
      <stop offset="40%" style="stop-color:${primaryColor};stop-opacity:0.9">
        <animate attributeName="offset" dur="${speed * 1.5}s" repeatCount="indefinite"
          values="40%;50%;40%" />
      </stop>
      <stop offset="80%" style="stop-color:${shadowColor};stop-opacity:0.8">
        <animate attributeName="offset" dur="${speed * 1.8}s" repeatCount="indefinite"
          values="80%;70%;80%" />
      </stop>
      <stop offset="100%" style="stop-color:${primaryColor};stop-opacity:1">
        <animate attributeName="stop-opacity" dur="${speed * 2.2}s" repeatCount="indefinite"
          values="1;0.7;1" />
      </stop>
      <animateTransform attributeName="gradientTransform" type="rotate" dur="${speed * 3}s" repeatCount="indefinite"
        values="0 ${width/2} ${height/2}; 180 ${width/2} ${height/2}; 360 ${width/2} ${height/2}" />
    </linearGradient>
    
    <linearGradient id="squareGradientAccent" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${accentColor};stop-opacity:0.4" />
      <stop offset="50%" style="stop-color:${primaryColor};stop-opacity:0.7" />
      <stop offset="100%" style="stop-color:${shadowColor};stop-opacity:0.5" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="${speed * 2.5}s" repeatCount="indefinite"
        values="0 0; 0 ${height}; 0 0" />
    </linearGradient>
    
    <!-- Digital glow effects for modern look -->
    <filter id="digitalGlow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="2" result="softGlow"/>
      <feGaussianBlur stdDeviation="4" result="mediumGlow"/>
      <feGaussianBlur stdDeviation="8" result="wideGlow"/>
      <feColorMatrix in="wideGlow" type="matrix" 
        values="1 0 0 0 0  0 0 1 0 0  0 0 1 0 0  0 0 0 1 0"/>
      <feMerge>
        <feMergeNode in="wideGlow"/>
        <feMergeNode in="mediumGlow"/>
        <feMergeNode in="softGlow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <!-- Professional shadow for depth -->
    <filter id="digitalShadow">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="${shadowColor}" flood-opacity="0.4"/>
      <feGaussianBlur stdDeviation="0.5"/>
    </filter>
    
    <!-- Pixel-perfect edge enhancement -->
    <filter id="pixelPerfect">
      <feConvolveMatrix kernelMatrix="0 -1 0 -1 5 -1 0 -1 0"/>
      <feComponentTransfer>
        <feFuncA type="discrete" tableValues="0 .5 .5 .7 .7 .8 .9 1"/>
      </feComponentTransfer>
    </filter>
  </defs>
  
  <!-- Digital ambient background -->
  <rect x="0" y="${height * 0.3}" width="${width}" height="${height * 0.4}" 
        fill="url(#squareGradientAccent)" opacity="0.2" rx="5">
    <animateTransform attributeName="transform" type="scale" dur="${speed * 4}s" repeatCount="indefinite"
      values="1 1; 1.02 0.98; 1 1; 0.98 1.02; 1 1" />
    <animate attributeName="opacity" dur="${speed * 3}s" repeatCount="indefinite"
      values="0.2;0.3;0.2;0.1;0.2" />
  </rect>
  
  <!-- Background pulse layer -->
  <path fill="url(#squareGradientAccent)" opacity="0.5" filter="url(#digitalShadow)"
        d="${generateSquarePath(Math.PI/4, 0.6, 12)}">
    <animate attributeName="d" dur="${speed * 2}s" repeatCount="indefinite"
      values="${generateSquarePath(0, 0.6, 12)};${generateSquarePath(Math.PI, 0.8, 8)};${generateSquarePath(2*Math.PI, 0.4, 16)};${generateSquarePath(0, 0.6, 12)}" />
    <animate attributeName="opacity" dur="${speed * 1.5}s" repeatCount="indefinite"
      values="0.3;0.6;0.3;0.2;0.3" />
    <animateTransform attributeName="transform" type="scale" dur="${speed * 2.5}s" repeatCount="indefinite"
      values="0.95 1; 1.05 1; 0.95 1" />
  </path>
  
  <!-- Main digital square wave -->
  <path fill="url(#squareGradientMain)" filter="url(#digitalGlow)"
        d="${generateSquarePath()}">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateSquarePath(0, 1, 8)};${generateSquarePath(Math.PI/2, 0.8, 12)};${generateSquarePath(Math.PI, 1.2, 6)};${generateSquarePath(3*Math.PI/2, 0.9, 10)};${generateSquarePath(0, 1, 8)}" />
    <animateTransform attributeName="transform" type="skewX" dur="${speed * 2}s" repeatCount="indefinite"
      values="0; 1; 0; -1; 0" />
  </path>
  
  <!-- Digital edge highlighting -->
  <path fill="none" stroke="${highlightColor}" stroke-width="1" opacity="0.7" filter="url(#pixelPerfect)"
        d="${generateSquarePath().replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')}">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateSquarePath(0, 1, 8).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateSquarePath(Math.PI/2, 0.8, 12).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateSquarePath(Math.PI, 1.2, 6).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateSquarePath(3*Math.PI/2, 0.9, 10).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateSquarePath(0, 1, 8).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')}" />
    <animate attributeName="opacity" dur="${speed * 1.2}s" repeatCount="indefinite"
      values="0.7;0.9;0.7;0.5;0.7" />
  </path>
  
  <!-- Accessibility support -->
  <style>
    @media (prefers-reduced-motion: reduce) {
      * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
    }
  </style>
</svg>`;
  }

  /**
   * Utility method to adjust color brightness for professional gradients
   * @private
   */
  static _adjustColorBrightness(hex, percent) {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Parse RGB values
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Adjust brightness
    const adjustedR = Math.max(0, Math.min(255, r + (r * percent / 100)));
    const adjustedG = Math.max(0, Math.min(255, g + (g * percent / 100)));
    const adjustedB = Math.max(0, Math.min(255, b + (b * percent / 100)));
    
    // Convert back to hex
    const toHex = (n) => Math.round(n).toString(16).padStart(2, '0');
    return `#${toHex(adjustedR)}${toHex(adjustedG)}${toHex(adjustedB)}`;
  }

  static generateSawtooth(options = {}) {
    const {
      color = '#007CF0',
      height = 150,
      speed = 4,
      width = 1200,
      amplitude = 20,
      frequency = 2
    } = options;

    const centerY = height / 2;
    const waveWidth = width / frequency;
    
    // Generate sawtooth with smooth curves and multiple layers
    const generateSawtoothPath = (phase = 0, sharpness = 1) => {
      let pathData = `M0,${centerY}`;
      
      for (let i = 0; i < frequency; i++) {
        const x1 = i * waveWidth;
        const x2 = x1 + waveWidth * 0.8;
        const x3 = x1 + waveWidth;
        
        const yBottom = centerY + amplitude * Math.sin(phase + i * 0.3);
        const yTop = centerY - amplitude * Math.sin(phase + i * 0.3);
        
        // Create curved sawtooth with control points
        const controlX = x1 + waveWidth * 0.3;
        const controlY = centerY + amplitude * 0.5 * sharpness;
        
        pathData += ` L${x1},${yBottom} Q${controlX},${controlY} ${x2},${yTop} Q${x2 + 10},${yTop} ${x3},${yBottom}`;
      }
      
      pathData += ` L${width},${height} L0,${height} Z`;
      return pathData;
    };

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sawtoothGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.9" />
      <stop offset="30%" style="stop-color:${color};stop-opacity:0.6" />
      <stop offset="70%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.7" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="${speed * 1.2}s" repeatCount="indefinite"
        values="0 0; ${width * 0.7} 0; 0 0" />
    </linearGradient>
    <linearGradient id="sawtoothGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.3" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:0.7" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.3" />
    </linearGradient>
    <filter id="sawtoothGlow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background layer -->
  <path fill="url(#sawtoothGradient2)" d="${generateSawtoothPath(Math.PI/3, 0.6)}" opacity="0.6">
    <animate attributeName="d" dur="${speed * 1.8}s" repeatCount="indefinite"
      values="${generateSawtoothPath(0, 0.6)};${generateSawtoothPath(Math.PI, 0.8)};${generateSawtoothPath(0, 0.6)}" />
    <animateTransform attributeName="transform" type="scale" dur="${speed * 2.5}s" repeatCount="indefinite"
      values="1 0.95; 1.02 1.05; 1 0.95" />
  </path>
  
  <!-- Main layer -->
  <path fill="url(#sawtoothGradient1)" d="${generateSawtoothPath()}" filter="url(#sawtoothGlow)">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateSawtoothPath(0)};${generateSawtoothPath(Math.PI/4)};${generateSawtoothPath(Math.PI/2)};${generateSawtoothPath(3*Math.PI/4)};${generateSawtoothPath(0)}" />
    <animateTransform attributeName="transform" type="skewY" dur="${speed * 1.5}s" repeatCount="indefinite"
      values="0; 1; 0; -1; 0" />
  </path>
</svg>`;
  }

  static generatePulse(options = {}) {
    const {
      color = '#007CF0',
      height = 150,
      speed = 4,
      width = 1200,
      amplitude = 20,
      frequency = 2,
      pulseWidth = 0.3 // 30% duty cycle by default
    } = options;

    const centerY = height / 2;
    const waveWidth = width / frequency;
    let pathData = `M0,${centerY}`;
    
    for (let i = 0; i < frequency; i++) {
      const x1 = i * waveWidth;
      const x2 = x1 + waveWidth * pulseWidth;
      const x3 = x1 + waveWidth;
      
      pathData += ` L${x1},${centerY - amplitude} L${x2},${centerY - amplitude} L${x2},${centerY + amplitude} L${x3},${centerY + amplitude}`;
    }
    
    pathData += ` L${width},${height} L0,${height} Z`;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.8" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.8" />
    </linearGradient>
  </defs>
  
  <path fill="url(#pulseGradient)" d="${pathData}">
    <animateTransform attributeName="transform" type="translate" dur="${speed}s" repeatCount="indefinite"
      values="0,0; ${waveWidth},0; 0,0" />
  </path>
</svg>`;
  }

  static generateTriangle(options = {}) {
    const {
      color = '#007CF0',
      height = 150,
      speed = 4,
      width = 1200,
      amplitude = 20,
      frequency = 2
    } = options;

    const centerY = height / 2;
    const waveWidth = width / frequency;
    
    // Generate triangle wave with dynamic morphing
    const generateTrianglePath = (phase = 0, roundness = 0) => {
      let pathData = `M0,${centerY}`;
      
      for (let i = 0; i < frequency; i++) {
        const x1 = i * waveWidth;
        const x2 = x1 + waveWidth / 2;
        const x3 = x1 + waveWidth;
        
        const yBottom = centerY + amplitude * (1 + Math.sin(phase + i * 0.4) * 0.3);
        const yTop = centerY - amplitude * (1 + Math.sin(phase + i * 0.4) * 0.3);
        
        if (roundness > 0) {
          // Rounded triangle with bezier curves
          const control1X = x1 + waveWidth * 0.25;
          const control2X = x1 + waveWidth * 0.75;
          pathData += ` L${x1},${yBottom} Q${control1X},${yTop} ${x2},${yTop} Q${control2X},${yTop} ${x3},${yBottom}`;
        } else {
          // Sharp triangle
          pathData += ` L${x1},${yBottom} L${x2},${yTop} L${x3},${yBottom}`;
        }
      }
      
      pathData += ` L${width},${height} L0,${height} Z`;
      return pathData;
    };

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="triangleGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.8" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.8" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="${speed * 1.3}s" repeatCount="indefinite"
        values="-${width} 0; ${width * 2} 0; -${width} 0" />
    </linearGradient>
    <linearGradient id="triangleGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.4" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.7" />
    </linearGradient>
    <filter id="triangleGlow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background layer -->
  <path fill="url(#triangleGradient2)" d="${generateTrianglePath(Math.PI/4, 1)}" opacity="0.5">
    <animate attributeName="d" dur="${speed * 2}s" repeatCount="indefinite"
      values="${generateTrianglePath(0, 1)};${generateTrianglePath(Math.PI, 0.5)};${generateTrianglePath(0, 1)}" />
    <animateTransform attributeName="transform" type="scale" dur="${speed * 1.8}s" repeatCount="indefinite"
      values="1 0.9; 1.05 1.1; 1 0.9" />
  </path>
  
  <!-- Main triangle wave -->
  <path fill="url(#triangleGradient1)" d="${generateTrianglePath()}" filter="url(#triangleGlow)">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateTrianglePath(0, 0)};${generateTrianglePath(Math.PI/3, 0.3)};${generateTrianglePath(2*Math.PI/3, 0)};${generateTrianglePath(Math.PI, 0.3)};${generateTrianglePath(0, 0)}" />
    <animateTransform attributeName="transform" type="skewX" dur="${speed * 2.5}s" repeatCount="indefinite"
      values="0; 3; 0; -3; 0" />
  </path>
</svg>`;
  }

  /**
   * Generate organic fluid wave with natural motion dynamics
   * Features advanced organic curves, viscosity simulation, and natural flow
   */
  static generateFluid(options = {}) {
    const {
      color = '#007CF0',
      height = 150,
      speed = 4,
      width = 1200,
      amplitude = 20,
      frequency = 2
    } = options;

    const centerY = height / 2;
    
    // Natural color palette for organic feel
    const primaryColor = color;
    const lightTone = this._adjustColorBrightness(color, 35);
    const midTone = this._adjustColorBrightness(color, 15);
    const darkTone = this._adjustColorBrightness(color, -20);
    
    // Generate fluid-like organic paths with natural flow dynamics
    const generateFluidPath = (phase = 0, viscosity = 1, turbulence = 0.1) => {
      const numPoints = 16;
      const segmentWidth = width / numPoints;
      let pathData = `M0,${centerY}`;
      
      for (let i = 0; i <= numPoints; i++) {
        const x = i * segmentWidth;
        const t = phase + i * 0.7;
        
        // Multi-layered organic motion
        const primaryFlow = Math.sin(t) * amplitude * viscosity;
        const secondaryFlow = Math.sin(t * 1.3 + phase * 0.7) * amplitude * 0.4 * viscosity;
        const microTurbulence = Math.sin(t * 3.7 + phase * 1.3) * amplitude * turbulence;
        const naturalVariation = Math.sin(t * 0.3 + phase * 0.2) * amplitude * 0.2;
        
        const baseY = centerY + primaryFlow + secondaryFlow + microTurbulence + naturalVariation;
        
        // Natural curve control points for organic flow
        const controlY1 = baseY + Math.sin(t * 1.7 + phase * 0.9) * amplitude * 0.3;
        const controlY2 = baseY + Math.cos(t * 2.1 + phase * 1.1) * amplitude * 0.4;
        
        if (i === 0) {
          pathData += ` C${x + segmentWidth * 0.4},${controlY1} ${x + segmentWidth * 0.6},${controlY2} ${x + segmentWidth},${baseY}`;
        } else if (i < numPoints) {
          pathData += ` S${x + segmentWidth * 0.6},${controlY2} ${x + segmentWidth},${baseY}`;
        }
      }
      
      pathData += ` L${width},${height} L0,${height} Z`;
      return pathData;
    };

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Organic fluid wave with natural motion">
  <defs>
    <!-- Natural depth gradient -->
    <radialGradient id="fluidDepth" cx="40%" cy="20%" r="90%">
      <stop offset="0%" style="stop-color:${lightTone};stop-opacity:1">
        <animate attributeName="stop-color" dur="${speed * 3}s" repeatCount="indefinite"
          values="${lightTone};${midTone};${lightTone}" />
      </stop>
      <stop offset="40%" style="stop-color:${primaryColor};stop-opacity:0.9">
        <animate attributeName="offset" dur="${speed * 2}s" repeatCount="indefinite"
          values="40%;50%;40%" />
      </stop>
      <stop offset="80%" style="stop-color:${darkTone};stop-opacity:0.7">
        <animate attributeName="offset" dur="${speed * 2.5}s" repeatCount="indefinite"
          values="80%;70%;80%" />
      </stop>
      <stop offset="100%" style="stop-color:${primaryColor};stop-opacity:0.5" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="${speed * 4}s" repeatCount="indefinite"
        values="0 0; ${width * 0.2} ${height * 0.1}; 0 0" />
    </radialGradient>
    
    <!-- Flowing surface gradient -->
    <linearGradient id="fluidSurface" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${lightTone};stop-opacity:0.8" />
      <stop offset="30%" style="stop-color:${primaryColor};stop-opacity:1" />
      <stop offset="70%" style="stop-color:${midTone};stop-opacity:0.9" />
      <stop offset="100%" style="stop-color:${darkTone};stop-opacity:0.6" />
      <animateTransform attributeName="gradientTransform" type="rotate" dur="${speed * 6}s" repeatCount="indefinite"
        values="0 ${width/2} ${height/2}; 45 ${width/2} ${height/2}; 0 ${width/2} ${height/2}" />
    </linearGradient>
    
    <!-- Organic glow effect -->
    <filter id="organicGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="softGlow"/>
      <feGaussianBlur stdDeviation="6" result="mediumGlow"/>
      <feGaussianBlur stdDeviation="12" result="wideGlow"/>
      <feMerge>
        <feMergeNode in="wideGlow"/>
        <feMergeNode in="mediumGlow"/>
        <feMergeNode in="softGlow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <!-- Natural turbulence for organic motion -->
    <filter id="naturalTurbulence">
      <feTurbulence baseFrequency="0.015" numOctaves="4" result="organicNoise" seed="3">
        <animate attributeName="baseFrequency" dur="${speed * 8}s" repeatCount="indefinite"
          values="0.015; 0.025; 0.015" />
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="organicNoise" scale="2"/>
    </filter>
    
    <!-- Depth shadow for realism -->
    <filter id="depthShadow">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="${darkTone}" flood-opacity="0.3"/>
      <feGaussianBlur stdDeviation="1"/>
    </filter>
  </defs>
  
  <!-- Ambient background flow -->
  <ellipse cx="${width * 0.6}" cy="${height * 0.8}" rx="${width * 0.8}" ry="${height * 0.4}" 
           fill="url(#fluidDepth)" opacity="0.4">
    <animateTransform attributeName="transform" type="scale" dur="${speed * 5}s" repeatCount="indefinite"
      values="1 1; 1.1 0.9; 1 1; 0.9 1.1; 1 1" />
    <animate attributeName="opacity" dur="${speed * 3}s" repeatCount="indefinite"
      values="0.4;0.6;0.4;0.3;0.4" />
  </ellipse>
  
  <!-- Secondary fluid layer for depth -->
  <path fill="url(#fluidSurface)" opacity="0.7" filter="url(#depthShadow)"
        d="${generateFluidPath(Math.PI/3, 0.8, 0.15)}">
    <animate attributeName="d" dur="${speed * 3}s" repeatCount="indefinite"
      values="${generateFluidPath(0, 0.8, 0.15)};${generateFluidPath(Math.PI, 1.0, 0.1)};${generateFluidPath(2*Math.PI, 0.6, 0.2)};${generateFluidPath(0, 0.8, 0.15)}" />
    <animateTransform attributeName="transform" type="scale" dur="${speed * 4}s" repeatCount="indefinite"
      values="1 1; 1.02 0.98; 1 1; 0.98 1.02; 1 1" />
  </path>
  
  <!-- Main fluid surface -->
  <path fill="url(#fluidDepth)" filter="url(#organicGlow)"
        d="${generateFluidPath()}">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateFluidPath(0, 1, 0.1)};${generateFluidPath(Math.PI/2, 1.1, 0.12)};${generateFluidPath(Math.PI, 0.9, 0.08)};${generateFluidPath(3*Math.PI/2, 1.2, 0.15)};${generateFluidPath(0, 1, 0.1)}" />
    <animateTransform attributeName="transform" type="scale" dur="${speed * 6}s" repeatCount="indefinite"
      values="1 1; 1.005 0.995; 1 1; 0.995 1.005; 1 1" />
  </path>
  
  <!-- Surface tension highlights -->
  <path fill="none" stroke="${lightTone}" stroke-width="1.5" opacity="0.6" filter="url(#naturalTurbulence)"
        d="${generateFluidPath().replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')}">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateFluidPath(0, 1, 0.1).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateFluidPath(Math.PI/2, 1.1, 0.12).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateFluidPath(Math.PI, 0.9, 0.08).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateFluidPath(3*Math.PI/2, 1.2, 0.15).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateFluidPath(0, 1, 0.1).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')}" />
    <animate attributeName="opacity" dur="${speed * 2}s" repeatCount="indefinite"
      values="0.6;0.8;0.6;0.4;0.6" />
  </path>
  
  <!-- Accessibility support -->
  <style>
    @media (prefers-reduced-motion: reduce) {
      * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
    }
  </style>
</svg>`;
  }

  static generateGlitch(options = {}) {
    const {
      color = '#007CF0',
      height = 150,
      speed = 4,
      width = 1200,
      amplitude = 20,
      frequency = 2
    } = options;

    const centerY = height / 2;
    
    // Generate glitchy, digital distortion paths
    const generateGlitchPath = (phase = 0, distortion = 1) => {
      const numSegments = 20;
      const segmentWidth = width / numSegments;
      let pathData = `M0,${centerY}`;
      
      for (let i = 0; i <= numSegments; i++) {
        const x = i * segmentWidth;
        const randomOffset = (Math.sin(phase + i * 2.7) * Math.cos(phase * 1.3 + i * 1.8)) * amplitude * distortion;
        const glitchY = centerY + randomOffset;
        
        // Add random horizontal shifts for glitch effect
        const glitchX = x + Math.sin(phase * 2 + i * 0.5) * 5 * distortion;
        
        pathData += ` L${glitchX},${glitchY}`;
      }
      
      pathData += ` L${width},${height} L0,${height} Z`;
      return pathData;
    };

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="glitchGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="33%" style="stop-color:#ff00ff;stop-opacity:0.8" />
      <stop offset="66%" style="stop-color:#00ffff;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:1" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="${speed * 0.3}s" repeatCount="indefinite"
        values="0 0; ${width} 0; -${width} 0; 0 0" />
    </linearGradient>
    <linearGradient id="glitchGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ff0000;stop-opacity:0.7" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:0.5" />
      <stop offset="100%" style="stop-color:#00ff00;stop-opacity:0.7" />
    </linearGradient>
    <filter id="glitchEffect">
      <feColorMatrix in="SourceGraphic" type="matrix" 
        values="1 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0">
        <animate attributeName="values" dur="${speed * 0.1}s" repeatCount="indefinite"
          values="1 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0;
                  0 1 0 0 0  0 0 1 0 0  1 0 0 0 0  0 0 0 1 0;
                  1 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" />
      </feColorMatrix>
    </filter>
  </defs>
  
  <!-- Red channel -->
  <path fill="url(#glitchGradient2)" d="${generateGlitchPath(0, 0.8)}" opacity="0.6" filter="url(#glitchEffect)">
    <animate attributeName="d" dur="${speed * 0.2}s" repeatCount="indefinite"
      values="${generateGlitchPath(0, 0.8)};${generateGlitchPath(Math.PI/4, 1.2)};${generateGlitchPath(Math.PI/2, 0.6)};${generateGlitchPath(0, 0.8)}" />
    <animateTransform attributeName="transform" type="translate" dur="${speed * 0.15}s" repeatCount="indefinite"
      values="0 0; 3 0; -2 0; 0 0" />
  </path>
  
  <!-- Main glitch layer -->
  <path fill="url(#glitchGradient1)" d="${generateGlitchPath()}" filter="url(#glitchEffect)">
    <animate attributeName="d" dur="${speed * 0.1}s" repeatCount="indefinite"
      values="${generateGlitchPath(0)};${generateGlitchPath(Math.PI/6)};${generateGlitchPath(Math.PI/3)};${generateGlitchPath(0)}" />
    <animate attributeName="opacity" dur="${speed * 0.05}s" repeatCount="indefinite"
      values="1; 0.8; 1; 0.9; 1" />
  </path>
</svg>`;
  }

  static generatePlasma(options = {}) {
    const {
      color = '#007CF0',
      height = 150,
      speed = 4,
      width = 1200,
      amplitude = 20,
      frequency = 2
    } = options;

    const centerY = height / 2;
    
    // Generate plasma-like energy waves with multiple frequencies
    const generatePlasmaPath = (phase = 0, energy = 1) => {
      const numPoints = 50;
      let pathData = `M0,${centerY}`;
      
      for (let i = 0; i <= numPoints; i++) {
        const x = (i / numPoints) * width;
        const t = (i / numPoints) * Math.PI * 2 * frequency;
        
        // Combine multiple sine waves for plasma effect
        const wave1 = Math.sin(t + phase) * amplitude * energy;
        const wave2 = Math.sin(t * 2.3 + phase * 1.7) * amplitude * 0.4 * energy;
        const wave3 = Math.sin(t * 0.7 + phase * 0.5) * amplitude * 0.6 * energy;
        
        const y = centerY + wave1 + wave2 + wave3;
        pathData += ` L${x},${y}`;
      }
      
      pathData += ` L${width},${height} L0,${height} Z`;
      return pathData;
    };

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="plasmaGradient1" cx="30%" cy="50%" r="80%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="30%" style="stop-color:${color};stop-opacity:0.9" />
      <stop offset="70%" style="stop-color:#ff6b6b;stop-opacity:0.7" />
      <stop offset="100%" style="stop-color:#4ecdc4;stop-opacity:0.5" />
      <animateTransform attributeName="gradientTransform" type="rotate" dur="${speed * 2}s" repeatCount="indefinite"
        values="0 ${width/2} ${height/2}; 360 ${width/2} ${height/2}" />
    </radialGradient>
    <radialGradient id="plasmaGradient2" cx="70%" cy="30%" r="60%">
      <stop offset="0%" style="stop-color:#ffeaa7;stop-opacity:0.8" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#fd79a8;stop-opacity:0.4" />
      <animateTransform attributeName="gradientTransform" type="rotate" dur="${speed * 1.5}s" repeatCount="indefinite"
        values="360 ${width/2} ${height/2}; 0 ${width/2} ${height/2}" />
    </radialGradient>
    <filter id="plasmaGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feGaussianBlur stdDeviation="12" result="bigBlur"/>
      <feMerge> 
        <feMergeNode in="bigBlur"/>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background energy layer -->
  <path fill="url(#plasmaGradient2)" d="${generatePlasmaPath(Math.PI/2, 0.6)}" opacity="0.7" filter="url(#plasmaGlow)">
    <animate attributeName="d" dur="${speed * 2.5}s" repeatCount="indefinite"
      values="${generatePlasmaPath(0, 0.6)};${generatePlasmaPath(Math.PI, 0.8)};${generatePlasmaPath(2*Math.PI, 0.4)};${generatePlasmaPath(0, 0.6)}" />
    <animateTransform attributeName="transform" type="scale" dur="${speed * 3}s" repeatCount="indefinite"
      values="1 1; 1.1 0.9; 1 1; 0.9 1.1; 1 1" />
  </path>
  
  <!-- Main plasma layer -->
  <path fill="url(#plasmaGradient1)" d="${generatePlasmaPath()}" filter="url(#plasmaGlow)">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generatePlasmaPath(0)};${generatePlasmaPath(Math.PI/3)};${generatePlasmaPath(2*Math.PI/3)};${generatePlasmaPath(Math.PI)};${generatePlasmaPath(4*Math.PI/3)};${generatePlasmaPath(5*Math.PI/3)};${generatePlasmaPath(0)}" />
    <animate attributeName="opacity" dur="${speed * 2}s" repeatCount="indefinite"
      values="0.8; 1; 0.9; 1; 0.8" />
  </path>
</svg>`;
  }

  /**
   * Generate spectacular neon wave with cyberpunk aesthetics
   * Features advanced glow effects, electrical discharge, and dynamic lighting
   */
  static generateNeon(options = {}) {
    const {
      color = '#007CF0',
      height = 150,
      speed = 4,
      width = 1200,
      amplitude = 20,
      frequency = 2
    } = options;

    const centerY = height / 2;
    
    // Cyberpunk color palette with electric effects
    const primaryColor = color;
    const neonCore = '#ffffff';
    const electricBlue = '#00ffff';
    const neonPink = '#ff0080';
    const shadowColor = this._adjustColorBrightness(color, -60);
    
    // Generate neon tube-like waves with electrical variations
    const generateNeonPath = (phase = 0, intensity = 1, electrical = 0) => {
      const numPoints = 60;
      let pathData = `M0,${centerY}`;
      
      for (let i = 0; i <= numPoints; i++) {
        const x = (i / numPoints) * width;
        const t = (i / numPoints) * Math.PI * 2 * frequency + phase;
        
        // Main wave with smooth flow
        const mainWave = Math.sin(t) * amplitude * intensity;
        
        // Electrical discharge simulation
        const electricNoise = electrical > 0 ? 
          (Math.random() - 0.5) * amplitude * 0.3 * electrical * Math.sin(t * 13) : 0;
        
        // High-frequency flutter for neon tube effect
        const neonFlutter = Math.sin(t * 11 + phase * 5) * amplitude * 0.08 * intensity;
        
        // Breathing effect for organic feel
        const breathingEffect = Math.sin(phase * 0.7) * amplitude * 0.15 * intensity;
        
        const y = centerY + mainWave + electricNoise + neonFlutter + breathingEffect;
        pathData += ` L${x},${y}`;
      }
      
      pathData += ` L${width},${height} L0,${height} Z`;
      return pathData;
    };

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cyberpunk neon wave with electrical effects">
  <defs>
    <!-- Core neon gradient with white-hot center -->
    <linearGradient id="neonCore" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" style="stop-color:${primaryColor};stop-opacity:0.3">
        <animate attributeName="stop-opacity" dur="${speed * 0.8}s" repeatCount="indefinite"
          values="0.3;0.6;0.3;0.4;0.3" />
      </stop>
      <stop offset="25%" style="stop-color:${neonCore};stop-opacity:1">
        <animate attributeName="offset" dur="${speed}s" repeatCount="indefinite"
          values="25%;35%;25%;30%;25%" />
      </stop>
      <stop offset="50%" style="stop-color:${electricBlue};stop-opacity:0.9">
        <animate attributeName="stop-color" dur="${speed * 1.5}s" repeatCount="indefinite"
          values="${electricBlue};${neonCore};${electricBlue};${neonPink};${electricBlue}" />
      </stop>
      <stop offset="75%" style="stop-color:${neonCore};stop-opacity:1">
        <animate attributeName="offset" dur="${speed * 1.2}s" repeatCount="indefinite"
          values="75%;65%;75%;70%;75%" />
      </stop>
      <stop offset="100%" style="stop-color:${primaryColor};stop-opacity:0.3">
        <animate attributeName="stop-opacity" dur="${speed * 0.9}s" repeatCount="indefinite"
          values="0.3;0.5;0.3;0.6;0.3" />
      </stop>
      <animateTransform attributeName="gradientTransform" type="translate" dur="${speed}s" repeatCount="indefinite"
        values="0 0; ${width} 0; 0 0" />
    </linearGradient>
    
    <!-- Outer glow gradient -->
    <radialGradient id="neonGlow" cx="50%" cy="50%" r="80%">
      <stop offset="0%" style="stop-color:${neonCore};stop-opacity:0.8" />
      <stop offset="30%" style="stop-color:${primaryColor};stop-opacity:0.6" />
      <stop offset="60%" style="stop-color:${electricBlue};stop-opacity:0.4" />
      <stop offset="100%" style="stop-color:${shadowColor};stop-opacity:0.1" />
      <animateTransform attributeName="gradientTransform" type="scale" dur="${speed * 2}s" repeatCount="indefinite"
        values="1 1; 1.3 0.7; 1 1; 0.8 1.2; 1 1" />
    </radialGradient>
    
    <!-- Electric discharge gradient -->
    <linearGradient id="electricDischarge" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${electricBlue};stop-opacity:0" />
      <stop offset="50%" style="stop-color:${neonCore};stop-opacity:1">
        <animate attributeName="stop-opacity" dur="${speed * 0.1}s" repeatCount="indefinite"
          values="1;0;1;0.5;1;0;1" />
      </stop>
      <stop offset="100%" style="stop-color:${electricBlue};stop-opacity:0" />
    </linearGradient>
    
    <!-- Multi-layer neon glow effect -->
    <filter id="spectacularNeonGlow" x="-200%" y="-200%" width="500%" height="500%">
      <!-- Inner core glow -->
      <feGaussianBlur stdDeviation="1" result="innerGlow"/>
      <!-- Medium electric glow -->
      <feGaussianBlur stdDeviation="3" result="electricGlow"/>
      <!-- Wide atmospheric glow -->
      <feGaussianBlur stdDeviation="8" result="atmosphericGlow"/>
      <!-- Ultra-wide halo -->
      <feGaussianBlur stdDeviation="15" result="haloGlow"/>
      
      <!-- Color enhancement for electric effect -->
      <feColorMatrix in="electricGlow" type="matrix" 
        values="0 0 1 0 0  0 1 1 0 0  1 1 0 0 0  0 0 0 1 0"/>
      
      <!-- Combine all glow layers -->
      <feMerge>
        <feMergeNode in="haloGlow"/>
        <feMergeNode in="atmosphericGlow"/>
        <feMergeNode in="electricGlow"/>
        <feMergeNode in="innerGlow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <!-- Electrical flicker effect -->
    <filter id="electricalFlicker">
      <feFlood flood-color="${neonCore}" flood-opacity="0.8" result="floodFill"/>
      <feComposite in="SourceGraphic" in2="floodFill" operator="screen"/>
      <feColorMatrix type="saturate" values="1.5"/>
    </filter>
    
    <!-- Motion blur for energy trails -->
    <filter id="energyTrail">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2,0" result="motionBlur"/>
      <feComposite in="SourceGraphic" in2="motionBlur" operator="screen"/>
    </filter>
  </defs>
  
  <!-- Dark ambient background for contrast -->
  <rect width="${width}" height="${height}" fill="${shadowColor}" opacity="0.1"/>
  
  <!-- Atmospheric glow base -->
  <ellipse cx="${width/2}" cy="${centerY}" rx="${width * 0.7}" ry="${height * 0.6}" 
           fill="url(#neonGlow)" opacity="0.3">
    <animateTransform attributeName="transform" type="scale" dur="${speed * 3}s" repeatCount="indefinite"
      values="1 1; 1.2 0.8; 1 1; 0.9 1.1; 1 1" />
    <animate attributeName="opacity" dur="${speed * 2}s" repeatCount="indefinite"
      values="0.3;0.5;0.3;0.4;0.3" />
  </ellipse>
  
  <!-- Secondary electrical layer -->
  <path fill="url(#electricDischarge)" opacity="0.6" filter="url(#electricalFlicker)"
        d="${generateNeonPath(Math.PI/3, 0.7, 0.3)}">
    <animate attributeName="d" dur="${speed * 0.5}s" repeatCount="indefinite"
      values="${generateNeonPath(0, 0.7, 0.3)};${generateNeonPath(Math.PI/6, 0.8, 0.5)};${generateNeonPath(Math.PI/3, 0.6, 0.2)};${generateNeonPath(0, 0.7, 0.3)}" />
    <animate attributeName="opacity" dur="${speed * 0.3}s" repeatCount="indefinite"
      values="0.6;0.8;0.4;0.9;0.6" />
  </path>
  
  <!-- Main neon tube core -->
  <path fill="url(#neonCore)" filter="url(#spectacularNeonGlow)"
        d="${generateNeonPath()}">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateNeonPath(0, 1, 0)};${generateNeonPath(Math.PI/2, 1.1, 0.1)};${generateNeonPath(Math.PI, 0.9, 0)};${generateNeonPath(3*Math.PI/2, 1.2, 0.05)};${generateNeonPath(0, 1, 0)}" />
    <animate attributeName="opacity" dur="${speed * 0.1}s" repeatCount="indefinite"
      values="1;0.95;1;0.98;1;0.96;1" />
  </path>
  
  <!-- High-intensity centerline for tube effect -->
  <path fill="none" stroke="${neonCore}" stroke-width="2" opacity="0.9" filter="url(#energyTrail)"
        d="${generateNeonPath().replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')}">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateNeonPath(0, 1, 0).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateNeonPath(Math.PI/2, 1.1, 0.1).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateNeonPath(Math.PI, 0.9, 0).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateNeonPath(3*Math.PI/2, 1.2, 0.05).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateNeonPath(0, 1, 0).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')}" />
    <animate attributeName="opacity" dur="${speed * 0.05}s" repeatCount="indefinite"
      values="0.9;1;0.8;1;0.9;0.95;0.9" />
    <animate attributeName="stroke-width" dur="${speed * 0.2}s" repeatCount="indefinite"
      values="2;2.5;2;1.5;2;2.2;2" />
  </path>
  
  <!-- Electrical spark effects -->
  <path fill="none" stroke="${electricBlue}" stroke-width="0.5" opacity="0.7"
        d="${generateNeonPath(Math.PI/4, 1, 0.8).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')}">
    <animate attributeName="d" dur="${speed * 0.1}s" repeatCount="indefinite"
      values="${generateNeonPath(0, 1, 0.8).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateNeonPath(Math.PI/8, 1.2, 1).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateNeonPath(Math.PI/4, 0.8, 0.6).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateNeonPath(0, 1, 0.8).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')}" />
    <animate attributeName="opacity" dur="${speed * 0.08}s" repeatCount="indefinite"
      values="0.7;0;0.9;0;0.7;0.5;0.7" />
  </path>
  
  <!-- Accessibility support -->
  <style>
    @media (prefers-reduced-motion: reduce) {
      * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
    }
  </style>
</svg>`;
  }
}