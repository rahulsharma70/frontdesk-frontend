import { ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TooltipProps {
  children: ReactNode
  content: string
}

export default function Tooltip({ children, content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-medical-navy text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-50"
          >
            {content}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-medical-navy"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
