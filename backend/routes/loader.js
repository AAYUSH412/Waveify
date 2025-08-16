import express from 'express';
import { LoaderGenerator } from '../generators/LoaderGenerator.js';

const router = express.Router();

// Enhanced loading animation endpoint with comprehensive options
router.get('/', (req, res) => {
  try {
    const options = {
      // Basic options
      type: req.query.type || 'dots',
      color: req.query.color || 'blue',
      speed: parseFloat(req.query.speed) || 1.5,
      size: parseInt(req.query.size) || 40,
      width: parseInt(req.query.width) || 100,
      height: parseInt(req.query.height) || 40,
      backgroundColor: req.query.backgroundColor || 'transparent',
      
      // Enhanced options
      easing: req.query.easing || 'easeInOut',
      glowEffect: req.query.glow === 'true' || req.query.glowEffect === 'true',
      shadowIntensity: parseFloat(req.query.shadowIntensity) || 0.3,
      theme: req.query.theme || 'modern',
      
      // Accessibility options
      reducedMotion: req.query.reducedMotion === 'true',
      highContrast: req.query.highContrast === 'true',
      respectSystemPreferences: req.query.respectSystemPreferences !== 'false',
      ariaLabel: req.query.ariaLabel || null
    };

    const svg = LoaderGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.send(svg);
  } catch (error) {
    console.error('Error generating loader:', error);
    
    // Enhanced error response with fallback SVG
    const errorSvg = LoaderGenerator.generateErrorFallback({
      width: parseInt(req.query.width) || 100,
      height: parseInt(req.query.height) || 40
    });
    
    res.status(500);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(errorSvg);
  }
});

// Health check endpoint for monitoring
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'loader-generator',
    timestamp: new Date().toISOString(),
    supportedTypes: [
      'dots', 'spinner', 'bars', 'pulse', 'wave', 'gradient', 'orbit', 'ripple', 'triangles',
      'neon-pulse', 'skeleton', 'dna-helix', 'matrix-rain', 'liquid',
      'coming-soon', 'building', 'work-in-progress', 'loading-text'
    ]
  });
});

export default router;
