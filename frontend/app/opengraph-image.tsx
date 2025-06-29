import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Waveify - Animate Your GitHub README'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1e1b4b',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #1e40af 100%)',
        }}
      >
        {/* Wave animation background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: 120,
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #f59e0b)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginBottom: 24,
            }}
          >
            Waveify
          </div>
          
          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              color: '#e2e8f0',
              marginBottom: 16,
              maxWidth: 800,
              lineHeight: 1.2,
            }}
          >
            Animate Your GitHub README
          </div>
          
          {/* Description */}
          <div
            style={{
              fontSize: 20,
              color: '#94a3b8',
              maxWidth: 600,
              lineHeight: 1.3,
            }}
          >
            Create beautiful animated SVG banners, typing effects, badges, terminals, and loaders
          </div>
        </div>
        
        {/* Decorative wave */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 100,
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #f59e0b, #3b82f6)',
            opacity: 0.6,
            clipPath: 'polygon(0 80%, 25% 60%, 50% 80%, 75% 60%, 100% 80%, 100% 100%, 0 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
