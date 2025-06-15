export class TypingGenerator {
  static generate(options = {}) {
    const {
      text = 'Welcome to my project',
      speed = 50,
      color = '#000000',
      backgroundColor = 'transparent',
      fontSize = 20,
      fontFamily = 'monospace',
      width = 400,
      height = 60,
      cursor = true,
      cursorColor = '#000000',
      type = 'classic'
    } = options;

    switch (type) {
      case 'classic':
        return this.generateClassic(options);
      case 'neon':
        return this.generateNeon(options);
      case 'glitch':
        return this.generateGlitch(options);
      case 'rainbow':
        return this.generateRainbow(options);
      case 'wave':
        return this.generateWave(options);
      case 'matrix':
        return this.generateMatrix(options);
      case 'terminal':
        return this.generateTerminal(options);
      case 'gradient':
        return this.generateGradient(options);
      default:
        return this.generateClassic(options);
    }
  }

  static generateClassic(options = {}) {
    const {
      text = 'Welcome to my project',
      speed = 50,
      color = '#000000',
      backgroundColor = 'transparent',
      fontSize = 20,
      fontFamily = 'monospace',
      width = 400,
      height = 60,
      cursor = true,
      cursorColor = '#000000'
    } = options;

    const duration = (text.length * speed) / 1000;
    const textWidth = text.length * (fontSize * 0.6);
    const adjustedWidth = Math.max(width, textWidth + 40);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .typing-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: ${color};
        font-weight: 400;
      }
      .cursor {
        fill: ${cursorColor};
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      .char {
        opacity: 0;
        animation: typewriter ${duration}s steps(${text.length}) 1s forwards;
      }
      @keyframes typewriter {
        to { opacity: 1; }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}"/>
  
  <text x="20" y="${height/2 + fontSize/3}" class="typing-text">
    ${text.split('').map((char, index) => 
      `<tspan class="char" style="animation-delay: ${(index * speed) / 1000}s">${char === ' ' ? '&#160;' : char}</tspan>`
    ).join('')}
    ${cursor ? `<tspan class="cursor" style="animation-delay: ${duration + 1}s">|</tspan>` : ''}
  </text>
</svg>`;
  }

  static generateNeon(options = {}) {
    const {
      text = 'Welcome to my project',
      speed = 50,
      color = '#00ffff',
      backgroundColor = '#000011',
      fontSize = 20,
      fontFamily = 'Arial, sans-serif',
      width = 400,
      height = 60,
      cursor = true
    } = options;

    const duration = (text.length * speed) / 1000;
    const textWidth = text.length * (fontSize * 0.6);
    const adjustedWidth = Math.max(width, textWidth + 40);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feGaussianBlur stdDeviation="4" result="bigGlow"/>
      <feMerge> 
        <feMergeNode in="bigGlow"/>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <style>
      .neon-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: ${color};
        font-weight: bold;
        filter: url(#neonGlow);
      }
      .neon-cursor {
        fill: ${color};
        filter: url(#neonGlow);
        animation: neonBlink 1s infinite;
      }
      @keyframes neonBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0.3; }
      }
      .neon-char {
        opacity: 0;
        animation: neonType ${duration}s steps(${text.length}) 1s forwards;
      }
      @keyframes neonType {
        to { opacity: 1; }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}"/>
  
  <text x="20" y="${height/2 + fontSize/3}" class="neon-text">
    ${text.split('').map((char, index) => 
      `<tspan class="neon-char" style="animation-delay: ${(index * speed) / 1000}s">${char === ' ' ? '&#160;' : char}</tspan>`
    ).join('')}
    ${cursor ? `<tspan class="neon-cursor" style="animation-delay: ${duration + 1}s">█</tspan>` : ''}
  </text>
</svg>`;
  }

  static generateGlitch(options = {}) {
    const {
      text = 'Welcome to my project',
      speed = 50,
      color = '#ff0040',
      backgroundColor = '#000000',
      fontSize = 20,
      fontFamily = 'Courier New, monospace',
      width = 400,
      height = 60,
      cursor = true
    } = options;

    const duration = (text.length * speed) / 1000;
    const textWidth = text.length * (fontSize * 0.6);
    const adjustedWidth = Math.max(width, textWidth + 40);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .glitch-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: ${color};
        font-weight: bold;
      }
      .glitch-cursor {
        fill: ${color};
        animation: glitchBlink 0.5s infinite;
      }
      @keyframes glitchBlink {
        0%, 40% { opacity: 1; }
        41%, 60% { opacity: 0; }
        61%, 100% { opacity: 1; }
      }
      .glitch-char {
        opacity: 0;
        animation: glitchType ${duration}s steps(${text.length}) 1s forwards;
      }
      @keyframes glitchType {
        0% { opacity: 0; transform: translateX(0); }
        10% { opacity: 1; transform: translateX(-2px); }
        20% { transform: translateX(2px); }
        30% { transform: translateX(-1px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      .glitch-shadow {
        fill: #00ff41;
        opacity: 0.6;
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}"/>
  
  <!-- Shadow text for glitch effect -->
  <text x="22" y="${height/2 + fontSize/3 + 1}" class="glitch-text glitch-shadow">
    ${text.split('').map((char, index) => 
      `<tspan class="glitch-char" style="animation-delay: ${(index * speed) / 1000}s">${char === ' ' ? '&#160;' : char}</tspan>`
    ).join('')}
  </text>
  
  <!-- Main text -->
  <text x="20" y="${height/2 + fontSize/3}" class="glitch-text">
    ${text.split('').map((char, index) => 
      `<tspan class="glitch-char" style="animation-delay: ${(index * speed) / 1000}s">${char === ' ' ? '&#160;' : char}</tspan>`
    ).join('')}
    ${cursor ? `<tspan class="glitch-cursor" style="animation-delay: ${duration + 1}s">▊</tspan>` : ''}
  </text>
</svg>`;
  }

  static generateRainbow(options = {}) {
    const {
      text = 'Welcome to my project',
      speed = 50,
      backgroundColor = 'transparent',
      fontSize = 20,
      fontFamily = 'Arial, sans-serif',
      width = 400,
      height = 60,
      cursor = true
    } = options;

    const duration = (text.length * speed) / 1000;
    const textWidth = text.length * (fontSize * 0.6);
    const adjustedWidth = Math.max(width, textWidth + 40);

    const rainbowColors = ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff00', '#00ff80', '#00ffff', '#0080ff', '#0000ff', '#8000ff', '#ff00ff', '#ff0080'];

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      ${rainbowColors.map((color, index) => 
        `<stop offset="${(index / (rainbowColors.length - 1)) * 100}%" style="stop-color:${color};stop-opacity:1" />`
      ).join('')}
      <animateTransform attributeName="gradientTransform" type="translate" dur="3s" repeatCount="indefinite"
        values="0 0; 100 0; 0 0" />
    </linearGradient>
    <style>
      .rainbow-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: url(#rainbowGradient);
        font-weight: bold;
      }
      .rainbow-cursor {
        fill: url(#rainbowGradient);
        animation: rainbowBlink 1s infinite;
      }
      @keyframes rainbowBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      .rainbow-char {
        opacity: 0;
        animation: rainbowType ${duration}s steps(${text.length}) 1s forwards;
      }
      @keyframes rainbowType {
        to { opacity: 1; }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}"/>
  
  <text x="20" y="${height/2 + fontSize/3}" class="rainbow-text">
    ${text.split('').map((char, index) => 
      `<tspan class="rainbow-char" style="animation-delay: ${(index * speed) / 1000}s">${char === ' ' ? '&#160;' : char}</tspan>`
    ).join('')}
    ${cursor ? `<tspan class="rainbow-cursor" style="animation-delay: ${duration + 1}s">|</tspan>` : ''}
  </text>
</svg>`;
  }

  static generateWave(options = {}) {
    const {
      text = 'Welcome to my project',
      speed = 50,
      color = '#007CF0',
      backgroundColor = 'transparent',
      fontSize = 20,
      fontFamily = 'Arial, sans-serif',
      width = 400,
      height = 60,
      cursor = true
    } = options;

    const duration = (text.length * speed) / 1000;
    const textWidth = text.length * (fontSize * 0.6);
    const adjustedWidth = Math.max(width, textWidth + 40);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .wave-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: ${color};
        font-weight: 600;
      }
      .wave-cursor {
        fill: ${color};
        animation: waveBlink 1s infinite;
      }
      @keyframes waveBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      .wave-char {
        opacity: 0;
        animation: waveType ${duration}s steps(${text.length}) 1s forwards, wave 2s ease-in-out infinite;
        transform-origin: center bottom;
      }
      @keyframes waveType {
        to { opacity: 1; }
      }
      @keyframes wave {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-3px); }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}"/>
  
  <text x="20" y="${height/2 + fontSize/3}" class="wave-text">
    ${text.split('').map((char, index) => 
      `<tspan class="wave-char" style="animation-delay: ${(index * speed) / 1000}s, ${index * 0.1}s">${char === ' ' ? '&#160;' : char}</tspan>`
    ).join('')}
    ${cursor ? `<tspan class="wave-cursor" style="animation-delay: ${duration + 1}s">|</tspan>` : ''}
  </text>
</svg>`;
  }

  static generateMatrix(options = {}) {
    const {
      text = 'Welcome to my project',
      speed = 50,
      color = '#00ff41',
      backgroundColor = '#000000',
      fontSize = 20,
      fontFamily = 'Courier New, monospace',
      width = 400,
      height = 60,
      cursor = true
    } = options;

    const duration = (text.length * speed) / 1000;
    const textWidth = text.length * (fontSize * 0.6);
    const adjustedWidth = Math.max(width, textWidth + 40);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="matrixGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <style>
      .matrix-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: ${color};
        font-weight: bold;
        filter: url(#matrixGlow);
      }
      .matrix-cursor {
        fill: ${color};
        filter: url(#matrixGlow);
        animation: matrixBlink 0.8s infinite;
      }
      @keyframes matrixBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0.2; }
      }
      .matrix-char {
        opacity: 0;
        animation: matrixType ${duration}s steps(${text.length}) 1s forwards;
      }
      @keyframes matrixType {
        0% { opacity: 0; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}"/>
  
  <text x="20" y="${height/2 + fontSize/3}" class="matrix-text">
    ${text.split('').map((char, index) => 
      `<tspan class="matrix-char" style="animation-delay: ${(index * speed) / 1000}s">${char === ' ' ? '&#160;' : char}</tspan>`
    ).join('')}
    ${cursor ? `<tspan class="matrix-cursor" style="animation-delay: ${duration + 1}s">█</tspan>` : ''}
  </text>
</svg>`;
  }

  static generateTerminal(options = {}) {
    const {
      text = 'Welcome to my project',
      speed = 50,
      color = '#00ff00',
      backgroundColor = '#000000',
      fontSize = 16,
      fontFamily = 'Courier New, monospace',
      width = 400,
      height = 60,
      cursor = true,
      prompt = '$ '
    } = options;

    const fullText = prompt + text;
    const duration = (fullText.length * speed) / 1000;
    const textWidth = fullText.length * (fontSize * 0.6);
    const adjustedWidth = Math.max(width, textWidth + 40);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .terminal-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: ${color};
        font-weight: normal;
      }
      .terminal-cursor {
        fill: ${color};
        animation: terminalBlink 1s infinite;
      }
      @keyframes terminalBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      .terminal-char {
        opacity: 0;
        animation: terminalType ${duration}s steps(${fullText.length}) 0.5s forwards;
      }
      @keyframes terminalType {
        to { opacity: 1; }
      }
      .prompt {
        fill: #ffffff;
        opacity: 1;
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}" rx="4"/>
  <rect x="0" y="0" width="${adjustedWidth}" height="20" fill="#333333" rx="4 4 0 0"/>
  <circle cx="15" cy="10" r="3" fill="#ff5f56"/>
  <circle cx="35" cy="10" r="3" fill="#ffbd2e"/>
  <circle cx="55" cy="10" r="3" fill="#27ca3f"/>
  
  <text x="20" y="${height/2 + fontSize/3 + 5}" class="terminal-text">
    ${fullText.split('').map((char, index) => {
      if (index < prompt.length) {
        return `<tspan class="prompt">${char === ' ' ? '&#160;' : char}</tspan>`;
      } else {
        return `<tspan class="terminal-char" style="animation-delay: ${(index * speed) / 1000}s">${char === ' ' ? '&#160;' : char}</tspan>`;
      }
    }).join('')}
    ${cursor ? `<tspan class="terminal-cursor" style="animation-delay: ${duration + 0.5}s">▊</tspan>` : ''}
  </text>
