"use client"

import { Brain, Target, BarChart3, Zap, Shield, Globe, Sparkles, TrendingUp } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Create compelling copy, visuals, and campaigns with advanced AI that understands your brand voice.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Reach the right audience with precision targeting powered by machine learning algorithms.",
    gradient: "from-pink-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track performance with detailed insights and predictive analytics for better decision making.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "Automate your entire marketing workflow from lead generation to conversion optimization.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Monitor and protect your brand reputation across all digital channels with AI-powered alerts.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Scale your campaigns worldwide with multi-language support and cultural adaptation.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Sparkles,
    title: "Creative Studio",
    description: "Generate stunning visuals, videos, and interactive content with our AI creative suite.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Continuously improve campaign performance with AI-driven A/B testing and optimization.",
    gradient: "from-emerald-500 to-green-500",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powerful Features for
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your marketing campaigns with the power of AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <GlassCard className="p-6 h-full hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
