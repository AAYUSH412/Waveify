"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRef, useState, useEffect } from "react"
import { Quote, Star, Github, Linkedin, Twitter } from "lucide-react"
import { DotPattern } from "@/components/magicui/dot-pattern"
import { OrbitingCircles } from "@/components/magicui/orbiting-circles"
import { RollingText } from "@/components/animate-ui/text/rolling"
import ScrollText from "@/components/kokonutui/scroll-text"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "Waveify transformed my GitHub profile. The animated banners make my repositories stand out and look incredibly professional. The community response has been amazing!",
    author: "Sarah Johnson",
    role: "Senior Frontend Developer",
    company: "Meta",
    avatar: "/placeholder-user.jpg",
    initials: "SJ",
    rating: 5,
    social: { github: "sarahjdev", linkedin: "sarah-johnson-dev" },
  },
  {
    quote:
      "I've tried many README generators, but Waveify is by far the easiest to use. The live preview feature saved me hours of tweaking. My open source projects now look professional.",
    author: "Michael Chen",
    role: "Open Source Contributor",
    company: "Independent",
    avatar: "/placeholder-user.jpg",
    initials: "MC",
    rating: 5,
    social: { github: "mchen-oss", twitter: "mchen_dev" },
  },
  {
    quote:
      "The customization options are incredible. I can match my banner perfectly to my project's branding with just a few clicks. It's become an essential tool in my workflow.",
    author: "Alex Rivera",
    role: "Full Stack Developer",
    company: "Spotify",
    avatar: "/placeholder-user.jpg",
    initials: "AR",
    rating: 5,
    social: { github: "alexrivera", linkedin: "alex-rivera-dev" },
  },
  {
    quote:
      "As a tech lead, I recommend Waveify to my entire team. The consistency it brings to our README files and the professional appearance helps us maintain high standards across all projects.",
    author: "Dr. Priya Patel",
    role: "Tech Lead & Senior Engineer",
    company: "Google",
    avatar: "/placeholder-user.jpg",
    initials: "PP",
    rating: 5,
    social: { github: "priyapatel", linkedin: "priya-patel-tech" },
  },
  {
    quote:
      "Waveify made my portfolio projects stand out during job interviews. Recruiters consistently comment on the professional look of my GitHub profile. It's a game-changer for developers.",
    author: "David Kim",
    role: "Software Engineer",
    company: "Netflix",
    avatar: "/placeholder-user.jpg",
    initials: "DK",
    rating: 5,
    social: { github: "davidkim", twitter: "david_codes" },
  },
  {
    quote:
      "The animation effects are smooth and the generated code is clean. As someone who values both aesthetics and performance, Waveify hits the perfect balance. Highly recommended!",
    author: "Emma Thompson",
    role: "Frontend Architect",
    company: "Airbnb",
    avatar: "/placeholder-user.jpg",
    initials: "ET",
    rating: 5,
    social: { github: "emmathompson", linkedin: "emma-thompson-frontend" },
  },
]

const testimonialTexts = testimonials.map(t => `"${t.quote}" - ${t.author}`)

