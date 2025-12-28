import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

interface EmptyStateProps {
  title: string
  message: string
  icon?: React.ElementType
  actionText?: string
  onAction?: () => void
}

export default function EmptyState({
  title,
  message,
  icon: Icon = Calendar,
  actionText,
  onAction
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-20 px-6 text-center"
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mb-8 p-8 bg-gradient-to-br from-vitality-mint/10 to-emerald-600/10 rounded-full shadow-biophilic"
      >
        <Icon className="w-20 h-20 text-vitality-mint" />
      </motion.div>
      
      <motion.h3 
        className="text-2xl font-bold text-hospitality-blue mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-soft-slate max-w-md mb-6 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {message}
      </motion.p>
      
      {actionText && onAction && (
        <motion.button
          onClick={onAction}
          className="px-6 py-3 bg-gradient-to-r from-vitality-mint to-emerald-600 text-white rounded-xl font-medium shadow-glow hover:shadow-biophilic transition-all duration-300"
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {actionText}
        </motion.button>
      )}
    </motion.div>
  )
}
