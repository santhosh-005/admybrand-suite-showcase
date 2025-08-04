"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const faqs = [
  {
    question: "How does ADmyBRAND AI generate content?",
    answer:
      "Our AI uses advanced machine learning models trained on millions of high-performing marketing campaigns. It analyzes your brand voice, target audience, and campaign goals to generate personalized content that resonates with your customers.",
  },
  {
    question: "Can I integrate ADmyBRAND AI with my existing tools?",
    answer:
      "Yes! We offer seamless integrations with over 50+ popular marketing tools including HubSpot, Salesforce, Google Ads, Facebook Ads, Mailchimp, and many more. Our API also allows for custom integrations.",
  },
  {
    question: "Is my data secure with ADmyBRAND AI?",
    answer:
      "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties and you maintain full ownership of all your content and insights.",
  },
  {
    question: "How accurate is the AI-generated content?",
    answer:
      "Our AI achieves 95%+ accuracy in brand voice matching and has been trained on successful campaigns across various industries. However, we always recommend human review and provide easy editing tools to ensure perfect alignment with your brand.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 support through chat, email, and phone. Professional and Enterprise plans include priority support and dedicated account managers. We also offer comprehensive onboarding and training resources.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you can export all your data before cancellation.",
  },
  {
    question: "Do you offer custom AI model training?",
    answer:
      "Yes, our Enterprise plan includes custom AI model training specifically for your brand. This allows the AI to better understand your unique voice, style, and industry-specific requirements for even more accurate content generation.",
  },
  {
    question: "How does the pricing calculator work?",
    answer:
      "Our pricing calculator estimates your monthly costs based on your expected usage of AI credits, team size, and required features. It provides transparent pricing with no hidden fees, and you can adjust your plan anytime.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 50}ms` }}>
              <GlassCard className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-700/50 pt-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <div className="space-x-4">
            <a href="#contact" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
              Contact Support
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
