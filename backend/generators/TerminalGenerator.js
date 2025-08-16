// Enhanced Terminal Generator with GitHub light/dark mode support and realistic command simulation

/**
 * Enhanced Terminal Theme Base with Professional UI/UX Standards
 * Implements modern design principles and accessibility features
 */
class TerminalThemeBase {
  static validateAndParseOptions(options = {}) {
    // Enhanced dimension validation with responsive breakpoints
    const width = Math.max(320, Math.min(2400, options.width || 800));
    const height = Math.max(160, Math.min(1200, options.height || 400));
    const fontSize = Math.max(8, Math.min(32, options.fontSize || 14));
    const speed = Math.max(5, Math.min(300, options.speed || 50));
    
    // Extended theme validation with new professional themes
    const validThemes = [
      'modern', 'matrix', 'cyberpunk', 'retro', 'glass', 'neon', 'minimal', 
      'github-dark', 'github-light', 'professional', 'ocean', 'sunset', 'monochrome'
    ];
    const theme = validThemes.includes(options.theme) ? options.theme : 'modern';
    
    // Enhanced command parsing with validation
    const commands = this.parseCommands(options.commands);
    
    // New UI/UX options
    const borderRadius = Math.max(0, Math.min(20, options.borderRadius || 12));
    const padding = Math.max(4, Math.min(32, options.padding || 16));
    const lineHeight = Math.max(1.2, Math.min(2.0, options.lineHeight || 1.4));
    
    return {
      commands,
      theme,
      speed,
      cursor: options.cursor !== false,
      prompt: options.prompt || "$ ",
      width,
      height,
      fontSize,
      showHeader: options.showHeader !== false,
      title: options.title || "Terminal",
      githubMode: options.githubMode === true,
      commandType: options.commandType || "auto",
      borderRadius,
      padding,
      lineHeight,
      showLineNumbers: options.showLineNumbers === true,
      enableScanlines: options.enableScanlines !== false,
      showTimestamp: options.showTimestamp === true,
      customColors: options.customColors || {},
      accessibility: {
        highContrast: options.highContrast === true,
        reducedMotion: options.reducedMotion === true,
        fontSize: options.accessibilityFontSize || fontSize
      }
    };
  }

  static parseCommands(rawCommands) {
    if (typeof rawCommands === 'string') {
      // Support advanced command chaining with && and ; and ||
      if (rawCommands.includes('&&') || rawCommands.includes(';') || rawCommands.includes('||')) {
        return rawCommands.split(/&&|;|\|\|/).map(cmd => cmd.trim()).filter(cmd => cmd.length > 0);
      }
      try {
        const parsed = JSON.parse(rawCommands);
        return Array.isArray(parsed) ? parsed : [rawCommands];
      } catch {
        return [rawCommands];
      }
    } else if (Array.isArray(rawCommands)) {
      return rawCommands.filter(cmd => cmd && typeof cmd === 'string');
    }
    return ["npm install", "npm run dev", 'echo "Hello World"'];
  }

  static getThemeColors(theme) {
    const themes = {
      modern: {
        bg: '#1e1e1e',
        headerBg: '#2d2d2d',
        border: '#333',
        text: '#ffffff',
        output: '#cccccc',
        success: '#4ade80',
        warning: '#fbbf24',
        error: '#ef4444',
        info: '#3b82f6',
        accent: '#7c3aed',
        cursor: '#ffffff'
      },
      professional: {
        bg: '#0f172a',
        headerBg: '#1e293b',
        border: '#334155',
        text: '#f8fafc',
        output: '#cbd5e1',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        accent: '#8b5cf6',
        cursor: '#f8fafc'
      },
      ocean: {
        bg: '#0f172a',
        headerBg: '#1e3a8a',
        border: '#3b82f6',
        text: '#dbeafe',
        output: '#93c5fd',
        success: '#06b6d4',
        warning: '#fbbf24',
        error: '#ef4444',
        info: '#60a5fa',
        accent: '#06b6d4',
        cursor: '#dbeafe'
      },
      sunset: {
        bg: '#431407',
        headerBg: '#7c2d12',
        border: '#ea580c',
        text: '#fed7aa',
        output: '#fdba74',
        success: '#84cc16',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        accent: '#f97316',
        cursor: '#fed7aa'
      },
      monochrome: {
        bg: '#000000',
        headerBg: '#1a1a1a',
        border: '#404040',
        text: '#ffffff',
        output: '#b3b3b3',
        success: '#ffffff',
        warning: '#cccccc',
        error: '#999999',
        info: '#e6e6e6',
        accent: '#ffffff',
        cursor: '#ffffff'
      },
      matrix: {
        bg: '#000000',
        headerBg: '#001100',
        border: '#00ff00',
        text: '#00ff00',
        output: '#00cc00',
        success: '#00ff00',
        warning: '#ffff00',
        error: '#ff0000',
        info: '#00ffff',
        accent: '#00ff00',
        cursor: '#00ff00'
      },
      cyberpunk: {
        bg: '#0d001a',
        headerBg: '#1a0033',
        border: '#ff00ff',
        text: '#ff00ff',
        output: '#cc00cc',
        success: '#00ffff',
        warning: '#ffff00',
        error: '#ff0080',
        info: '#8000ff',
        accent: '#ff00ff',
        cursor: '#00ffff'
      },
      retro: {
        bg: '#1a1a00',
        headerBg: '#2d2d00',
        border: '#ffff00',
        text: '#ffff00',
        output: '#cccc00',
        success: '#00ff00',
        warning: '#ff8000',
        error: '#ff0000',
        info: '#00ffff',
        accent: '#ffff00',
        cursor: '#ffff00'
      },
      glass: {
        bg: 'rgba(255, 255, 255, 0.1)',
        headerBg: 'rgba(255, 255, 255, 0.15)',
        border: 'rgba(255, 255, 255, 0.2)',
        text: '#ffffff',
        output: 'rgba(255, 255, 255, 0.8)',
        success: '#4ade80',
        warning: '#fbbf24',
        error: '#ef4444',
        info: '#3b82f6',
        accent: '#7c3aed',
        cursor: '#ffffff'
      },
      neon: {
        bg: '#000011',
        headerBg: '#000022',
        border: '#0080ff',
        text: '#00ffff',
        output: '#80c0ff',
        success: '#00ff80',
        warning: '#ffff00',
        error: '#ff4080',
        info: '#8080ff',
        accent: '#ff8000',
        cursor: '#00ffff'
      },
      minimal: {
        bg: '#fafafa',
        headerBg: '#f0f0f0',
        border: '#e0e0e0',
        text: '#333333',
        output: '#666666',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        accent: '#8b5cf6',
        cursor: '#333333'
      },
      'github-dark': {
        bg: '#0d1117',
        headerBg: '#161b22',
        border: '#30363d',
        text: '#f0f6fc',
        output: '#8b949e',
        success: '#238636',
        warning: '#d29922',
        error: '#da3633',
        info: '#1f6feb',
        accent: '#8957e5',
        cursor: '#f0f6fc'
      },
      'github-light': {
        bg: '#ffffff',
        headerBg: '#f6f8fa',
        border: '#d0d7de',
        text: '#24292f',
        output: '#656d76',
        success: '#1a7f37',
        warning: '#bf8700',
        error: '#cf222e',
        info: '#0969da',
        accent: '#8250df',
        cursor: '#24292f'
      }
    };
    return themes[theme] || themes.modern;
  }

