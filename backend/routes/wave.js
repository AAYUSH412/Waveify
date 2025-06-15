import express from 'express';
import { WaveGenerator } from '../generators/WaveGenerator.js';

const router = express.Router();

// Helper function to parse options from query parameters
const parseOptions = (req) => {
  return {
    color: req.query.color || '#007CF0',
    height: parseInt(req.query.height) || 150,
    speed: parseFloat(req.query.speed) || 4,
    width: parseInt(req.query.width) || 1200,
    amplitude: parseInt(req.query.amplitude) || 20,
    frequency: parseInt(req.query.frequency) || 2,
    pulseWidth: parseFloat(req.query.pulseWidth) || 0.3
  };
};

// Default wave (smooth/curved) API endpoint
router.get('/', (req, res) => {
  try {
    const options = parseOptions(req);
    const svg = WaveGenerator.generate(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating wave:', error);
    res.status(500).send('Error generating wave');
  }
});

// Sine wave API endpoint
router.get('/sine', (req, res) => {
  try {
    const options = parseOptions(req);
    const svg = WaveGenerator.generateSine(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating sine wave:', error);
    res.status(500).send('Error generating sine wave');
  }
});

// Square wave API endpoint
router.get('/square', (req, res) => {
  try {
    const options = parseOptions(req);
    const svg = WaveGenerator.generateSquare(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating square wave:', error);
    res.status(500).send('Error generating square wave');
  }
});

// Sawtooth wave API endpoint
router.get('/sawtooth', (req, res) => {
  try {
    const options = parseOptions(req);
    const svg = WaveGenerator.generateSawtooth(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating sawtooth wave:', error);
    res.status(500).send('Error generating sawtooth wave');
  }
});

// Pulse wave API endpoint
router.get('/pulse', (req, res) => {
  try {
    const options = parseOptions(req);
    const svg = WaveGenerator.generatePulse(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating pulse wave:', error);
    res.status(500).send('Error generating pulse wave');
  }
});

// Triangle wave API endpoint
router.get('/triangle', (req, res) => {
  try {
    const options = parseOptions(req);
    const svg = WaveGenerator.generateTriangle(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating triangle wave:', error);
    res.status(500).send('Error generating triangle wave');
  }
});

// Fluid wave API endpoint
router.get('/fluid', (req, res) => {
  try {
    const options = parseOptions(req);
    const svg = WaveGenerator.generateFluid(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating fluid wave:', error);
    res.status(500).send('Error generating fluid wave');
  }
});

// Glitch wave API endpoint
router.get('/glitch', (req, res) => {
  try {
    const options = parseOptions(req);
    const svg = WaveGenerator.generateGlitch(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating glitch wave:', error);
    res.status(500).send('Error generating glitch wave');
  }
});

// Plasma wave API endpoint
router.get('/plasma', (req, res) => {
  try {
    const options = parseOptions(req);
    const svg = WaveGenerator.generatePlasma(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating plasma wave:', error);
    res.status(500).send('Error generating plasma wave');
  }
});

// Neon wave API endpoint
router.get('/neon', (req, res) => {
  try {
    const options = parseOptions(req);
    const svg = WaveGenerator.generateNeon(options);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(svg);
  } catch (error) {
    console.error('Error generating neon wave:', error);
    res.status(500).send('Error generating neon wave');
  }
});

export default router;
