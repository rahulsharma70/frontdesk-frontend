import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Activity, Shield } from 'lucide-react'
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
          ? 'biophilic-glass shadow-biophilic border-b border-vitality-mint/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="relative p-3 bg-gradient-to-br from-vitality-mint to-emerald-600 rounded-xl shadow-glow"
          >
            <Activity className="w-5 h-5 text-white" />
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-xl"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-hospitality-blue">FrontDesk</span>
            <span className="text-xs text-soft-slate -mt-1">Healthcare Ecosystem</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {['Solutions', 'Features', 'Pricing', 'Resources'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-soft-slate hover:text-hospitality-blue relative group transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              {item}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-vitality-mint transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-vitality-mint/10 rounded-full">
            <Shield className="w-4 h-4 text-vitality-mint" />
            <span className="text-xs font-medium text-vitality-mint">HIPAA Verified</span>
          </div>
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
