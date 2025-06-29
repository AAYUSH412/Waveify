import { TypingGenerator } from "@/components/generator-components/typing";
import { Metadata } from "next";
import { GeneratorLayout } from "@/components/generator-components/shared/generator-layout";

export const metadata: Metadata = {
  title: "Typing Generator - Waveify",
  description:
    "Create animated typing text effects for your GitHub README. Choose from classic, neon, glitch, rainbow, matrix and more styles.",
  keywords: "typing, animation, text, effects, github, readme, svg, generator",
  openGraph: {
    title: "Typing Generator - Waveify",
    description: "Create animated typing text effects for your GitHub README",
    type: "website",
  },
};

export default function TypingGeneratorPage() {
  return (
    <GeneratorLayout
      title="Typing Generator"
      description="Create animated typing text effects for your GitHub README">
      <TypingGenerator />
    </GeneratorLayout>
  );
}
