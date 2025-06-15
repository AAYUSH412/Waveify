import express from 'express';
import { TypingGenerator } from '../generators/TypingGenerator.js';

const router = express.Router();

// Helper function to parse options from query parameters
const parseOptions = (req) => {
  return {
    text: req.query.text || 'Welcome to my project',
    speed: parseInt(req.query.speed) || 50,
    color: req.query.color || '#000000',
    backgroundColor: req.query.backgroundColor || 'transparent',
    fontSize: parseInt(req.query.fontSize) || 20,
    fontFamily: req.query.fontFamily || 'monospace',
    width: parseInt(req.query.width) || 400,
    height: parseInt(req.query.height) || 60,
    cursor: req.query.cursor === 'false' ? false : true,
    cursorColor: req.query.cursorColor || '#000000',
    type: req.query.type || 'classic',
    prompt: req.query.prompt || '$ ',
    gradientColors: req.query.gradientColors ? req.query.gradientColors.split(',') : ['#667eea', '#764ba2']
  };
};

// Default typing animation endpoint (classic)
router.get('/', (req, res) => {
  try {
    const options = parseOptions(req);
    const svg = TypingGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating typing animation:', error);
    res.status(500).send('Error generating typing animation');
  }
});

// Classic typing animation
router.get('/classic', (req, res) => {
  try {
    const options = parseOptions(req);
    options.type = 'classic';
    const svg = TypingGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating classic typing animation:', error);
    res.status(500).send('Error generating classic typing animation');
  }
});

// Neon typing animation
router.get('/neon', (req, res) => {
  try {
    const options = parseOptions(req);
    options.type = 'neon';
    options.color = options.color || '#00ffff';
    options.backgroundColor = options.backgroundColor || '#000011';
    const svg = TypingGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating neon typing animation:', error);
    res.status(500).send('Error generating neon typing animation');
  }
});

// Glitch typing animation
router.get('/glitch', (req, res) => {
  try {
    const options = parseOptions(req);
    options.type = 'glitch';
    options.color = options.color || '#ff0040';
    options.backgroundColor = options.backgroundColor || '#000000';
    const svg = TypingGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating glitch typing animation:', error);
    res.status(500).send('Error generating glitch typing animation');
  }
});

// Rainbow typing animation
router.get('/rainbow', (req, res) => {
  try {
    const options = parseOptions(req);
    options.type = 'rainbow';
    const svg = TypingGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating rainbow typing animation:', error);
    res.status(500).send('Error generating rainbow typing animation');
  }
});

// Wave typing animation
router.get('/wave', (req, res) => {
  try {
    const options = parseOptions(req);
    options.type = 'wave';
    options.color = options.color || '#007CF0';
    const svg = TypingGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating wave typing animation:', error);
    res.status(500).send('Error generating wave typing animation');
  }
});

// Matrix typing animation
router.get('/matrix', (req, res) => {
  try {
    const options = parseOptions(req);
    options.type = 'matrix';
    options.color = options.color || '#00ff41';
    options.backgroundColor = options.backgroundColor || '#000000';
    const svg = TypingGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating matrix typing animation:', error);
    res.status(500).send('Error generating matrix typing animation');
  }
});

// Terminal typing animation
router.get('/terminal', (req, res) => {
  try {
    const options = parseOptions(req);
    options.type = 'terminal';
    options.color = options.color || '#00ff00';
    options.backgroundColor = options.backgroundColor || '#000000';
    const svg = TypingGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating terminal typing animation:', error);
    res.status(500).send('Error generating terminal typing animation');
  }
});

// Gradient typing animation
router.get('/gradient', (req, res) => {
  try {
    const options = parseOptions(req);
    options.type = 'gradient';
    const svg = TypingGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating gradient typing animation:', error);
    res.status(500).send('Error generating gradient typing animation');
  }
});

export default router;
