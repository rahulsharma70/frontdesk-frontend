import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  delay?: number
  hoverable?: boolean
}

export default function Card({ children, className = '', delay = 0, hoverable = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={hoverable ? {
        y: -4,
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
        borderColor: 'rgba(99, 102, 241, 0.2)'
      } : {}}
      className={`bg-white rounded-xl p-6 shadow-premium border border-transparent transition-all duration-200 ${className}`}
    >
      {children}
    </motion.div>
  )
}
