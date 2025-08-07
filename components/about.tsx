'use client'

import { useEffect, useState } from 'react'
import { Rocket, Target, Users, Award } from 'lucide-react'

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a dynamic duo of passionate developers, combining international expertise 
              with cutting-edge technology to deliver exceptional web solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
                <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-400">Pushing boundaries with latest technologies</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-pink-400/50 transition-all duration-300 group-hover:scale-105">
                <Target className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Precision</h3>
                <p className="text-gray-400">Pixel-perfect execution every time</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-400">Seamless teamwork across continents</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
                <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-400">Award-winning quality standards</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Born from a shared passion for creating exceptional digital experiences, 
                  M&J Agency represents the perfect fusion of international talent and 
                  cutting-edge technology.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  With extensive experience in full-stack development, we specialize in 
                  transforming complex ideas into beautiful, functional web applications 
                  that drive results.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                    5+
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Years Experience</h4>
                    <p className="text-gray-400">Combined expertise in web development</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                    50+
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Projects Completed</h4>
                    <p className="text-gray-400">Successful launches worldwide</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Countries</h4>
                    <p className="text-gray-400">Global perspective, local expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
