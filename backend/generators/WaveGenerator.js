export class WaveGenerator {
  static generate(options = {}) {
    const {
      color = '#007CF0',
      height = 150,
      speed = 4,
      width = 1200,
      amplitude = 20,
      frequency = 2
    } = options;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.8" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.8" />
    </linearGradient>
  </defs>
  
  <path fill="url(#waveGradient)" d="M0,${height/2} Q${width/4},${height/2 - amplitude} ${width/2},${height/2} T${width},${height/2} L${width},${height} L0,${height} Z">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="M0,${height/2} Q${width/4},${height/2 - amplitude} ${width/2},${height/2} T${width},${height/2} L${width},${height} L0,${height} Z;
              M0,${height/2} Q${width/4},${height/2 + amplitude} ${width/2},${height/2} T${width},${height/2} L${width},${height} L0,${height} Z;
              M0,${height/2} Q${width/4},${height/2 - amplitude} ${width/2},${height/2} T${width},${height/2} L${width},${height} L0,${height} Z" />
  </path>
</svg>`;
  }

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
    const numPoints = 100;
    
    // Generate multiple sine wave paths for layered effect
    const generateSinePath = (phase = 0, ampMultiplier = 1, freqMultiplier = 1) => {
      const points = [];
      for (let i = 0; i <= numPoints; i++) {
        const x = (i / numPoints) * width;
        const y = centerY + Math.sin(((i / numPoints) * Math.PI * 2 * frequency * freqMultiplier) + phase) * amplitude * ampMultiplier;
        points.push(`${x},${y}`);
      }
      return `M0,${centerY} L${points.join(' L')} L${width},${height} L0,${height} Z`;
    };

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.9" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.9" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="${speed * 1.5}s" repeatCount="indefinite"
        values="0 0; ${width} 0; 0 0" />
    </linearGradient>
    <linearGradient id="sineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.4" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.4" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="${speed * 2}s" repeatCount="indefinite"
        values="${width} 0; 0 0; ${width} 0" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background layer -->
  <path fill="url(#sineGradient2)" d="${generateSinePath(Math.PI, 0.7, 1.3)}" opacity="0.5" filter="url(#glow)">
    <animate attributeName="d" dur="${speed * 2}s" repeatCount="indefinite"
      values="${generateSinePath(0, 0.7, 1.3)};${generateSinePath(Math.PI, 0.7, 1.3)};${generateSinePath(0, 0.7, 1.3)}" />
  </path>
  
  <!-- Main layer -->
  <path fill="url(#sineGradient1)" d="${generateSinePath()}" filter="url(#glow)">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateSinePath(0)};${generateSinePath(Math.PI/2)};${generateSinePath(Math.PI)};${generateSinePath(3*Math.PI/2)};${generateSinePath(0)}" />
    <animateTransform attributeName="transform" type="scale" dur="${speed * 3}s" repeatCount="indefinite"
      values="1 1; 1.02 0.98; 1 1; 0.98 1.02; 1 1" />
  </path>
</svg>`;
  }

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
    
    // Generate square wave with multiple phases for morphing animation
    const generateSquarePath = (phase = 0, morphFactor = 1) => {
      let pathData = `M0,${centerY}`;
      
      for (let i = 0; i < frequency; i++) {
        const x1 = i * waveWidth;
        const x2 = x1 + waveWidth / 2;
        const x3 = x1 + waveWidth;
        
        // Add morphing effect to corners
        const cornerRadius = 5 * morphFactor;
        const yTop = centerY - amplitude * Math.sin(phase + i * 0.5);
        const yBottom = centerY + amplitude * Math.sin(phase + i * 0.5);
        
        pathData += ` L${x1},${yTop} Q${x1 + cornerRadius},${yTop} ${x1 + cornerRadius},${yTop}`;
        pathData += ` L${x2 - cornerRadius},${yTop} Q${x2},${yTop} ${x2},${yTop + cornerRadius}`;
        pathData += ` L${x2},${yBottom - cornerRadius} Q${x2},${yBottom} ${x2 + cornerRadius},${yBottom}`;
        pathData += ` L${x3 - cornerRadius},${yBottom} Q${x3},${yBottom} ${x3},${yBottom}`;
      }
      
      pathData += ` L${width},${height} L0,${height} Z`;
      return pathData;
    };

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="squareGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:0.7" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:1" />
      <animateTransform attributeName="gradientTransform" type="rotate" dur="${speed * 2}s" repeatCount="indefinite"
        values="0 ${width/2} ${height/2}; 360 ${width/2} ${height/2}" />
    </linearGradient>
    <linearGradient id="squareGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.8" />
    </linearGradient>
    <filter id="squareGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background pulse -->
  <path fill="url(#squareGradient2)" d="${generateSquarePath(0, 0.5)}" opacity="0.4">
    <animate attributeName="opacity" dur="${speed * 1.5}s" repeatCount="indefinite"
      values="0.2;0.6;0.2" />
    <animateTransform attributeName="transform" type="scale" dur="${speed * 2}s" repeatCount="indefinite"
      values="0.95 1; 1.05 1; 0.95 1" />
  </path>
  
  <!-- Main square wave -->
  <path fill="url(#squareGradient1)" d="${generateSquarePath()}" filter="url(#squareGlow)">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateSquarePath(0, 1)};${generateSquarePath(Math.PI/2, 0.3)};${generateSquarePath(Math.PI, 1)};${generateSquarePath(3*Math.PI/2, 0.3)};${generateSquarePath(0, 1)}" />
    <animateTransform attributeName="transform" type="skewX" dur="${speed * 1.5}s" repeatCount="indefinite"
      values="0; 2; 0; -2; 0" />
  </path>
