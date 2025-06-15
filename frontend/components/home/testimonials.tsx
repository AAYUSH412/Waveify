"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRef } from "react"

const testimonials = [
  {
    quote:
      "Waveify transformed my GitHub profile. The animated banners make my repositories stand out and look incredibly professional.",
    author: "Sarah Johnson",
    role: "Senior Frontend Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SJ",
    rating: 5,
  },
  {
    quote:
      "I've tried many README generators, but Waveify is by far the easiest to use. The live preview feature saved me hours of tweaking.",
    author: "Michael Chen",
    role: "Open Source Contributor",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MC",
    rating: 5,
  },
  {
    quote:
      "The customization options are incredible. I can match my banner perfectly to my project's branding with just a few clicks.",
    author: "Alex Rivera",
    role: "Full Stack Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AR",
    rating: 4,
  },
]

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
            x: useTransform(scrollYProgress, [0, 1], [-30, 30]),
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [50, -50]),
            x: useTransform(scrollYProgress, [0, 1], [30, -30]),
          }}
        />
      </div>

      <div ref={containerRef} className="container px-4 md:px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Join thousands of developers who've enhanced their GitHub presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card className="h-full border border-border/50 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex">
                      {/* Star Rating */}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground flex-grow italic">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="flex items-center mt-6 pt-6 border-t">
                      <Avatar className="h-10 w-10 mr-3 border-2 border-background">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
