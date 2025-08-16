import { DocsLayout } from "@/components/docs/docs-layout"
import { getDocContent, getAllDocSlugs } from "@/lib/docs"
import { notFound } from "next/navigation"

interface DocsPageProps {
  params: Promise<{
    slug?: string[]
  }>
}

export async function generateMetadata({ params }: DocsPageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug?.join('/') || 'introduction'
  const doc = await getDocContent(slug)
  
  if (!doc) {
    return {
      title: "Documentation - Waveify",
      description: "Complete guide to using Waveify API"
    }
  }

  return {
    title: `${doc.title} - Waveify Documentation`,
    description: doc.description,
  }
}

export default async function DocsPage({ params }: DocsPageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug?.join('/') || 'introduction'
  
  // Redirect if accessing /docs directly
  if (!resolvedParams.slug || resolvedParams.slug.length === 0) {
    const { redirect } = await import('next/navigation')
    redirect('/docs/introduction')
  }
  
  const doc = await getDocContent(slug)

  if (!doc) {
    notFound()
  }

  return (
    <DocsLayout currentPath={slug}>
      {/* Hero Section */}
      <div className="mb-12 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Documentation</span>
            <span>/</span>
            <span className="text-foreground font-medium">{doc.title}</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-gradient bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text pb-2">
            {doc.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {doc.description}
          </p>
        </div>
        
        {/* Quick Actions */}
        <div className="flex items-center gap-4 pt-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Last updated: Today</span>
          </div>
          <div className="text-sm text-muted-foreground">•</div>
          <span className="text-sm text-muted-foreground">5 min read</span>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none prose-lg w-full min-w-0">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-4 sm:p-6 lg:p-8 shadow-sm w-full min-w-0 overflow-hidden">
          <div className="w-full min-w-0 overflow-hidden">
            {doc.content}
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-16 pt-8 border-t border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">Previous</p>
            <div className="p-4 rounded-lg border border-border/50 hover:bg-accent/50 transition-colors cursor-pointer">
              <p className="font-medium text-sm">Getting Started</p>
              <p className="text-xs text-muted-foreground">Introduction to Waveify</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">Next</p>
            <div className="p-4 rounded-lg border border-border/50 hover:bg-accent/50 transition-colors cursor-pointer">
              <p className="font-medium text-sm">API Overview</p>
              <p className="text-xs text-muted-foreground">Understanding the API structure</p>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}

// Generate static paths for all documentation pages
export async function generateStaticParams() {
  const slugs = getAllDocSlugs()
  
  return slugs.map((slug: string) => ({
    slug: slug.split('/')
  }))
}
