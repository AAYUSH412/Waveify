import express from 'express';
import { TerminalGenerator } from '../generators/TerminalGenerator.js';

const router = express.Router();

// Helper function to parse commands from query parameters
const parseCommands = (req) => {
  const commands = req.query.commands;
  if (typeof commands === 'string') {
    try {
      // Try to parse as JSON array first
      return JSON.parse(commands);
    } catch {
      // If parsing fails, split by comma or pipe
      return commands.split(/[,|]/).map(cmd => cmd.trim()).filter(cmd => cmd.length > 0);
    }
  } else if (Array.isArray(commands)) {
    return commands;
  }
  return ['npm install', 'npm run dev', 'echo "Hello World"'];
};

// Helper function to parse options from query parameters
const parseOptions = (req) => {
  return {
    commands: parseCommands(req),
    theme: req.query.theme || 'modern',
    speed: parseInt(req.query.speed) || 50,
    cursor: req.query.cursor === 'false' ? false : true,
    prompt: req.query.prompt || '$ ',
    width: parseInt(req.query.width) || 800,
    height: parseInt(req.query.height) || 400,
    fontSize: parseInt(req.query.fontSize) || 14,
    showHeader: req.query.showHeader === 'false' ? false : true,
    title: req.query.title || 'Terminal',
    githubMode: req.query.githubMode === 'true' ? true : false,
    commandType: req.query.commandType || 'auto',
    // New professional UI/UX options
    borderRadius: parseInt(req.query.borderRadius) || 12,
    padding: parseInt(req.query.padding) || 16,
    lineHeight: parseFloat(req.query.lineHeight) || 1.4,
    showLineNumbers: req.query.showLineNumbers === 'true' ? true : false,
    enableScanlines: req.query.enableScanlines === 'false' ? false : true,
    showTimestamp: req.query.showTimestamp === 'true' ? true : false,
    // Accessibility options
    highContrast: req.query.highContrast === 'true' ? true : false,
    reducedMotion: req.query.reducedMotion === 'true' ? true : false,
    accessibilityFontSize: parseInt(req.query.accessibilityFontSize) || null,
    // Custom colors (if provided as JSON)
    customColors: req.query.customColors ? JSON.parse(req.query.customColors) : {}
  };
};

// Default terminal endpoint (modern theme)
router.get('/', (req, res) => {
  try {
    const options = parseOptions(req);
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating terminal:', error);
    res.status(500).send('Error generating terminal');
  }
});

// Modern theme terminal
router.get('/modern', (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'modern';
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating modern terminal:', error);
    res.status(500).send('Error generating modern terminal');
  }
});

// Matrix theme terminal
router.get('/matrix', (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'matrix';
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating matrix terminal:', error);
    res.status(500).send('Error generating matrix terminal');
  }
});

// Cyberpunk theme terminal
router.get('/cyberpunk', (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'cyberpunk';
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating cyberpunk terminal:', error);
    res.status(500).send('Error generating cyberpunk terminal');
  }
});

// Retro theme terminal
router.get('/retro', (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'retro';
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating retro terminal:', error);
    res.status(500).send('Error generating retro terminal');
  }
});

// Glass theme terminal
router.get('/glass', (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'glass';
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating glass terminal:', error);
    res.status(500).send('Error generating glass terminal');
  }
});

// Neon theme terminal
router.get('/neon', (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'neon';
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating neon terminal:', error);
    res.status(500).send('Error generating neon terminal');
  }
});

// Minimal theme terminal
router.get('/minimal', (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'minimal';
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating minimal terminal:', error);
    res.status(500).send('Error generating minimal terminal');
  }
});

// GitHub Dark theme terminal
router.get('/github-dark', (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'github-dark';
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating github-dark terminal:', error);
    res.status(500).send('Error generating github-dark terminal');
  }
});

// GitHub Light theme terminal
router.get('/github-light', (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'github-light';
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating github-light terminal:', error);
    res.status(500).send('Error generating github-light terminal');
  }
});

// Professional theme terminal
router.get('/professional', (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'professional';
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating professional terminal:', error);
    res.status(500).send('Error generating professional terminal');
  }
});

// Ocean theme terminal
router.get('/ocean', (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'ocean';
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating ocean terminal:', error);
    res.status(500).send('Error generating ocean terminal');
  }
});

// Sunset theme terminal
router.get('/sunset', (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'sunset';
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating sunset terminal:', error);
    res.status(500).send('Error generating sunset terminal');
  }
});

// Monochrome theme terminal
router.get('/monochrome', (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'monochrome';
    const svg = TerminalGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating monochrome terminal:', error);
    res.status(500).send('Error generating monochrome terminal');
  }
});

