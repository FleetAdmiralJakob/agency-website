'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Code, Zap, Globe } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            M&J Agency
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that push the boundaries of web development
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Code className="w-5 h-5 text-cyan-400" />
              <span className="text-white">Full-Stack Development</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-pink-400" />
              <span className="text-white">Performance Optimization</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="w-5 h-5 text-purple-400" />
              <span className="text-white">Global Reach</span>
            </div>
          </div>
          <button 
            onClick={scrollToNext}
            className="group bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
            <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-cyan-400 transition-colors duration-300"
      >
        <ArrowDown className="w-6 h-6 text-white/50" />
      </button>
    </section>
  )
}
