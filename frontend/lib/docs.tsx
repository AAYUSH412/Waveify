import { DocsIntroduction } from "@/components/docs/docs-introduction"
import { DocsQuickStart } from "@/components/docs/docs-quick-start"
import { DocsApiOverview } from "@/components/docs/docs-api-overview"
import { DocsWaveApi } from "@/components/docs/docs-wave-api"
import { DocsTypingApi } from "@/components/docs/docs-typing-api"
import { DocsTerminalApi } from "@/components/docs/docs-terminal-api"
import { DocsLoaderApi } from "@/components/docs/docs-loader-api"
import { DocsExamples } from "@/components/docs/docs-examples"
import { DocsBestPractices } from "@/components/docs/docs-best-practices"
import { DocsTroubleshooting } from "@/components/docs/docs-troubleshooting"

export interface DocContent {
  title: string
  description: string
  content: React.ReactNode
}

// Define the documentation structure
export const docsConfig = {
  navigation: [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "/docs/introduction", slug: "introduction" },
        { title: "Quick Start", href: "/docs/quick-start", slug: "quick-start" },
        { title: "API Overview", href: "/docs/api-overview", slug: "api-overview" },
      ]
    },
    {
      title: "Wave API",
      items: [
        { title: "Wave API", href: "/docs/wave-api", slug: "wave-api" },
      ]
    },
    {
      title: "Typing API", 
      items: [
        { title: "Typing API", href: "/docs/typing-api", slug: "typing-api" },
      ]
    },
    {
      title: "Terminal API",
      items: [
        { title: "Terminal API", href: "/docs/terminal-api", slug: "terminal-api" },
      ]
    },
    {
      title: "Loader API",
      items: [
        { title: "Loader API", href: "/docs/loader-api", slug: "loader-api" },
      ]
    },
    {
      title: "Resources",
      items: [
        { title: "Examples", href: "/docs/examples", slug: "examples" },
        { title: "Best Practices", href: "/docs/best-practices", slug: "best-practices" },
        { title: "Troubleshooting", href: "/docs/troubleshooting", slug: "troubleshooting" },
      ]
    },
    // Future sections can be easily added here
    {
      title: "Advanced",
      items: [
        { title: "Webhooks", href: "/docs/advanced/webhooks", slug: "advanced/webhooks" },
        { title: "Rate Limiting", href: "/docs/advanced/rate-limiting", slug: "advanced/rate-limiting" },
      ]
    },
    {
      title: "Integrations",
      items: [
        { title: "GitHub Actions", href: "/docs/integrations/github-actions", slug: "integrations/github-actions" },
        { title: "Vercel", href: "/docs/integrations/vercel", slug: "integrations/vercel" },
      ]
    }
  ]
}

// Content mapping for each documentation page
const contentMap: Record<string, DocContent> = {
  "introduction": {
    title: "Introduction",
    description: "Learn about Waveify and its capabilities",
    content: <DocsIntroduction />
  },
  "quick-start": {
    title: "Quick Start",
    description: "Get started with Waveify in minutes",
    content: <DocsQuickStart />
  },
  "api-overview": {
    title: "API Overview",
    description: "Overview of Waveify API endpoints and structure",
    content: <DocsApiOverview />
  },
  "wave-api": {
    title: "Wave API",
    description: "Generate beautiful animated wave patterns",
    content: <DocsWaveApi />
  },
  "typing-api": {
    title: "Typing API", 
    description: "Create dynamic typing animations",
    content: <DocsTypingApi />
  },
  "terminal-api": {
    title: "Terminal API",
    description: "Generate terminal-style animated graphics",
    content: <DocsTerminalApi />
  },
  "loader-api": {
    title: "Loader API",
    description: "Create animated loading indicators",
    content: <DocsLoaderApi />
  },
  "examples": {
    title: "Examples",
    description: "Real-world examples and use cases",
    content: <DocsExamples />
  },
  "best-practices": {
    title: "Best Practices",
    description: "Tips and best practices for using Waveify",
    content: <DocsBestPractices />
  },
  "troubleshooting": {
    title: "Troubleshooting",
    description: "Common issues and solutions", 
    content: <DocsTroubleshooting />
  },
  // Placeholder content for future pages
  "advanced/webhooks": {
    title: "Webhooks",
    description: "Setting up webhooks for real-time updates",
    content: <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>Webhooks</h1>
      <p>Documentation for webhooks coming soon...</p>
    </div>
  },
  "advanced/rate-limiting": {
    title: "Rate Limiting", 
    description: "Understanding API rate limits and best practices",
    content: <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>Rate Limiting</h1>
      <p>Documentation for rate limiting coming soon...</p>
    </div>
  },
  "integrations/github-actions": {
    title: "GitHub Actions Integration",
    description: "Using Waveify with GitHub Actions workflows",
    content: <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>GitHub Actions Integration</h1>
      <p>Documentation for GitHub Actions integration coming soon...</p>
    </div>
  },
  "integrations/vercel": {
    title: "Vercel Integration",
    description: "Deploying and using Waveify with Vercel",
    content: <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>Vercel Integration</h1>
      <p>Documentation for Vercel integration coming soon...</p>
    </div>
  }
}

export async function getDocContent(slug: string): Promise<DocContent | null> {
  return contentMap[slug] || null
}

export function getAllDocSlugs(): string[] {
  return Object.keys(contentMap)
}
