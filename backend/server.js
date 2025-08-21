import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import compression from 'compression';
import hometemplate from './utils/hometemplate.js';
import apiRoutes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Trust proxy in production (required for Render, Vercel, Railway, etc.)
if (NODE_ENV === 'production') {
  app.set('trust proxy', 1); // Trust first proxy
}

// Security middleware - UPDATED to fix CORS issues
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  // IMPORTANT: Configure these headers to allow cross-origin requests
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginOpenerPolicy: false,
  // Remove X-Frame-Options restriction for API endpoints
  frameguard: false
}));

// Compression middleware
app.use(compression());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: NODE_ENV === 'development' ? 1000 : 100, // Limit each IP to 100 requests per windowMs in production
  message: {
    error: 'Too many requests from this IP, please try again later.',
    resetTime: new Date(Date.now() + 15 * 60 * 1000)
  },
  standardHeaders: true,
  legacyHeaders: false,
  // Skip rate limiting for health checks
  skip: (req) => req.path === '/health' || req.path === '/api/health',
  // Custom key generator for better production support
  keyGenerator: (req) => {
    // In production, use the real IP from proxy headers
    // In development, use the connection IP
    return NODE_ENV === 'production' 
      ? req.ip || req.connection.remoteAddress 
      : req.connection.remoteAddress;
  }
});

app.use('/api', limiter);

// CORS configuration - UPDATED
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3000/*',
      'http://localhost:4000/*',
      'http://127.0.0.1:3000', // Add this for local development
      'https://waveify.onrender.com',
      'https://waveify.up.railway.app',
      'https://waveify.vercel.app',
      'https://api.github.com'
    ];
    
    if (NODE_ENV === 'development' || allowedOrigins.some(allowed => 
      typeof allowed === 'string' ? allowed === origin : allowed.test(origin)
    )) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: false,
  methods: ['GET', 'HEAD', 'OPTIONS', 'POST'], // Added POST if needed
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Cache-Control'], // Added Cache-Control
  optionsSuccessStatus: 200,
  // Explicitly handle preflight requests
  preflightContinue: false
}));

// Additional CORS headers middleware for API routes
app.use('/api', (req, res, next) => {
  // Set additional headers that might be needed
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Cache-Control');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  next();
});

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const ip = NODE_ENV === 'production' ? (req.ip || req.connection.remoteAddress) : req.connection.remoteAddress;
  const forwardedFor = req.headers['x-forwarded-for'];
  
  if (NODE_ENV === 'production') {
    console.log(`[${timestamp}] ${req.method} ${req.path} - IP: ${ip} ${forwardedFor ? `(forwarded: ${forwardedFor})` : ''} - Origin: ${req.headers.origin || 'none'}`);
  } else {
    console.log(`[${timestamp}] ${req.method} ${req.path} - IP: ${ip} - Origin: ${req.headers.origin || 'none'}`);
  }
  next();
});

// Home page
app.get('/', (req, res) => {
  try {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(hometemplate());
  } catch (error) {
    console.error('Error serving home page:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API routes
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Waveify API',
    version: '1.0.0',
    environment: NODE_ENV,
    uptime: process.uptime()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    message: 'The requested endpoint does not exist.',
    availableEndpoints: {
      wave: '/api/wave',
      typing: '/api/typing',
      loader: '/api/loader',
      terminal: '/api/terminal',
      health: '/api/health'
    }
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Global error handler:', error);
  
  if (error.message === 'Not allowed by CORS') {
    return res.status(403).json({
      error: 'CORS Error',
      message: 'This origin is not allowed to access the API',
      origin: req.headers.origin
    });
  }
  
  res.status(500).json({
    error: 'Internal Server Error',
    message: NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  process.exit(0);
});

const server = app.listen(PORT, () => {
  console.log(`🌊 Waveify API Server running on port ${PORT}`);
  console.log(`📖 Environment: ${NODE_ENV}`);
  console.log(`🔗 Server URL: http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api`);
});

export default app;