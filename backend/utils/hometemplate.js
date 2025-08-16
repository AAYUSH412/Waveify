export default function hometemplate() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Waveify API - Professional SVG Generator for Developers</title>
    <meta name="description" content="Generate stunning animated SVG components for GitHub READMEs, documentation, and web projects. Professional wave animations, typing effects, loaders, and more.">
    <meta name="keywords" content="SVG generator, GitHub README, animated banners, wave animations, typing effects, developer tools">
    <meta name="author" content="Waveify Team">
    
    <!-- Open Graph / Social Media -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Waveify API - Professional SVG Generator">
    <meta property="og:description" content="Create beautiful animated SVG components with simple URL parameters">
    <meta property="og:url" content="https://waveify.onrender.com">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --accent-gradient: linear-gradient(45deg, #00d4ff, #ffffff);
            --glass-bg: rgba(255, 255, 255, 0.1);
            --glass-border: rgba(255, 255, 255, 0.2);
            --text-primary: #ffffff;
            --text-secondary: rgba(255, 255, 255, 0.8);
            --text-muted: rgba(255, 255, 255, 0.6);
            --shadow-primary: 0 8px 32px rgba(0, 0, 0, 0.1);
            --shadow-hover: 0 12px 40px rgba(0, 0, 0, 0.2);
            --border-radius: 20px;
            --border-radius-sm: 12px;
            --spacing-xs: 0.5rem;
            --spacing-sm: 1rem;
            --spacing-md: 1.5rem;
            --spacing-lg: 2rem;
            --spacing-xl: 3rem;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html {
            scroll-behavior: smooth;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: var(--primary-gradient);
            background-attachment: fixed;
            min-height: 100vh;
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Animated background elements */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.3;
        }

        .bg-wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200%;
            height: 100px;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%23ffffff10'/%3E%3C/svg%3E") repeat-x;
            animation: wave 10s linear infinite;
        }

        @keyframes wave {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: var(--spacing-lg);
            position: relative;
            z-index: 1;
        }

        /* Navigation */
        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing-xl);
            padding: var(--spacing-sm) 0;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: var(--spacing-xs);
            font-size: 1.5rem;
            font-weight: 700;
            text-decoration: none;
            color: var(--text-primary);
        }

        .nav-links {
            display: flex;
            gap: var(--spacing-md);
            list-style: none;
        }

        .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
            padding: var(--spacing-xs) var(--spacing-sm);
            border-radius: var(--border-radius-sm);
        }

        .nav-links a:hover {
            color: var(--text-primary);
            background: var(--glass-bg);
        }

        /* Hero Section */
        .hero {
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: var(--border-radius);
            padding: var(--spacing-xl);
            box-shadow: var(--shadow-primary);
            border: 1px solid var(--glass-border);
            text-align: center;
            margin-bottom: var(--spacing-xl);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
        }

        .hero-content {
            position: relative;
            z-index: 2;
        }

        h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            margin-bottom: var(--spacing-sm);
            background: var(--accent-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
        }

        .subtitle {
            font-size: clamp(1.1rem, 2.5vw, 1.4rem);
            color: var(--text-secondary);
            margin-bottom: var(--spacing-md);
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-description {
            font-size: 1.1rem;
            color: var(--text-muted);
            max-width: 700px;
            margin: 0 auto var(--spacing-lg);
        }

        .cta-buttons {
            display: flex;
            gap: var(--spacing-sm);
            justify-content: center;
            flex-wrap: wrap;
            margin-top: var(--spacing-lg);
        }

        .btn {
            padding: 12px 24px;
            border-radius: var(--border-radius-sm);
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: var(--spacing-xs);
            font-family: inherit;
            border: none;
            cursor: pointer;
        }

        .btn-primary {
            background: linear-gradient(45deg, #00d4ff, #0099cc);
            color: white;
            box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(0, 212, 255, 0.4);
        }

        .btn-secondary {
            background: var(--glass-bg);
            color: var(--text-primary);
            border: 1px solid var(--glass-border);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        /* Statistics */
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: var(--spacing-md);
            margin-bottom: var(--spacing-xl);
        }

        .stat-card {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border-radius: var(--border-radius-sm);
            padding: var(--spacing-lg);
            text-align: center;
            border: 1px solid var(--glass-border);
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            background: var(--accent-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: block;
        }

        .stat-label {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-top: var(--spacing-xs);
        }

        /* Endpoints Section */
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: var(--spacing-lg);
            background: var(--accent-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .endpoints {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: var(--spacing-lg);
            margin-bottom: var(--spacing-xl);
        }

        .endpoint-card {
            background: var(--glass-bg);
            backdrop-filter: blur(15px);
            border-radius: var(--border-radius);
            padding: var(--spacing-lg);
            border: 1px solid var(--glass-border);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .endpoint-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #00d4ff, #667eea, #764ba2);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .endpoint-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-hover);
            border-color: rgba(255, 255, 255, 0.3);
        }

        .endpoint-card:hover::before {
            opacity: 1;
        }

        .endpoint-header {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            margin-bottom: var(--spacing-sm);
        }

        .endpoint-icon {
            font-size: 2rem;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .endpoint-title {
            font-size: 1.4rem;
            font-weight: 600;
            color: #00d4ff;
            margin: 0;
        }

        .endpoint-desc {
            color: var(--text-secondary);
            margin-bottom: var(--spacing-md);
            font-size: 1rem;
        }

        .endpoint-url {
            background: rgba(0, 0, 0, 0.4);
            padding: var(--spacing-sm);
            border-radius: var(--border-radius-sm);
            font-family: 'JetBrains Mono', 'Courier New', monospace;
            font-size: 0.85rem;
            color: #00ff88;
            border: 1px solid rgba(0, 255, 136, 0.2);
            margin-bottom: var(--spacing-md);
            position: relative;
            overflow-x: auto;
        }

        .copy-btn {
            position: absolute;
            top: var(--spacing-xs);
            right: var(--spacing-xs);
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: var(--text-secondary);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.7rem;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .copy-btn:hover {
            background: rgba(255, 255, 255, 0.2);
            color: var(--text-primary);
        }

        .params {
            background: rgba(255, 255, 255, 0.05);
            padding: var(--spacing-sm);
            border-radius: var(--border-radius-sm);
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-bottom: var(--spacing-md);
        }

        .params strong {
            color: var(--text-secondary);
        }

        .example {
            margin-top: var(--spacing-md);
            text-align: center;
            position: relative;
        }

        .example-label {
            font-size: 0.8rem;
            color: var(--text-muted);
            margin-bottom: var(--spacing-xs);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .example img {
            max-width: 100%;
            border-radius: var(--border-radius-sm);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            border: 1px solid var(--glass-border);
            transition: transform 0.3s ease;
        }

        .example img:hover {
            transform: scale(1.02);
        }

        .example-placeholder {
            background: rgba(255, 255, 255, 0.1);
            border: 2px dashed var(--glass-border);
            border-radius: var(--border-radius-sm);
            padding: var(--spacing-lg);
            color: var(--text-muted);
            font-style: italic;
        }

        /* Features Section */
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: var(--spacing-lg);
            margin-bottom: var(--spacing-xl);
        }

        .feature-card {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border-radius: var(--border-radius-sm);
            padding: var(--spacing-lg);
            border: 1px solid var(--glass-border);
            text-align: center;
            transition: transform 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-4px);
        }

        .feature-icon {
            font-size: 3rem;
            margin-bottom: var(--spacing-sm);
            display: block;
        }

        .feature-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: var(--spacing-xs);
        }

        .feature-desc {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        /* Footer */
        .footer {
            text-align: center;
            margin-top: var(--spacing-xl);
            padding: var(--spacing-xl) 0 var(--spacing-lg);
            border-top: 1px solid var(--glass-border);
        }

        .footer-content {
            max-width: 600px;
            margin: 0 auto;
        }

        .footer-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--spacing-sm);
            background: var(--accent-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .footer-text {
            color: var(--text-secondary);
            margin-bottom: var(--spacing-md);
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: var(--spacing-md);
            flex-wrap: wrap;
            margin-bottom: var(--spacing-md);
        }

        .footer-link {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        .footer-link:hover {
            color: #00d4ff;
        }

        .footer-bottom {
            color: var(--text-muted);
            font-size: 0.8rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: var(--spacing-sm);
            margin-top: var(--spacing-md);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: var(--spacing-sm);
            }

            .nav {
                flex-direction: column;
                gap: var(--spacing-sm);
            }

            .nav-links {
                gap: var(--spacing-sm);
            }

            .hero {
                padding: var(--spacing-lg);
            }

            .endpoints {
                grid-template-columns: 1fr;
                gap: var(--spacing-md);
            }

            .endpoint-card {
                padding: var(--spacing-md);
            }

            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }

            .stats {
                grid-template-columns: repeat(2, 1fr);
            }

            .features {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 480px) {
            .stats {
                grid-template-columns: 1fr;
            }

            .endpoint-url {
                font-size: 0.75rem;
            }

            .btn {
                padding: 10px 20px;
                font-size: 0.9rem;
            }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }

        @media (prefers-contrast: high) {
            :root {
                --glass-bg: rgba(255, 255, 255, 0.2);
                --glass-border: rgba(255, 255, 255, 0.4);
                --text-secondary: rgba(255, 255, 255, 0.9);
                --text-muted: rgba(255, 255, 255, 0.8);
            }
        }

        /* Loading animation for examples */
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 2px solid var(--glass-border);
            border-radius: 50%;
            border-top-color: #00d4ff;
            animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Scroll indicator */
        .scroll-indicator {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #00d4ff, #667eea);
            transform-origin: left;
            transform: scaleX(0);
            z-index: 1000;
            transition: transform 0.1s ease;
        }
    </style>
</head>
<body>
    <div class="bg-animation">
        <div class="bg-wave"></div>
    </div>

    <div class="scroll-indicator" id="scrollIndicator"></div>

    <div class="container">
        <nav class="nav">
            <a href="#" class="logo">
                🌊 Waveify
            </a>
            <ul class="nav-links">
                <li><a href="#endpoints">API Docs</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="https://github.com/AAYUSH412/Waveify" target="_blank">GitHub</a></li>
                <li><a href="/api/health">Status</a></li>
            </ul>
        </nav>

        <section class="hero">
            <div class="hero-content">
                <h1>🌊 Waveify API</h1>
                <p class="subtitle">Professional SVG Component Generator for Modern Developers</p>
                <p class="hero-description">
                    Create stunning, animated SVG banners for GitHub READMEs, documentation, and web projects. 
                    No design skills required – just simple URL parameters for beautiful results.
                </p>
                <div class="cta-buttons">
                    <a href="#endpoints" class="btn btn-primary">
                        🚀 Get Started
                    </a>
                    <a href="https://github.com/AAYUSH412/Waveify" target="_blank" class="btn btn-secondary">
                        ⭐ Star on GitHub
                    </a>
                </div>
            </div>
        </section>

        <section class="stats">
            <div class="stat-card">
                <span class="stat-number">10+</span>
                <span class="stat-label">Animation Types</span>
            </div>
            <div class="stat-card">
                <span class="stat-number">∞</span>
                <span class="stat-label">Customizations</span>
            </div>
            <div class="stat-card">
                <span class="stat-number">0ms</span>
                <span class="stat-label">Setup Time</span>
            </div>
            <div class="stat-card">
                <span class="stat-number">100%</span>
                <span class="stat-label">Open Source</span>
            </div>
        </section>

        <section id="features">
            <h2 class="section-title">✨ Why Choose Waveify?</h2>
            <div class="features">
                <div class="feature-card">
                    <span class="feature-icon">⚡</span>
                    <h3 class="feature-title">Lightning Fast</h3>
                    <p class="feature-desc">Optimized SVG generation with sub-200ms response times</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">🎨</span>
                    <h3 class="feature-title">No Design Skills</h3>
                    <p class="feature-desc">Professional results with simple URL parameters</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">📱</span>
                    <h3 class="feature-title">Mobile Responsive</h3>
                    <p class="feature-desc">Perfect rendering on all devices and screen sizes</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">♿</span>
                    <h3 class="feature-title">Accessible</h3>
                    <p class="feature-desc">Built with accessibility and reduced motion support</p>
                </div>
            </div>
        </section>

        <section id="endpoints">
            <h2 class="section-title">🛠️ API Endpoints</h2>
            <div class="endpoints">
                <div class="endpoint-card">
                    <div class="endpoint-header">
                        <span class="endpoint-icon">🌊</span>
                        <h3 class="endpoint-title">Wave Animations</h3>
                    </div>
                    <p class="endpoint-desc">Beautiful animated wave patterns with multiple styles including sine, square, fluid, neon, and more</p>
                    <div class="endpoint-url">
                        /api/wave
                        <button class="copy-btn" onclick="copyToClipboard('/api/wave')">Copy</button>
                    </div>
                    <div class="params">
                        <strong>Parameters:</strong> color, height, speed, width, amplitude, frequency, type (sine, square, fluid, neon, glitch, plasma)
                    </div>
                    <div class="example">
                        <div class="example-label">Live Example</div>
                        <img src="/api/wave?color=%23007CF0&height=100&speed=3&width=400&amplitude=15" alt="Wave Animation Example" loading="lazy">
                    </div>
                </div>

                <div class="endpoint-card">
                    <div class="endpoint-header">
                        <span class="endpoint-icon">⌨️</span>
                        <h3 class="endpoint-title">Typing Animations</h3>
                    </div>
                    <p class="endpoint-desc">Dynamic typewriter effects perfect for project descriptions, welcome messages, and interactive content</p>
                    <div class="endpoint-url">
                        /api/typing
                        <button class="copy-btn" onclick="copyToClipboard('/api/typing')">Copy</button>
                    </div>
                    <div class="params">
                        <strong>Parameters:</strong> text, speed, color, fontSize, fontFamily, cursor, type (classic, neon, glitch, rainbow, wave, matrix, terminal, gradient)
                    </div>
                    <div class="example">
                        <div class="example-label">Live Example</div>
                        <img src="/api/typing?text=Welcome+to+Waveify!&speed=50&color=%2300d4ff" alt="Typing Animation Example" loading="lazy">
                    </div>
                </div>

                <div class="endpoint-card">
                    <div class="endpoint-header">
                        <span class="endpoint-icon">⏳</span>
                        <h3 class="endpoint-title">Loading Animations</h3>
                    </div>
                    <p class="endpoint-desc">Professional loading indicators for "Work in Progress" sections and dynamic content with 20+ styles</p>
                    <div class="endpoint-url">
                        /api/loader
                        <button class="copy-btn" onclick="copyToClipboard('/api/loader')">Copy</button>
                    </div>
                    <div class="params">
                        <strong>Parameters:</strong> type (dots, spinner, bars, pulse, wave, neon-pulse, dna-helix, matrix-rain), color, speed, size
                    </div>
                    <div class="example">
                        <div class="example-label">Live Example</div>
                        <img src="/api/loader?type=dots&color=%23667eea&speed=1.5&size=40" alt="Loader Animation Example" loading="lazy">
                    </div>
                </div>

                <div class="endpoint-card">
                    <div class="endpoint-header">
                        <span class="endpoint-icon">💻</span>
                        <h3 class="endpoint-title">Terminal Simulation</h3>
                    </div>
                    <p class="endpoint-desc">Realistic terminal interfaces with multiple themes, command execution, and authentic terminal aesthetics</p>
                    <div class="endpoint-url">
                        /api/terminal
                        <button class="copy-btn" onclick="copyToClipboard('/api/terminal')">Copy</button>
                    </div>
                    <div class="params">
                        <strong>Parameters:</strong> commands, theme (matrix, cyberpunk, hacker, minimal), prompt, width, height, speed
                    </div>
                    <div class="example">
                        <div class="example-label">Live Example</div>
                        <div class="example-placeholder">
                            Terminal examples load dynamically
                        </div>
                    </div>
                </div>

                <div class="endpoint-card">
                    <div class="endpoint-header">
                        <span class="endpoint-icon">❤️</span>
                        <h3 class="endpoint-title">Health Check</h3>
                    </div>
                    <p class="endpoint-desc">API status monitoring, uptime tracking, and service health information for reliability assurance</p>
                    <div class="endpoint-url">
                        /api/health
                        <button class="copy-btn" onclick="copyToClipboard('/api/health')">Copy</button>
                    </div>
                    <div class="params">
                        <strong>Returns:</strong> JSON with status, timestamp, uptime, version, and service information
                    </div>
                    <div class="example">
                        <div class="example-label">Response Format</div>
                        <div style="background: rgba(0,0,0,0.4); padding: 1rem; border-radius: 8px; font-family: monospace; font-size: 0.8rem; text-align: left;">
                            {<br>
                            &nbsp;&nbsp;"status": "healthy",<br>
                            &nbsp;&nbsp;"timestamp": "2025-01-23T...",<br>
                            &nbsp;&nbsp;"uptime": "2h 15m",<br>
                            &nbsp;&nbsp;"version": "1.0.0"<br>
                            }
                        </div>
                    </div>
                </div>

                <div class="endpoint-card">
                    <div class="endpoint-header">
                        <span class="endpoint-icon">🎨</span>
                        <h3 class="endpoint-title">Coming Soon</h3>
                    </div>
                    <p class="endpoint-desc">More exciting generators in development: charts, profile cards, social media elements, and more!</p>
                    <div class="endpoint-url">
                        /api/* (in development)
                        <button class="copy-btn" onclick="copyToClipboard('Stay tuned!')">✨</button>
                    </div>
                    <div class="params">
                        <strong>Upcoming:</strong> charts, profile cards, social stats, gaming elements, celebration effects
                    </div>
                    <div class="example">
                        <div class="example-label">Preview</div>
                        <div class="example-placeholder">
                            🚧 More amazing generators coming soon!<br>
                            <small>Follow our GitHub for updates</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="footer-content">
                <h3 class="footer-title">Ready to Make Your Projects Stand Out?</h3>
                <p class="footer-text">
                    Join thousands of developers already using Waveify to enhance their GitHub profiles and project documentation.
                </p>
                <div class="footer-links">
                    <a href="https://github.com/AAYUSH412/Waveify" target="_blank" class="footer-link">GitHub Repository</a>
                    <a href="https://github.com/AAYUSH412/Waveify/issues" target="_blank" class="footer-link">Report Issues</a>
                    <a href="https://github.com/AAYUSH412/Waveify/blob/main/docs/CONTRIBUTING.md" target="_blank" class="footer-link">Contribute</a>
                    <a href="https://github.com/AAYUSH412/Waveify/blob/main/docs/API.md" target="_blank" class="footer-link">Full API Docs</a>
                </div>
                <div class="footer-bottom">
                    <p>Made with ❤️ by <strong>Aayush Vaghela</strong> and the open-source community</p>
                    <p>© 2025 Waveify • Open Source • MIT License</p>
                </div>
            </div>
        </footer>
    </div>

    <script>
        // Copy to clipboard functionality
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                // Create temporary success indicator
                const button = event.target;
                const originalText = button.textContent;
                button.textContent = '✓';
                button.style.background = 'rgba(0, 255, 136, 0.3)';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = 'rgba(255, 255, 255, 0.1)';
                }, 1000);
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            });
        }

        // Scroll progress indicator
        function updateScrollIndicator() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight);
            const scrollIndicator = document.getElementById('scrollIndicator');
            if (scrollIndicator) {
                scrollIndicator.style.transform = \`scaleX(\${scrollPercent})\`;
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Lazy loading for example images
        function handleImageLoading() {
            const images = document.querySelectorAll('.example img');
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        // Add loading indicator
                        const loadingDiv = document.createElement('div');
                        loadingDiv.className = 'loading';
                        img.parentNode.insertBefore(loadingDiv, img);
                        
                        img.onload = () => {
                            loadingDiv.remove();
                            img.style.opacity = '1';
                        };
                        
                        img.onerror = () => {
                            loadingDiv.remove();
                            img.style.display = 'none';
                            const placeholder = document.createElement('div');
                            placeholder.className = 'example-placeholder';
                            placeholder.textContent = 'Example temporarily unavailable';
                            img.parentNode.appendChild(placeholder);
                        };
                        
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                imageObserver.observe(img);
            });
        }

        // Initialize on DOM content loaded
        document.addEventListener('DOMContentLoaded', function() {
            updateScrollIndicator();
            handleImageLoading();
            
            // Update scroll indicator on scroll
            window.addEventListener('scroll', updateScrollIndicator);
            
            // Add entrance animations
            const cards = document.querySelectorAll('.endpoint-card, .feature-card, .stat-card');
            const cardObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                        cardObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                cardObserver.observe(card);
            });
        });

        // Enhanced error handling for images
        document.addEventListener('error', function(e) {
            if (e.target.tagName === 'IMG') {
                const img = e.target;
                img.style.display = 'none';
                
                const placeholder = document.createElement('div');
                placeholder.className = 'example-placeholder';
                placeholder.innerHTML = \`
                    <div style="opacity: 0.6;">
                        🔄 Loading example...<br>
                        <small>If this persists, the API might be warming up</small>
                    </div>
                \`;
                
                if (img.parentNode) {
                    img.parentNode.appendChild(placeholder);
                }
            }
        }, true);

        // Performance optimization: Reduce animations on low-end devices
        if (navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4) {
            document.documentElement.style.setProperty('--animation-duration', '0.2s');
        }
    </script>
</body>
</html>
`;
}