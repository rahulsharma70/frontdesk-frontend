import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  disabled?: boolean
  magnetic?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  magnetic = false
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-biophilic relative overflow-hidden'

  const variants = {
    primary: 'bg-gradient-to-r from-vitality-mint to-emerald-600 text-white hover:shadow-glow hover:scale-102',
    secondary: 'biophilic-glass text-hospitality-blue hover:shadow-magnetic hover:scale-102',
    success: 'bg-gradient-to-r from-vitality-mint to-emerald-600 text-white hover:shadow-glow hover:scale-102',
    emergency: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-glow hover:scale-102 ring-2 ring-red-200'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      animate={magnetic ? { scale: [1, 1.02, 1] } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17,
        scale: { duration: 0.2 }
      }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${magnetic ? 'animate-magnetic-snap' : ''} ${className}`}
    >
      {variant === 'emergency' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-600/20"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
      {children}
    </motion.button>
  )
}
