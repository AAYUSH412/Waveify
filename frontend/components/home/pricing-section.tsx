"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for personal projects and experimentation",
    price: "$0",
    period: "forever",
    features: ["Basic wave animations", "5 themes", "GitHub README integration", "Community support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For developers who want to stand out",
    price: "$9",
    period: "per month",
    features: [
      "Advanced wave animations",
      "Unlimited themes",
      "Custom colors",
      "API access",
      "Remove watermark",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    description: "For teams and organizations",
    price: "$29",
    period: "per month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Organization branding",
      "Analytics",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 grid-bg"></div>

      {/* Animated gradient circles */}
      <motion.div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-fuchsia-500/5 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
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
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span>Pricing</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>

          <p className="text-lg text-muted-foreground">
            Choose the plan that's right for you and start creating beautiful animated banners
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="card-3d"
            >
              <div
                className={`relative h-full glass-card rounded-2xl overflow-hidden ${
                  plan.popular ? "border-violet-500/50" : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-8 right-6 -translate-y-1/2">
                    <Badge className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>

                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="ml-2 text-muted-foreground">/{plan.period}</span>
                  </div>

                  <div className="mt-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className="mr-3 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "button-gradient shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40"
                          : "glass-effect hover:bg-white/10"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">
            Need a custom plan?{" "}
            <a href="#contact" className="text-violet-400 hover:text-violet-300 transition-colors">
              Contact us
            </a>{" "}
            for enterprise pricing.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
