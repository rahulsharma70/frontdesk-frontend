import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-sm'

  const variants = {
    primary: 'bg-gradient-to-r from-healthcare-blue to-indigo-600 text-white hover:shadow-lg',
    secondary: 'bg-white text-medical-navy border border-gray-200 hover:border-healthcare-blue hover:shadow-md',
    success: 'bg-gradient-to-r from-mint-sage to-emerald-600 text-white hover:shadow-lg'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </motion.button>
  )
}
