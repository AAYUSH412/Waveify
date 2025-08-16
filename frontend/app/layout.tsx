import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Waveify - Animate Your GitHub README",
    template: "%s | Waveify"
  },
  description: "Create beautiful animated SVG banners, typing effects, badges, terminals, and loaders for your GitHub README. Free, fast, and customizable.",
  keywords: ["GitHub", "README", "SVG", "animation", "banner", "typing effect", "badge", "terminal", "loader", "developer tools"],
  authors: [{ name: "Waveify Team" }],
  creator: "Waveify",
  publisher: "Waveify",
  generator: 'Next.js',
  applicationName: "Waveify",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://waveify.vercel.app",
    siteName: "Waveify",
    title: "Waveify - Animate Your GitHub README",
    description: "Create beautiful animated SVG banners, typing effects, badges, terminals, and loaders for your GitHub README. Free, fast, and customizable.",
    images: [
      {
        url: "https://waveify.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Waveify - Animate Your GitHub README",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waveify - Animate Your GitHub README",
    description: "Create beautiful animated SVG banners, typing effects, badges, terminals, and loaders for your GitHub README. Free, fast, and customizable.",
    images: ["https://waveify.vercel.app/og-image.png"],
    creator: "@waveify",
  },
  icons: {
    icon: "/favicon/favicon.svg",
    shortcut: "/favicon/favicon.svg",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  metadataBase: new URL("https://waveify.vercel.app"),
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1b4b" }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <meta name="google-site-verification" content="zt9A_STXvRGIDDkpA_-eOL3Wx0dsu2o4UxtnZy9l2o4" />
    </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
