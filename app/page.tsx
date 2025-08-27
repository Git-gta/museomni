'use client'

import { motion } from 'framer-motion'
import { Sparkles, Rocket, Star, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

const FeatureCard = ({ feature, icon: Icon, index }: { feature: string, icon: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 + index * 0.1 }}
    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
  >
    <div className="flex justify-center mb-4">
      <Icon className="w-12 h-12 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">
      Feature {index + 1}
    </h3>
    <p className="text-white/80">
      {feature.replace(/^- /, '')}
    </p>
  </motion.div>
)

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    "AI-driven Immersive Visualization",
    "Cultural Synesthesia Palette",
    "Collaborative Culture Crafting"
  ]

  const icons = [Rocket, Star, Zap]

  return (
    <main 
      className="min-h-screen"
      style={{
        background: `linear-gradient(135deg, #5A67D8 0%, #4C51BF 100%)`
      }}
    >
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-24 h-24 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            MuseOmni
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Enhance creative expression through sensory stimulation while preserving and exploring diverse world cultures.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                feature={feature} 
                icon={icons[index]} 
                index={index} 
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <button 
              className="px-8 py-4 bg-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
              style={{ color: '#5A67D8' }}
            >
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}