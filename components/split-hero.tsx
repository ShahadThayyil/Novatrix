"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function SplitHero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-16 order-2 lg:order-1">
        <div className="max-w-lg space-y-6 lg:space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              Digital
              <span className="block text-primary">Revolution</span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-muted-foreground">
                Starts Here
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              We craft extraordinary digital experiences that transform brands
              and drive unprecedented growth through innovative marketing
              strategies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group w-full sm:w-auto"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group bg-transparent w-full sm:w-auto"
            >
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 pt-4 sm:pt-6 lg:pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                500+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                98%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Success Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Animated Visual (No Three.js) */}
      <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto relative bg-gradient-to-br from-card to-muted order-1 lg:order-2 flex items-center justify-center">
        {/* Animated Gradient Ball */}
        <div className="relative flex items-center justify-center">
  {/* Glowing background */}
  <div className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 animate-pulse blur-2xl opacity-70"></div>

  {/* Logo space */}
 <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-full 
                bg-gradient-to-tr from-purple-400 via-pink-500 to-orange-400 
                shadow-2xl flex items-center justify-center overflow-hidden">
  <img
    src="/logov3.png"
    alt="Logo"
    className="w-3/4 h-3/4 object-contain rounded-full"
  />
</div>

</div>


        {/* Floating small shapes */}
        <div className="absolute top-10 right-10 w-6 h-6 sm:w-10 sm:h-10 bg-accent rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 right-20 w-4 h-4 sm:w-6 sm:h-6 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-5 w-6 h-6 sm:w-8 sm:h-8 bg-secondary rounded-lg animate-float-slow"></div>
      </div>
    </section>
  )
}
