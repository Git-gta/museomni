'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">MuseOmni</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#features" className="text-white hover:opacity-80">Features</a></li>
            <li><a href="#about" className="text-white hover:opacity-80">About</a></li>
            <li><a href="#contact" className="text-white hover:opacity-80">Contact</a></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}