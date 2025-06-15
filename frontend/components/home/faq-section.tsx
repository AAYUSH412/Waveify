"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is Waveify?",
    answer:
      "Waveify is a tool that generates animated SVG wave banners for GitHub READMEs. It helps developers make their repositories and profiles stand out with beautiful, customizable animations.",
  },
  {
    question: "How do I add a Waveify banner to my README?",
    answer:
      "Simply generate your banner using our editor, copy the provided markdown code, and paste it into your README.md file. The banner will automatically appear when your README is viewed on GitHub.",
  },
  {
    question: "Can I customize the colors and animations?",
    answer:
      "Yes! Waveify offers extensive customization options. You can adjust colors, wave height, animation speed, and more. Pro users get access to additional customization features like custom gradients and advanced animation controls.",
  },
  {
    question: "Do I need to credit Waveify in my README?",
    answer:
      "Free plan users will have a small Waveify watermark on their banners. Pro and Team plan users can remove this watermark. We appreciate attribution, but it's not required for paid plans.",
  },
  {
    question: "Is there an API for programmatic banner generation?",
    answer:
      "Yes, Pro and Team plans include API access for programmatic banner generation. This allows you to integrate Waveify into your workflows and automatically generate banners for your projects.",
  },
  {
    question: "Can I use Waveify for commercial projects?",
    answer:
      "All plans, including the Free plan, can be used for commercial projects. The Team plan offers additional features specifically designed for organizations and commercial use.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 grid-bg"></div>

      {/* Animated gradient circles */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-fuchsia-500/5 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-effect text-sm font-medium mb-6">
            <HelpCircle className="h-4 w-4 text-violet-400" />
            <span>FAQ</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>

          <p className="text-lg text-muted-foreground">Everything you need to know about Waveify</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`} className="border-white/10">
                    <AccordionTrigger className="text-left hover:text-violet-400 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground">
                Still have questions?{" "}
                <a href="#contact" className="text-violet-400 hover:text-violet-300 transition-colors">
                  Contact our support team
                </a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
