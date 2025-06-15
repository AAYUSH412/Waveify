"use client"

import { motion, useScroll } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRef } from "react"
import { Quote } from "lucide-react"

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

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const yValues = testimonials.map((_, index) => (index % 2 === 0 ? -50 : 50))

  return (
    <section id="testimonials" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 grid-bg"></div>

      {/* Animated gradient circles */}
      <motion.div
        className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[100px] -z-10"
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
        className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-fuchsia-500/5 blur-[100px] -z-10"
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
            <Quote className="h-4 w-4 text-violet-400" />
            <span>Testimonials</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Users Say</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Join thousands of developers who've enhanced their GitHub presence with Waveify
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              style={{ y: yValues[index] }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
            >
              <div className="card-3d h-full">
                <Card className="h-full glass-card border-white/10 dark:border-white/5 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full card-3d-content">
                      {/* Quote icon */}
                      <div className="mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
                          <Quote className="h-5 w-5 text-white" />
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="mb-4 flex">
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

                      <p className="text-muted-foreground flex-grow italic text-lg">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      <div className="flex items-center mt-6 pt-6 border-t border-white/10">
                        <Avatar className="h-10 w-10 mr-3 border-2 border-white/10">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                          <AvatarFallback className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
