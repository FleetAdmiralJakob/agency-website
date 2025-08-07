'use client'

import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // Close mobile menu after clicking
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              M&J Agency
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition-colors duration-200">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-cyan-400 transition-colors duration-200">About</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-cyan-400 transition-colors duration-200">Services</button>
              <button onClick={() => scrollToSection('team')} className="text-white hover:text-cyan-400 transition-colors duration-200">Team</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyan-400 transition-colors duration-200">Contact</button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 text-white hover:text-cyan-400 transition-colors duration-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 w-full text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 w-full text-left">About</button>
            <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 w-full text-left">Services</button>
            <button onClick={() => scrollToSection('team')} className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 w-full text-left">Team</button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200 w-full text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  )
}
