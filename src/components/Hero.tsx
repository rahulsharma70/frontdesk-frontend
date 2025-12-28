import { motion } from 'framer-motion'
import { ArrowRight, CircleCheck as CheckCircle, Activity, Users, Shield } from 'lucide-react'
import Button from './Button'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-canvas-gray via-vitality-mint/5 to-canvas-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Social Proof - Faces Pile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-vitality-mint to-emerald-600 border-2 border-white shadow-sm flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 text-white" />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-10 h-10 rounded-full bg-hospitality-blue border-2 border-white shadow-sm flex items-center justify-center text-xs font-bold text-white"
                >
                  500+
                </motion.div>
              </div>
              <div>
                <p className="text-sm font-semibold text-hospitality-blue">Trusted by Healthcare Leaders</p>
                <p className="text-xs text-soft-slate">Join 500+ hospitals worldwide</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 biophilic-glass rounded-full shadow-biophilic mb-6"
            >
              <motion.span 
                className="w-2 h-2 bg-vitality-mint rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-hospitality-blue">Live System Status: All Services Operational</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-hospitality-blue mb-6 leading-tight text-balance"
            >
              The Future of{' '}
              <span className="bg-gradient-to-r from-vitality-mint to-emerald-600 bg-clip-text text-transparent">
                Patient Care
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-soft-slate mb-8 leading-relaxed max-w-xl"
            >
              Experience healthcare management that reduces stress and amplifies care. Our biophilic design promotes healing environments while ensuring precision in every interaction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button variant="emergency" size="lg" magnetic>
                Emergency Booking
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-3"
            >
              {[
                { text: 'HIPAA compliant & secure', icon: Shield },
                { text: '24/7 patient support', icon: Activity },
                { text: 'Real-time biometric monitoring', icon: CheckCircle }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="p-1 bg-vitality-mint/10 rounded-lg">
                    <feature.icon className="w-4 h-4 text-vitality-mint" />
                  </div>
                  <span className="text-soft-slate font-medium">{feature.text}</span>
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
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-biophilic">
              <img
                src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-vitality-mint/10 to-transparent"></div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-6 -left-6 biophilic-glass p-6 rounded-2xl shadow-biophilic"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-vitality-mint/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-vitality-mint" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-hospitality-blue">98.5%</div>
                  <div className="text-sm text-soft-slate">Patient Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -top-6 -right-6 biophilic-glass p-6 rounded-2xl shadow-biophilic"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-vitality-mint/10 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-vitality-mint" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-hospitality-blue">2.5M+</div>
                  <div className="text-sm text-soft-slate">Appointments</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-vitality-mint/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-hospitality-blue/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
