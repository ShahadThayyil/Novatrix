"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Transform Your{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
                Digital Presence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We help businesses grow through innovative digital marketing,
              modern web development, and data-driven strategies.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-lg px-8 py-6 rounded-2xl shadow-lg hover:opacity-90 transition-all"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-2xl border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-purple-400 transition-all"
            >
              <Play className="mr-2 h-5 w-5 text-purple-400" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">500+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">98%</div>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">5x</div>
              <p className="text-gray-400">Average ROI Increase</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle neon gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-950 pointer-events-none" />
    </section>
  )
}
