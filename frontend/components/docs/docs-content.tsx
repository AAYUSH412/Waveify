"use client"

import { motion } from "framer-motion"
import { DocsHero } from "./docs-hero"
import { DocsIntroduction } from "./docs-introduction"
import { DocsQuickStart } from "./docs-quick-start"
import { DocsApiOverview } from "./docs-api-overview"
import { DocsWaveApi } from "./docs-wave-api"
import { DocsTypingApi } from "./docs-typing-api"
import { DocsBadgeApi } from "./docs-badge-api"
import { DocsTerminalApi } from "./docs-terminal-api"
import { DocsLoaderApi } from "./docs-loader-api"
import { DocsExamples } from "./docs-examples"
import { DocsBestPractices } from "./docs-best-practices"
import { DocsTroubleshooting } from "./docs-troubleshooting"
import { ScrollArea } from "@/components/ui/scroll-area"

export function DocsContent() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <DocsHero />
          <DocsIntroduction />
          <DocsQuickStart />
          <DocsApiOverview />
          <DocsWaveApi />
          <DocsTypingApi />
          <DocsBadgeApi />
          <DocsTerminalApi />
          <DocsLoaderApi />
          <DocsExamples />
          <DocsBestPractices />
          <DocsTroubleshooting />
        </motion.div>
      </div>
    </ScrollArea>
  )
}