// Endpoint to get available themes
router.get('/themes', (req, res) => {
  try {
    const themes = [
      {
        name: 'modern',
        description: 'Clean modern terminal with macOS-style design and catppuccin colors',
        features: ['Window controls', 'Subtle shadows', 'Modern typography', 'Dark theme', 'Professional styling'],
        category: 'Modern'
      },
      {
        name: 'glass',
        description: 'Modern glassmorphism effect with transparency and blur',
        features: ['Glass effect', 'Backdrop blur', 'Transparency', 'Modern styling', 'Elegant design'],
        category: 'Modern'
      },
      {
        name: 'minimal',
        description: 'Clean minimal light theme for professional documentation',
        features: ['Light background', 'Minimal styling', 'Clean typography', 'Professional look'],
        category: 'Modern'
      },
      {
        name: 'github-dark',
        description: 'GitHub dark mode compatible terminal with primer colors',
        features: ['GitHub dark theme', 'Primer colors', 'Professional styling', 'GitHub README compatible'],
        category: 'GitHub'
      },
      {
        name: 'github-light',
        description: 'GitHub light mode compatible terminal with primer colors',
        features: ['GitHub light theme', 'Primer colors', 'Clean styling', 'GitHub README compatible'],
        category: 'GitHub'
      },
      {
        name: 'matrix',
        description: 'Matrix-inspired terminal with green text on black background',
        features: ['Green glowing text', 'Matrix aesthetic', 'Bold monospace font', 'Cyberpunk feel'],
        category: 'Cyberpunk'
      },
      {
        name: 'cyberpunk',
        description: 'Futuristic cyberpunk terminal with neon pink/cyan effects',
        features: ['Neon glow effects', 'Glitch animations', 'Pink/cyan colors', 'Animated borders'],
        category: 'Cyberpunk'
      },
      {
        name: 'neon',
        description: 'Intense neon glow terminal with vibrant multi-color effects',
        features: ['Multi-color neon', 'Intense glows', 'Cyberpunk styling', 'Rainbow effects'],
        category: 'Cyberpunk'
      },
      {
        name: 'retro',
        description: 'Vintage terminal with amber text and classic styling',
        features: ['Retro styling', 'Amber text', 'Classic terminal feel', 'Vintage aesthetic'],
        category: 'Retro'
      },
      {
        name: 'professional',
        description: 'Corporate-grade terminal with enhanced typography and depth',
        features: ['Corporate styling', 'Enhanced shadows', 'Professional gradients', 'Business-ready'],
        category: 'Professional'
      },
      {
        name: 'ocean',
        description: 'Deep blue ocean-inspired terminal with wave effects',
        features: ['Ocean gradients', 'Wave animations', 'Blue color scheme', 'Aquatic feel'],
        category: 'Nature'
      },
      {
        name: 'sunset',
        description: 'Warm sunset terminal with golden hour gradients',
        features: ['Warm colors', 'Sunset gradients', 'Particle effects', 'Golden glow'],
        category: 'Nature'
      },
      {
        name: 'monochrome',
        description: 'High contrast black and white terminal with minimalist design',
        features: ['High contrast', 'Black and white', 'Minimalist', 'Clean typography'],
        category: 'Minimalist'
      }
    ];

    res.json({
      themes,
      totalThemes: themes.length,
      defaultTheme: 'modern',
      categories: {
        'Modern': themes.filter(t => t.category === 'Modern').length,
        'GitHub': themes.filter(t => t.category === 'GitHub').length,
        'Cyberpunk': themes.filter(t => t.category === 'Cyberpunk').length,
        'Retro': themes.filter(t => t.category === 'Retro').length,
        'Professional': themes.filter(t => t.category === 'Professional').length,
        'Nature': themes.filter(t => t.category === 'Nature').length,
        'Minimalist': themes.filter(t => t.category === 'Minimalist').length
      }
    });
  } catch (error) {
    console.error('Error fetching themes:', error);
    res.status(500).send('Error fetching themes');
  }
});

// Endpoint to get example commands
router.get('/examples', (req, res) => {
  try {
    const examples = {
      development: [
        'git clone https://github.com/user/awesome-project.git',
        'cd awesome-project',
        'npm install',
        'npm run dev',
        'git add .',
        'git commit -m "feat: add new feature"',
        'git push origin main'
      ],
      'package-manager': [
        'npm install --save react next typescript',
        'yarn add @types/node @types/react',
        'pnpm install --frozen-lockfile',
        'npm run build',
        'yarn dev',
        'npm audit fix'
      ],
      docker: [
        'docker build -t myapp:latest .',
        'docker run -p 3000:3000 -p 5432:5432 myapp',
        'docker ps',
        'docker logs myapp',
        'docker exec -it myapp /bin/bash'
      ],
      deployment: [
        'vercel build',
        'vercel deploy --prod',
        'netlify build',
        'netlify deploy --prod',
        'heroku create myapp',
        'git push heroku main'
      ],
      testing: [
        'npm test -- --coverage --watchAll=false',
        'jest --watch --verbose',
        'cypress run --spec "cypress/integration/**/*"',
        'npm run test:e2e',
        'npm run lint',
        'npm run type-check'
      ],
      system: [
        'ls -la /var/log',
        'cd /home/user/projects',
        'mkdir -p new-project/src/components',
        'touch README.md .gitignore .env',
        'cat package.json | jq ".dependencies"',
        'find . -name "*.js" -type f',
        'grep -r "TODO" src/',
        'chmod +x build.sh'
      ],
      git: [
        'git status',
        'git branch -a',
        'git checkout -b feature/new-feature',
        'git add src/',
        'git commit -m "feat: implement user authentication"',
        'git push -u origin feature/new-feature',
        'git merge main',
        'git tag v1.0.0'
      ],
      'build-tools': [
        'npm run build',
        'npm run analyze',
        'webpack --mode production --progress',
        'vite build --mode production',
        'next build',
        'npm run export'
      ]
    };

    res.json({
      examples,
      totalCategories: Object.keys(examples).length,
      usage: 'Use these example command sets by passing them as JSON array to the commands parameter',
      note: 'Commands are automatically simulated with realistic outputs based on command type detection'
    });
  } catch (error) {
    console.error('Error fetching examples:', error);
    res.status(500).send('Error fetching examples');
  }
});

export default router;
