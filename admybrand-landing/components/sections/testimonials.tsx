"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "ADmyBRAND AI has completely transformed our marketing strategy. We've seen a 300% increase in engagement and our campaigns are more targeted than ever before.",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupX",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "The AI-powered content generation is incredible. What used to take our team weeks now takes hours, and the quality is consistently outstanding.",
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Brand Studio",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "As a creative agency, we were skeptical about AI. But ADmyBRAND AI enhances our creativity rather than replacing it. Our clients love the results.",
  },
  {
    name: "David Thompson",
    role: "Growth Manager",
    company: "E-commerce Plus",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "The ROI tracking and optimization features are game-changing. We can see exactly what's working and automatically optimize our campaigns in real-time.",
  },
  {
    name: "Lisa Park",
    role: "Marketing Manager",
    company: "Global Retail",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "The multi-language support helped us expand globally faster than we ever imagined. The AI understands cultural nuances perfectly.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our Customers
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their marketing with AI
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          <GlassCard className="p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="text-center">
              <Quote className="w-12 h-12 text-purple-400 mx-auto mb-6 animate-pulse" />

              <div className="mb-8">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 transition-all duration-500 ease-in-out transform">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current animate-pulse" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 transition-all duration-500 ease-in-out">
                <div className="relative group">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/50 transition-all duration-300 group-hover:scale-110 group-hover:border-purple-400"
                  />
                  <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-left transform transition-all duration-300 hover:translate-x-2">
                  <h4 className="text-lg font-semibold text-white transition-colors duration-200 hover:text-purple-300">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-purple-400 transition-colors duration-200 hover:text-purple-300">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-400 text-sm transition-colors duration-200 hover:text-gray-300">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 border-gray-600 text-gray-400 hover:bg-gray-800/50 backdrop-blur-sm bg-transparent transition-all duration-300 hover:scale-110 hover:border-purple-500/50 hover:text-purple-300"
          >
            <ChevronLeft className="w-4 h-4 transition-transform duration-200 hover:scale-110" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 border-gray-600 text-gray-400 hover:bg-gray-800/50 backdrop-blur-sm bg-transparent transition-all duration-300 hover:scale-110 hover:border-purple-500/50 hover:text-purple-300"
          >
            <ChevronRight className="w-4 h-4 transition-transform duration-200 hover:scale-110" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 ${
                  index === currentIndex 
                    ? "bg-purple-500 scale-125 animate-pulse" 
                    : "bg-gray-600 hover:bg-purple-400/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
