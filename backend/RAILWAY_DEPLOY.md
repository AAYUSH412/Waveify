# 🚂 Railway Deployment Guide for Waveify API

## Prerequisites
1. [Railway account](https://railway.app) (free tier available)
2. GitHub repository with your backend code
3. Railway CLI (optional but recommended)

## Quick Deploy (Web Interface)

### 1. Connect Repository
1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Choose your Waveify repository
5. Select the `backend` folder as the root directory

### 2. Configure Service
Railway will automatically detect your Dockerfile and configure the service.

**Manual Configuration (if needed):**
- **Build Command:** `docker build -f Dockerfile .`
- **Start Command:** Automatically handled by Dockerfile
- **Port:** Railway automatically assigns and provides via `PORT` env var
- **Health Check:** `/api/health` (configured in railway.toml)

### 3. Environment Variables
Set these in Railway dashboard under "Variables":
```bash
NODE_ENV=production
# Railway automatically provides PORT
```

### 4. Custom Domain (Optional)
1. Go to "Settings" → "Domains"
2. Add your custom domain
3. Update DNS records as instructed

## CLI Deploy (Advanced)

### 1. Install Railway CLI
```bash
npm install -g @railway/cli
# or
brew install railway/tap/railway
```

### 2. Login and Deploy
```bash
cd /path/to/your/backend
railway login
railway init
railway up
```

### 3. Set Environment Variables
```bash
railway variables set NODE_ENV=production
```

## Verification

### 1. Check Deployment
Once deployed, test these endpoints:
- `https://your-app.up.railway.app/` - Home page
- `https://your-app.up.railway.app/api/health` - Health check
- `https://your-app.up.railway.app/api/wave` - Wave generator

### 2. Monitor Logs
```bash
railway logs
```

## Optimization Tips

### 1. Resource Limits
Edit `railway.toml` to adjust:
```toml
[resources]
memory = "512Mi"  # Free tier: 512Mi, Pro: up to 8Gi
cpu = "500m"      # Free tier: 500m, Pro: up to 4000m
```

### 2. Auto-scaling
Railway automatically scales based on traffic.

### 3. Custom Domains
For production, add custom domain in Railway dashboard.

## Troubleshooting

### 1. Build Failures
- Check Dockerfile syntax
- Ensure all dependencies in package.json
- Check Railway build logs

### 2. Runtime Issues
- Check Railway application logs
- Verify environment variables
- Test health check endpoint

### 3. Port Issues
- Railway automatically assigns PORT
- Don't hardcode port 4000 in production
- Use `process.env.PORT || 4000`

### 4. Memory/CPU Limits
- Monitor resource usage in Railway dashboard
- Upgrade plan if needed
- Optimize application code

## Railway Features

### 1. Zero-Config Deployments
- Automatic Dockerfile detection
- Automatic environment detection
- Automatic health checks

### 2. Built-in Monitoring
- Real-time logs
- Metrics dashboard
- Performance monitoring

### 3. Easy Scaling
- Automatic scaling based on traffic
- Manual scaling controls
- Resource usage monitoring

### 4. Team Collaboration
- Share projects with team
- Role-based access control
- Environment management

## Cost Considerations

### Free Tier Limits:
- 512MB RAM
- 1GB disk space
- 500 hours/month execution time
- $5/month credit

### Pro Plan Benefits:
- Higher resource limits
- Custom domains
- Priority support
- Advanced monitoring

## Security

Railway handles:
- ✅ HTTPS/SSL certificates
- ✅ DDoS protection
- ✅ Network security
- ✅ Container isolation

Your app handles:
- ✅ CORS configuration (already implemented)
- ✅ Rate limiting (already implemented)
- ✅ Input validation (already implemented)
- ✅ Security headers (Helmet.js already configured)

## Support

- [Railway Documentation](https://docs.railway.app)
- [Railway Discord](https://discord.gg/railway)
- [GitHub Issues](https://github.com/railwayapp/railway-issues)

---

Your Waveify API is now ready for Railway deployment! 🚀
