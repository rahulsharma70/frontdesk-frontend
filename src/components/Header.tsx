import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Activity } from 'lucide-react'
import Button from './Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-morphism shadow-sm border-b border-gray-200/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="p-2 bg-healthcare-blue rounded-lg"
          >
            <Activity className="w-6 h-6 text-white" />
          </motion.div>
          <span className="text-xl font-semibold text-medical-navy">FrontDesk</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {['Solutions', 'Features', 'Pricing', 'Resources'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-soft-slate hover:text-medical-navy relative group"
              whileHover={{ y: -2 }}
            >
              {item}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-healthcare-blue transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="secondary" size="sm">
            Sign In
          </Button>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
