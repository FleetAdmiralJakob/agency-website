'use client'

import { useEffect, useState } from 'react'
import { MapPin, Github, Linkedin, Mail } from 'lucide-react'

export default function Team() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="team" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Meet The Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Two passionate developers from different corners of the world, united by code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Murtaza */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-4xl font-bold text-black">
                    M
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Murtaza</h3>
                  <div className="flex items-center justify-center gap-2 text-cyan-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>Afghanistan</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Full-stack developer with expertise in modern web technologies. 
                    Passionate about creating scalable applications and clean code architecture.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">React/Next.js</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Node.js</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">TypeScript</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <button className="p-3 bg-white/10 rounded-full hover:bg-cyan-500/20 transition-colors duration-300">
                    <Github className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 bg-white/10 rounded-full hover:bg-cyan-500/20 transition-colors duration-300">
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 bg-white/10 rounded-full hover:bg-cyan-500/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Jakob */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10 hover:border-pink-400/50 transition-all duration-500 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-4xl font-bold text-black">
                    J
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Jakob</h3>
                  <div className="flex items-center justify-center gap-2 text-pink-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>Germany</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Frontend specialist with a keen eye for design and user experience. 
                    Expert in creating beautiful, performant web applications.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">React/Vue.js</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">UI/UX Design</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Three.js</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <button className="p-3 bg-white/10 rounded-full hover:bg-pink-500/20 transition-colors duration-300">
                    <Github className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 bg-white/10 rounded-full hover:bg-pink-500/20 transition-colors duration-300">
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 bg-white/10 rounded-full hover:bg-pink-500/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
