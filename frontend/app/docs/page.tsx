import { DocsLayout } from "@/components/docs/docs-layout"
import { DocsContent } from "@/components/docs/docs-content"

export const metadata = {
  title: "Documentation - Waveify",
  description: "Complete guide to using Waveify API for generating animated SVG banners",
}

export default function DocsPage() {
  return (
    <DocsLayout>
      <DocsContent />
    </DocsLayout>
  )
}
