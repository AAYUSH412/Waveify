import express from 'express';
import { StatsGenerator } from '../generators/StatsGenerator.js';

const router = express.Router();

// Helper function to parse options from query parameters
const parseOptions = (req) => {
  const metrics = req.query.metrics ? 
    (typeof req.query.metrics === 'string' ? req.query.metrics.split(',') : req.query.metrics) :
    ['commits', 'prs', 'issues', 'stars'];

  return {
    username: req.query.username,
    metrics: metrics.map(m => m.trim()),
    theme: req.query.theme || 'dark',
    animation: req.query.animation || 'countUp',
    width: parseInt(req.query.width) || 920,
    height: parseInt(req.query.height) || 650,
    showAvatar: req.query.showAvatar !== 'false',
    gradientType: req.query.gradientType || 'ocean'
  };
};

// Default stats endpoint
router.get('/', async (req, res) => {
  try {
    const options = parseOptions(req);
    
    if (!options.username) {
      return res.status(400).json({
        error: 'Username parameter is required',
        usage: 'GET /api/stats?username=your-github-username'
      });
    }

    const svg = await StatsGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=1800'); // 30 minutes cache
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating stats:', error);
    
    // Return error SVG instead of plain text
    const errorSvg = StatsGenerator.generateErrorSVG(error.message, {
      width: parseInt(req.query.width) || 920,
      height: parseInt(req.query.height) || 650
    });
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(400).send(errorSvg);
  }
});

// Dark theme stats
router.get('/dark', async (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'dark';
    
    if (!options.username) {
      return res.status(400).json({
        error: 'Username parameter is required',
        usage: 'GET /api/stats/dark?username=your-github-username'
      });
    }

    const svg = await StatsGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=1800');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(svg);
  } catch (error) {
    console.error('Error generating dark stats:', error);
    const errorSvg = StatsGenerator.generateErrorSVG(error.message, {
      width: parseInt(req.query.width) || 920,
      height: parseInt(req.query.height) || 650
    });
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(400).send(errorSvg);
  }
});

// Light theme stats
router.get('/light', async (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'light';
    
    if (!options.username) {
      return res.status(400).json({
        error: 'Username parameter is required',
        usage: 'GET /api/stats/light?username=your-github-username'
      });
    }

    const svg = await StatsGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=1800');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(svg);
  } catch (error) {
    console.error('Error generating light stats:', error);
    const errorSvg = StatsGenerator.generateErrorSVG(error.message, {
      width: parseInt(req.query.width) || 920,
      height: parseInt(req.query.height) || 650
    });
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(400).send(errorSvg);
  }
});

// Auto theme stats (system preference)
router.get('/auto', async (req, res) => {
  try {
    const options = parseOptions(req);
    options.theme = 'auto';
    
    if (!options.username) {
      return res.status(400).json({
        error: 'Username parameter is required',
        usage: 'GET /api/stats/auto?username=your-github-username'
      });
    }

    const svg = await StatsGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=1800');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(svg);
  } catch (error) {
    console.error('Error generating auto stats:', error);
    const errorSvg = StatsGenerator.generateErrorSVG(error.message, {
      width: parseInt(req.query.width) || 920,
      height: parseInt(req.query.height) || 650
    });
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(400).send(errorSvg);
  }
});

// Get available metrics
router.get('/metrics', (req, res) => {
  try {
    const availableMetrics = {
      metrics: [
        {
          key: 'commits',
          name: 'Total Commits',
          description: 'Estimated total commits across all repositories',
          icon: '💻'
        },
        {
          key: 'prs',
          name: 'Pull Requests',
          description: 'Estimated pull requests created',
          icon: '🔄'
        },
        {
          key: 'issues',
          name: 'Issues',
          description: 'Estimated issues opened',
          icon: '⚡'
        },
        {
          key: 'stars',
          name: 'Stars Earned',
          description: 'Total stars received on repositories',
          icon: '⭐'
        },
        {
          key: 'repos',
          name: 'Repositories',
          description: 'Total public repositories',
          icon: '📁'
        },
        {
          key: 'followers',
          name: 'Followers',
          description: 'GitHub followers count',
          icon: '👥'
        }
      ],
      themes: ['dark', 'light', 'auto'],
      animations: ['countUp', 'slideIn', 'pulse'],
      usage: 'Select up to 4 metrics to display in your stats card'
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(availableMetrics);
  } catch (error) {
    console.error('Error getting metrics:', error);
    res.status(500).json({ error: 'Error retrieving metrics' });
  }
});

// Get usage examples
router.get('/examples', (req, res) => {
  try {
    const examples = {
      basic: {
        description: 'Basic stats with default metrics',
        url: '/api/stats?username=octocat',
        markdown: '![GitHub Stats](https://waveify.onrender.com/api/stats?username=octocat)'
      },
      custom_metrics: {
        description: 'Custom metrics selection',
        url: '/api/stats?username=octocat&metrics=stars,repos,followers,commits',
        markdown: '![GitHub Stats](https://waveify.onrender.com/api/stats?username=octocat&metrics=stars,repos,followers,commits)'
      },
      light_theme: {
        description: 'Light theme for light backgrounds',
        url: '/api/stats/light?username=octocat&animation=slideIn',
        markdown: '![GitHub Stats](https://waveify.onrender.com/api/stats/light?username=octocat&animation=slideIn)'
      },
      custom_size: {
        description: 'Custom dimensions',
        url: '/api/stats?username=octocat&width=900&height=500',
        markdown: '![GitHub Stats](https://waveify.onrender.com/api/stats?username=octocat&width=900&height=500)'
      },
      no_avatar: {
        description: 'Hide avatar for compact display',
        url: '/api/stats?username=octocat&showAvatar=false&width=600',
        markdown: '![GitHub Stats](https://waveify.onrender.com/api/stats?username=octocat&showAvatar=false&width=600)'
      }
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(examples);
  } catch (error) {
    console.error('Error getting examples:', error);
    res.status(500).json({ error: 'Error retrieving examples' });
  }
});

export default router;
