import express from 'express';
import { BadgeGenerator } from '../generators/BadgeGenerator.js';

const router = express.Router();

// Badge generator endpoint
router.get('/', (req, res) => {
  try {
    const options = {
      label: req.query.label || 'Build',
      message: req.query.message || 'Passing',
      color: req.query.color || 'green',
      labelColor: req.query.labelColor || '#555',
      style: req.query.style || 'modern', // modern, gradient, neon, glass, pill, outline, shadow, animated, classic, large
      logo: req.query.logo || null,
      logoWidth: parseInt(req.query.logoWidth) || 14,
      animated: req.query.animated === 'true',
      borderRadius: parseInt(req.query.borderRadius) || 6,
      fontSize: parseInt(req.query.fontSize) || 11,
      fontWeight: req.query.fontWeight || 'normal'
    };

    const svg = BadgeGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating badge:', error);
    res.status(500).send('Error generating badge');
  }
});

// Endpoint to get available styles
router.get('/styles', (req, res) => {
  try {
    const styles = [
      {
        name: 'modern',
        description: 'Clean modern design with subtle shadows and gradients',
        features: ['Rounded corners', 'Subtle shadow', 'Modern fonts']
      },
      {
        name: 'gradient',
        description: 'Smooth gradient background with enhanced visual appeal',
        features: ['Gradient background', 'Optional animation', 'Modern fonts']
      },
      {
        name: 'neon',
        description: 'Cyberpunk-style neon glow effect on dark background',
        features: ['Neon glow', 'Dark theme', 'Monospace font', 'Optional pulse animation']
      },
      {
        name: 'glass',
        description: 'Glassmorphism effect with transparency and blur',
        features: ['Glass effect', 'Transparency', 'Subtle blur', 'Modern appearance']
      },
      {
        name: 'pill',
        description: 'Fully rounded pill-shaped badges',
        features: ['Pill shape', 'Rounded ends', 'Clean design']
      },
      {
        name: 'outline',
        description: 'Minimalist outline style with transparent background',
        features: ['Outline only', 'Transparent background', 'Colored border']
      },
      {
        name: 'shadow',
        description: 'Enhanced shadow effect for depth and dimension',
        features: ['Drop shadow', 'Enhanced depth', 'Premium look']
      },
      {
        name: 'animated',
        description: 'Animated gradient with shimmer effect',
        features: ['Animated gradient', 'Shimmer effect', 'Eye-catching']
      },
      {
        name: 'classic',
        description: 'Traditional badge style with classic fonts',
        features: ['Classic design', 'Traditional fonts', 'Timeless look']
      },
      {
        name: 'large',
        description: 'Larger size with enhanced text and logo support',
        features: ['Larger size', 'Enhanced readability', 'Better logo display']
      }
    ];

    res.json({
      styles,
      totalStyles: styles.length,
      defaultStyle: 'modern'
    });
  } catch (error) {
    console.error('Error fetching styles:', error);
    res.status(500).send('Error fetching styles');
  }
});

// Endpoint to get available colors
router.get('/colors', (req, res) => {
  try {
    const colors = {
      status: ['green', 'red', 'blue', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'gray', 'black', 'white'],
      semantic: ['success', 'error', 'warning', 'info'],
      brand: ['github', 'twitter', 'linkedin', 'youtube', 'discord'],
      classic: ['brightgreen', 'lightgrey', 'important', 'critical', 'informational', 'inactive']
    };

    res.json({
      colors,
      defaultColor: 'green',
      customColors: 'You can also use any hex color code (e.g., #FF5733)'
    });
  } catch (error) {
    console.error('Error fetching colors:', error);
    res.status(500).send('Error fetching colors');
  }
});

export default router;
