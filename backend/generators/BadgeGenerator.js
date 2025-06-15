export class BadgeGenerator {
  static generate(options = {}) {
    const {
      label = 'Build',
      message = 'Passing',
      color = 'green',
      labelColor = '#555',
      style = 'modern',
      logo = null,
      logoWidth = 14,
      animated = false,
      fontSize = 11,
      fontWeight = 'normal',
      borderRadius = 6
    } = options;

    // Enhanced color mapping with more modern colors
    const colorMap = {
      // Status colors
      green: '#00D26A',
      red: '#FF4444',
      blue: '#007CF0',
      yellow: '#FFD700',
      orange: '#FF8C00',
      purple: '#8B5CF6',
      pink: '#EC4899',
      cyan: '#06B6D4',
      gray: '#6B7280',
      black: '#000000',
      white: '#FFFFFF',
      
      // Semantic colors
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B',
      info: '#3B82F6',
      
      // Brand colors
      github: '#181717',
      twitter: '#1DA1F2',
      linkedin: '#0077B5',
      youtube: '#FF0000',
      discord: '#5865F2',
      
      // Classic shields.io colors
      brightgreen: '#4c1',
      lightgrey: '#9f9f9f',
      important: '#e05d44',
      critical: '#e05d44',
      informational: '#007ec6',
      inactive: '#9f9f9f'
    };

    const messageColor = colorMap[color] || color;
    const labelBg = colorMap[labelColor] || labelColor;

    // Better text width calculation
    const charWidth = fontSize * 0.6;
    const padding = 12;
    const labelWidth = Math.max(label.length * charWidth + padding * 2, 40);
    const messageWidth = Math.max(message.length * charWidth + padding * 2, 40);
    const logoSpace = logo ? logoWidth + 8 : 0;
    const totalWidth = labelWidth + messageWidth + logoSpace;
    const height = style === 'large' ? 32 : 24;

    const labelX = logoSpace + padding;
    const messageX = labelWidth + logoSpace + padding;

    switch (style) {
      case 'modern':
        return this.generateModern({ ...options, labelWidth, messageWidth, totalWidth, height, labelX, messageX, logoSpace, messageColor, labelBg });
      
      case 'gradient':
        return this.generateGradient({ ...options, labelWidth, messageWidth, totalWidth, height, labelX, messageX, logoSpace, messageColor, labelBg });
      
      case 'neon':
        return this.generateNeon({ ...options, labelWidth, messageWidth, totalWidth, height, labelX, messageX, logoSpace, messageColor, labelBg });
      
      case 'glass':
        return this.generateGlass({ ...options, labelWidth, messageWidth, totalWidth, height, labelX, messageX, logoSpace, messageColor, labelBg });
      
      case 'pill':
        return this.generatePill({ ...options, labelWidth, messageWidth, totalWidth, height, labelX, messageX, logoSpace, messageColor, labelBg });
      
      case 'outline':
        return this.generateOutline({ ...options, labelWidth, messageWidth, totalWidth, height, labelX, messageX, logoSpace, messageColor, labelBg });
      
      case 'shadow':
        return this.generateShadow({ ...options, labelWidth, messageWidth, totalWidth, height, labelX, messageX, logoSpace, messageColor, labelBg });
      
      case 'animated':
        return this.generateAnimated({ ...options, labelWidth, messageWidth, totalWidth, height, labelX, messageX, logoSpace, messageColor, labelBg });
      
      case 'classic':
        return this.generateClassic({ ...options, labelWidth, messageWidth, totalWidth, height, labelX, messageX, logoSpace, messageColor, labelBg });
      
      case 'large':
        return this.generateLarge({ ...options, labelWidth, messageWidth, totalWidth, height, labelX, messageX, logoSpace, messageColor, labelBg });

      default:
        return this.generateModern({ ...options, labelWidth, messageWidth, totalWidth, height, labelX, messageX, logoSpace, messageColor, labelBg });
    }
  }

  static generateModern(options) {
    const { label, message, totalWidth, height, labelWidth, messageWidth, labelX, messageX, logoSpace, messageColor, labelBg, logo, logoWidth, fontSize = 11, borderRadius = 6 } = options;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="modernGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.15"/>
      <stop offset="100%" style="stop-color:#000000;stop-opacity:0.05"/>
    </linearGradient>
    <filter id="modernShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#000000" flood-opacity="0.1"/>
    </filter>
  </defs>
  
  <!-- Background with rounded corners -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="${labelBg}" filter="url(#modernShadow)"/>
  
  <!-- Message background -->
  <rect x="${labelWidth + logoSpace}" y="0" width="${messageWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="${messageColor}"/>
  
  <!-- Gradient overlay -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="url(#modernGradient)"/>
  
  ${logo ? `<image x="8" y="${(height - logoWidth)/2}" width="${logoWidth}" height="${logoWidth}" href="${logo}"/>` : ''}
  
  <!-- Label text -->
  <text x="${labelX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="500" fill="#ffffff" text-anchor="start">${label}</text>
  
  <!-- Message text -->
  <text x="${messageX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="500" fill="#ffffff" text-anchor="start">${message}</text>
</svg>`;
  }

  static generateGradient(options) {
    const { label, message, totalWidth, height, labelWidth, messageWidth, labelX, messageX, logoSpace, messageColor, labelBg, logo, logoWidth, fontSize = 11, borderRadius = 6, animated = false } = options;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradientBg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${labelBg}"/>
      <stop offset="50%" style="stop-color:${messageColor}"/>
      <stop offset="100%" style="stop-color:${messageColor}"/>
      ${animated ? `<animateTransform attributeName="gradientTransform" type="translate" dur="3s" repeatCount="indefinite" values="0 0; 100 0; 0 0"/>` : ''}
    </linearGradient>
    <linearGradient id="gradientOverlay" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.2"/>
      <stop offset="100%" style="stop-color:#000000;stop-opacity:0.1"/>
    </linearGradient>
  </defs>
  
  <!-- Main gradient background -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="url(#gradientBg)"/>
  
  <!-- Overlay gradient -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="url(#gradientOverlay)"/>
  
  ${logo ? `<image x="8" y="${(height - logoWidth)/2}" width="${logoWidth}" height="${logoWidth}" href="${logo}"/>` : ''}
  
  <!-- Label text -->
  <text x="${labelX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="600" fill="#ffffff" text-anchor="start">${label}</text>
  
  <!-- Message text -->
  <text x="${messageX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="600" fill="#ffffff" text-anchor="start">${message}</text>
</svg>`;
  }

  static generateNeon(options) {
    const { label, message, totalWidth, height, labelWidth, messageWidth, labelX, messageX, logoSpace, messageColor, labelBg, logo, logoWidth, fontSize = 11, borderRadius = 6, animated = false } = options;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feGaussianBlur stdDeviation="4" result="bigGlow"/>
      <feMerge> 
        <feMergeNode in="bigGlow"/>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <linearGradient id="neonBg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#000010"/>
      <stop offset="100%" style="stop-color:#000020"/>
    </linearGradient>
  </defs>
  
  <!-- Dark background -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="url(#neonBg)"/>
  
  <!-- Neon border -->
  <rect x="1" y="1" width="${totalWidth-2}" height="${height-2}" rx="${borderRadius-1}" ry="${borderRadius-1}" fill="none" stroke="${messageColor}" stroke-width="1" filter="url(#neonGlow)" opacity="0.8">
    ${animated ? `<animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>` : ''}
  </rect>
  
  ${logo ? `<image x="8" y="${(height - logoWidth)/2}" width="${logoWidth}" height="${logoWidth}" href="${logo}" filter="url(#neonGlow)"/>` : ''}
  
  <!-- Label text -->
  <text x="${labelX}" y="${height/2 + fontSize/3}" font-family="'Courier New',monospace" font-size="${fontSize}" font-weight="bold" fill="${messageColor}" text-anchor="start" filter="url(#neonGlow)">${label}</text>
  
  <!-- Message text -->
  <text x="${messageX}" y="${height/2 + fontSize/3}" font-family="'Courier New',monospace" font-size="${fontSize}" font-weight="bold" fill="${messageColor}" text-anchor="start" filter="url(#neonGlow)">${message}</text>
</svg>`;
  }

  static generateGlass(options) {
    const { label, message, totalWidth, height, labelWidth, messageWidth, labelX, messageX, logoSpace, messageColor, labelBg, logo, logoWidth, fontSize = 11, borderRadius = 6 } = options;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="glassBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.2"/>
      <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.05"/>
    </linearGradient>
    <linearGradient id="glassHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.5"/>
      <stop offset="50%" style="stop-color:#ffffff;stop-opacity:0.1"/>
      <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0"/>
    </linearGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0.5"/>
    </filter>
  </defs>
  
  <!-- Background blur -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="${messageColor}" opacity="0.3" filter="url(#blur)"/>
  
  <!-- Glass background -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="url(#glassBg)" stroke="#ffffff" stroke-width="0.5" stroke-opacity="0.3"/>
  
  <!-- Glass highlight -->
  <rect x="1" y="1" width="${totalWidth-2}" height="${height/2}" rx="${borderRadius-1}" ry="${borderRadius-1}" fill="url(#glassHighlight)"/>
  
  ${logo ? `<image x="8" y="${(height - logoWidth)/2}" width="${logoWidth}" height="${logoWidth}" href="${logo}"/>` : ''}
  
  <!-- Label text -->
  <text x="${labelX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="600" fill="#ffffff" text-anchor="start" text-shadow="0 1px 2px rgba(0,0,0,0.5)">${label}</text>
  
  <!-- Message text -->
  <text x="${messageX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="600" fill="#ffffff" text-anchor="start" text-shadow="0 1px 2px rgba(0,0,0,0.5)">${message}</text>
</svg>`;
  }

  static generatePill(options) {
    const { label, message, totalWidth, height, labelWidth, messageWidth, labelX, messageX, logoSpace, messageColor, labelBg, logo, logoWidth, fontSize = 11 } = options;
    const pillRadius = height / 2;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.2"/>
      <stop offset="100%" style="stop-color:#000000;stop-opacity:0.1"/>
    </linearGradient>
  </defs>
  
  <!-- Label background -->
  <rect x="0" y="0" width="${labelWidth + logoSpace}" height="${height}" rx="${pillRadius}" ry="${pillRadius}" fill="${labelBg}"/>
  
  <!-- Message background -->
  <rect x="${labelWidth + logoSpace}" y="0" width="${messageWidth}" height="${height}" rx="${pillRadius}" ry="${pillRadius}" fill="${messageColor}"/>
  
  <!-- Gradient overlay -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${pillRadius}" ry="${pillRadius}" fill="url(#pillGradient)"/>
  
  ${logo ? `<image x="8" y="${(height - logoWidth)/2}" width="${logoWidth}" height="${logoWidth}" href="${logo}"/>` : ''}
  
  <!-- Label text -->
  <text x="${labelX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="500" fill="#ffffff" text-anchor="start">${label}</text>
  
  <!-- Message text -->
  <text x="${messageX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="500" fill="#ffffff" text-anchor="start">${message}</text>
</svg>`;
  }

  static generateOutline(options) {
    const { label, message, totalWidth, height, labelWidth, messageWidth, labelX, messageX, logoSpace, messageColor, labelBg, logo, logoWidth, fontSize = 11, borderRadius = 6 } = options;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="outlineBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.05"/>
      <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.02"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect x="2" y="2" width="${totalWidth-4}" height="${height-4}" rx="${borderRadius}" ry="${borderRadius}" fill="url(#outlineBg)"/>
  
  <!-- Border -->
  <rect x="1" y="1" width="${totalWidth-2}" height="${height-2}" rx="${borderRadius}" ry="${borderRadius}" fill="none" stroke="${messageColor}" stroke-width="1.5"/>
  
  <!-- Divider -->
  <line x1="${labelWidth + logoSpace}" y1="4" x2="${labelWidth + logoSpace}" y2="${height-4}" stroke="${messageColor}" stroke-width="1" opacity="0.5"/>
  
  ${logo ? `<image x="8" y="${(height - logoWidth)/2}" width="${logoWidth}" height="${logoWidth}" href="${logo}"/>` : ''}
  
  <!-- Label text -->
  <text x="${labelX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="600" fill="${labelBg}" text-anchor="start">${label}</text>
  
  <!-- Message text -->
  <text x="${messageX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="600" fill="${messageColor}" text-anchor="start">${message}</text>
</svg>`;
  }

  static generateShadow(options) {
    const { label, message, totalWidth, height, labelWidth, messageWidth, labelX, messageX, logoSpace, messageColor, labelBg, logo, logoWidth, fontSize = 11, borderRadius = 6 } = options;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth + 4}" height="${height + 4}" viewBox="0 0 ${totalWidth + 4} ${height + 4}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
    <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.2"/>
      <stop offset="100%" style="stop-color:#000000;stop-opacity:0.1"/>
    </linearGradient>
  </defs>
  
  <!-- Background with shadow -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="${labelBg}" filter="url(#shadow)"/>
  
  <!-- Message background -->
  <rect x="${labelWidth + logoSpace}" y="0" width="${messageWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="${messageColor}"/>
  
  <!-- Gradient overlay -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="url(#shadowGradient)"/>
  
  ${logo ? `<image x="8" y="${(height - logoWidth)/2}" width="${logoWidth}" height="${logoWidth}" href="${logo}"/>` : ''}
  
  <!-- Label text -->
  <text x="${labelX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="600" fill="#ffffff" text-anchor="start">${label}</text>
  
  <!-- Message text -->
  <text x="${messageX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="600" fill="#ffffff" text-anchor="start">${message}</text>
</svg>`;
  }

  static generateAnimated(options) {
    const { label, message, totalWidth, height, labelWidth, messageWidth, labelX, messageX, logoSpace, messageColor, labelBg, logo, logoWidth, fontSize = 11, borderRadius = 6 } = options;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${labelBg}"/>
      <stop offset="50%" style="stop-color:${messageColor}"/>
      <stop offset="100%" style="stop-color:${messageColor}"/>
      <animateTransform attributeName="gradientTransform" type="translate" dur="2s" repeatCount="indefinite" values="-100 0; 100 0; -100 0"/>
    </linearGradient>
    <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0"/>
      <stop offset="50%" style="stop-color:#ffffff;stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0"/>
      <animateTransform attributeName="gradientTransform" type="translate" dur="3s" repeatCount="indefinite" values="-200 0; 200 0; -200 0"/>
    </linearGradient>
  </defs>
  
  <!-- Animated background -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="url(#animatedGradient)"/>
  
  <!-- Shimmer effect -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="url(#shimmer)"/>
  
  ${logo ? `<image x="8" y="${(height - logoWidth)/2}" width="${logoWidth}" height="${logoWidth}" href="${logo}"/>` : ''}
  
  <!-- Label text -->
  <text x="${labelX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="600" fill="#ffffff" text-anchor="start">${label}</text>
  
  <!-- Message text -->
  <text x="${messageX}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="600" fill="#ffffff" text-anchor="start">${message}</text>
</svg>`;
  }

  static generateClassic(options) {
    const { label, message, totalWidth, height, labelWidth, messageWidth, labelX, messageX, logoSpace, messageColor, labelBg, logo, logoWidth, fontSize = 11 } = options;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="classicGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.1"/>
      <stop offset="100%" style="stop-color:#000000;stop-opacity:0.1"/>
    </linearGradient>
  </defs>
  
  <!-- Label background -->
  <rect x="0" y="0" width="${labelWidth + logoSpace}" height="${height}" fill="${labelBg}"/>
  
  <!-- Message background -->
  <rect x="${labelWidth + logoSpace}" y="0" width="${messageWidth}" height="${height}" fill="${messageColor}"/>
  
  <!-- Gradient overlay -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" fill="url(#classicGradient)"/>
  
  ${logo ? `<image x="4" y="${(height - logoWidth)/2}" width="${logoWidth}" height="${logoWidth}" href="${logo}"/>` : ''}
  
  <!-- Label text -->
  <text x="${labelX - 4}" y="${height/2 + fontSize/3}" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="${fontSize}" fill="#ffffff" text-anchor="start">${label}</text>
  
  <!-- Message text -->
  <text x="${messageX - 4}" y="${height/2 + fontSize/3}" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="${fontSize}" fill="#ffffff" text-anchor="start">${message}</text>
</svg>`;
  }

  static generateLarge(options) {
    const { label, message, totalWidth, height, labelWidth, messageWidth, labelX, messageX, logoSpace, messageColor, labelBg, logo, logoWidth, fontSize = 14, borderRadius = 8 } = options;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="largeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.2"/>
      <stop offset="100%" style="stop-color:#000000;stop-opacity:0.1"/>
    </linearGradient>
    <filter id="largeShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.2"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="${labelBg}" filter="url(#largeShadow)"/>
  
  <!-- Message background -->
  <rect x="${labelWidth + logoSpace}" y="0" width="${messageWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="${messageColor}"/>
  
  <!-- Gradient overlay -->
  <rect x="0" y="0" width="${totalWidth}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" fill="url(#largeGradient)"/>
  
  ${logo ? `<image x="12" y="${(height - logoWidth*1.2)/2}" width="${logoWidth*1.2}" height="${logoWidth*1.2}" href="${logo}"/>` : ''}
  
  <!-- Label text -->
  <text x="${labelX + 4}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="600" fill="#ffffff" text-anchor="start">${label}</text>
  
  <!-- Message text -->
  <text x="${messageX + 4}" y="${height/2 + fontSize/3}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="${fontSize}" font-weight="600" fill="#ffffff" text-anchor="start">${message}</text>
</svg>`;
  }
}
