import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Waveify - Animate Your GitHub README',
    short_name: 'Waveify',
    description: 'Create beautiful animated SVG banners for your GitHub README',
    start_url: '/',
    display: 'standalone',
    background_color: '#1e1b4b',
    theme_color: '#3b82f6',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon/favicon.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon/favicon.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['developer', 'productivity', 'utilities'],
    screenshots: [
      {
        src: '/placeholder.svg',
        sizes: '1280x720',
        type: 'image/svg+xml',
        form_factor: 'wide',
      },
      {
        src: '/placeholder.svg',
        sizes: '750x1334',
        type: 'image/svg+xml',
        form_factor: 'narrow',
      },
    ],
  }
}
