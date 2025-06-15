import express from 'express';

const router = express.Router();

// Health check endpoint
router.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'Waveify API',
    version: '1.0.0'
  });
});

export default router;
