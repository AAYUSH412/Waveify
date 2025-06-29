# Waveify Frontend

This is the frontend application for Waveify, built with Next.js 15 and deployed on Vercel.

## Deployment

This application is configured for seamless deployment on Vercel.

### Environment Variables

Make sure to set the following environment variables in your Vercel dashboard:

```
NEXT_PUBLIC_API_URL=https://waveify.onrender.com
NEXT_PUBLIC_ALLOWED_ORIGINS=https://waveify.vercel.app,https://waveify.com
NEXT_PUBLIC_DEV_MODE=false
NEXT_PUBLIC_GITHUB_ALLOWED=true
```

### Build Command

```bash
npm run build
```

### Start Command

```bash
npm start
```

## Features

- Server-side rendering with Next.js 15
- Responsive design with Tailwind CSS
- Dark/Light theme support
- PWA capabilities with manifest.json
- SEO optimized with proper metadata
- CORS configured for API integration

## File Structure

- `app/` - Next.js app directory with pages and components
- `components/` - Reusable React components
- `lib/` - Utility functions and API client
- `public/` - Static assets
- `vercel.json` - Vercel deployment configuration
