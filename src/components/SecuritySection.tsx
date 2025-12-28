import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileCheck } from 'lucide-react'

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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-healthcare-blue/10 rounded-full mb-6"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield className="w-8 h-8 text-healthcare-blue" />
            </motion.div>
          </motion.div>

          <h2 className="text-4xl font-bold text-medical-navy mb-4">
            Security You Can Trust
          </h2>
          <p className="text-lg text-soft-slate max-w-2xl mx-auto">
            Your patients' data is protected by enterprise-grade security measures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-healthcare-blue/20 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <feature.icon className="w-6 h-6 text-healthcare-blue" />
              </div>
              <h3 className="text-lg font-semibold text-medical-navy mb-2">
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
