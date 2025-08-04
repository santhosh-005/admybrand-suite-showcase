"use client"

import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Column - Text Content */}
          <div className="animate-on-scroll text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">AI-Powered Marketing Revolution</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Brand with AI
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl lg:max-w-none leading-relaxed">
              ADmyBRAND AI Suite revolutionizes your marketing strategy with intelligent automation, predictive analytics, and personalized campaigns that drive real results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800/50 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Image */}
          <div className="animate-on-scroll">
            <div className="relative group">
              <img
                src="/hero-dashboard.jpg"
                alt="ADmyBRAND AI Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl shadow-purple-500/20 transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Floating metrics */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 animate-bounce [animation-duration:2s]">
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold text-green-400">+147%</div>
                  <div className="text-xs md:text-sm text-gray-300">ROI Increase</div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 animate-bounce [animation-duration:2.5s]">
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-purple-400">98.5%</div>
                  <div className="text-xs md:text-sm text-gray-300">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video Section */}
        <div className="mt-20 animate-on-scroll text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">See ADmyBRAND AI in Action</h2>
          <GlassCard className="p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse" />
              
              {/* Video Placeholder SVG */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                <svg 
                  className="w-20 h-20 text-white/80 group-hover:text-white transition-colors duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <div className="text-center">
                  <p className="text-white text-lg font-semibold mb-2">Watch Product Demo</p>
                  <p className="text-gray-300 text-sm">3 minutes • See how AI transforms your marketing</p>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          </GlassCard>
        </div>

        {/* Stats */}
        <div className="mt-20 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <GlassCard className="p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={10000} suffix="+" />
              </div>
              <p className="text-gray-400">Active Users</p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <p className="text-gray-400">ROI Increase</p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <p className="text-gray-400">AI Support</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
