'use client'

import { useEffect, useState } from 'react'
import { Mail, MessageCircle, Send, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 delay-900 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <Input 
                      type="text" 
                      placeholder="Your name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <Input 
                    type="text" 
                    placeholder="Project inquiry"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Email Us</h4>
                    <p className="text-gray-400">hello@mjagency.dev</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Drop us a line and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Let's Chat</h4>
                    <p className="text-gray-400">Schedule a call</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Book a free consultation to discuss your project requirements.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Global Team</h4>
                    <p className="text-gray-400">Afghanistan & Germany</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Working across time zones to serve clients worldwide.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Response Time</h4>
                    <p className="text-gray-400">{'< 24 hours'}</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Quick response times for all project inquiries and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
