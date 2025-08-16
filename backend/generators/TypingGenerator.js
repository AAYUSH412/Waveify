export class TypingGenerator {
  // Emoji support - comprehensive emoji detection and mapping
  static getEmojiCodePoint(emoji) {
    const emojiMap = {
      '😀': '1f600', '😃': '1f603', '😄': '1f604', '😁': '1f601', '😆': '1f606',
      '😅': '1f605', '😂': '1f602', '🤣': '1f923', '😊': '1f60a', '😇': '1f607',
      '🙂': '1f642', '🙃': '1f643', '😉': '1f609', '😌': '1f60c', '😍': '1f60d',
      '🥰': '1f970', '😘': '1f618', '😗': '1f617', '😙': '1f619', '😚': '1f61a',
      '😋': '1f60b', '😛': '1f61b', '😝': '1f61d', '😜': '1f61c', '🤪': '1f929',
      '🤨': '1f928', '🧐': '1f9d0', '🤓': '1f913', '😎': '1f60e', '🤩': '1f929',
      '🥳': '1f973', '😏': '1f60f', '😒': '1f612', '😞': '1f61e', '😔': '1f614',
      '😟': '1f61f', '😕': '1f615', '🙁': '1f641', '☹️': '2639-fe0f', '😣': '1f623',
      '😖': '1f616', '😫': '1f62b', '😩': '1f629', '🥺': '1f97a', '😢': '1f622',
      '😭': '1f62d', '😤': '1f624', '😠': '1f620', '😡': '1f621', '🤬': '1f92c',
      '🤯': '1f92f', '😳': '1f633', '🥵': '1f975', '🥶': '1f976', '😱': '1f631',
      '😨': '1f628', '😰': '1f630', '😥': '1f625', '😓': '1f613', '🤗': '1f917',
      '🤔': '1f914', '🤭': '1f92d', '🤫': '1f92b', '🤥': '1f925', '😶': '1f636',
      '😐': '1f610', '😑': '1f611', '😬': '1f62c', '🙄': '1f644', '😯': '1f62f',
      '😦': '1f626', '😧': '1f627', '😮': '1f62e', '😲': '1f632', '🥱': '1f971',
      '😴': '1f634', '🤤': '1f924', '😪': '1f62a', '😵': '1f635', '🤐': '1f910',
      '🥴': '1f974', '🤢': '1f922', '🤮': '1f92e', '🤧': '1f927', '😷': '1f637',
      '🤒': '1f912', '🤕': '1f915', '🤑': '1f911', '🤠': '1f920', '😈': '1f608',
      '👿': '1f47f', '👹': '1f479', '👺': '1f47a', '🤡': '1f921', '💩': '1f4a9',
      '👻': '1f47b', '💀': '1f480', '☠️': '2620-fe0f', '👽': '1f47d', '👾': '1f47e',
      '🤖': '1f916', '🎃': '1f383', '😺': '1f63a', '😸': '1f638', '😹': '1f639',
      '😻': '1f63b', '😼': '1f63c', '😽': '1f63d', '🙀': '1f640', '😿': '1f63f',
      '😾': '1f63e', '🚀': '1f680', '⭐': '2b50', '✨': '2728', '💎': '1f48e',
      '🔥': '1f525', '💥': '1f4a5', '💫': '1f4ab', '⚡': '26a1', '☄️': '2604-fe0f',
      '🌟': '1f31f', '⭐': '2b50', '🌠': '1f320', '☀️': '2600-fe0f', '🌞': '1f31e',
      '🌝': '1f31d', '🌛': '1f31b', '🌜': '1f31c', '🌚': '1f31a', '🌕': '1f315',
      '🌖': '1f316', '🌗': '1f317', '🌘': '1f318', '🌑': '1f311', '🌒': '1f312',
      '🌓': '1f313', '🌔': '1f314', '🌙': '1f319', '🌎': '1f30e', '🌍': '1f30d',
      '🌏': '1f30f', '🪐': '1fa90', '💫': '1f4ab', '⭐': '2b50', '🌟': '1f31f',
      '✨': '2728', '⚡': '26a1', '☄️': '2604-fe0f', '💥': '1f4a5', '🔥': '1f525',
      '🌊': '1f30a', '🎯': '1f3af', '💯': '1f4af', '✅': '2705', '❌': '274c',
      '⚠️': '26a0-fe0f', '🚫': '1f6ab', '💔': '1f494', '❤️': '2764-fe0f', '🧡': '1f9e1',
      '💛': '1f49b', '💚': '1f49a', '💙': '1f499', '💜': '1f49c', '🤍': '1f90d',
      '🖤': '1f5a4', '🤎': '1f90e', '💕': '1f495', '💞': '1f49e', '💓': '1f493',
      '💗': '1f497', '💖': '1f496', '💘': '1f498', '💝': '1f49d', '💟': '1f49f',
      '💌': '1f48c', '💢': '1f4a2', '💤': '1f4a4', '💨': '1f4a8', '💦': '1f4a6',
      '💧': '1f4a7', '💪': '1f4aa', '👍': '1f44d', '👎': '1f44e', '👌': '1f44c',
      '✋': '270b', '🖐️': '1f590-fe0f', '🖖': '1f596', '👋': '1f44b', '🤙': '1f919',
      '💪': '1f4aa', '🖕': '1f595', '✍️': '270d-fe0f', '🙏': '1f64f', '🦶': '1f9b6',
      '🦵': '1f9b5', '👂': '1f442', '🦻': '1f9bb', '👃': '1f443', '🧠': '1f9e0',
      '🫀': '1fac0', '🫁': '1fac1', '🦷': '1f9b7', '🦴': '1f9b4', '👀': '1f440',
      '👁️': '1f441-fe0f', '👅': '1f445', '👄': '1f444', '🗣️': '1f5e3-fe0f', '👤': '1f464',
      '👥': '1f465', '🫂': '1fac2', '👶': '1f476', '🧒': '1f9d2', '👦': '1f466',
      '👧': '1f467', '🧑': '1f9d1', '👨': '1f468', '👩': '1f469', '🧓': '1f9d3',
      '👴': '1f474', '👵': '1f475', '🙍': '1f64d', '🙎': '1f64e', '🙅': '1f645',
      '🙆': '1f646', '💁': '1f481', '🙋': '1f64b', '🧏': '1f9cf', '🙇': '1f647',
      '🤦': '1f926', '🤷': '1f937', '👮': '1f46e', '🕵️': '1f575-fe0f', '💂': '1f482',
      '🥷': '1f977', '👷': '1f477', '🤴': '1f934', '👸': '1f478', '👳': '1f473',
      '👲': '1f472', '🧕': '1f9d5', '🤵': '1f935', '👰': '1f470', '🤰': '1f930',
      '🤱': '1f931', '👼': '1f47c', '🎅': '1f385', '🤶': '1f936', '🦸': '1f9b8',
      '🦹': '1f9b9', '🧙': '1f9d9', '🧚': '1f9da', '🧛': '1f9db', '🧜': '1f9dc',
      '🧝': '1f9dd', '🧞': '1f9de', '🧟': '1f9df', '🥸': '1f978', '😮‍💨': '1f62e-200d-1f4a8',
      '😵‍💫': '1f635-200d-1f4ab', '😶‍🌫️': '1f636-200d-1f32b-fe0f'
    };
    
    // First check our manual mapping
    if (emojiMap[emoji]) {
      return emojiMap[emoji];
    }
    
    // Fallback: generate code point from Unicode
    const codePoint = emoji.codePointAt(0);
    if (codePoint) {
      return codePoint.toString(16).toLowerCase().padStart(4, '0');
    }
    
    return null;
  }

  static processTextWithEmojis(text, fontSize = 20) {
    // Enhanced emoji detection regex covering all Unicode ranges
    const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1F018}-\u{1F0FF}]|[\u{1F000}-\u{1F02F}]|[\u{1F0A0}-\u{1F0FF}]|[\u{FE00}-\u{FE0F}]|[\u{E0020}-\u{E007F}]|[\u{200D}]|[\u{20E3}]|[\u{2049}]|[\u{203C}]|[\u{2139}]|[\u{2194}-\u{2199}]|[\u{21A9}-\u{21AA}]|[\u{231A}-\u{231B}]|[\u{2328}]|[\u{23CF}]|[\u{23E9}-\u{23F3}]|[\u{23F8}-\u{23FA}]|[\u{24C2}]|[\u{25AA}-\u{25AB}]|[\u{25B6}]|[\u{25C0}]|[\u{25FB}-\u{25FE}]|[\u{2600}-\u{2604}]|[\u{260E}]|[\u{2611}]|[\u{2614}-\u{2615}]|[\u{2618}]|[\u{261D}]|[\u{2620}]|[\u{2622}-\u{2623}]|[\u{2626}]|[\u{262A}]|[\u{262E}-\u{262F}]|[\u{2638}-\u{263A}]|[\u{2640}]|[\u{2642}]|[\u{2648}-\u{2653}]|[\u{2660}]|[\u{2663}]|[\u{2665}-\u{2666}]|[\u{2668}]|[\u{267B}]|[\u{267E}-\u{267F}]|[\u{2692}-\u{2697}]|[\u{2699}]|[\u{269B}-\u{269C}]|[\u{26A0}-\u{26A1}]|[\u{26AA}-\u{26AB}]|[\u{26B0}-\u{26B1}]|[\u{26BD}-\u{26BE}]|[\u{26C4}-\u{26C5}]|[\u{26C8}]|[\u{26CE}-\u{26CF}]|[\u{26D1}]|[\u{26D3}-\u{26D4}]|[\u{26E9}-\u{26EA}]|[\u{26F0}-\u{26F5}]|[\u{26F7}-\u{26FA}]|[\u{26FD}]|[\u{2702}]|[\u{2705}]|[\u{2708}-\u{270D}]|[\u{270F}]|[\u{2712}]|[\u{2714}]|[\u{2716}]|[\u{271D}]|[\u{2721}]|[\u{2728}]|[\u{2733}-\u{2734}]|[\u{2744}]|[\u{2747}]|[\u{274C}]|[\u{274E}]|[\u{2753}-\u{2755}]|[\u{2757}]|[\u{2763}-\u{2764}]|[\u{2795}-\u{2797}]|[\u{27A1}]|[\u{27B0}]|[\u{27BF}]|[\u{2934}-\u{2935}]|[\u{2B05}-\u{2B07}]|[\u{2B1B}-\u{2B1C}]|[\u{2B50}]|[\u{2B55}]|[\u{3030}]|[\u{303D}]|[\u{3297}]|[\u{3299}]/gu;
    
    const parts = [];
    let lastIndex = 0;
    let match;
    
    while ((match = emojiRegex.exec(text)) !== null) {
      // Add text before emoji
      if (match.index > lastIndex) {
        const textPart = text.slice(lastIndex, match.index);
        parts.push(...textPart.split('').map(char => ({ type: 'text', content: char })));
      }
      
      // Add emoji
      parts.push({ type: 'emoji', content: match[0] });
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      const textPart = text.slice(lastIndex);
      parts.push(...textPart.split('').map(char => ({ type: 'text', content: char })));
    }
    
    return parts;
  }

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

    const textParts = this.processTextWithEmojis(text, fontSize);
    const duration = (textParts.length * speed) / 1000;
    const estimatedWidth = textParts.length * (fontSize * 0.6) + 60;
    const adjustedWidth = Math.max(width, estimatedWidth);
    const emojiSize = Math.floor(fontSize * 1.1);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <style>
      .typing-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: ${color};
        font-weight: 400;
        font-kerning: auto;
        text-rendering: optimizeLegibility;
      }
      .cursor {
        fill: ${cursorColor};
        animation: smoothBlink 1.0s ease-in-out infinite;
        opacity: 1;
      }
      @keyframes smoothBlink {
        0%, 45% { opacity: 1; }
        50%, 95% { opacity: 0.3; }
        100% { opacity: 1; }
      }
      .char {
        opacity: 0;
        animation: typewriter ${duration}s linear 0.5s forwards;
      }
      .emoji-icon {
        opacity: 0;
        animation: typewriter ${duration}s linear 0.5s forwards;
      }
      @keyframes typewriter {
        to { opacity: 1; }
      }
      @media (prefers-reduced-motion: reduce) {
        .char, .emoji-icon { animation: none; opacity: 1; }
        .cursor { animation: none; opacity: 1; }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}" rx="2"/>
  
  <g class="typing-text">
    ${textParts.map((part, index) => {
      const delay = (index * speed) / 1000;
      const xPos = 20 + (index * fontSize * 0.6);
      
      if (part.type === 'emoji') {
        const codePoint = this.getEmojiCodePoint(part.content);
        if (codePoint) {
          return `<image x="${xPos}" y="${height/2 - emojiSize/2 + 2}" width="${emojiSize}" height="${emojiSize}" 
                    class="emoji-icon" style="animation-delay: ${delay}s"
                    href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint}.svg"/>`;
        } else {
          return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="typing-text">
                    <tspan class="char" style="animation-delay: ${delay}s">${part.content}</tspan>
                  </text>`;
        }
      } else {
        const char = part.content === ' ' ? '&#160;' : part.content;
        return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="typing-text">
                  <tspan class="char" style="animation-delay: ${delay}s">${char}</tspan>
                </text>`;
      }
    }).join('')}
    
    ${cursor ? `<text x="${20 + (textParts.length * fontSize * 0.6)}" y="${height/2 + fontSize/3}" class="typing-text">
                  <tspan class="cursor" style="animation-delay: ${duration + 0.5}s">▌</tspan>
                </text>` : ''}
  </g>
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

    const textParts = this.processTextWithEmojis(text, fontSize);
    const duration = (textParts.length * speed) / 1000;
    const estimatedWidth = textParts.length * (fontSize * 0.6) + 60;
    const adjustedWidth = Math.max(width, estimatedWidth);
    const emojiSize = Math.floor(fontSize * 1.1);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="neonGlow" x="-1%" y="-1%" width="102%" height="102%">
      <feGaussianBlur stdDeviation="0.1" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <style>
      .neon-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: ${color};
        font-weight: 600;
        filter: url(#neonGlow);
        text-rendering: optimizeLegibility;
      }
      .neon-cursor {
        fill: ${color};
        filter: url(#neonGlow);
        animation: neonBlink 1.0s ease-in-out infinite;
      }
      @keyframes neonBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0.4; }
      }
      .neon-char {
        opacity: 0;
        animation: neonType ${duration}s linear 0.5s forwards;
      }
      .emoji-icon {
        opacity: 0;
        animation: neonType ${duration}s linear 0.5s forwards;
      }
      @keyframes neonType {
        0% { opacity: 0; transform: scale(0.95); }
        100% { opacity: 1; transform: scale(1); }
      }
      @media (prefers-reduced-motion: reduce) {
        .neon-char, .emoji-icon { animation: none; opacity: 1; transform: scale(1); }
        .neon-cursor { animation: none; opacity: 1; }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}" rx="3"/>
  
  <g class="neon-text">
    ${textParts.map((part, index) => {
      const delay = (index * speed) / 1000;
      const xPos = 20 + (index * fontSize * 0.6);
      
      if (part.type === 'emoji') {
        const codePoint = this.getEmojiCodePoint(part.content);
        if (codePoint) {
          return `<image x="${xPos}" y="${height/2 - emojiSize/2 + 2}" width="${emojiSize}" height="${emojiSize}" 
                    class="emoji-icon" style="animation-delay: ${delay}s"
                    href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint}.svg"/>`;
        } else {
          return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="neon-text">
                    <tspan class="neon-char" style="animation-delay: ${delay}s">${part.content}</tspan>
                  </text>`;
        }
      } else {
        const char = part.content === ' ' ? '&#160;' : part.content;
        return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="neon-text">
                  <tspan class="neon-char" style="animation-delay: ${delay}s">${char}</tspan>
                </text>`;
      }
    }).join('')}
    
    ${cursor ? `<text x="${20 + (textParts.length * fontSize * 0.6)}" y="${height/2 + fontSize/3}" class="neon-text">
                  <tspan class="neon-cursor" style="animation-delay: ${duration + 0.5}s">▊</tspan>
                </text>` : ''}
  </g>
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

    const textParts = this.processTextWithEmojis(text, fontSize);
    const duration = (textParts.length * speed) / 1000;
    const estimatedWidth = textParts.length * (fontSize * 0.6) + 60;
    const adjustedWidth = Math.max(width, estimatedWidth);
    const emojiSize = Math.floor(fontSize * 1.1);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <style>
      .glitch-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: ${color};
        font-weight: 700;
        text-rendering: optimizeLegibility;
      }
      .glitch-cursor {
        fill: ${color};
        animation: glitchBlink 1.0s ease-in-out infinite;
      }
      @keyframes glitchBlink {
        0%, 45% { opacity: 1; transform: translateX(0); }
        50%, 52% { opacity: 0.4; transform: translateX(-0.3px); }
        53%, 95% { opacity: 1; transform: translateX(0.2px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      .glitch-char {
        opacity: 0;
        animation: glitchType ${duration}s linear 0.5s forwards;
      }
      .emoji-icon {
        opacity: 0;
        animation: glitchType ${duration}s linear 0.5s forwards;
      }
      @keyframes glitchType {
        0% { opacity: 0; transform: translateX(-1px); }
        20% { opacity: 1; transform: translateX(0.5px); }
        40% { transform: translateX(-0.3px); }
        60% { transform: translateX(0.2px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      .glitch-shadow {
        fill: #00ff41;
        opacity: 0.7;
      }
      @media (prefers-reduced-motion: reduce) {
        .glitch-char, .emoji-icon { animation: none; opacity: 1; transform: translateX(0); }
        .glitch-cursor { animation: none; opacity: 1; transform: translateX(0); }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}" rx="2"/>
  
  <!-- Shadow layer for glitch effect -->
  <g class="glitch-text glitch-shadow">
    ${textParts.map((part, index) => {
      const delay = (index * speed) / 1000;
      const xPos = 22 + (index * fontSize * 0.6);
      
      if (part.type === 'emoji') {
        const codePoint = this.getEmojiCodePoint(part.content);
        if (codePoint) {
          return `<image x="${xPos}" y="${height/2 - emojiSize/2 + 3}" width="${emojiSize}" height="${emojiSize}" 
                    class="emoji-icon" style="animation-delay: ${delay}s; opacity: 0.6;"
                    href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint}.svg"/>`;
        } else {
          return `<text x="${xPos}" y="${height/2 + fontSize/3 + 1}" class="glitch-text glitch-shadow">
                    <tspan class="glitch-char" style="animation-delay: ${delay}s">${part.content}</tspan>
                  </text>`;
        }
      } else {
        const char = part.content === ' ' ? '&#160;' : part.content;
        return `<text x="${xPos}" y="${height/2 + fontSize/3 + 1}" class="glitch-text glitch-shadow">
                  <tspan class="glitch-char" style="animation-delay: ${delay}s">${char}</tspan>
                </text>`;
      }
    }).join('')}
  </g>
  
  <!-- Main text layer -->
  <g class="glitch-text">
    ${textParts.map((part, index) => {
      const delay = (index * speed) / 1000;
      const xPos = 20 + (index * fontSize * 0.6);
      
      if (part.type === 'emoji') {
        const codePoint = this.getEmojiCodePoint(part.content);
        if (codePoint) {
          return `<image x="${xPos}" y="${height/2 - emojiSize/2 + 2}" width="${emojiSize}" height="${emojiSize}" 
                    class="emoji-icon" style="animation-delay: ${delay}s"
                    href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint}.svg"/>`;
        } else {
          return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="glitch-text">
                    <tspan class="glitch-char" style="animation-delay: ${delay}s">${part.content}</tspan>
                  </text>`;
        }
      } else {
        const char = part.content === ' ' ? '&#160;' : part.content;
        return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="glitch-text">
                  <tspan class="glitch-char" style="animation-delay: ${delay}s">${char}</tspan>
                </text>`;
      }
    }).join('')}
    
    ${cursor ? `<text x="${20 + (textParts.length * fontSize * 0.6)}" y="${height/2 + fontSize/3}" class="glitch-text">
                  <tspan class="glitch-cursor" style="animation-delay: ${duration + 0.5}s">▌</tspan>
                </text>` : ''}
  </g>
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

    const textParts = this.processTextWithEmojis(text, fontSize);
    const duration = (textParts.length * speed) / 1000;
    const estimatedWidth = textParts.length * (fontSize * 0.6) + 60;
    const adjustedWidth = Math.max(width, estimatedWidth);
    const emojiSize = Math.floor(fontSize * 1.1);

    const rainbowColors = ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff00', '#00ff80', '#00ffff', '#0080ff', '#0000ff', '#8000ff', '#ff00ff', '#ff0080'];

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      ${rainbowColors.map((color, index) => 
        `<stop offset="${(index / (rainbowColors.length - 1)) * 100}%" style="stop-color:${color};stop-opacity:1" />`
      ).join('')}
      <animateTransform attributeName="gradientTransform" type="translate" dur="4s" repeatCount="indefinite"
        values="0 0; 100 0; 0 0" />
    </linearGradient>
    <style>
      .rainbow-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: url(#rainbowGradient);
        font-weight: 600;
        text-rendering: optimizeLegibility;
      }
      .rainbow-cursor {
        fill: url(#rainbowGradient);
        animation: rainbowBlink 1.0s ease-in-out infinite;
      }
      @keyframes rainbowBlink {
        0%, 45% { opacity: 1; }
        50%, 95% { opacity: 0.5; }
        100% { opacity: 1; }
      }
      .rainbow-char {
        opacity: 0;
        animation: rainbowType ${duration}s linear 0.5s forwards;
      }
      .emoji-icon {
        opacity: 0;
        animation: rainbowType ${duration}s linear 0.5s forwards;
      }
      @keyframes rainbowType {
        0% { opacity: 0; transform: scale(0.9); }
        100% { opacity: 1; transform: scale(1); }
      }
      @media (prefers-reduced-motion: reduce) {
        .rainbow-char, .emoji-icon { animation: none; opacity: 1; transform: scale(1); }
        .rainbow-cursor { animation: none; opacity: 1; }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}" rx="3"/>
  
  <g class="rainbow-text">
    ${textParts.map((part, index) => {
      const delay = (index * speed) / 1000;
      const xPos = 20 + (index * fontSize * 0.6);
      
      if (part.type === 'emoji') {
        const codePoint = this.getEmojiCodePoint(part.content);
        if (codePoint) {
          return `<image x="${xPos}" y="${height/2 - emojiSize/2 + 2}" width="${emojiSize}" height="${emojiSize}" 
                    class="emoji-icon" style="animation-delay: ${delay}s"
                    href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint}.svg"/>`;
        } else {
          return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="rainbow-text">
                    <tspan class="rainbow-char" style="animation-delay: ${delay}s">${part.content}</tspan>
                  </text>`;
        }
      } else {
        const char = part.content === ' ' ? '&#160;' : part.content;
        return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="rainbow-text">
                  <tspan class="rainbow-char" style="animation-delay: ${delay}s">${char}</tspan>
                </text>`;
      }
    }).join('')}
    
    ${cursor ? `<text x="${20 + (textParts.length * fontSize * 0.6)}" y="${height/2 + fontSize/3}" class="rainbow-text">
                  <tspan class="rainbow-cursor" style="animation-delay: ${duration + 0.5}s">▌</tspan>
                </text>` : ''}
  </g>
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

    const textParts = this.processTextWithEmojis(text, fontSize);
    const duration = (textParts.length * speed) / 1000;
    const estimatedWidth = textParts.length * (fontSize * 0.6) + 60;
    const adjustedWidth = Math.max(width, estimatedWidth);
    const emojiSize = Math.floor(fontSize * 1.1);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <style>
      .wave-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: ${color};
        font-weight: 600;
        text-rendering: optimizeLegibility;
      }
      .wave-cursor {
        fill: ${color};
        animation: waveBlink 1.0s ease-in-out infinite;
      }
      @keyframes waveBlink {
        0%, 45% { opacity: 1; transform: translateY(0); }
        50%, 95% { opacity: 0.6; transform: translateY(-0.3px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .wave-char {
        opacity: 0;
        animation: waveType ${duration}s linear 0.5s forwards, wave 2.5s ease-in-out infinite;
        transform-origin: center bottom;
      }
      .emoji-icon {
        opacity: 0;
        animation: waveType ${duration}s linear 0.5s forwards, waveEmoji 2.5s ease-in-out infinite;
        transform-origin: center center;
      }
      @keyframes waveType {
        0% { opacity: 0; transform: translateY(5px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes wave {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-1.5px); }
      }
      @keyframes waveEmoji {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-1.5px) scale(1.02); }
      }
      @media (prefers-reduced-motion: reduce) {
        .wave-char, .emoji-icon { animation: none; opacity: 1; transform: translateY(0); }
        .wave-cursor { animation: none; opacity: 1; transform: translateY(0); }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}" rx="3"/>
  
  <g class="wave-text">
    ${textParts.map((part, index) => {
      const delay = (index * speed) / 1000;
      const waveDelay = index * 0.15;
      const xPos = 20 + (index * fontSize * 0.6);
      
      if (part.type === 'emoji') {
        const codePoint = this.getEmojiCodePoint(part.content);
        if (codePoint) {
          return `<image x="${xPos}" y="${height/2 - emojiSize/2 + 2}" width="${emojiSize}" height="${emojiSize}" 
                    class="emoji-icon" style="animation-delay: ${delay}s, ${waveDelay}s"
                    href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint}.svg"/>`;
        } else {
          return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="wave-text">
                    <tspan class="wave-char" style="animation-delay: ${delay}s, ${waveDelay}s">${part.content}</tspan>
                  </text>`;
        }
      } else {
        const char = part.content === ' ' ? '&#160;' : part.content;
        return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="wave-text">
                  <tspan class="wave-char" style="animation-delay: ${delay}s, ${waveDelay}s">${char}</tspan>
                </text>`;
      }
    }).join('')}
    
    ${cursor ? `<text x="${20 + (textParts.length * fontSize * 0.6)}" y="${height/2 + fontSize/3}" class="wave-text">
                  <tspan class="wave-cursor" style="animation-delay: ${duration + 0.5}s">▌</tspan>
                </text>` : ''}
  </g>
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

    const textParts = this.processTextWithEmojis(text, fontSize);
    const duration = (textParts.length * speed) / 1000;
    const estimatedWidth = textParts.length * (fontSize * 0.6) + 60;
    const adjustedWidth = Math.max(width, estimatedWidth);
    const emojiSize = Math.floor(fontSize * 1.1);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="matrixGlow" x="-1%" y="-1%" width="102%" height="102%">
      <feGaussianBlur stdDeviation="0.1" result="coloredBlur"/>
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
        font-weight: 700;
        filter: url(#matrixGlow);
        text-rendering: optimizeLegibility;
      }
      .matrix-cursor {
        fill: ${color};
        filter: url(#matrixGlow);
        animation: matrixBlink 1.0s ease-in-out infinite;
      }
      @keyframes matrixBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0.4; }
      }
      .matrix-char {
        opacity: 0;
        animation: matrixType ${duration}s linear 0.5s forwards;
      }
      .emoji-icon {
        opacity: 0;
        animation: matrixType ${duration}s linear 0.5s forwards;
      }
      @keyframes matrixType {
        0% { opacity: 0; transform: scale(0.95); }
        30% { opacity: 0.7; transform: scale(1.02); }
        100% { opacity: 1; transform: scale(1); }
      }
      @media (prefers-reduced-motion: reduce) {
        .matrix-char, .emoji-icon { animation: none; opacity: 1; transform: scale(1); }
        .matrix-cursor { animation: none; opacity: 1; }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}" rx="2"/>
  
  <g class="matrix-text">
    ${textParts.map((part, index) => {
      const delay = (index * speed) / 1000;
      const xPos = 20 + (index * fontSize * 0.6);
      
      if (part.type === 'emoji') {
        const codePoint = this.getEmojiCodePoint(part.content);
        if (codePoint) {
          return `<image x="${xPos}" y="${height/2 - emojiSize/2 + 2}" width="${emojiSize}" height="${emojiSize}" 
                    class="emoji-icon" style="animation-delay: ${delay}s"
                    href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint}.svg"/>`;
        } else {
          return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="matrix-text">
                    <tspan class="matrix-char" style="animation-delay: ${delay}s">${part.content}</tspan>
                  </text>`;
        }
      } else {
        const char = part.content === ' ' ? '&#160;' : part.content;
        return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="matrix-text">
                  <tspan class="matrix-char" style="animation-delay: ${delay}s">${char}</tspan>
                </text>`;
      }
    }).join('')}
    
    ${cursor ? `<text x="${20 + (textParts.length * fontSize * 0.6)}" y="${height/2 + fontSize/3}" class="matrix-text">
                  <tspan class="matrix-cursor" style="animation-delay: ${duration + 0.5}s">▊</tspan>
                </text>` : ''}
  </g>
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
    const textParts = this.processTextWithEmojis(fullText, fontSize);
    const duration = (textParts.length * speed) / 1000;
    const estimatedWidth = textParts.length * (fontSize * 0.6) + 80;
    const adjustedWidth = Math.max(width, estimatedWidth);
    const emojiSize = Math.floor(fontSize * 1.1);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <style>
      .terminal-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: ${color};
        font-weight: 500;
        text-rendering: optimizeLegibility;
      }
      .terminal-cursor {
        fill: ${color};
        animation: terminalBlink 1.0s ease-in-out infinite;
      }
      @keyframes terminalBlink {
        0%, 45% { opacity: 1; }
        50%, 95% { opacity: 0.4; }
        100% { opacity: 1; }
      }
      .terminal-char {
        opacity: 0;
        animation: terminalType ${duration}s linear 0.3s forwards;
      }
      .emoji-icon {
        opacity: 0;
        animation: terminalType ${duration}s linear 0.3s forwards;
      }
      @keyframes terminalType {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      .prompt {
        fill: #ffffff;
        opacity: 1;
        font-weight: 600;
      }
      @media (prefers-reduced-motion: reduce) {
        .terminal-char, .emoji-icon { animation: none; opacity: 1; }
        .terminal-cursor { animation: none; opacity: 1; }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}" rx="4"/>
  <rect x="0" y="0" width="${adjustedWidth}" height="22" fill="#1a1a1a" rx="4 4 0 0"/>
  <circle cx="15" cy="11" r="3" fill="#ff5f56"/>
  <circle cx="35" cy="11" r="3" fill="#ffbd2e"/>
  <circle cx="55" cy="11" r="3" fill="#27ca3f"/>
  
  <g class="terminal-text">
    ${textParts.map((part, index) => {
      const delay = (index * speed) / 1000;
      const xPos = 20 + (index * fontSize * 0.6);
      
      if (index < prompt.length) {
        // Prompt characters are always visible
        if (part.type === 'emoji') {
          const codePoint = this.getEmojiCodePoint(part.content);
          if (codePoint) {
            return `<image x="${xPos}" y="${height/2 - emojiSize/2 + 7}" width="${emojiSize}" height="${emojiSize}" 
                      class="prompt"
                      href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint}.svg"/>`;
          } else {
            return `<text x="${xPos}" y="${height/4 + fontSize/3 + 5}" class="terminal-text">
                      <tspan class="prompt">${part.content}</tspan>
                    </text>`;
          }
        } else {
          const char = part.content === ' ' ? '&#160;' : part.content;
          return `<text x="${xPos}" y="${height/2 + fontSize/3 + 5}" class="terminal-text">
                    <tspan class="prompt">${char}</tspan>
                  </text>`;
        }
      } else {
        // Text characters animate in
        if (part.type === 'emoji') {
          const codePoint = this.getEmojiCodePoint(part.content);
          if (codePoint) {
            return `<image x="${xPos}" y="${height/2 - emojiSize/2 + 7}" width="${emojiSize}" height="${emojiSize}" 
                      class="emoji-icon" style="animation-delay: ${delay}s"
                      href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint}.svg"/>`;
          } else {
            return `<text x="${xPos}" y="${height/2 + fontSize/3 + 5}" class="terminal-text">
                      <tspan class="terminal-char" style="animation-delay: ${delay}s">${part.content}</tspan>
                    </text>`;
          }
        } else {
          const char = part.content === ' ' ? '&#160;' : part.content;
          return `<text x="${xPos}" y="${height/2 + fontSize/3 + 5}" class="terminal-text">
                    <tspan class="terminal-char" style="animation-delay: ${delay}s">${char}</tspan>
                  </text>`;
        }
      }
    }).join('')}
    
    ${cursor ? `<text x="${20 + (textParts.length * fontSize * 0.6)}" y="${height/2 + fontSize/3 + 5}" class="terminal-text">
                  <tspan class="terminal-cursor" style="animation-delay: ${duration + 0.3}s">▌</tspan>
                </text>` : ''}
  </g>
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

    const textParts = this.processTextWithEmojis(text, fontSize);
    const duration = (textParts.length * speed) / 1000;
    const estimatedWidth = textParts.length * (fontSize * 0.6) + 60;
    const adjustedWidth = Math.max(width, estimatedWidth);
    const emojiSize = Math.floor(fontSize * 1.1);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${adjustedWidth}" height="${height}" viewBox="0 0 ${adjustedWidth} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${gradientColors[0]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${gradientColors[1]};stop-opacity:1" />
      <animateTransform attributeName="gradientTransform" type="translate" dur="5s" repeatCount="indefinite"
        values="0 0; 50 0; 0 0" />
    </linearGradient>
    <style>
      .gradient-text {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        fill: url(#textGradient);
        font-weight: 600;
        text-rendering: optimizeLegibility;
      }
      .gradient-cursor {
        fill: url(#textGradient);
        animation: gradientBlink 1.4s ease-in-out infinite;
      }
      @keyframes gradientBlink {
        0%, 55% { opacity: 1; filter: brightness(1); }
        60%, 90% { opacity: 0.4; filter: brightness(1.1); }
        100% { opacity: 1; filter: brightness(1); }
      }
      .gradient-char {
        opacity: 0;
        animation: gradientType ${duration}s linear 0.5s forwards, shimmer 4s ease-in-out infinite;
      }
      .emoji-icon {
        opacity: 0;
        animation: gradientType ${duration}s linear 0.5s forwards, shimmerEmoji 4s ease-in-out infinite;
      }
      @keyframes gradientType {
        0% { opacity: 0; transform: scale(0.95); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes shimmer {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.15); }
      }
      @keyframes shimmerEmoji {
        0%, 100% { filter: brightness(1) contrast(1); }
        50% { filter: brightness(1.1) contrast(1.05); }
      }
      @media (prefers-reduced-motion: reduce) {
        .gradient-char, .emoji-icon { animation: none; opacity: 1; transform: scale(1); filter: brightness(1); }
        .gradient-cursor { animation: none; opacity: 1; filter: brightness(1); }
      }
    </style>
  </defs>
  
  <rect width="${adjustedWidth}" height="${height}" fill="${backgroundColor}" rx="3"/>
  
  <g class="gradient-text">
    ${textParts.map((part, index) => {
      const delay = (index * speed) / 1000;
      const xPos = 20 + (index * fontSize * 0.6);
      
      if (part.type === 'emoji') {
        const codePoint = this.getEmojiCodePoint(part.content);
        if (codePoint) {
          return `<image x="${xPos}" y="${height/2 - emojiSize/2 + 2}" width="${emojiSize}" height="${emojiSize}" 
                    class="emoji-icon" style="animation-delay: ${delay}s"
                    href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint}.svg"/>`;
        } else {
          return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="gradient-text">
                    <tspan class="gradient-char" style="animation-delay: ${delay}s">${part.content}</tspan>
                  </text>`;
        }
      } else {
        const char = part.content === ' ' ? '&#160;' : part.content;
        return `<text x="${xPos}" y="${height/2 + fontSize/3}" class="gradient-text">
                  <tspan class="gradient-char" style="animation-delay: ${delay}s">${char}</tspan>
                </text>`;
      }
    }).join('')}
    
    ${cursor ? `<text x="${20 + (textParts.length * fontSize * 0.6)}" y="${height/2 + fontSize/3}" class="gradient-text">
                  <tspan class="gradient-cursor" style="animation-delay: ${duration + 0.5}s">▌</tspan>
                </text>` : ''}
  </g>
</svg>`;
  }
}
