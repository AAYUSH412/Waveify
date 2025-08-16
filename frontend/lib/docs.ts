import React from "react"

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

// Content mapping for each documentation page - using lazy loading
export async function getDocContent(slug: string): Promise<DocContent | null> {
  const { default: dynamic } = await import("next/dynamic")
  
  const contentMap: Record<string, () => Promise<DocContent>> = {
    "introduction": async () => {
      const { DocsIntroduction } = await import("@/components/docs/docs-introduction")
      return {
        title: "Introduction",
        description: "Learn about Waveify and its capabilities",
        content: React.createElement(DocsIntroduction)
      }
    },
    "quick-start": async () => {
      const { DocsQuickStart } = await import("@/components/docs/docs-quick-start")
      return {
        title: "Quick Start",
        description: "Get started with Waveify in minutes",
        content: React.createElement(DocsQuickStart)
      }
    },
    "api-overview": async () => {
      const { DocsApiOverview } = await import("@/components/docs/docs-api-overview")
      return {
        title: "API Overview",
        description: "Overview of Waveify API endpoints and structure",
        content: React.createElement(DocsApiOverview)
      }
    },
    "wave-api": async () => {
      const { DocsWaveApi } = await import("@/components/docs/docs-wave-api")
      return {
        title: "Wave API",
        description: "Generate beautiful animated wave patterns",
        content: React.createElement(DocsWaveApi)
      }
    },
    "typing-api": async () => {
      const { DocsTypingApi } = await import("@/components/docs/docs-typing-api")
      return {
        title: "Typing API", 
        description: "Create dynamic typing animations",
        content: React.createElement(DocsTypingApi)
      }
    },
    "terminal-api": async () => {
      const { DocsTerminalApi } = await import("@/components/docs/docs-terminal-api")
      return {
        title: "Terminal API",
        description: "Generate terminal-style animated graphics",
        content: React.createElement(DocsTerminalApi)
      }
    },
    "loader-api": async () => {
      const { DocsLoaderApi } = await import("@/components/docs/docs-loader-api")
      return {
        title: "Loader API",
        description: "Create animated loading indicators",
        content: React.createElement(DocsLoaderApi)
      }
    },
    "examples": async () => {
      const { DocsExamples } = await import("@/components/docs/docs-examples")
      return {
        title: "Examples",
        description: "Real-world examples and use cases",
        content: React.createElement(DocsExamples)
      }
    },
    "best-practices": async () => {
      const { DocsBestPractices } = await import("@/components/docs/docs-best-practices")
      return {
        title: "Best Practices",
        description: "Tips and best practices for using Waveify",
        content: React.createElement(DocsBestPractices)
      }
    },
    "troubleshooting": async () => {
      const { DocsTroubleshooting } = await import("@/components/docs/docs-troubleshooting")
      return {
        title: "Troubleshooting",
        description: "Common issues and solutions", 
        content: React.createElement(DocsTroubleshooting)
      }
    },
    // Placeholder content for future pages
    "advanced/webhooks": async () => ({
      title: "Webhooks",
      description: "Setting up webhooks for real-time updates",
      content: React.createElement("div", { className: "prose prose-neutral dark:prose-invert max-w-none" },
        React.createElement("h1", null, "Webhooks"),
        React.createElement("p", null, "Documentation for webhooks coming soon...")
      )
    }),
    "advanced/rate-limiting": async () => ({
      title: "Rate Limiting", 
      description: "Understanding API rate limits and best practices",
      content: React.createElement("div", { className: "prose prose-neutral dark:prose-invert max-w-none" },
        React.createElement("h1", null, "Rate Limiting"),
        React.createElement("p", null, "Documentation for rate limiting coming soon...")
      )
    }),
    "integrations/github-actions": async () => ({
      title: "GitHub Actions Integration",
      description: "Using Waveify with GitHub Actions workflows",
      content: React.createElement("div", { className: "prose prose-neutral dark:prose-invert max-w-none" },
        React.createElement("h1", null, "GitHub Actions Integration"),
        React.createElement("p", null, "Documentation for GitHub Actions integration coming soon...")
      )
    }),
    "integrations/vercel": async () => ({
      title: "Vercel Integration",
      description: "Deploying and using Waveify with Vercel",
      content: React.createElement("div", { className: "prose prose-neutral dark:prose-invert max-w-none" },
        React.createElement("h1", null, "Vercel Integration"),
        React.createElement("p", null, "Documentation for Vercel integration coming soon...")
      )
    })
  }

  const contentLoader = contentMap[slug]
  if (!contentLoader) {
    return null
  }

  try {
    return await contentLoader()
  } catch (error) {
    console.error(`Error loading content for slug: ${slug}`, error)
    return null
  }
}

export function getAllDocSlugs(): string[] {
  return [
    "introduction",
    "quick-start", 
    "api-overview",
    "wave-api",
    "typing-api",
    "terminal-api",
    "loader-api",
    "examples",
    "best-practices",
    "troubleshooting",
    "advanced/webhooks",
    "advanced/rate-limiting",
    "integrations/github-actions",
    "integrations/vercel"
  ]
}
