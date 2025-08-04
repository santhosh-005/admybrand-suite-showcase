"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { GlassCard } from "@/components/ui/glass-card"
import { Calculator, Users, Zap } from "lucide-react"

export function PricingCalculator() {
  const [credits, setCredits] = useState([5000])
  const [users, setUsers] = useState([3])

  const calculatePrice = () => {
    const creditCost = Math.ceil(credits[0] / 1000) * 10
    const userCost = users[0] * 15
    return creditCost + userCost
  }

  return (
    <GlassCard className="p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Pricing Calculator</h3>
        <p className="text-gray-400">Estimate your monthly costs based on usage</p>
      </div>

      <div className="space-y-8">
        {/* AI Credits Slider */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <label className="text-white font-medium">AI Credits per Month</label>
            </div>
            <span className="text-purple-400 font-semibold">{credits[0].toLocaleString()}</span>
          </div>
          <Slider value={credits} onValueChange={setCredits} max={50000} min={1000} step={1000} className="w-full" />
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>1K</span>
            <span>50K</span>
          </div>
        </div>

        {/* Team Size Slider */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-400" />
              <label className="text-white font-medium">Team Members</label>
            </div>
            <span className="text-purple-400 font-semibold">{users[0]}</span>
          </div>
          <Slider value={users} onValueChange={setUsers} max={20} min={1} step={1} className="w-full" />
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>1</span>
            <span>20+</span>
          </div>
        </div>

        {/* Price Display */}
        <div className="text-center p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
          <div className="text-3xl font-bold text-white mb-2">
            ${calculatePrice()}
            <span className="text-lg text-gray-400">/month</span>
          </div>
          <p className="text-gray-300">Estimated monthly cost</p>
        </div>

        {/* Breakdown */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-gray-300">
            <span>AI Credits ({credits[0].toLocaleString()})</span>
            <span>${Math.ceil(credits[0] / 1000) * 10}</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Team Members ({users[0]})</span>
            <span>${users[0] * 15}</span>
          </div>
          <div className="border-t border-gray-700 pt-3 flex justify-between font-semibold text-white">
            <span>Total</span>
            <span>${calculatePrice()}</span>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
