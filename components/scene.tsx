'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { 
  Environment, 
  Float, 
  MeshDistortMaterial, 
  Sphere,
  Stars,
  OrbitControls
} from '@react-three/drei'
import * as THREE from 'three'

function FloatingGeometry({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const points = useRef<THREE.Points>(null)
  const particlesCount = 1000
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05
      points.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#64ffda" transparent opacity={0.6} />
    </points>
  )
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useFrame((state) => {
    if (meshRef.current) {
      const scrollOffset = scrollY / (document.body.scrollHeight - window.innerHeight)
      meshRef.current.rotation.x = scrollOffset * Math.PI * 2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = Math.sin(scrollOffset * Math.PI) * 2
    }
  })

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[3, 0, -2]}>
      <MeshDistortMaterial
        color="#ff6b6b"
        attach="material"
        distort={0.6}
        speed={3}
        roughness={0}
        metalness={1}
        transparent
        opacity={0.8}
      />
    </Sphere>
  )
}

export default function Scene() {
  const { viewport } = useThree()
  
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#64ffda" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <ParticleField />
      
      <FloatingGeometry position={[-3, 2, -1]} scale={0.8} color="#64ffda" />
      <FloatingGeometry position={[2, -1, -3]} scale={1.2} color="#ff6b6b" />
      <FloatingGeometry position={[-1, -2, -2]} scale={0.6} color="#4ecdc4" />
      
      <AnimatedSphere />
      
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  )
}
