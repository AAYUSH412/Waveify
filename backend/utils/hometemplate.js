export default function hometemplate() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Waveify API - SVG Component Generator</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: white;
            padding: 2rem 0;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .hero {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 3rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            text-align: center;
            margin-bottom: 2rem;
        }
        
        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #00d4ff, #ffffff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 2rem;
        }

        .endpoints {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .endpoint-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .endpoint-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }

        .endpoint-title {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: #00d4ff;
        }

        .endpoint-desc {
            opacity: 0.8;
            margin-bottom: 1rem;
        }

        .endpoint-url {
            background: rgba(0, 0, 0, 0.3);
            padding: 0.8rem;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            word-break: break-all;
            margin-bottom: 1rem;
        }

        .params {
            font-size: 0.85rem;
            opacity: 0.7;
        }

        .example {
            margin-top: 1rem;
            text-align: center;
        }

        .example img {
            max-width: 100%;
            border-radius: 8px;
            margin-top: 0.5rem;
        }

        .footer {
            text-align: center;
            margin-top: 3rem;
            opacity: 0.7;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <h1>🌊 Waveify API</h1>
            <p class="subtitle">Dynamic SVG Component Generator for GitHub READMEs and Web Projects</p>
            <p>Generate beautiful, animated SVG components with simple URL parameters</p>
        </div>

        <div class="endpoints">
            <div class="endpoint-card">
                <h3 class="endpoint-title">🌊 Wave Animation</h3>
                <p class="endpoint-desc">Beautiful animated wave patterns</p>
                <div class="endpoint-url">/api/wave</div>
                <div class="params">
                    <strong>Parameters:</strong> color, height, speed, width, amplitude
                </div>
                <div class="example">
                    <img src="/api/wave?color=%23007CF0&height=100&speed=3&width=400&amplitude=15" alt="Wave Example">
                </div>
            </div>

            <div class="endpoint-card">
                <h3 class="endpoint-title">⌨️ Typing Animation</h3>
                <p class="endpoint-desc">Perfect for project descriptions and welcome messages</p>
                <div class="endpoint-url">/api/typing</div>
                <div class="params">
                    <strong>Parameters:</strong> text, speed, color, fontSize, fontFamily, cursor
                </div>
                <div class="example">
                    <img src="/api/typing?text=Welcome+to+my+project&speed=50&color=%23333" alt="Typing Example">
                </div>
            </div>

            <div class="endpoint-card">
                <h3 class="endpoint-title">🏷️ Badge Generator</h3>
                <p class="endpoint-desc">Custom animated badges for status, builds, and more</p>
                <div class="endpoint-url">/api/badge</div>
                <div class="params">
                    <strong>Parameters:</strong> label, message, color, style, animated
                </div>
                <div class="example">
                    <img src="/api/badge?label=Build&message=Passing&color=green&style=wave&animated=true" alt="Badge Example">
                </div>
            </div>

            <div class="endpoint-card">
                <h3 class="endpoint-title">⏳ Loading Animations</h3>
                <p class="endpoint-desc">For "Work in Progress" sections and dynamic content</p>
                <div class="endpoint-url">/api/loader</div>
                <div class="params">
                    <strong>Parameters:</strong> type (dots, spinner, bars, pulse, wave), color, speed, size
                </div>
                <div class="example">
                    <img src="/api/loader?type=dots&color=blue&speed=1.5&size=40" alt="Loader Example">
                </div>
            </div>

            <div class="endpoint-card">
                <h3 class="endpoint-title">❤️ Health Check</h3>
                <p class="endpoint-desc">API status and health monitoring</p>
                <div class="endpoint-url">/api/health</div>
                <div class="params">
                    <strong>Returns:</strong> JSON with status, timestamp, and service info
                </div>
            </div>
        </div>

        <div class="footer">
            <p>Made with ❤️ for the developer community</p>
            <p>Add these SVGs to your GitHub README, documentation, or any web project!</p>
        </div>
    </div>
</body>
</html>
`;
}