const TechnologiesScrollText = () => (
  <ScrollText
    texts={["GitHub", "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"]}
    className="text-sm text-muted-foreground"
  />
)

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000) // Change every 8 seconds

    return () => clearInterval(interval)
  }, [])

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section 
      id="testimonials" 
      ref={containerRef} 
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      {/* Enhanced Background with Dot Pattern */}
      <div className="absolute inset-0 -z-10">
        <DotPattern
          width={24}
          height={24}
          cx={2}
          cy={2}
          cr={1}
          className={cn(
            "absolute inset-0 h-full w-full",
            "text-violet-500/20 dark:text-violet-400/10",
            "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
          )}
        />
      </div>

      {/* Animated gradient circles */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-l from-fuchsia-500/10 via-violet-500/10 to-indigo-500/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2,
        }}
      />

      <div className="container px-4 md:px-6 relative">
        {/* Header Section with Enhanced Typography */}
        <motion.div
          className="text-center mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect-enhanced text-sm font-medium mb-8 border border-violet-200/50 dark:border-violet-400/20">
            <Quote className="h-4 w-4 text-violet-500 dark:text-violet-400" />
            <span className="text-violet-700 dark:text-violet-300">Developer Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <RollingText 
              text="What Our " 
              className="text-foreground"
            />
            <span className="text-gradient-professional">Community Says</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers who've enhanced their GitHub presence with Waveify. 
            See how our tools are making a difference in the developer community.
          </p>

          {/* Technologies Scroll Text */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with:</span>
              <TechnologiesScrollText />
            </div>
          </div>
        </motion.div>

        {/* Featured Testimonial with Orbiting Elements */}
        <motion.div
          className="relative max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Orbiting Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <OrbitingCircles className="size-8 border-2 border-violet-500/20 bg-violet-500/10" radius={300} duration={20}>
                <Github className="h-4 w-4 text-violet-500" />
              </OrbitingCircles>
              <OrbitingCircles className="size-8 border-2 border-pink-500/20 bg-pink-500/10" radius={300} duration={20} reverse>
                <Star className="h-4 w-4 text-pink-500" />
              </OrbitingCircles>
              <OrbitingCircles className="size-8 border-2 border-indigo-500/20 bg-indigo-500/10" radius={250} duration={15}>
                <Quote className="h-4 w-4 text-indigo-500" />
              </OrbitingCircles>
            </div>

            {/* Main Featured Testimonial */}
            <Card className="glass-effect-enhanced border-2 border-violet-200/30 dark:border-violet-400/20 shadow-2xl hover-lift">
              <CardContent className="p-12 text-center">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="h-12 w-12 text-violet-500 mx-auto mb-8" />
                  
                  <blockquote className="text-2xl md:text-3xl font-medium mb-8 text-foreground leading-relaxed italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  <div className="flex items-center justify-center gap-6">
                    <Avatar className="h-16 w-16 border-4 border-violet-200 dark:border-violet-400">
                      <AvatarImage 
                        src={testimonials[currentTestimonial].avatar} 
                        alt={testimonials[currentTestimonial].author} 
                      />
                      <AvatarFallback className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-lg font-semibold">
                        {testimonials[currentTestimonial].initials}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="text-left">
                      <p className="font-semibold text-lg text-foreground">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-muted-foreground">
                        {testimonials[currentTestimonial].role}
                      </p>
                      <p className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mt-6 gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < testimonials[currentTestimonial].rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-muted-foreground"
                        )}
                      />
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentTestimonial
                      ? "bg-violet-500 scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="hover-lift"
            >
              <Card className="h-full glass-effect-enhanced border border-violet-200/30 dark:border-violet-400/20 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    {/* Quote icon with gradient background */}
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Quote className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="mb-6 flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4 transition-colors duration-200",
                            i < testimonial.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-muted-foreground/50"
                          )}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-foreground flex-grow mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-violet-200/30 dark:border-violet-400/20">
                      <Avatar className="h-12 w-12 border-2 border-violet-200 dark:border-violet-400">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback className="bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-violet-600 dark:text-violet-400 font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex gap-2">
                        {testimonial.social?.github && (
                          <a
                            href={`https://github.com/${testimonial.social.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-muted hover:bg-violet-100 dark:hover:bg-violet-900/30 flex items-center justify-center transition-colors duration-200"
                            aria-label={`${testimonial.author}'s GitHub`}
                          >
                            <Github className="h-4 w-4 text-muted-foreground hover:text-violet-500" />
                          </a>
                        )}
                        {testimonial.social?.linkedin && (
                          <a
                            href={`https://linkedin.com/in/${testimonial.social.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-muted hover:bg-violet-100 dark:hover:bg-violet-900/30 flex items-center justify-center transition-colors duration-200"
                            aria-label={`${testimonial.author}'s LinkedIn`}
                          >
                            <Linkedin className="h-4 w-4 text-muted-foreground hover:text-violet-500" />
                          </a>
                        )}
                        {testimonial.social?.twitter && (
                          <a
                            href={`https://twitter.com/${testimonial.social.twitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-muted hover:bg-violet-100 dark:hover:bg-violet-900/30 flex items-center justify-center transition-colors duration-200"
                            aria-label={`${testimonial.author}'s Twitter`}
                          >
                            <Twitter className="h-4 w-4 text-muted-foreground hover:text-violet-500" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Join the <span className="text-gradient-professional">Developer Community</span>
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Start creating beautiful GitHub components today and see why developers love Waveify
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/generator/wave"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white font-semibold hover:from-violet-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
              </motion.a>
              <motion.a
                href="/docs"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-violet-200 dark:border-violet-400 text-violet-700 dark:text-violet-300 font-semibold hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Documentation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
