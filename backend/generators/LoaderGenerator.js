export class LoaderGenerator {
  static generate(options = {}) {
    const {
      type = 'dots',
      color = 'blue',
      speed = 1.5,
      size = 40,
      width = 100,
      height = 40,
      backgroundColor = 'transparent'
    } = options;

    // Color mapping
    const colorMap = {
      blue: '#007ec6',
      green: '#4c1',
      red: '#e05d44',
      orange: '#fe7d37',
      yellow: '#dfb317',
      purple: '#8e44ad',
      pink: '#e91e63',
      cyan: '#00bcd4',
      gray: '#9f9f9f',
      black: '#000000'
    };

    const fillColor = colorMap[color] || color;
    const animationDuration = speed;

    switch (type) {
      case 'dots':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
  
  <circle cx="${width/2 - 15}" cy="${height/2}" r="4" fill="${fillColor}">
    <animate attributeName="opacity" values="1;0.2;1" dur="${animationDuration}s" repeatCount="indefinite" begin="0s"/>
  </circle>
  
  <circle cx="${width/2}" cy="${height/2}" r="4" fill="${fillColor}">
    <animate attributeName="opacity" values="1;0.2;1" dur="${animationDuration}s" repeatCount="indefinite" begin="${animationDuration/3}s"/>
  </circle>
  
  <circle cx="${width/2 + 15}" cy="${height/2}" r="4" fill="${fillColor}">
    <animate attributeName="opacity" values="1;0.2;1" dur="${animationDuration}s" repeatCount="indefinite" begin="${animationDuration*2/3}s"/>
  </circle>
</svg>`;

      case 'spinner':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
  
  <g transform="translate(${width/2}, ${height/2})">
    <circle cx="0" cy="0" r="${size/2 - 4}" fill="none" stroke="${fillColor}" stroke-width="3" stroke-linecap="round" stroke-dasharray="15.708" stroke-dashoffset="15.708">
      <animateTransform attributeName="transform" type="rotate" values="0;360" dur="${animationDuration}s" repeatCount="indefinite"/>
      <animate attributeName="stroke-dashoffset" values="15.708;0;15.708" dur="${animationDuration}s" repeatCount="indefinite"/>
    </circle>
  </g>
</svg>`;

      case 'bars':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
  
  <rect x="${width/2 - 20}" y="${height/2 - 10}" width="3" height="20" fill="${fillColor}">
    <animate attributeName="height" values="20;5;20" dur="${animationDuration}s" repeatCount="indefinite" begin="0s"/>
    <animate attributeName="y" values="${height/2 - 10};${height/2 - 2.5};${height/2 - 10}" dur="${animationDuration}s" repeatCount="indefinite" begin="0s"/>
  </rect>
  
  <rect x="${width/2 - 10}" y="${height/2 - 10}" width="3" height="20" fill="${fillColor}">
    <animate attributeName="height" values="20;5;20" dur="${animationDuration}s" repeatCount="indefinite" begin="${animationDuration/4}s"/>
    <animate attributeName="y" values="${height/2 - 10};${height/2 - 2.5};${height/2 - 10}" dur="${animationDuration}s" repeatCount="indefinite" begin="${animationDuration/4}s"/>
  </rect>
  
  <rect x="${width/2}" y="${height/2 - 10}" width="3" height="20" fill="${fillColor}">
    <animate attributeName="height" values="20;5;20" dur="${animationDuration}s" repeatCount="indefinite" begin="${animationDuration/2}s"/>
    <animate attributeName="y" values="${height/2 - 10};${height/2 - 2.5};${height/2 - 10}" dur="${animationDuration}s" repeatCount="indefinite" begin="${animationDuration/2}s"/>
  </rect>
  
  <rect x="${width/2 + 10}" y="${height/2 - 10}" width="3" height="20" fill="${fillColor}">
    <animate attributeName="height" values="20;5;20" dur="${animationDuration}s" repeatCount="indefinite" begin="${animationDuration*3/4}s"/>
    <animate attributeName="y" values="${height/2 - 10};${height/2 - 2.5};${height/2 - 10}" dur="${animationDuration}s" repeatCount="indefinite" begin="${animationDuration*3/4}s"/>
  </rect>
</svg>`;

      case 'pulse':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
  
  <circle cx="${width/2}" cy="${height/2}" r="8" fill="${fillColor}">
    <animate attributeName="r" values="8;16;8" dur="${animationDuration}s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.3;1" dur="${animationDuration}s" repeatCount="indefinite"/>
  </circle>
</svg>`;

      case 'wave':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
  
  <path fill="${fillColor}" d="M0,${height/2} Q${width/4},${height/2 - 10} ${width/2},${height/2} T${width},${height/2} L${width},${height} L0,${height} Z">
    <animate attributeName="d" dur="${animationDuration}s" repeatCount="indefinite"
      values="M0,${height/2} Q${width/4},${height/2 - 10} ${width/2},${height/2} T${width},${height/2} L${width},${height} L0,${height} Z;
              M0,${height/2} Q${width/4},${height/2 + 10} ${width/2},${height/2} T${width},${height/2} L${width},${height} L0,${height} Z;
              M0,${height/2} Q${width/4},${height/2 - 10} ${width/2},${height/2} T${width},${height/2} L${width},${height} L0,${height} Z"/>
  </path>
</svg>`;

      case 'gradient':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradientBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${fillColor};stop-opacity:0.2" />
      <stop offset="50%" style="stop-color:${fillColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${fillColor};stop-opacity:0.2" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="${animationDuration}s" repeatCount="indefinite"
        values="-${width} 0; ${width * 2} 0; -${width} 0" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
  
  <rect x="0" y="${height/2 - 2}" width="${width}" height="4" rx="2" fill="${fillColor}" opacity="0.3"/>
  <rect x="0" y="${height/2 - 2}" width="${width}" height="4" rx="2" fill="url(#gradientBar)"/>
</svg>`;

      case 'orbit':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="orbitGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:${fillColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${fillColor};stop-opacity:0.3" />
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
  
  <circle cx="${width/2}" cy="${height/2}" r="15" fill="none" stroke="${fillColor}" stroke-width="1" opacity="0.2"/>
  <circle cx="${width/2}" cy="${height/2}" r="25" fill="none" stroke="${fillColor}" stroke-width="1" opacity="0.1"/>
  
  <g transform-origin="${width/2} ${height/2}">
    <circle cx="${width/2 + 15}" cy="${height/2}" r="3" fill="url(#orbitGradient)"/>
    <circle cx="${width/2 - 20}" cy="${height/2}" r="2" fill="${fillColor}" opacity="0.6"/>
    <animateTransform attributeName="transform" type="rotate" values="0; 360" dur="${animationDuration}s" repeatCount="indefinite"/>
  </g>
</svg>`;

      case 'coming-soon':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="comingSoonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#667eea;stop-opacity:1" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="2s" repeatCount="indefinite"
        values="-200 0; 400 0; -200 0" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="200" height="40" fill="${backgroundColor}"/>
  
  <text x="100" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" 
        fill="url(#comingSoonGradient)">
    COMING SOON
    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
  </text>
  
  <circle cx="180" cy="20" r="2" fill="#667eea">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" begin="0s"/>
  </circle>
  <circle cx="185" cy="20" r="2" fill="#764ba2">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" begin="0.5s"/>
  </circle>
  <circle cx="190" cy="20" r="2" fill="#667eea">
    <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" begin="1s"/>
  </circle>
</svg>`;

      case 'building':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#4facfe;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00f2fe;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="200" height="40" fill="${backgroundColor}"/>
  
  <text x="20" y="25" font-family="monospace" font-size="12" font-weight="bold" fill="url(#buildingGradient)">
    🔨 Building...
    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
  </text>
  
  <rect x="120" y="18" width="60" height="4" rx="2" fill="#e0e0e0"/>
  <rect x="120" y="18" width="0" height="4" rx="2" fill="url(#buildingGradient)">
    <animate attributeName="width" values="0;60;0" dur="3s" repeatCount="indefinite"/>
  </rect>
</svg>`;

      case 'work-in-progress':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="250" height="40" viewBox="0 0 250 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wipGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ff9a9e;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#fecfef;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#fecfef;stop-opacity:1" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="3s" repeatCount="indefinite"
        values="-250 0; 500 0; -250 0" />
    </linearGradient>
  </defs>
  <rect width="250" height="40" fill="${backgroundColor}"/>
  
  <text x="125" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" 
        fill="url(#wipGradient)">
    🚧 WORK IN PROGRESS 🚧
    <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="2s" repeatCount="indefinite"/>
  </text>
</svg>`;

      case 'loading-text':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="150" height="40" viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:0.3" />
      <stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#667eea;stop-opacity:0.3" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="2s" repeatCount="indefinite"
        values="-150 0; 300 0; -150 0" />
    </linearGradient>
  </defs>
  <rect width="150" height="40" fill="${backgroundColor}"/>
  
  <text x="75" y="25" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" 
        fill="url(#loadingGradient)">
    Loading
    <tspan>
      <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0s">.</animate>
    </tspan>
    <tspan>
      <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.5s">.</animate>
    </tspan>
    <tspan>
      <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="1s">.</animate>
    </tspan>
  </text>
</svg>`;

      case 'neon-pulse':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
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
  <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
  
  <circle cx="${width/2}" cy="${height/2}" r="8" fill="url(#neonPulseGradient)" filter="url(#neonGlow)">
    <animate attributeName="r" values="8;20;8" dur="${animationDuration}s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.2;1" dur="${animationDuration}s" repeatCount="indefinite"/>
  </circle>
  
  <circle cx="${width/2}" cy="${height/2}" r="4" fill="${fillColor}" filter="url(#neonGlow)">
    <animate attributeName="opacity" values="0.8;1;0.8" dur="${animationDuration/2}s" repeatCount="indefinite"/>
  </circle>
</svg>`;

      case 'triangles':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${fillColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${fillColor};stop-opacity:0.3" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
  
  <polygon points="${width/2 - 15},${height/2 + 8} ${width/2 - 8},${height/2 - 8} ${width/2 - 22},${height/2 - 8}" 
           fill="url(#triangleGradient)">
    <animateTransform attributeName="transform" type="rotate" values="0 ${width/2 - 15} ${height/2}; 360 ${width/2 - 15} ${height/2}" 
                      dur="${animationDuration}s" repeatCount="indefinite"/>
  </polygon>
  
  <polygon points="${width/2},${height/2 + 8} ${width/2 + 7},${height/2 - 8} ${width/2 - 7},${height/2 - 8}" 
           fill="url(#triangleGradient)">
    <animateTransform attributeName="transform" type="rotate" values="120 ${width/2} ${height/2}; 480 ${width/2} ${height/2}" 
                      dur="${animationDuration}s" repeatCount="indefinite"/>
  </polygon>
  
  <polygon points="${width/2 + 15},${height/2 + 8} ${width/2 + 22},${height/2 - 8} ${width/2 + 8},${height/2 - 8}" 
           fill="url(#triangleGradient)">
    <animateTransform attributeName="transform" type="rotate" values="240 ${width/2 + 15} ${height/2}; 600 ${width/2 + 15} ${height/2}" 
                      dur="${animationDuration}s" repeatCount="indefinite"/>
  </polygon>
</svg>`;

      case 'ripple':
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
  
  <circle cx="${width/2}" cy="${height/2}" r="0" fill="none" stroke="${fillColor}" stroke-width="2" opacity="1">
    <animate attributeName="r" values="0;20;0" dur="${animationDuration}s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0;1" dur="${animationDuration}s" repeatCount="indefinite"/>
  </circle>
  
  <circle cx="${width/2}" cy="${height/2}" r="0" fill="none" stroke="${fillColor}" stroke-width="2" opacity="1">
    <animate attributeName="r" values="0;20;0" dur="${animationDuration}s" repeatCount="indefinite" begin="${animationDuration/2}s"/>
    <animate attributeName="opacity" values="1;0;1" dur="${animationDuration}s" repeatCount="indefinite" begin="${animationDuration/2}s"/>
  </circle>
  
  <circle cx="${width/2}" cy="${height/2}" r="3" fill="${fillColor}">
    <animate attributeName="opacity" values="0.8;1;0.8" dur="${animationDuration/3}s" repeatCount="indefinite"/>
  </circle>
</svg>`;

      default:
        return this.generate({ ...options, type: 'dots' });
    }
  }
}