  static generateBaseStyles(theme, fontSize, options = {}) {
    const colors = this.getThemeColors(theme);
    const { accessibility = {}, customColors = {} } = options;
    
    // Apply custom colors if provided
    const finalColors = { ...colors, ...customColors };
    
    // Accessibility adjustments
    const adjustedFontSize = accessibility.fontSize || fontSize;
    const highContrast = accessibility.highContrast;
    const reducedMotion = accessibility.reducedMotion;
    
    return `
      <style>
        /* Enhanced Base Styles with Professional Typography */
        .terminal-bg { 
          fill: ${finalColors.bg}; 
          stroke: ${finalColors.border}; 
          stroke-width: 1;
          filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.15));
        }
        .terminal-header { 
          fill: ${finalColors.headerBg}; 
          stroke: ${finalColors.border}; 
          stroke-width: 1;
        }
        .terminal-text { 
          fill: ${finalColors.text}; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: ${adjustedFontSize}px; 
          font-weight: 400;
          text-rendering: optimizeLegibility;
          letter-spacing: 0.05em;
        }
        .terminal-output { 
          fill: ${finalColors.output}; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: ${adjustedFontSize}px; 
          font-weight: 400;
          text-rendering: optimizeLegibility;
          letter-spacing: 0.05em;
        }
        .terminal-success { 
          fill: ${finalColors.success}; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: ${adjustedFontSize}px; 
          font-weight: 500;
          ${highContrast ? 'filter: brightness(1.2);' : ''}
        }
        .terminal-warning { 
          fill: ${finalColors.warning}; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: ${adjustedFontSize}px; 
          font-weight: 500;
          ${highContrast ? 'filter: brightness(1.2);' : ''}
        }
        .terminal-error { 
          fill: ${finalColors.error}; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: ${adjustedFontSize}px; 
          font-weight: 500;
          ${highContrast ? 'filter: brightness(1.2);' : ''}
        }
        .terminal-info { 
          fill: ${finalColors.info}; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: ${adjustedFontSize}px; 
          font-weight: 500;
          ${highContrast ? 'filter: brightness(1.2);' : ''}
        }
        .terminal-title { 
          fill: ${finalColors.text}; 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; 
          font-size: ${Math.max(10, adjustedFontSize - 2)}px; 
          font-weight: 600;
          letter-spacing: 0.025em;
        }
        .terminal-cursor { 
          fill: ${finalColors.cursor}; 
          opacity: 1;
        }
        .terminal-prompt { 
          fill: ${finalColors.accent}; 
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'Menlo', 'Consolas', monospace; 
          font-size: ${adjustedFontSize}px; 
          font-weight: 600;
        }
        
        /* Enhanced Control Styles */
        .close { fill: #ff5f57; stroke: #e0443e; stroke-width: 0.5; }
        .minimize { fill: #ffbd2e; stroke: #dea123; stroke-width: 0.5; }
        .maximize { fill: #28ca42; stroke: #1aad2f; stroke-width: 0.5; }
        
        /* Professional Theme-specific Effects */
        ${theme === 'glass' ? `
          .terminal-bg { 
            fill: ${finalColors.bg}; 
            backdrop-filter: blur(20px);
            filter: drop-shadow(0 16px 64px rgba(0, 0, 0, 0.4));
          }
          .terminal-header {
            fill: ${finalColors.headerBg};
            backdrop-filter: blur(20px);
          }
        ` : ''}
        
        ${theme === 'neon' ? `
          .terminal-text { 
            filter: drop-shadow(0 0 8px ${finalColors.text});
          }
          .terminal-success { 
            filter: drop-shadow(0 0 12px ${finalColors.success});
          }
          .terminal-border { 
            stroke: ${finalColors.border}; 
            stroke-width: 2;
            filter: drop-shadow(0 0 15px ${finalColors.border});
          }
        ` : ''}
        
        ${theme === 'cyberpunk' ? `
          .terminal-text { 
            filter: drop-shadow(0 0 4px ${finalColors.text});
          }
          .terminal-bg { 
            fill: url(#cyberpunkGradient); 
          }
        ` : ''}
        
        ${theme === 'professional' ? `
          .terminal-bg { 
            filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
          }
          .terminal-text {
            font-weight: 450;
          }
        ` : ''}
        
        /* Enhanced Cursor Animation */
        .cursor-blink {
          animation: ${reducedMotion ? 'none' : 'blink 1.2s ease-in-out infinite'};
        }
        @keyframes blink {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        /* Smooth Animations */
        text {
          transition: ${reducedMotion ? 'none' : 'all 0.2s ease-in-out'};
        }
        
        /* Accessibility Improvements */
        ${highContrast ? `
          .terminal-text { fill: #ffffff; }
          .terminal-output { fill: #e5e5e5; }
        ` : ''}
      </style>
    `;
  }
}

export class TerminalGenerator {
  static generate(options = {}) {
    try {
      return this.generateWithErrorHandling(options);
    } catch (error) {
      console.error('TerminalGenerator error:', error);
      return this.generateErrorSVG(error.message, options.width || 800, options.height || 400);
    }
  }

  static generateWithErrorHandling(options = {}) {
    // Validate and parse options using our new base class
    const validatedOptions = TerminalThemeBase.validateAndParseOptions(options);
    return this.generateInternal(validatedOptions);
  }

  static generateErrorSVG(errorMessage, width = 800, height = 400) {
    const safeMessage = this.escapeXml(errorMessage);
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .error-bg { fill: #1a1a1a; stroke: #ef4444; stroke-width: 2; }
      .error-icon { fill: #ef4444; }
      .error-text { fill: #ffffff; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; }
    </style>
  </defs>
  
  <rect x="0" y="0" width="${width}" height="${height}" rx="8" ry="8" class="error-bg"/>
  
  <!-- Error icon -->
  <circle cx="30" cy="30" r="12" class="error-icon"/>
  <text x="30" y="36" text-anchor="middle" class="error-text" style="font-size: 16px; font-weight: bold;">!</text>
  
  <!-- Error message -->
  <text x="60" y="25" class="error-text" style="font-size: 16px; font-weight: bold;">Terminal Generation Error</text>
  <text x="60" y="45" class="error-text">${safeMessage}</text>
  
  <!-- Help text -->
  <text x="20" y="${height - 60}" class="error-text" style="font-size: 12px; opacity: 0.7;">
    Please check your parameters and try again.
  </text>
  <text x="20" y="${height - 40}" class="error-text" style="font-size: 12px; opacity: 0.7;">
    Valid themes: modern, matrix, cyberpunk, retro, glass, neon, minimal, github-dark, github-light
  </text>
  <text x="20" y="${height - 20}" class="error-text" style="font-size: 12px; opacity: 0.7;">
    Dimensions: width (400-2000px), height (200-800px)
  </text>
</svg>`;
  }

  static escapeXml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  static generateInternal(options) {
    const {
      commands,
      theme,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      githubMode,
      commandType,
    } = options;

    switch (theme) {
      case "professional":
        return this.generateProfessional({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "ocean":
        return this.generateOcean({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "sunset":
        return this.generateSunset({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "monochrome":
        return this.generateMonochrome({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "matrix":
        return this.generateMatrix({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "cyberpunk":
        return this.generateCyberpunk({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "retro":
        return this.generateRetro({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "glass":
        return this.generateGlass({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "neon":
        return this.generateNeon({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "minimal":
        return this.generateMinimal({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "github-dark":
        return this.generateGithubDark({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode: true,
          commandType,
        });

      case "github-light":
        return this.generateGithubLight({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode: true,
          commandType,
        });

      case "modern":
      default:
        return this.generateModern({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });
    }
  }

  // Enhanced command simulation with realistic outputs and modern dev tools
  static simulateCommand(command, commandType = "auto") {
    const cmd = command.toLowerCase().trim();

    // Try modern dev tools first
    const modernResult = this.simulateModernDevCommand(command);
    if (modernResult) {
      return modernResult;
    }

    // Auto-detect command type if not specified
    if (commandType === "auto") {
      if (cmd.includes("npm") || cmd.includes("yarn") || cmd.includes("pnpm") || cmd.includes("bun")) {
        commandType = "package-manager";
      } else if (cmd.includes("git")) {
        commandType = "git";
      } else if (cmd.includes("docker")) {
        commandType = "docker";
      } else if (
        cmd.includes("ls") ||
        cmd.includes("cd") ||
        cmd.includes("mkdir") ||
        cmd.includes("touch") ||
        cmd.includes("cat")
      ) {
        commandType = "system";
      } else if (
        cmd.includes("test") ||
        cmd.includes("jest") ||
        cmd.includes("cypress")
      ) {
        commandType = "testing";
      } else if (
        cmd.includes("build") ||
        cmd.includes("dev") ||
        cmd.includes("start")
      ) {
        commandType = "development";
      } else if (
        cmd.includes("deploy") ||
        cmd.includes("vercel") ||
        cmd.includes("netlify")
      ) {
        commandType = "deployment";
      } else {
        commandType = "general";
      }
    }

    switch (commandType) {
      case "package-manager":
        return this.simulatePackageManagerCommand(command);
      case "git":
        return this.simulateGitCommand(command);
      case "docker":
        return this.simulateDockerCommand(command);
      case "system":
        return this.simulateSystemCommand(command);
      case "testing":
        return this.simulateTestingCommand(command);
      case "development":
        return this.simulateDevelopmentCommand(command);
      case "deployment":
        return this.simulateDeploymentCommand(command);
      default:
        return this.simulateGeneralCommand(command);
    }
  }

  // Modern development tools support
  static simulateModernDevCommand(command) {
    const cmd = command.toLowerCase().trim();
    
    // Bun commands
    if (cmd.includes('bun install')) {
      return [
        { text: "bun install v1.0.7", type: "info", delay: 0.2 },
        { text: "🔍 Resolving dependencies...", type: "output", delay: 0.5 },
        { text: "📦 Downloading packages...", type: "output", delay: 1.2 },
        { text: "🔗 Linking dependencies...", type: "output", delay: 1.8 },
        { text: "✅ Installed 247 packages in 890ms", type: "success", delay: 2.3 },
        { text: "📊 Saved 2.1MB in node_modules", type: "info", delay: 2.5 }
      ];
    }
    
    if (cmd.includes('bun run') || cmd.includes('bun dev')) {
      return [
        { text: "$ bun run dev", type: "output", delay: 0.2 },
        { text: "🚀 Starting development server...", type: "info", delay: 0.5 },
        { text: "⚡ Using Bun runtime", type: "info", delay: 0.8 },
        { text: "🔥 Hot reload enabled", type: "success", delay: 1.2 },
        { text: "📡 Server running at http://localhost:3000", type: "success", delay: 1.8 },
        { text: "⚡ Ready in 420ms", type: "success", delay: 2.1 }
      ];
    }
    
    // Vite commands
    if (cmd.includes('vite') && (cmd.includes('dev') || cmd.includes('serve'))) {
      return [
        { text: "VITE v4.5.0  ready in 180ms", type: "info", delay: 0.3 },
        { text: "➜  Local:   http://localhost:5173/", type: "success", delay: 0.8 },
        { text: "➜  Network: http://192.168.1.100:5173/", type: "success", delay: 1.0 },
        { text: "➜  press h to show help", type: "info", delay: 1.2 }
      ];
    }
    
    if (cmd.includes('vite build')) {
      return [
        { text: "vite v4.5.0 building for production...", type: "info", delay: 0.3 },
        { text: "✓ 142 modules transformed.", type: "success", delay: 2.1 },
        { text: "dist/index.html                  0.45 kB │ gzip:  0.30 kB", type: "output", delay: 2.5 },
        { text: "dist/assets/index-a7b2c3d4.css  1.23 kB │ gzip:  0.61 kB", type: "output", delay: 2.7 },
        { text: "dist/assets/index-e8f9a0b1.js  143.21 kB │ gzip: 46.11 kB", type: "output", delay: 2.9 },
        { text: "✓ built in 2.34s", type: "success", delay: 3.2 }
      ];
    }
    
    // Deno commands
    if (cmd.includes('deno run')) {
      const filename = cmd.match(/deno run\s+(\S+)/) ? cmd.match(/deno run\s+(\S+)/)[1] : 'main.ts';
      return [
        { text: `Compile file://${filename}`, type: "info", delay: 0.3 },
        { text: "Check file:///path/to/project/main.ts", type: "output", delay: 0.8 },
        { text: "Download https://deno.land/std@0.200.0/mod.ts", type: "output", delay: 1.2 },
        { text: "✅ Program executed successfully", type: "success", delay: 2.0 }
      ];
    }
    
    // Rust/Cargo commands
    if (cmd.includes('cargo run')) {
      return [
        { text: "   Compiling project v0.1.0", type: "info", delay: 0.5 },
        { text: "    Finished dev [unoptimized + debuginfo] target(s) in 1.23s", type: "success", delay: 2.1 },
        { text: "     Running `target/debug/project`", type: "output", delay: 2.3 },
        { text: "Hello, world! 🦀", type: "success", delay: 2.5 }
      ];
    }
    
    if (cmd.includes('cargo build')) {
      return [
        { text: "   Compiling libc v0.2.147", type: "output", delay: 0.8 },
        { text: "   Compiling serde v1.0.188", type: "output", delay: 1.5 },
        { text: "   Compiling project v0.1.0", type: "info", delay: 2.2 },
        { text: "    Finished release [optimized] target(s) in 3.42s", type: "success", delay: 3.8 }
      ];
    }
    
    // Python commands
    if (cmd.includes('python') && !cmd.includes('pip')) {
      const filename = cmd.match(/python\s+(\S+)/) ? cmd.match(/python\s+(\S+)/)[1] : 'script.py';
      return [
        { text: `Python 3.11.5 executing ${filename}`, type: "info", delay: 0.3 },
        { text: "🐍 Script completed successfully", type: "success", delay: 1.2 }
      ];
    }
    
    // Pip commands
    if (cmd.includes('pip install')) {
      const packageName = cmd.match(/pip install\s+(\S+)/) ? cmd.match(/pip install\s+(\S+)/)[1] : 'package';
      return [
        { text: `Collecting ${packageName}`, type: "info", delay: 0.5 },
        { text: `  Downloading ${packageName}-2.1.0-py3-none-any.whl (847 kB)`, type: "output", delay: 1.2 },
        { text: "Installing collected packages: " + packageName, type: "output", delay: 2.0 },
        { text: `Successfully installed ${packageName}-2.1.0`, type: "success", delay: 2.8 }
      ];
    }
    
    // pnpm commands  
    if (cmd.includes('pnpm install')) {
      return [
        { text: "Lockfile is up to date, resolution step is skipped", type: "info", delay: 0.3 },
        { text: "Progress: resolved 247, reused 247, downloaded 0, added 247", type: "output", delay: 1.8 },
        { text: "✓ Packages: +247", type: "success", delay: 2.2 },
        { text: "✓ Done in 1.4s", type: "success", delay: 2.5 }
      ];
    }
    
    // Go commands
    if (cmd.includes('go run')) {
      return [
        { text: "go: downloading dependencies...", type: "info", delay: 0.5 },
        { text: "Hello, Go! 🐹", type: "success", delay: 1.2 }
      ];
    }
    
    // Node.js/npm scripts
    if (cmd.includes('npm run') && cmd.includes('test')) {
      return [
        { text: "> project@1.0.0 test", type: "output", delay: 0.3 },
        { text: "> jest", type: "output", delay: 0.5 },
        { text: " PASS  src/components/Button.test.tsx", type: "success", delay: 1.2 },
        { text: " PASS  src/utils/helpers.test.ts", type: "success", delay: 1.5 },
        { text: "Test Suites: 2 passed, 2 total", type: "success", delay: 2.0 },
        { text: "Tests:       15 passed, 15 total", type: "success", delay: 2.2 },
        { text: "Time:        2.847 s", type: "info", delay: 2.4 }
      ];
    }
    
    return null; // Command not recognized as modern dev tool
  }

  static simulatePackageManagerCommand(command) {
    const cmd = command.toLowerCase();

    if (cmd.includes("install")) {
      if (cmd.includes("npm")) {
        return [
          {
            text: "npm WARN deprecated package@1.0.0: Package deprecated",
            type: "warning",
            delay: 0.8,
          },
          {
            text: "added 847 packages, and audited 848 packages in 3s",
            type: "success",
            delay: 2.5,
          },
          {
            text: "✓ 142 packages are looking for funding",
            type: "info",
            delay: 3.0,
          },
          { text: "found 0 vulnerabilities", type: "success", delay: 3.2 },
        ];
      } else if (cmd.includes("yarn")) {
        return [
          { text: "yarn install v1.22.19", type: "info", delay: 0.3 },
          {
            text: "[1/4] 🔍  Resolving packages...",
            type: "output",
            delay: 0.8,
          },
          {
            text: "[2/4] 🚚  Fetching packages...",
            type: "output",
            delay: 1.5,
          },
          {
            text: "[3/4] 🔗  Linking dependencies...",
            type: "output",
            delay: 2.2,
          },
          {
            text: "[4/4] 🔨  Building fresh packages...",
            type: "output",
            delay: 2.8,
          },
          { text: "✨  Done in 3.42s.", type: "success", delay: 3.5 },
        ];
      }
    } else if (cmd.includes("run dev") || cmd.includes("dev")) {
      return [
        { text: "> project@0.1.0 dev", type: "output", delay: 0.3 },
        { text: "> next dev", type: "output", delay: 0.5 },
        { text: "   ▲ Next.js 14.0.0", type: "info", delay: 1.0 },
        {
          text: "   - Local:        http://localhost:3000",
          type: "success",
          delay: 1.5,
        },
        {
          text: "   - Network:      http://192.168.1.100:3000",
          type: "success",
          delay: 1.7,
        },
        { text: " ✓ Ready in 2.3s", type: "success", delay: 2.3 },
      ];
    } else if (cmd.includes("build")) {
      return [
        { text: "> project@0.1.0 build", type: "output", delay: 0.3 },
        { text: "> next build", type: "output", delay: 0.5 },
        { text: "   ▲ Next.js 14.0.0", type: "info", delay: 0.8 },
        {
          text: "   Creating an optimized production build...",
          type: "output",
          delay: 1.2,
        },
        { text: " ✓ Compiled successfully", type: "success", delay: 4.5 },
        { text: "   Size     First Load JS", type: "info", delay: 5.0 },
        {
          text: "   ○ /          1.2 kB   87.3 kB",
          type: "output",
          delay: 5.2,
        },
      ];
    }

    return [
      { text: "Command completed successfully", type: "success", delay: 0.5 },
    ];
  }

  static simulateGitCommand(command) {
    const cmd = command.toLowerCase();

    if (cmd.includes("clone")) {
      const repo = command.match(/git clone.*?([^\/]+)\.git/) || [
        "",
        "repository",
      ];
      return [
        { text: `Cloning into '${repo[1]}'...`, type: "output", delay: 0.3 },
        {
          text: "remote: Enumerating objects: 247, done.",
          type: "output",
          delay: 1.0,
        },
        {
          text: "remote: Counting objects: 100% (247/247), done.",
          type: "output",
          delay: 1.5,
        },
        {
          text: "remote: Compressing objects: 100% (156/156), done.",
          type: "output",
          delay: 2.0,
        },
        {
          text: "Receiving objects: 100% (247/247), 1.2 MiB | 2.3 MiB/s, done.",
          type: "success",
          delay: 3.0,
        },
        {
          text: "Resolving deltas: 100% (89/89), done.",
          type: "success",
          delay: 3.5,
        },
      ];
    } else if (cmd.includes("add")) {
      return [{ text: "", type: "success", delay: 0.2 }]; // Git add is silent on success
    } else if (cmd.includes("commit")) {
      const message = command.match(/-m\s+["']([^"']+)["']/) || [
        "",
        "Update files",
      ];
      return [
        {
          text: `[main ${this.generateCommitHash()}] ${message[1]}`,
          type: "success",
          delay: 0.5,
        },
        {
          text: " 3 files changed, 42 insertions(+), 8 deletions(-)",
          type: "output",
          delay: 0.8,
        },
      ];
    } else if (cmd.includes("push")) {
      return [
        { text: "Enumerating objects: 9, done.", type: "output", delay: 0.8 },
        {
          text: "Counting objects: 100% (9/9), done.",
          type: "output",
          delay: 1.2,
        },
        {
          text: "Delta compression using up to 8 threads",
          type: "output",
          delay: 1.5,
        },
        {
          text: "Compressing objects: 100% (5/5), done.",
          type: "output",
          delay: 1.8,
        },
        {
          text: "Writing objects: 100% (5/5), 1.23 KiB | 1.23 MiB/s, done.",
          type: "output",
          delay: 2.2,
        },
        {
          text: "Total 5 (delta 3), reused 0 (delta 0), pack-reused 0",
          type: "output",
          delay: 2.5,
        },
        { text: "To github.com:user/repo.git", type: "success", delay: 3.0 },
        {
          text: `   ${this.generateCommitHash()}..${this.generateCommitHash()}  main -> main`,
          type: "success",
          delay: 3.2,
        },
      ];
    } else if (cmd.includes("status")) {
      return [
        { text: "On branch main", type: "output", delay: 0.2 },
        {
          text: "Your branch is up to date with 'origin/main'.",
          type: "output",
          delay: 0.4,
        },
        { text: "", type: "output", delay: 0.5 },
        { text: "Changes not staged for commit:", type: "warning", delay: 0.7 },
        {
          text: '  (use "git add <file>..." to update what will be committed)',
          type: "info",
          delay: 0.9,
        },
        {
          text: "        modified:   src/components/App.js",
          type: "error",
          delay: 1.1,
        },
        { text: "        modified:   package.json", type: "error", delay: 1.3 },
      ];
    }

    return [{ text: "Git command executed", type: "success", delay: 0.3 }];
  }

  static simulateDockerCommand(command) {
    const cmd = command.toLowerCase();

    if (cmd.includes("build")) {
      return [
        {
          text: "Sending build context to Docker daemon  2.048kB",
          type: "output",
          delay: 0.3,
        },
        { text: "Step 1/8 : FROM node:18-alpine", type: "output", delay: 0.8 },
        { text: " ---> f21f31fdd31a", type: "output", delay: 1.2 },
        { text: "Step 2/8 : WORKDIR /app", type: "output", delay: 1.5 },
        { text: " ---> Using cache", type: "output", delay: 1.8 },
        { text: " ---> 8b9c0f0d8f9a", type: "output", delay: 2.0 },
        { text: 'Step 8/8 : CMD ["npm", "start"]', type: "output", delay: 4.5 },
        { text: " ---> Running in a1b2c3d4e5f6", type: "output", delay: 4.8 },
        { text: " ---> 9h8g7f6e5d4c", type: "output", delay: 5.2 },
        {
          text: "Successfully built 9h8g7f6e5d4c",
          type: "success",
          delay: 5.5,
        },
        {
          text: "Successfully tagged myapp:latest",
          type: "success",
          delay: 5.7,
        },
      ];
    } else if (cmd.includes("run")) {
      return [
        {
          text: "Unable to find image 'myapp:latest' locally",
          type: "warning",
          delay: 0.5,
        },
        {
          text: "latest: Pulling from library/myapp",
          type: "output",
          delay: 1.0,
        },
        { text: "Digest: sha256:a1b2c3...", type: "output", delay: 2.5 },
        {
          text: "Status: Downloaded newer image for myapp:latest",
          type: "success",
          delay: 3.0,
        },
        { text: "Server running on port 3000", type: "success", delay: 3.5 },
      ];
    } else if (cmd.includes("ps")) {
      return [
        {
          text: "CONTAINER ID   IMAGE     COMMAND         CREATED       STATUS",
          type: "output",
          delay: 0.3,
        },
        {
          text: 'a1b2c3d4e5f6   myapp     "npm start"     2 min ago     Up 2 minutes',
          type: "output",
          delay: 0.5,
        },
      ];
    }

    return [{ text: "Docker command executed", type: "success", delay: 0.3 }];
  }

  static simulateTestingCommand(command) {
    const cmd = command.toLowerCase();

    if (cmd.includes("jest") || cmd.includes("npm test")) {
      return [
        {
          text: "PASS  src/components/App.test.js",
          type: "success",
          delay: 0.8,
        },
        {
          text: "  ✓ renders learn react link (23ms)",
          type: "success",
          delay: 1.0,
        },
        {
          text: "  ✓ handles click events (15ms)",
          type: "success",
          delay: 1.2,
        },
        {
          text: "PASS  src/utils/helpers.test.js",
          type: "success",
          delay: 1.5,
        },
        {
          text: "  ✓ formats date correctly (8ms)",
          type: "success",
          delay: 1.7,
        },
        { text: "", type: "output", delay: 1.9 },
        { text: "Test Suites: 2 passed, 2 total", type: "success", delay: 2.2 },
        { text: "Tests:       3 passed, 3 total", type: "success", delay: 2.4 },
        { text: "Snapshots:   0 total", type: "output", delay: 2.6 },
        { text: "Time:        1.847s", type: "output", delay: 2.8 },
      ];
    } else if (cmd.includes("cypress")) {
      return [
        { text: "Opening Cypress...", type: "output", delay: 0.5 },
        {
          text: "Running:  integration/app.spec.js",
          type: "output",
          delay: 2.0,
        },
        { text: "  App Component", type: "output", delay: 2.5 },
        { text: "    ✓ displays welcome message", type: "success", delay: 3.0 },
        { text: "    ✓ navigates to about page", type: "success", delay: 3.8 },
        { text: "  2 passing (4.2s)", type: "success", delay: 4.5 },
      ];
    }

    return [
      { text: "Tests completed successfully", type: "success", delay: 1.0 },
    ];
  }

  static simulateDevelopmentCommand(command) {
    const cmd = command.toLowerCase();

    if (cmd.includes("dev") && !cmd.includes("npm")) {
      return [
        { text: "⚡ Vite dev server starting...", type: "output", delay: 0.5 },
        { text: "🎯 Port 5173 is available", type: "info", delay: 1.0 },
        { text: "📦 Building for development...", type: "output", delay: 1.5 },
        { text: "✅ Built in 847ms", type: "success", delay: 2.5 },
        {
          text: "🌐 Local:   http://localhost:5173/",
          type: "success",
          delay: 3.0,
        },
        {
          text: "📱 Network: http://192.168.1.100:5173/",
          type: "success",
          delay: 3.2,
        },
      ];
    } else if (cmd.includes("start")) {
      return [
        {
          text: "Starting the development server...",
          type: "output",
          delay: 0.5,
        },
        { text: "Compiled successfully!", type: "success", delay: 2.5 },
        {
          text: "You can now view your app in the browser.",
          type: "success",
          delay: 3.0,
        },
        {
          text: "  Local:            http://localhost:3000",
          type: "success",
          delay: 3.2,
        },
        {
          text: "  On Your Network:  http://192.168.1.100:3000",
          type: "success",
          delay: 3.4,
        },
      ];
    }

    return [
      { text: "Development server started", type: "success", delay: 1.0 },
    ];
  }

  static simulateDeploymentCommand(command) {
    const cmd = command.toLowerCase();

    if (cmd.includes("vercel")) {
      return [
        { text: "Vercel CLI 32.5.0", type: "info", delay: 0.3 },
        {
          text: "🔍  Inspect: https://vercel.com/user/project/abc123",
          type: "output",
          delay: 1.0,
        },
        {
          text: "✅  Production: https://project.vercel.app",
          type: "success",
          delay: 3.5,
        },
        {
          text: "📝  Deployed to production. Run `vercel --prod` to overwrite later.",
          type: "info",
          delay: 4.0,
        },
      ];
    } else if (cmd.includes("netlify")) {
      return [
        { text: "Deploy path: ./dist", type: "output", delay: 0.5 },
        { text: "Functions path: ./functions", type: "output", delay: 0.7 },
        { text: "Deploying to main site URL...", type: "output", delay: 1.0 },
        { text: "✔ Finished hashing 25 files", type: "success", delay: 2.0 },
        { text: "✔ CDN requesting 12 files", type: "success", delay: 2.5 },
        { text: "✔ Finished uploading 12 assets", type: "success", delay: 3.5 },
        { text: "✔ Deploy is live!", type: "success", delay: 4.0 },
        {
          text: "Website URL: https://amazing-project-abc123.netlify.app",
          type: "success",
          delay: 4.2,
        },
      ];
    } else if (cmd.includes("heroku")) {
      return [
        {
          text: "Creating app... done, ⬢ my-app-12345",
          type: "success",
          delay: 1.0,
        },
        {
          text: "https://my-app-12345.herokuapp.com/ | https://git.heroku.com/my-app-12345.git",
          type: "output",
          delay: 1.5,
        },
      ];
    }

    return [
      {
        text: "Deployment completed successfully",
        type: "success",
        delay: 1.5,
      },
    ];
  }

  static simulateSystemCommand(command) {
    const cmd = command.toLowerCase().trim();

    if (cmd.includes("ls")) {
      if (cmd.includes("-la") || cmd.includes("-l")) {
        return [
          { text: "total 64", type: "output", delay: 0.2 },
          {
            text: "drwxr-xr-x  12 user  staff   384 Jun 17 10:30 .",
            type: "output",
            delay: 0.4,
          },
          {
            text: "drwxr-xr-x   8 user  staff   256 Jun 16 14:20 ..",
            type: "output",
            delay: 0.6,
          },
          {
            text: "-rw-r--r--   1 user  staff   156 Jun 17 09:15 .gitignore",
            type: "output",
            delay: 0.8,
          },
          {
            text: "-rw-r--r--   1 user  staff  1024 Jun 17 10:30 package.json",
            type: "output",
            delay: 1.0,
          },
          {
            text: "-rw-r--r--   1 user  staff  2048 Jun 17 10:25 README.md",
            type: "output",
            delay: 1.2,
          },
          {
            text: "drwxr-xr-x   8 user  staff   256 Jun 17 09:45 src",
            type: "output",
            delay: 1.4,
          },
        ];
      } else {
        return [
          {
            text: ".gitignore    package.json    README.md    src",
            type: "output",
            delay: 0.3,
          },
        ];
      }
    } else if (cmd.includes("cat") && cmd.includes("package.json")) {
      return [
        { text: "{", type: "output", delay: 0.3 },
        { text: '  "name": "awesome-project",', type: "output", delay: 0.5 },
        { text: '  "version": "1.0.0",', type: "output", delay: 0.7 },
        {
          text: '  "description": "An awesome project",',
          type: "output",
          delay: 0.9,
        },
        { text: '  "scripts": {', type: "output", delay: 1.1 },
        { text: '    "start": "node server.js",', type: "output", delay: 1.3 },
        { text: '    "dev": "nodemon server.js"', type: "output", delay: 1.5 },
        { text: "  }", type: "output", delay: 1.7 },
        { text: "}", type: "output", delay: 1.9 },
      ];
    } else if (
      cmd.includes("mkdir") ||
      cmd.includes("touch") ||
      cmd.includes("cd")
    ) {
      // These commands are typically silent on success
      return [];
    } else if (cmd.includes("pwd")) {
      return [
        {
          text: "/home/user/projects/awesome-project",
          type: "output",
          delay: 0.2,
        },
      ];
    } else if (cmd.includes("whoami")) {
      return [{ text: "user", type: "output", delay: 0.2 }];
    } else if (cmd.includes("find")) {
      return [
        { text: "./src/components/App.js", type: "output", delay: 0.5 },
        { text: "./src/utils/helpers.js", type: "output", delay: 0.7 },
        { text: "./src/index.js", type: "output", delay: 0.9 },
      ];
    } else if (cmd.includes("grep")) {
      return [
        {
          text: "./src/components/App.js:15:// TODO: Add error handling",
          type: "output",
          delay: 0.5,
        },
        {
          text: "./src/utils/helpers.js:8:// TODO: Optimize performance",
          type: "output",
          delay: 0.7,
        },
      ];
    }

    return [
      { text: "Command executed successfully", type: "success", delay: 0.3 },
    ];
  }

  static simulateGeneralCommand(command) {
    const cmd = command.toLowerCase().trim();

    if (cmd.includes("echo")) {
      const message = command.match(/echo\s+["']?([^"']+)["']?/) || [
        "",
        "Hello World",
      ];
      return [{ text: message[1], type: "output", delay: 0.2 }];
    } else if (cmd.includes("clear") || cmd === "cls") {
      return [];
    } else if (cmd.includes("exit")) {
      return [{ text: "exit", type: "output", delay: 0.2 }];
    }

    return [
      { text: `${command}: command not found`, type: "error", delay: 0.3 },
    ];
  }

  static generateCommitHash() {
    const chars = "0123456789abcdef";
    let result = "";
    for (let i = 0; i < 7; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static renderCommandAnimations(commands, options) {
    const { speed, cursor, prompt, fontSize, showHeader } = options;
    let animations = "";
    let currentY = showHeader ? 70 : 30;
    let totalDuration = 0;

    commands.forEach((command, index) => {
      const commandOutput = this.simulateCommand(command, options.commandType);
      const fullCommand = prompt + command;

      // Create realistic character-by-character typing effect
      animations += `
  <text x="20" y="${currentY}" class="terminal-text">`;
      
      // Animate each character individually
      fullCommand.split('').forEach((char, charIndex) => {
        const charDelay = totalDuration + (charIndex * speed) / 1000;
        animations += `<tspan opacity="0">${this.escapeHtml(char)}<animate attributeName="opacity" values="0;1" dur="0.05s" begin="${charDelay}s" fill="freeze"/></tspan>`;
      });
      
      animations += `
  </text>`;

      currentY += fontSize + 6;
      const commandTypingDuration = (fullCommand.length * speed) / 1000;
      totalDuration += commandTypingDuration + 0.3;

      // Render command output with realistic delays
      commandOutput.forEach((output) => {
        if (output.text.trim() === "") {
          currentY += fontSize + 2;
          return;
        }

        const cssClass =
          output.type === "success"
            ? "terminal-success"
            : output.type === "error"
            ? "terminal-error"
            : output.type === "warning"
            ? "terminal-warning"
            : output.type === "info"
            ? "terminal-info"
            : "terminal-output";

        const outputStartTime = totalDuration + output.delay;
        animations += `
  <text x="20" y="${currentY}" class="${cssClass}" opacity="0">
    ${this.escapeHtml(output.text)}
    <animate attributeName="opacity" 
             values="0;1" 
             dur="0.2s" 
             begin="${outputStartTime}s" 
             fill="freeze"/>
  </text>`;

        currentY += fontSize + 4;
      });

      // Calculate total time for this command including all outputs
      if (commandOutput.length > 0) {
        const maxDelay = Math.max(...commandOutput.map((o) => o.delay));
        totalDuration += maxDelay + 0.5;
      } else {
        totalDuration += 0.8;
      }

      currentY += 8; // Space between commands
    });

    return { animations, currentY, totalDuration };
  }

  static escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Optimized command animation renderer with better performance
  static renderOptimizedCommandAnimations(commands, options) {
    const { speed, cursor, prompt, fontSize, showHeader, borderRadius, padding, lineHeight } = options;
    let animations = "";
    let currentY = showHeader ? 70 + padding : 30 + padding;
    let totalDuration = 0;

    commands.forEach((command, index) => {
      const commandOutput = this.simulateCommand(command, options.commandType);
      const fullCommand = prompt + command;

      // Create realistic character-by-character typing effect with improved timing
      animations += `
  <text x="${padding + 10}" y="${currentY}" class="terminal-text">`;
      
      // Animate each character individually with variable speed for realism
      fullCommand.split('').forEach((char, charIndex) => {
        const baseDelay = totalDuration + (charIndex * speed) / 1000;
        // Add slight randomness to typing speed for realism
        const randomDelay = baseDelay + (Math.random() * 0.02 - 0.01);
        animations += `<tspan opacity="0">${this.escapeHtml(char)}<animate attributeName="opacity" values="0;1" dur="0.03s" begin="${randomDelay}s" fill="freeze"/></tspan>`;
      });
      
      animations += `
  </text>`;

      currentY += (fontSize * lineHeight) + 6;
      const commandTypingDuration = (fullCommand.length * speed) / 1000;
      totalDuration += commandTypingDuration + 0.2;

      // Render command output with realistic delays and improved spacing
      commandOutput.forEach((output) => {
        if (output.text.trim() === "") {
          currentY += (fontSize * lineHeight) / 2;
          return;
        }

        const cssClass =
          output.type === "success"
            ? "terminal-success"
            : output.type === "error"
            ? "terminal-error"
            : output.type === "warning"
            ? "terminal-warning"
            : output.type === "info"
            ? "terminal-info"
            : "terminal-output";

        const outputStartTime = totalDuration + output.delay;
        animations += `
  <text x="${padding + 10}" y="${currentY}" class="${cssClass}" opacity="0">
    ${this.escapeHtml(output.text)}
    <animate attributeName="opacity" 
             values="0;1" 
             dur="0.1s" 
             begin="${outputStartTime}s" 
             fill="freeze"/>
  </text>`;

        currentY += (fontSize * lineHeight) + 4;
      });

      // Calculate total time for this command including all outputs
      if (commandOutput.length > 0) {
        const maxDelay = Math.max(...commandOutput.map((o) => o.delay));
        totalDuration += maxDelay + 0.3;
      } else {
        totalDuration += 0.5;
      }

      currentY += fontSize; // Space between commands
    });

    return { animations, currentY, totalDuration };
  }

  // Modern theme with enhanced UI/UX and professional design
  static generateModern(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      githubMode,
      commandType,
      borderRadius,
      padding,
      enableScanlines,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderOptimizedCommandAnimations(commands, options);

    const baseStyles = TerminalThemeBase.generateBaseStyles('modern', fontSize, options);
    
    const githubStyles = githubMode
      ? `
      <style>
        @media (prefers-color-scheme: dark) {
          .terminal-bg { fill: #0d1117; stroke: #30363d; }
          .terminal-header { fill: #161b22; }
          .terminal-text { fill: #f0f6fc; }
          .terminal-output { fill: #8b949e; }
          .terminal-success { fill: #238636; }
          .terminal-warning { fill: #d29922; }
          .terminal-error { fill: #da3633; }
          .terminal-info { fill: #1f6feb; }
          .terminal-title { fill: #f0f6fc; }
          .terminal-prompt { fill: #8957e5; }
        }
        @media (prefers-color-scheme: light) {
          .terminal-bg { fill: #ffffff; stroke: #d0d7de; }
          .terminal-header { fill: #f6f8fa; }
          .terminal-text { fill: #24292f; }
          .terminal-output { fill: #656d76; }
          .terminal-success { fill: #1a7f37; }
          .terminal-warning { fill: #bf8700; }
          .terminal-error { fill: #cf222e; }
          .terminal-info { fill: #0969da; }
          .terminal-title { fill: #24292f; }
          .terminal-prompt { fill: #8250df; }
        }
      </style>
    `
      : "";

    // Enhanced gradients and visual effects for professional look
    const gradients = `
      <defs>
        <linearGradient id="modernHeaderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#2d2d2d;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#262626;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1e1e1e;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="modernBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#1e1e1e;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#181818;stop-opacity:1" />
        </linearGradient>
        <filter id="modernGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="modernShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="rgba(0,0,0,0.4)"/>
        </filter>
        <filter id="controlGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="glow"/>
          <feMerge>
            <feMergeNode in="glow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        ${enableScanlines ? `
        <pattern id="scanlines" patternUnits="userSpaceOnUse" width="1" height="4">
          <rect width="1" height="2" fill="none"/>
          <rect width="1" height="1" y="2" fill="rgba(255,255,255,0.03)"/>
          <rect width="1" height="1" y="3" fill="none"/>
        </pattern>
        ` : ''}
      </defs>
    `;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  ${gradients}
  ${baseStyles}
  ${githubStyles}
  
  <!-- Terminal container with professional shadow and border radius -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" 
        class="terminal-bg" filter="url(#modernShadow)"/>
  
  ${showHeader ? `
  <!-- Terminal header with enhanced gradient and modern controls -->
  <rect x="0" y="0" width="${width}" height="40" rx="${borderRadius}" ry="${borderRadius}" 
        fill="url(#modernHeaderGradient)" stroke="#333" stroke-width="0.5"/>
  <rect x="0" y="28" width="${width}" height="12" fill="url(#modernHeaderGradient)"/>
  
  <!-- Professional macOS-style window controls -->
  <g class="terminal-controls">
    <circle cx="20" cy="20" r="6" class="close" filter="url(#controlGlow)"/>
    <circle cx="44" cy="20" r="6" class="minimize" filter="url(#controlGlow)"/>
    <circle cx="68" cy="20" r="6" class="maximize" filter="url(#controlGlow)"/>
    
    <!-- Enhanced control icons with better styling -->
    <g opacity="0.8">
      <line x1="17" y1="17" x2="23" y2="23" stroke="#4a1a1a" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="23" y1="17" x2="17" y2="23" stroke="#4a1a1a" stroke-width="1.2" stroke-linecap="round"/>
    </g>
    <line x1="41" y1="20" x2="47" y2="20" stroke="#4a3a00" stroke-width="1.2" stroke-linecap="round"/>
    <g opacity="0.8">
      <rect x="65" y="17" width="6" height="6" fill="none" stroke="#1a4a1a" stroke-width="1.2" rx="1"/>
      <rect x="67" y="15" width="4" height="4" fill="none" stroke="#1a4a1a" stroke-width="1" rx="0.5"/>
    </g>
  </g>
  
  <!-- Terminal title with improved typography -->
  <text x="${width / 2}" y="26" text-anchor="middle" class="terminal-title" 
        style="font-size: ${Math.max(11, fontSize - 3)}px; font-weight: 500; letter-spacing: 0.3px; opacity: 0.9;">
    ${this.escapeXml(title)}
  </text>
  
  <!-- Subtle header separator line -->
  <line x1="${padding}" y1="40" x2="${width - padding}" y2="40" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
  ` : ''}
  
  <!-- Terminal content area with subtle background -->
  <rect x="${padding/2}" y="${showHeader ? 42 : padding/2}" width="${width - padding}" height="${height - (showHeader ? 50 : padding)}" 
        fill="url(#modernBodyGradient)" rx="${Math.max(0, borderRadius - 2)}" ry="${Math.max(0, borderRadius - 2)}" opacity="0.95"/>
  
  <!-- Command animations with enhanced spacing -->
  ${animations}
  
  <!-- Enhanced cursor with professional glow effect -->
  ${cursor ? `
  <rect x="${padding + 10 + (prompt.length * fontSize * 0.6)}" y="${currentY - fontSize + 2}" width="2" height="${fontSize + 2}" 
        class="terminal-cursor cursor-blink" filter="url(#modernGlow)" rx="1"/>
  ` : ''}
  
  ${enableScanlines ? `
  <!-- Professional scan lines overlay for retro-modern feel -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="url(#scanlines)" rx="${borderRadius}" ry="${borderRadius}" opacity="0.6"/>
  ` : ''}
  
  <!-- Subtle inner border for depth -->
  <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="${borderRadius - 0.5}" ry="${borderRadius - 0.5}" 
        fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
</svg>`;
  }

  // Professional theme with corporate-grade design and enhanced typography
  static generateProfessional(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      githubMode,
      commandType,
      borderRadius,
      padding,
      enableScanlines,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderOptimizedCommandAnimations(commands, options);

    const baseStyles = TerminalThemeBase.generateBaseStyles('professional', fontSize, options);
    
    // Professional gradients and effects
    const gradients = `
      <defs>
        <linearGradient id="professionalHeaderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#1a252f;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="professionalBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0c1220;stop-opacity:1" />
        </linearGradient>
        <filter id="professionalShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="12" stdDeviation="24" flood-color="rgba(0,0,0,0.6)"/>
        </filter>
        <filter id="professionalGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="subtleGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="glow"/>
          <feMerge>
            <feMergeNode in="glow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <!-- Professional accent line -->
        <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0" />
          <stop offset="20%" style="stop-color:#8b5cf6;stop-opacity:1" />
          <stop offset="80%" style="stop-color:#8b5cf6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0" />
        </linearGradient>
      </defs>
    `;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  ${gradients}
  ${baseStyles}
  
  <!-- Terminal container with professional depth -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" 
        class="terminal-bg" filter="url(#professionalShadow)"/>
  
  ${showHeader ? `
  <!-- Professional header with corporate styling -->
  <rect x="0" y="0" width="${width}" height="44" rx="${borderRadius}" ry="${borderRadius}" 
        fill="url(#professionalHeaderGradient)" stroke="#334155" stroke-width="0.5"/>
  <rect x="0" y="32" width="${width}" height="12" fill="url(#professionalHeaderGradient)"/>
  
  <!-- Corporate-style window controls -->
  <g class="terminal-controls">
    <circle cx="22" cy="22" r="7" class="close" filter="url(#subtleGlow)"/>
    <circle cx="48" cy="22" r="7" class="minimize" filter="url(#subtleGlow)"/>
    <circle cx="74" cy="22" r="7" class="maximize" filter="url(#subtleGlow)"/>
    
    <!-- Professional control icons -->
    <g opacity="0.9">
      <path d="M18,18 L26,26 M26,18 L18,26" stroke="#2d1a1a" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="44" y1="22" x2="52" y2="22" stroke="#2d2600" stroke-width="1.5" stroke-linecap="round"/>
      <rect x="70" y="18" width="8" height="8" fill="none" stroke="#1a2d1a" stroke-width="1.5" rx="1.5"/>
      <rect x="72" y="16" width="6" height="6" fill="none" stroke="#1a2d1a" stroke-width="1" rx="1"/>
    </g>
  </g>
  
  <!-- Professional title with enhanced typography -->
  <text x="${width / 2}" y="28" text-anchor="middle" class="terminal-title" 
        style="font-size: ${Math.max(12, fontSize - 2)}px; font-weight: 600; letter-spacing: 0.5px; opacity: 0.95;">
    ${this.escapeXml(title)}
  </text>
  
  <!-- Professional accent line -->
  <rect x="${padding * 2}" y="42" width="${width - padding * 4}" height="2" fill="url(#accentLine)" opacity="0.8"/>
  ` : ''}
  
  <!-- Professional content area with subtle texture -->
  <rect x="${padding/2}" y="${showHeader ? 46 : padding/2}" width="${width - padding}" height="${height - (showHeader ? 54 : padding)}" 
        fill="url(#professionalBodyGradient)" rx="${Math.max(0, borderRadius - 2)}" ry="${Math.max(0, borderRadius - 2)}" opacity="0.98"/>
  
  <!-- Command animations with professional spacing -->
  ${animations}
  
  <!-- Professional cursor with subtle glow -->
  ${cursor ? `
  <rect x="${padding + 10 + (prompt.length * fontSize * 0.6)}" y="${currentY - fontSize + 2}" width="2" height="${fontSize + 2}" 
        class="terminal-cursor cursor-blink" filter="url(#professionalGlow)" rx="1"/>
  ` : ''}
  
  <!-- Professional border highlighting -->
  <rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="${borderRadius - 1}" ry="${borderRadius - 1}" 
        fill="none" stroke="rgba(139,92,246,0.2)" stroke-width="1"/>
  <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="${borderRadius - 0.5}" ry="${borderRadius - 0.5}" 
        fill="none" stroke="rgba(248,250,252,0.1)" stroke-width="0.5"/>
</svg>`;
  }

  // Ocean theme with deep blue gradients and wave-like effects
  static generateOcean(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      githubMode,
      commandType,
      borderRadius,
      padding,
      enableScanlines,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderOptimizedCommandAnimations(commands, options);

    const baseStyles = TerminalThemeBase.generateBaseStyles('ocean', fontSize, options);
    
    // Ocean-inspired gradients and effects
    const gradients = `
      <defs>
        <linearGradient id="oceanHeaderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#1e3a8a;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#1e40af;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="oceanBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#1e3a8a;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="oceanRipple" cx="50%" cy="20%" r="80%">
          <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0.3" />
          <stop offset="50%" style="stop-color:#0ea5e9;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#0f172a;stop-opacity:0" />
        </radialGradient>
        <filter id="oceanGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="waveEffect" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#06b6d4" flood-opacity="0.4"/>
        </filter>
        <!-- Animated wave pattern -->
        <pattern id="oceanWaves" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <path d="M0,10 Q10,5 20,10 T40,10" stroke="#06b6d4" stroke-width="0.5" fill="none" opacity="0.3">
            <animateTransform attributeName="transform" type="translate" values="0,0;40,0;0,0" dur="6s" repeatCount="indefinite"/>
          </path>
        </pattern>
      </defs>
    `;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  ${gradients}
  ${baseStyles}
  
  <!-- Ocean-inspired terminal container -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" 
        class="terminal-bg" filter="url(#waveEffect)"/>
  
  <!-- Ocean ripple effect overlay -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" 
        fill="url(#oceanRipple)" opacity="0.6"/>
  
  ${showHeader ? `
  <!-- Ocean-themed header -->
  <rect x="0" y="0" width="${width}" height="42" rx="${borderRadius}" ry="${borderRadius}" 
        fill="url(#oceanHeaderGradient)" stroke="#3b82f6" stroke-width="0.5"/>
  <rect x="0" y="30" width="${width}" height="12" fill="url(#oceanHeaderGradient)"/>
  
  <!-- Ocean-style window controls -->
  <g class="terminal-controls">
    <circle cx="21" cy="21" r="6.5" fill="#dc2626" stroke="#ef4444" stroke-width="0.5" filter="url(#oceanGlow)"/>
    <circle cx="47" cy="21" r="6.5" fill="#d97706" stroke="#f59e0b" stroke-width="0.5" filter="url(#oceanGlow)"/>
    <circle cx="73" cy="21" r="6.5" fill="#059669" stroke="#10b981" stroke-width="0.5" filter="url(#oceanGlow)"/>
    
    <!-- Wave-inspired control icons -->
    <g opacity="0.8">
      <path d="M17,17 L25,25 M25,17 L17,25" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="43" y1="21" x2="51" y2="21" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/>
      <rect x="69" y="17" width="8" height="8" fill="none" stroke="#ffffff" stroke-width="1.2" rx="1"/>
    </g>
  </g>
  
  <!-- Ocean-themed title -->
  <text x="${width / 2}" y="27" text-anchor="middle" class="terminal-title" 
        style="font-size: ${Math.max(11, fontSize - 3)}px; font-weight: 500; letter-spacing: 0.4px; filter: url(#oceanGlow);">
    ${this.escapeXml(title)}
  </text>
  
  <!-- Flowing wave line -->
  <rect x="0" y="40" width="${width}" height="2" fill="url(#oceanWaves)"/>
  ` : ''}
  
  <!-- Ocean content area -->
  <rect x="${padding/2}" y="${showHeader ? 44 : padding/2}" width="${width - padding}" height="${height - (showHeader ? 52 : padding)}" 
        fill="url(#oceanBodyGradient)" rx="${Math.max(0, borderRadius - 2)}" ry="${Math.max(0, borderRadius - 2)}" opacity="0.95"/>
  
  <!-- Command animations -->
  ${animations}
  
  <!-- Ocean-themed cursor -->
  ${cursor ? `
  <rect x="${padding + 10 + (prompt.length * fontSize * 0.6)}" y="${currentY - fontSize + 2}" width="2" height="${fontSize + 2}" 
        class="terminal-cursor cursor-blink" filter="url(#oceanGlow)" rx="1" fill="#06b6d4"/>
  ` : ''}
  
  <!-- Ocean border effects -->
  <rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="${borderRadius - 1}" ry="${borderRadius - 1}" 
        fill="none" stroke="rgba(6,182,212,0.3)" stroke-width="1"/>
</svg>`;
  }

  // Sunset theme with warm gradients and golden hour effects
  static generateSunset(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      githubMode,
      commandType,
      borderRadius,
      padding,
      enableScanlines,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderOptimizedCommandAnimations(commands, options);

    const baseStyles = TerminalThemeBase.generateBaseStyles('sunset', fontSize, options);
    
    // Sunset-inspired gradients and effects
    const gradients = `
      <defs>
        <linearGradient id="sunsetHeaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#7c2d12;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#ea580c;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f97316;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="sunsetBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#431407;stop-opacity:1" />
          <stop offset="30%" style="stop-color:#7c2d12;stop-opacity:0.2" />
          <stop offset="70%" style="stop-color:#ea580c;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#431407;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="sunsetGlow" cx="30%" cy="20%" r="70%">
          <stop offset="0%" style="stop-color:#f97316;stop-opacity:0.4" />
          <stop offset="50%" style="stop-color:#ea580c;stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:#431407;stop-opacity:0" />
        </radialGradient>
        <filter id="sunsetBloom" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="warmGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="12" flood-color="#f97316" flood-opacity="0.6"/>
        </filter>
        <!-- Sunset particle effect -->
        <pattern id="sunsetParticles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="0.5" fill="#f97316" opacity="0.6">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="35" cy="25" r="0.3" fill="#fbbf24" opacity="0.4">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="20" cy="40" r="0.4" fill="#fed7aa" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite"/>
          </circle>
        </pattern>
      </defs>
    `;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  ${gradients}
  ${baseStyles}
  
  <!-- Sunset terminal container -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" 
        class="terminal-bg" filter="url(#warmGlow)"/>
  
  <!-- Sunset glow overlay -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" 
        fill="url(#sunsetGlow)" opacity="0.7"/>
  
  ${showHeader ? `
  <!-- Sunset-themed header -->
  <rect x="0" y="0" width="${width}" height="42" rx="${borderRadius}" ry="${borderRadius}" 
        fill="url(#sunsetHeaderGradient)" stroke="#ea580c" stroke-width="0.5"/>
  <rect x="0" y="30" width="${width}" height="12" fill="url(#sunsetHeaderGradient)"/>
  
  <!-- Warm sunset controls -->
  <g class="terminal-controls">
    <circle cx="21" cy="21" r="6.5" fill="#dc2626" stroke="#f87171" stroke-width="0.5" filter="url(#sunsetBloom)"/>
    <circle cx="47" cy="21" r="6.5" fill="#d97706" stroke="#fbbf24" stroke-width="0.5" filter="url(#sunsetBloom)"/>
    <circle cx="73" cy="21" r="6.5" fill="#059669" stroke="#34d399" stroke-width="0.5" filter="url(#sunsetBloom)"/>
    
    <!-- Warm control icons -->
    <g opacity="0.9">
      <path d="M17,17 L25,25 M25,17 L17,25" stroke="#2d1a1a" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="43" y1="21" x2="51" y2="21" stroke="#2d2600" stroke-width="1.2" stroke-linecap="round"/>
      <rect x="69" y="17" width="8" height="8" fill="none" stroke="#1a2d1a" stroke-width="1.2" rx="1"/>
    </g>
  </g>
  
  <!-- Sunset title with warm glow -->
  <text x="${width / 2}" y="27" text-anchor="middle" class="terminal-title" 
        style="font-size: ${Math.max(11, fontSize - 3)}px; font-weight: 500; letter-spacing: 0.4px; filter: url(#sunsetBloom);">
    ${this.escapeXml(title)}
  </text>
  ` : ''}
  
  <!-- Sunset content area -->
  <rect x="${padding/2}" y="${showHeader ? 44 : padding/2}" width="${width - padding}" height="${height - (showHeader ? 52 : padding)}" 
        fill="url(#sunsetBodyGradient)" rx="${Math.max(0, borderRadius - 2)}" ry="${Math.max(0, borderRadius - 2)}" opacity="0.95"/>
  
  <!-- Floating particles effect -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="url(#sunsetParticles)" rx="${borderRadius}" ry="${borderRadius}" opacity="0.3"/>
  
  <!-- Command animations -->
  ${animations}
  
  <!-- Sunset-themed cursor -->
  ${cursor ? `
  <rect x="${padding + 10 + (prompt.length * fontSize * 0.6)}" y="${currentY - fontSize + 2}" width="2" height="${fontSize + 2}" 
        class="terminal-cursor cursor-blink" filter="url(#sunsetBloom)" rx="1" fill="#fed7aa"/>
  ` : ''}
  
  <!-- Warm border effects -->
  <rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="${borderRadius - 1}" ry="${borderRadius - 1}" 
        fill="none" stroke="rgba(249,115,22,0.4)" stroke-width="1"/>
</svg>`;
  }

  // Monochrome theme with high contrast and minimalist design
  static generateMonochrome(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      githubMode,
      commandType,
      borderRadius,
      padding,
      enableScanlines,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderOptimizedCommandAnimations(commands, options);

    const baseStyles = TerminalThemeBase.generateBaseStyles('monochrome', fontSize, options);
    
    // Monochrome gradients and effects
    const gradients = `
      <defs>
        <linearGradient id="monochromeHeaderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="monochromeBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#0a0a0a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
        </linearGradient>
        <filter id="monochromeSharp">
          <feConvolveMatrix kernelMatrix="0 -1 0 -1 5 -1 0 -1 0"/>
        </filter>
        <filter id="monochromeShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#ffffff" flood-opacity="0.1"/>
        </filter>
        ${enableScanlines ? `
        <pattern id="monochromeScanlines" patternUnits="userSpaceOnUse" width="1" height="3">
          <rect width="1" height="1.5" fill="none"/>
          <rect width="1" height="0.5" y="1.5" fill="rgba(255,255,255,0.05)"/>
          <rect width="1" height="1" y="2" fill="none"/>
        </pattern>
        ` : ''}
      </defs>
    `;

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  ${gradients}
  ${baseStyles}
  
  <!-- Monochrome terminal container -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="${borderRadius}" ry="${borderRadius}" 
        class="terminal-bg" filter="url(#monochromeShadow)"/>
  
  ${showHeader ? `
  <!-- Monochrome header -->
  <rect x="0" y="0" width="${width}" height="38" rx="${borderRadius}" ry="${borderRadius}" 
        fill="url(#monochromeHeaderGradient)" stroke="#404040" stroke-width="1"/>
  <rect x="0" y="26" width="${width}" height="12" fill="url(#monochromeHeaderGradient)"/>
  
  <!-- Minimalist controls -->
  <g class="terminal-controls">
    <circle cx="20" cy="19" r="5" fill="#666666" stroke="#999999" stroke-width="0.5"/>
    <circle cx="42" cy="19" r="5" fill="#666666" stroke="#999999" stroke-width="0.5"/>
    <circle cx="64" cy="19" r="5" fill="#666666" stroke="#999999" stroke-width="0.5"/>
    
    <!-- Minimal icons -->
    <g opacity="0.8">
      <path d="M17,16 L23,22 M23,16 L17,22" stroke="#ffffff" stroke-width="1" stroke-linecap="round"/>
      <line x1="39" y1="19" x2="45" y2="19" stroke="#ffffff" stroke-width="1" stroke-linecap="round"/>
      <rect x="61" y="16" width="6" height="6" fill="none" stroke="#ffffff" stroke-width="1"/>
    </g>
  </g>
  
  <!-- Minimalist title -->
  <text x="${width / 2}" y="25" text-anchor="middle" class="terminal-title" 
        style="font-size: ${Math.max(10, fontSize - 4)}px; font-weight: 400; letter-spacing: 1px; text-transform: uppercase;">
    ${this.escapeXml(title)}
  </text>
  ` : ''}
  
  <!-- Monochrome content area -->
  <rect x="${padding/2}" y="${showHeader ? 40 : padding/2}" width="${width - padding}" height="${height - (showHeader ? 48 : padding)}" 
        fill="url(#monochromeBodyGradient)" rx="${Math.max(0, borderRadius - 2)}" ry="${Math.max(0, borderRadius - 2)}"/>
  
  ${enableScanlines ? `
  <!-- Monochrome scanlines -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="url(#monochromeScanlines)" rx="${borderRadius}" ry="${borderRadius}" opacity="0.8"/>
  ` : ''}
  
  <!-- Command animations -->
  ${animations}
  
  <!-- Minimalist cursor -->
  ${cursor ? `
  <rect x="${padding + 10 + (prompt.length * fontSize * 0.6)}" y="${currentY - fontSize + 2}" width="1" height="${fontSize + 2}" 
        class="terminal-cursor cursor-blink" fill="#ffffff"/>
  ` : ''}
  
  <!-- Sharp monochrome borders -->
  <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="${borderRadius - 0.5}" ry="${borderRadius - 0.5}" 
        fill="none" stroke="#ffffff" stroke-width="0.5"/>
</svg>`;
  }



  // GitHub Dark theme
  static generateGithubDark(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="gh-dark-mode-only">
  <defs>
    <style>
      .terminal-bg {
        fill: #0d1117;
        stroke: #30363d;
        stroke-width: 1;
      }
      .terminal-header {
        fill: #161b22;
      }
      .terminal-controls circle {
        r: 6;
      }
      .close { fill: #ff6b6b; }
      .minimize { fill: #ffd93d; }
      .maximize { fill: #6bcf7f; }
      .terminal-title {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 12px;
        fill: #f0f6fc;
        font-weight: 500;
      }
      .terminal-text {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #f0f6fc;
        font-weight: 400;
      }
      .terminal-output {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #8b949e;
        font-weight: 400;
      }
      .terminal-success {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #7c3aed;
        font-weight: 400;
      }
      .terminal-warning {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #d29922;
        font-weight: 400;
      }
      .terminal-error {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #f85149;
        font-weight: 400;
      }
      .terminal-info {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #58a6ff;
        font-weight: 400;
      }
      .cursor {
        fill: #f0f6fc;
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    </style>
    <filter id="githubShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#010409" flood-opacity="0.12"/>
    </filter>
  </defs>
  
  <!-- Terminal background -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="6" ry="6" class="terminal-bg" filter="url(#githubShadow)"/>
  
  ${
    showHeader
      ? `
  <!-- Terminal header -->
  <rect x="0" y="0" width="${width}" height="40" rx="6" ry="6" class="terminal-header"/>
  <rect x="0" y="28" width="${width}" height="12" class="terminal-header"/>
  
  <!-- Window controls -->
  <g class="terminal-controls">
    <circle cx="20" cy="20" class="close"/>
    <circle cx="44" cy="20" class="minimize"/>
    <circle cx="68" cy="20" class="maximize"/>
  </g>
  
  <!-- Terminal title -->
  <text x="${
    width / 2
  }" y="25" class="terminal-title" text-anchor="middle">${title}</text>
  `
      : ""
  }
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Animated cursor -->
  <text x="${
    20 + prompt.length * fontSize * 0.6
  }" y="${currentY}" class="cursor" style="animation-delay: ${
          totalDuration + 1
        }s">▋</text>
  `
      : ""
  }
</svg>`;
  }

  // GitHub Light theme
  static generateGithubLight(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="gh-light-mode-only">
  <defs>
    <style>
      .terminal-bg {
        fill: #ffffff;
        stroke: #d0d7de;
        stroke-width: 1;
      }
      .terminal-header {
        fill: #f6f8fa;
      }
      .terminal-controls circle {
        r: 6;
      }
      .close { fill: #ff6b6b; }
      .minimize { fill: #ffd93d; }
      .maximize { fill: #6bcf7f; }
      .terminal-title {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 12px;
        fill: #24292f;
        font-weight: 500;
      }
      .terminal-text {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #24292f;
        font-weight: 400;
      }
      .terminal-output {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #656d76;
        font-weight: 400;
      }
      .terminal-success {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #0969da;
        font-weight: 400;
      }
      .terminal-warning {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #9a6700;
        font-weight: 400;
      }
      .terminal-error {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #cf222e;
        font-weight: 400;
      }
      .terminal-info {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #0969da;
        font-weight: 400;
      }
      .cursor {
        fill: #24292f;
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    </style>
    <filter id="githubLightShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#8c959f" flood-opacity="0.12"/>
    </filter>
  </defs>
  
  <!-- Terminal background -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="6" ry="6" class="terminal-bg" filter="url(#githubLightShadow)"/>
  
  ${
    showHeader
      ? `
  <!-- Terminal header -->
  <rect x="0" y="0" width="${width}" height="40" rx="6" ry="6" class="terminal-header"/>
  <rect x="0" y="28" width="${width}" height="12" class="terminal-header"/>
  
  <!-- Window controls -->
  <g class="terminal-controls">
    <circle cx="20" cy="20" class="close"/>
    <circle cx="44" cy="20" class="minimize"/>
    <circle cx="68" cy="20" class="maximize"/>
  </g>
  
  <!-- Terminal title -->
  <text x="${
    width / 2
  }" y="25" class="terminal-title" text-anchor="middle">${title}</text>
  `
      : ""
  }
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Animated cursor -->
  <text x="${
    20 + prompt.length * fontSize * 0.6
  }" y="${currentY}" class="cursor" style="animation-delay: ${
          totalDuration + 1
        }s">▋</text>
  `
      : ""
  }
</svg>`;
  }

  // Glass theme - modern glassmorphism effect
  static generateGlass(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .glass-bg {
        fill: rgba(255, 255, 255, 0.1);
        stroke: rgba(255, 255, 255, 0.2);
        stroke-width: 1;
        backdrop-filter: blur(20px);
      }
      .glass-header {
        fill: rgba(255, 255, 255, 0.05);
      }
      .terminal-controls circle {
        r: 6;
        fill-opacity: 0.8;
      }
      .close { fill: #ff6b6b; }
      .minimize { fill: #ffd93d; }
      .maximize { fill: #6bcf7f; }
      .terminal-title {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 12px;
        fill: rgba(255, 255, 255, 0.9);
        font-weight: 500;
      }
      .terminal-text {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: rgba(255, 255, 255, 0.9);
        font-weight: 400;
      }
      .terminal-output {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: rgba(255, 255, 255, 0.7);
        font-weight: 400;
      }
      .terminal-success {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #6bcf7f;
        font-weight: 400;
      }
      .terminal-warning {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #ffd93d;
        font-weight: 400;
      }
      .terminal-error {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #ff6b6b;
        font-weight: 400;
      }
      .terminal-info {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #74c0fc;
        font-weight: 400;
      }
      .cursor {
        fill: rgba(255, 255, 255, 0.9);
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    </style>
    <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgba(255,255,255,0.1);stop-opacity:1"/>
      <stop offset="100%" style="stop-color:rgba(255,255,255,0.05);stop-opacity:1"/>
    </linearGradient>
    <filter id="glassBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background gradient -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"/>
  
  <!-- Glass terminal background -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="16" ry="16" class="glass-bg" filter="url(#glassBlur)"/>
  
  <!-- Glass gradient overlay -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="16" ry="16" fill="url(#glassGradient)"/>
  
  ${
    showHeader
      ? `
  <!-- Glass header -->
  <rect x="0" y="0" width="${width}" height="40" rx="16" ry="16" class="glass-header"/>
  <rect x="0" y="28" width="${width}" height="12" class="glass-header"/>
  
  <!-- Window controls -->
  <g class="terminal-controls">
    <circle cx="20" cy="20" class="close"/>
    <circle cx="44" cy="20" class="minimize"/>
    <circle cx="68" cy="20" class="maximize"/>
  </g>
  
  <!-- Terminal title -->
  <text x="${
    width / 2
  }" y="25" class="terminal-title" text-anchor="middle">${title}</text>
  `
      : ""
  }
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Animated cursor -->
  <text x="${
    20 + prompt.length * fontSize * 0.6
  }" y="${currentY}" class="cursor" style="animation-delay: ${
          totalDuration + 1
        }s">▋</text>
  `
      : ""
  }
</svg>`;
  }

  // Keep the original themes with enhanced command simulation
  static generateMatrix(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .matrix-bg {
        fill: #000000;
        stroke: #00ff41;
        stroke-width: 1;
      }
      .terminal-text, .terminal-output, .terminal-success, .terminal-warning, .terminal-error, .terminal-info {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #00ff41;
        font-weight: bold;
        text-shadow: 0 0 10px #00ff41;
      }
      .matrix-cursor {
        fill: #00ff41;
        animation: matrixBlink 0.8s infinite;
      }
      @keyframes matrixBlink {
        0%, 50% { opacity: 1; fill: #00ff41; }
        51%, 100% { opacity: 0.3; fill: #008f11; }
      }
    </style>
    <filter id="matrixGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Matrix background -->
  <rect x="0" y="0" width="${width}" height="${height}" class="matrix-bg" filter="url(#matrixGlow)"/>
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Matrix cursor -->
  <text x="20" y="${currentY}" class="matrix-cursor">█</text>
  `
      : ""
  }
</svg>`;
  }

  static generateCyberpunk(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .cyber-bg {
        fill: #0a0a0f;
        stroke: #ff0080;
        stroke-width: 2;
      }
      .terminal-text {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #00ffff;
        font-weight: bold;
        text-shadow: 0 0 5px #00ffff, 0 0 10px #ff0080;
      }
      .terminal-output {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #00ffff;
        font-weight: bold;
        text-shadow: 0 0 5px #00ffff;
        opacity: 0.8;
      }
      .terminal-success {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #00ff80;
        font-weight: bold;
        text-shadow: 0 0 5px #00ff80;
      }
      .terminal-warning {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #ffff00;
        font-weight: bold;
        text-shadow: 0 0 5px #ffff00;
      }
      .terminal-error {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #ff0080;
        font-weight: bold;
        text-shadow: 0 0 5px #ff0080;
      }
      .terminal-info {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #8080ff;
        font-weight: bold;
        text-shadow: 0 0 5px #8080ff;
      }
      .cyber-cursor {
        fill: #ff0080;
        animation: cyberBlink 0.6s infinite;
      }
      @keyframes cyberBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    </style>
    <filter id="cyberGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Cyberpunk background -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="8" ry="8" class="cyber-bg" filter="url(#cyberGlow)"/>
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Cyberpunk cursor -->
  <text x="25" y="${currentY}" class="cyber-cursor">▮</text>
  `
      : ""
  }
