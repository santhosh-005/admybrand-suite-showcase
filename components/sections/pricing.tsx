"use client"

import { Check, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { PricingCalculator } from "@/components/ui/pricing-calculator"

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for small businesses and startups",
    features: [
      "AI Content Generation (1,000 credits/month)",
      "Basic Analytics Dashboard",
      "Email Support",
      "3 Brand Profiles",
      "Social Media Integration",
      "Basic Templates",
    ],
    popular: false,
    gradient: "from-gray-600 to-gray-700",
  },
  {
    name: "Professional",
    price: 99,
    description: "Ideal for growing businesses and agencies",
    features: [
      "AI Content Generation (10,000 credits/month)",
      "Advanced Analytics & Insights",
      "Priority Support",
      "Unlimited Brand Profiles",
      "All Platform Integrations",
      "Custom Templates",
      "A/B Testing Suite",
      "Team Collaboration (5 users)",
    ],
    popular: true,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    price: 299,
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited AI Content Generation",
      "Custom AI Model Training",
      "Dedicated Account Manager",
      "White-label Solutions",
      "Advanced API Access",
      "Custom Integrations",
      "Advanced Security & Compliance",
      "Unlimited Team Members",
      "Custom Reporting",
    ],
    popular: false,
    gradient: "from-yellow-500 to-orange-500",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Calculator */}
        <div className="mb-16 animate-on-scroll">
          <PricingCalculator />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <GlassCard
                className={`p-8 h-full relative ${plan.popular ? "ring-2 ring-purple-500/50 scale-105" : ""} hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      : "bg-gray-700 hover:bg-gray-600"
                  } text-white font-semibold py-3`}
                >
                  {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                  Get Started
                </Button>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center animate-on-scroll">
          <GlassCard className="p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-400 mb-6">
              Contact our sales team for custom pricing and enterprise features tailored to your organization.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 bg-transparent"
            >
              Contact Sales
            </Button>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
