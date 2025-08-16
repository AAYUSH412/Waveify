# 🌊 Waveify Backend Deployment Guide

## Deployment Options

### 1. 🚀 Vercel (Recommended for API Routes)

Vercel is perfect for your API since it's stateless and serves SVG content.

**Steps to deploy:**

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Deploy from the backend directory:
```bash
cd backend
vercel
```

3. Follow the prompts:
   - Link to existing project or create new
   - Set build settings (auto-detected from `vercel.json`)
   - Deploy!

**Configuration:**
- ✅ `vercel.json` is already configured
- ✅ Proper routing for all API endpoints
- ✅ CORS headers configured
- ✅ SVG caching enabled (1 hour)
- ✅ Function timeout set to 10 seconds

**Production URL:** `https://your-app.vercel.app`

### 2. 🎨 Render (Great for always-on services)

Render provides persistent containers which is good for APIs that need to stay warm.

**Steps to deploy:**

1. Push your code to GitHub
2. Connect your GitHub repository to Render
3. Use the provided `render.yaml` configuration
4. Deploy!

**Or via Render Dashboard:**
- Create new Web Service
- Connect GitHub repository
- Build Command: `npm install`
- Start Command: `npm start`
- Environment: `NODE_ENV=production`

**Configuration:**
- ✅ `render.yaml` is configured for free tier
- ✅ Health check endpoint configured (`/api/health`)
- ✅ Auto-scaling settings
- ✅ Persistent disk for logs

### 3. 🐳 Docker (Self-hosted or cloud providers)

Perfect for production deployments with full control.

**Local development:**
```bash
# Build and run with Docker Compose
docker-compose up --build

# Access API at http://localhost:4000
```

**Production deployment:**
```bash
# Build the image
docker build -t waveify-api .

# Run the container
docker run -p 4000:4000 --name waveify-api waveify-api

# Or use docker-compose for production
docker-compose --profile production up -d
```

**Features:**
- ✅ Multi-stage optimized build
- ✅ Non-root user for security
- ✅ Health checks configured
- ✅ Nginx reverse proxy (optional)
- ✅ Production-ready with auto-restart

## API Endpoints

Your API includes these endpoints:

- `GET /` - API documentation homepage
- `GET /api/health` - Health check
- `GET /api/wave/*` - Wave animations (sine, square, sawtooth, etc.)
- `GET /api/typing/*` - Typing animations (classic, neon, matrix, etc.)
- `GET /api/loader/*` - Loading animations (dots, spinner, etc.)
- `GET /api/terminal/*` - Terminal animations (matrix, retro, etc.)

## Environment Variables

Set these in your deployment platform:

```env
NODE_ENV=production
PORT=4000  # (Usually auto-set by platform)
```

## Performance & Caching

- SVG responses are cached for 1 hour
- GZIP compression enabled (Nginx)
- Optimized for CDN delivery
- Health checks for uptime monitoring

## CORS Configuration

Your API is configured to accept requests from:
- Any origin (`*`) for public API usage
- All standard HTTP methods
- Proper headers for GitHub README embedding

## 🚀 Quick Deploy Commands

**Vercel:**
```bash
cd backend && vercel --prod
```

**Docker:**
```bash
docker-compose up -d
```

**Manual Node.js:**
```bash
npm install && npm start
```

## 📊 Monitoring

All platforms provide:
- Real-time logs
- Performance metrics
- Error tracking
- Uptime monitoring

Your `/api/health` endpoint helps with monitoring and load balancer health checks.

## 🔒 Security

- CORS properly configured
- Security headers in Nginx
- Non-root Docker user
- Input validation in routes
- Rate limiting ready (add if needed)

---

**Your API is production-ready! 🎉**

Choose your preferred deployment method and your Waveify API will be live in minutes.