</svg>`;
  }

  static generateRetro(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .retro-bg {
        fill: #1a1a2e;
      }
      .terminal-text, .terminal-output, .terminal-success, .terminal-warning, .terminal-error, .terminal-info {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #eee085;
        font-weight: normal;
      }
      .retro-cursor {
        fill: #eee085;
        animation: retroBlink 1.2s infinite;
      }
      @keyframes retroBlink {
        0%, 60% { opacity: 1; }
        61%, 100% { opacity: 0; }
      }
    </style>
  </defs>
  
  <!-- Retro background -->
  <rect x="0" y="0" width="${width}" height="${height}" class="retro-bg"/>
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Retro cursor -->
  <text x="25" y="${currentY}" class="retro-cursor">█</text>
  `
      : ""
  }
</svg>`;
  }

  // Add more modern themes...
  static generateNeon(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .neon-bg {
        fill: #0a0a0a;
        stroke: #ff00ff;
        stroke-width: 2;
        filter: url(#neonGlow);
      }
      .terminal-text {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #ff00ff;
        font-weight: bold;
        text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
      }
      .terminal-output {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #00ffff;
        font-weight: bold;
        text-shadow: 0 0 10px #00ffff;
      }
      .terminal-success {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #00ff00;
        font-weight: bold;
        text-shadow: 0 0 10px #00ff00;
      }
      .terminal-warning {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #ffff00;
        font-weight: bold;
        text-shadow: 0 0 10px #ffff00;
      }
      .terminal-error {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #ff0040;
        font-weight: bold;
        text-shadow: 0 0 10px #ff0040;
      }
      .terminal-info {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #8040ff;
        font-weight: bold;
        text-shadow: 0 0 10px #8040ff;
      }
      .neon-cursor {
        fill: #ff00ff;
        animation: neonBlink 0.8s infinite;
      }
      @keyframes neonBlink {
        0%, 50% { opacity: 1; text-shadow: 0 0 10px #ff00ff; }
        51%, 100% { opacity: 0.3; text-shadow: 0 0 5px #ff00ff; }
      }
    </style>
    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Neon background -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="10" ry="10" class="neon-bg"/>
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Neon cursor -->
  <text x="20" y="${currentY}" class="neon-cursor">▋</text>
  `
      : ""
  }
</svg>`;
  }

  static generateMinimal(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .minimal-bg {
        fill: #fafafa;
        stroke: #e0e0e0;
        stroke-width: 1;
      }
      .terminal-text {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #333333;
        font-weight: 400;
      }
      .terminal-output {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #666666;
        font-weight: 400;
      }
      .terminal-success {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #28a745;
        font-weight: 400;
      }
      .terminal-warning {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #ffc107;
        font-weight: 400;
      }
      .terminal-error {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #dc3545;
        font-weight: 400;
      }
      .terminal-info {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #17a2b8;
        font-weight: 400;
      }
      .minimal-cursor {
        fill: #333333;
        animation: minimalBlink 1s infinite;
      }
      @keyframes minimalBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    </style>
  </defs>
  
  <!-- Minimal background -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="4" ry="4" class="minimal-bg"/>
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Minimal cursor -->
  <text x="20" y="${currentY}" class="minimal-cursor">|</text>
  `
      : ""
  }
</svg>`;
  }

  static escapeXml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}
