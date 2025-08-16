"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Star, Zap, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    description: "Perfect for personal projects and experimentation",
    price: "$0",
    period: "forever",
    icon: Star,
    features: [
      "All 40+ component types",
      "Basic customization options",
      "Community support",
      "GitHub integration",
      "10,000 API calls/month",
      "Open source access",
    ],
    cta: "Get Started Free",
    popular: false,
    color: "from-gray-500 to-gray-600",
  },
  {
    name: "Pro",
    description: "For serious developers and content creators",
    price: "$12",
    period: "per month",
    icon: Zap,
    features: [
      "Everything in Free",
      "Advanced customization",
      "Unlimited color gradients",
      "Priority support",
      "Usage analytics dashboard",
      "Export to PNG/GIF/WebP",
      "100,000 API calls/month",
    ],
    cta: "Start Free Trial",
    popular: true,
    color: "from-blue-500 to-purple-600",
  },
  {
    name: "Team",
    description: "For development teams and organizations",
    price: "$39",
    period: "per month",
    icon: Crown,
    features: [
      "Everything in Pro",
      "Team workspaces",
      "Brand templates",
      "Advanced analytics",
      "GitHub App integration",
      "White-label options",
      "500,000 API calls/month",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    popular: false,
    color: "from-purple-500 to-pink-600",
  },
]

export function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="glass-card border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            Simple Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Choose Your <span className="text-gradient">Perfect Plan</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Start free and upgrade as you grow. All plans include access to our complete component library.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative group ${plan.popular ? "lg:scale-105" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="gradient-primary text-white px-4 py-1 text-sm font-medium">Most Popular</Badge>
                </div>
              )}

              <Card
                className={`glass-card hover-lift h-full border-border/50 ${
                  plan.popular ? "border-primary/50 shadow-2xl shadow-primary/10" : ""
                }`}
              >
                <CardHeader className="pb-6">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                      <plan.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>

                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>

                  <div className="flex items-baseline mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} p-0.5 mr-3 mt-0.5 flex-shrink-0`}
                        >
                          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                            <Check className="w-3 h-3 text-foreground" />
                          </div>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full transition-all duration-300 ${
                      plan.popular
                        ? "gradient-primary text-white shadow-lg hover:shadow-xl"
                        : "glass-card hover:bg-muted/50"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enterprise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass-card border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need Enterprise Features?</h3>
              <p className="text-muted-foreground mb-6">
                Custom solutions for large organizations with on-premise deployment, dedicated support, and custom
                integrations.
              </p>
              <Button variant="outline" size="lg" className="glass-card hover:bg-muted/50 bg-transparent">
                Contact Enterprise Sales
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