</svg>`;
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
    
    // Generate fluid-like organic paths with multiple control points
    const generateFluidPath = (phase = 0, viscosity = 1) => {
      const numPoints = 8;
      const segmentWidth = width / numPoints;
      let pathData = `M0,${centerY}`;
      
      for (let i = 0; i <= numPoints; i++) {
        const x = i * segmentWidth;
        const baseY = centerY + Math.sin(phase + i * 0.8) * amplitude * viscosity;
        const controlY1 = baseY + Math.sin(phase * 1.3 + i * 0.5) * amplitude * 0.3;
        const controlY2 = baseY + Math.cos(phase * 0.7 + i * 0.9) * amplitude * 0.4;
        
        if (i === 0) {
          pathData += ` C${x + segmentWidth * 0.3},${controlY1} ${x + segmentWidth * 0.7},${controlY2} ${x + segmentWidth},${baseY}`;
        } else if (i < numPoints) {
          pathData += ` S${x + segmentWidth * 0.7},${controlY2} ${x + segmentWidth},${baseY}`;
        }
      }
      
      pathData += ` L${width},${height} L0,${height} Z`;
      return pathData;
    };

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="fluidGradient1" cx="50%" cy="30%" r="70%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.4" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="${speed * 2.5}s" repeatCount="indefinite"
        values="0 0; ${width * 0.3} ${height * 0.2}; 0 0" />
    </radialGradient>
    <linearGradient id="fluidGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.6" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:0.9" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.5" />
    </linearGradient>
    <filter id="fluidGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="turbulence">
      <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="2">
        <animate attributeName="baseFrequency" dur="${speed * 4}s" repeatCount="indefinite"
          values="0.02; 0.05; 0.02" />
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"/>
    </filter>
  </defs>
  
  <!-- Background fluid layer -->
  <path fill="url(#fluidGradient2)" d="${generateFluidPath(Math.PI/3, 0.7)}" opacity="0.6" filter="url(#turbulence)">
    <animate attributeName="d" dur="${speed * 3}s" repeatCount="indefinite"
      values="${generateFluidPath(0, 0.7)};${generateFluidPath(Math.PI, 0.9)};${generateFluidPath(2*Math.PI, 0.5)};${generateFluidPath(0, 0.7)}" />
  </path>
  
  <!-- Main fluid layer -->
  <path fill="url(#fluidGradient1)" d="${generateFluidPath()}" filter="url(#fluidGlow)">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateFluidPath(0)};${generateFluidPath(Math.PI/2)};${generateFluidPath(Math.PI)};${generateFluidPath(3*Math.PI/2)};${generateFluidPath(0)}" />
    <animateTransform attributeName="transform" type="scale" dur="${speed * 4}s" repeatCount="indefinite"
      values="1 1; 1.03 0.97; 1 1; 0.97 1.03; 1 1" />
  </path>
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
    
    // Generate neon tube-like waves with glow effects
    const generateNeonPath = (phase = 0, intensity = 1) => {
      const numPoints = 40;
      let pathData = `M0,${centerY}`;
      
      for (let i = 0; i <= numPoints; i++) {
        const x = (i / numPoints) * width;
        const t = (i / numPoints) * Math.PI * 2 * frequency + phase;
        
        // Smooth sine wave with slight variations
        const mainWave = Math.sin(t) * amplitude * intensity;
        const flutter = Math.sin(t * 7 + phase * 3) * amplitude * 0.1 * intensity;
        
        const y = centerY + mainWave + flutter;
        pathData += ` L${x},${y}`;
      }
      
      pathData += ` L${width},${height} L0,${height} Z`;
      return pathData;
    };

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="neonGradient1" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.2" />
      <stop offset="50%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.2" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="${speed}s" repeatCount="indefinite"
        values="0 0; ${width} 0; 0 0" />
    </linearGradient>
    <linearGradient id="neonGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.8" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.8" />
    </linearGradient>
    <filter id="neonGlow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="2" result="smallGlow"/>
      <feGaussianBlur stdDeviation="6" result="mediumGlow"/>
      <feGaussianBlur stdDeviation="12" result="bigGlow"/>
      <feMerge> 
        <feMergeNode in="bigGlow"/>
        <feMergeNode in="mediumGlow"/>
        <feMergeNode in="smallGlow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="flicker">
      <feFlood flood-color="${color}" flood-opacity="0.7"/>
      <feComposite in="SourceGraphic" operator="multiply"/>
    </filter>
  </defs>
  
  <!-- Outer glow -->
  <path fill="url(#neonGradient2)" d="${generateNeonPath(0, 0.8)}" opacity="0.3" filter="url(#neonGlow)">
    <animate attributeName="opacity" dur="${speed * 0.3}s" repeatCount="indefinite"
      values="0.2; 0.4; 0.3; 0.5; 0.2" />
  </path>
  
  <!-- Main neon tube -->
  <path fill="url(#neonGradient1)" d="${generateNeonPath()}" filter="url(#neonGlow)">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateNeonPath(0)};${generateNeonPath(Math.PI/2)};${generateNeonPath(Math.PI)};${generateNeonPath(3*Math.PI/2)};${generateNeonPath(0)}" />
    <animate attributeName="opacity" dur="${speed * 0.1}s" repeatCount="indefinite"
      values="1; 0.95; 1; 0.98; 1" />
  </path>
  
  <!-- Flicker effect -->
  <path fill="none" stroke="${color}" stroke-width="2" d="${generateNeonPath().replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')}" filter="url(#flicker)" opacity="0.8">
    <animate attributeName="d" dur="${speed}s" repeatCount="indefinite"
      values="${generateNeonPath(0).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateNeonPath(Math.PI/2).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateNeonPath(Math.PI).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateNeonPath(3*Math.PI/2).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')};${generateNeonPath(0).replace('L' + width + ',' + height + ' L0,' + height + ' Z', '')}" />
    <animate attributeName="opacity" dur="${speed * 0.05}s" repeatCount="indefinite"
      values="0.8; 0.9; 0.7; 1; 0.8" />
  </path>
</svg>`;
  }
}