</svg>`;
  }

  static generateGradient(options = {}) {
    const {
      text = 'Welcome to my project',
      speed = 50,
      backgroundColor = 'transparent',
      fontSize = 20,
      fontFamily = 'Arial, sans-serif',
      width = 400,
      height = 60,
      cursor = true,
      gradientColors = ['#667eea', '#764ba2']
    } = options;

    const duration = (text.length * speed) / 1000;
    const textWidth = text.length * (fontSize * 0.6);
    const adjustedWidth = Math.max(width, textWidth + 40);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${gradientColors[0]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${gradientColors[1]};stop-opacity:1" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="4s" repeatCount="indefinite"
        values="0 0; 50 0; 0 0" />
    </linearGradient>
    <style>
      .gradient-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: url(#textGradient);
        font-weight: 600;
      }
      .gradient-cursor {
        fill: url(#textGradient);
        animation: gradientBlink 1s infinite;
      }
      @keyframes gradientBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      .gradient-char {
        opacity: 0;
        animation: gradientType ${duration}s steps(${text.length}) 1s forwards, shimmer 3s ease-in-out infinite;
      }
      @keyframes gradientType {
        to { opacity: 1; }
      }
      @keyframes shimmer {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.3); }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}"/>
  
  <text x="20" y="${height/2 + fontSize/3}" class="gradient-text">
    ${text.split('').map((char, index) => 
      `<tspan class="gradient-char" style="animation-delay: ${(index * speed) / 1000}s">${char === ' ' ? '&#160;' : char}</tspan>`
    ).join('')}
    ${cursor ? `<tspan class="gradient-cursor" style="animation-delay: ${duration + 1}s">|</tspan>` : ''}
  </text>
</svg>`;
  }
}
