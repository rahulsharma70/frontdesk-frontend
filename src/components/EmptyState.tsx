import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

interface EmptyStateProps {
  title: string
  message: string
  icon?: React.ElementType
}

export default function EmptyState({
  title,
  message,
  icon: Icon = Calendar
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mb-6 p-6 bg-gray-100 rounded-full"
      >
        <Icon className="w-16 h-16 text-soft-slate" />
      </motion.div>
      <h3 className="text-xl font-semibold text-medical-navy mb-2">{title}</h3>
      <p className="text-soft-slate max-w-md">{message}</p>
    </motion.div>
  )
}
