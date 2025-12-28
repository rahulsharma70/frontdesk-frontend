import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from './Button'

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 49,
      yearlyPrice: 470,
      features: [
        'Up to 100 patients',
        'Basic appointment scheduling',
        'Email support',
        'Mobile app access'
      ]
    },
    {
      name: 'Professional',
      monthlyPrice: 129,
      yearlyPrice: 1240,
      popular: true,
      features: [
        'Unlimited patients',
        'Advanced scheduling',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard'
      ]
    },
    {
      name: 'Enterprise',
      monthlyPrice: 299,
      yearlyPrice: 2870,
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom development',
        'SLA guarantee',
        'Advanced security features'
      ]
    }
  ]

  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-medical-navy mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-soft-slate mb-8">
            Choose the plan that fits your practice
          </p>

          <div className="inline-flex items-center gap-4 p-1 bg-white rounded-full shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isYearly
                  ? 'bg-healthcare-blue text-white shadow-md'
                  : 'text-soft-slate'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isYearly
                  ? 'bg-healthcare-blue text-white shadow-md'
                  : 'text-soft-slate'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-mint-sage text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-8 ${
                plan.popular
                  ? 'ring-2 ring-healthcare-blue shadow-premium-hover'
                  : 'shadow-premium'
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-healthcare-blue text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-medical-navy mb-2">
                {plan.name}
              </h3>

              <div className="mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isYearly ? 'yearly' : 'monthly'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="text-5xl font-bold text-medical-navy">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-soft-slate">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-mint-sage flex-shrink-0 mt-0.5" />
                    <span className="text-soft-slate">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                className="w-full"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
