import express from 'express';
import waveRoutes from './wave.js';
import typingRoutes from './typing.js';
import badgeRoutes from './badge.js';
import loaderRoutes from './loader.js';
import terminalRoutes from './terminal.js';
import healthRoutes from './health.js';

const router = express.Router();

// Mount all route modules
router.use('/wave', waveRoutes);
router.use('/typing', typingRoutes);
router.use('/badge', badgeRoutes);
router.use('/loader', loaderRoutes);
router.use('/terminal', terminalRoutes);
router.use('/health', healthRoutes);

export default router;
