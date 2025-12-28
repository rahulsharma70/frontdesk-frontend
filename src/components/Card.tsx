import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  delay?: number
  hoverable?: boolean
  variant?: 'default' | 'glass' | 'trust'
}

export default function Card({ 
  children, 
  className = '', 
  delay = 0, 
  hoverable = true,
  variant = 'default'
}: CardProps) {
  const variants = {
    default: 'bg-white shadow-biophilic border border-gray-100/50',
    glass: 'biophilic-glass shadow-biophilic',
    trust: 'trust-surface text-canvas-gray shadow-biophilic'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={hoverable ? {
        y: -4,
        boxShadow: '0 12px 40px rgba(15, 23, 42, 0.12)',
        borderColor: 'rgba(16, 185, 129, 0.3)',
        scale: 1.02
      } : {}}
      className={`${variants[variant]} rounded-2xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
