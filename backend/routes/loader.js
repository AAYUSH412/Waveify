import express from 'express';
import { LoaderGenerator } from '../generators/LoaderGenerator.js';

const router = express.Router();

// Loading animation endpoint
router.get('/', (req, res) => {
  try {
    const options = {
      type: req.query.type || 'dots', // dots, spinner, bars, pulse, wave, gradient, orbit, coming-soon, building, work-in-progress, loading-text, neon-pulse, triangles, ripple
      color: req.query.color || 'blue',
      speed: parseFloat(req.query.speed) || 1.5,
      size: parseInt(req.query.size) || 40,
      width: parseInt(req.query.width) || 100,
      height: parseInt(req.query.height) || 40,
      backgroundColor: req.query.backgroundColor || 'transparent'
    };

    const svg = LoaderGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating loader:', error);
    res.status(500).send('Error generating loader');
  }
});

export default router;
