import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Activity } from 'lucide-react'
import Button from './Button'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-6"
            >
              <span className="w-2 h-2 bg-mint-sage rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-soft-slate">Trusted by 500+ Hospitals</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-medical-navy mb-6 leading-tight text-balance"
            >
              Healthcare Management,{' '}
              <span className="text-healthcare-blue">Reimagined</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-soft-slate mb-8 leading-relaxed"
            >
              Streamline patient care with our professional ecosystem. Built for healthcare providers who value both efficiency and compassion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button variant="primary" size="lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Schedule Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-3"
            >
              {[
                'HIPAA compliant & secure',
                '24/7 patient support',
                'Real-time analytics'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-mint-sage" />
                  <span className="text-soft-slate">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-healthcare-blue/10 to-transparent"></div>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-premium-hover"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-mint-sage/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-mint-sage" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-medical-navy">98.5%</div>
                  <div className="text-sm text-soft-slate">Patient Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-premium-hover"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-healthcare-blue/10 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-healthcare-blue" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-medical-navy">2.5M+</div>
                  <div className="text-sm text-soft-slate">Appointments</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-healthcare-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-mint-sage/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
