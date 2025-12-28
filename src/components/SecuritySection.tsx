import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileCheck, Award } from 'lucide-react'

export default function SecuritySection() {
  const features = [
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Full compliance with healthcare data protection regulations'
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'Your data is encrypted at rest and in transit'
    },
    {
      icon: Eye,
      title: 'Access Control',
      description: 'Role-based permissions for your entire team'
    },
    {
      icon: FileCheck,
      title: 'Audit Trails',
      description: 'Complete visibility into all system activities'
    }
  ]

  return (
    <section className="py-20 px-6 bg-canvas-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-vitality-mint to-emerald-600 rounded-full mb-6 shadow-glow"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          <h2 className="text-4xl font-bold text-hospitality-blue mb-4">
            Security You Can Trust
          </h2>
          <p className="text-lg text-soft-slate max-w-2xl mx-auto">
            Enterprise-grade security that meets the highest healthcare standards
          </p>
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 mt-6 px-6 py-3 trust-surface rounded-full shadow-biophilic"
          >
            <Award className="w-5 h-5 text-vitality-mint" />
            <span className="text-sm font-semibold">SOC 2 Type II Certified</span>
            <div className="w-2 h-2 bg-vitality-mint rounded-full animate-pulse" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="biophilic-glass p-6 rounded-2xl hover:shadow-biophilic transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-vitality-mint/10 to-emerald-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-6 h-6 text-vitality-mint" />
              </div>
              <h3 className="text-lg font-semibold text-hospitality-blue mb-2">
                {feature.title}
              </h3>
              <p className="text-soft-slate text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
