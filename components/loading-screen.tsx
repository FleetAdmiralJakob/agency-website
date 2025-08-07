'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4">
            M&J Agency
          </h1>
          <p className="text-gray-400 text-lg">Loading amazing experiences...</p>
        </div>
        
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-4 text-gray-500 text-sm">
          {progress}%
        </div>
      </div>
    </div>
  )
}
