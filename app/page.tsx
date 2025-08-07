'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from '@/components/scene'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Team from '@/components/team'
import Contact from '@/components/contact'
import Navigation from '@/components/navigation'
import LoadingScreen from '@/components/loading-screen'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Fixed Canvas Background */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact />
      </div>

      <LoadingScreen />
    </div>
  )
}
