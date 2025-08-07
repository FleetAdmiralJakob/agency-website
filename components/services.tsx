'use client'

import { useEffect, useState } from 'react'
import { Code2, Smartphone, Globe, Zap, Database, Palette } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'End-to-end web applications using modern frameworks like React, Next.js, and Node.js',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Responsive designs that look perfect on every device and screen size',
    color: 'from-pink-400 to-red-500'
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Scalable web apps with modern architecture and best practices',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast loading times and smooth user experiences',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Database,
    title: 'Backend Solutions',
    description: 'Robust APIs, databases, and server-side architecture',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love to interact with',
    color: 'from-rose-400 to-pink-500'
  }
]

export default function Services() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive web development services to bring your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
