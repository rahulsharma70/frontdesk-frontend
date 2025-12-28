import { useState, useEffect } from 'react'
import { Calendar, Users, Activity, TrendingUp, Clock, CircleAlert as AlertCircle, Heart, Zap, Plus } from 'lucide-react'
import Header from '../components/Header'
import Card from '../components/Card'
import Button from '../components/Button'
import EmptyState from '../components/EmptyState'
import SkeletonLoader from '../components/SkeletonLoader'
import Tooltip from '../components/Tooltip'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [appointments, setAppointments] = useState<any[]>([])
  const [loadingMessage, setLoadingMessage] = useState('Securing your records...')

  useEffect(() => {
    const messages = [
      'Securing your records...',
      'Fetching your schedule...',
      'Preparing your dashboard...'
    ]
    
    let messageIndex = 0
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length
      setLoadingMessage(messages[messageIndex])
    }, 1000)

    setTimeout(() => {
      setIsLoading(false)
      setAppointments([])
      clearInterval(messageInterval)
    }, 1500)

    return () => clearInterval(messageInterval)
  }, [])

  const stats = [
    {
      label: 'Total Patients',
      value: '1,284',
      change: '+12%',
      icon: Users,
      color: 'vitality-mint',
      trend: 'up'
    },
    {
      label: 'Today\'s Appointments',
      value: '18',
      change: '+5',
      icon: Calendar,
      color: 'vitality-mint',
      trend: 'up'
    },
    {
      label: 'Active Sessions',
      value: '3',
      change: 'Now',
      icon: Activity,
      color: 'vitality-mint',
      trend: 'live'
    },
    {
      label: 'Patient Satisfaction',
      value: '98.5%',
      change: '+2.3%',
      icon: TrendingUp,
      color: 'vitality-mint',
      trend: 'up'
    }
  ]

  return (
    <div className="min-h-screen bg-canvas-gray">
      <Header />

      <main className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-3 h-3 bg-vitality-mint rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-vitality-mint">Live Dashboard</span>
            </div>
            <h1 className="text-4xl font-bold text-hospitality-blue mb-2">
              Welcome back, Dr. Smith
            </h1>
            <p className="text-soft-slate">
              Your practice ecosystem is thriving. Here's your real-time overview.
            </p>
          </motion.div>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 p-4 biophilic-glass rounded-2xl shadow-biophilic"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-vitality-mint border-t-transparent rounded-full"
                />
                <span className="text-hospitality-blue font-medium">{loadingMessage}</span>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={stat.label} delay={index * 0.1} hoverable variant="glass">
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-vitality-mint/10 to-emerald-600/10 rounded-xl"
                    whileHover={{ scale: 1.1 }}
                  >
                    <stat.icon className="w-6 h-6 text-vitality-mint" />
                  </div>
                  <motion.span 
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      stat.trend === 'live' 
                        ? 'text-vitality-mint bg-vitality-mint/10 animate-pulse' 
                        : 'text-vitality-mint bg-vitality-mint/10'
                    }`}
                    animate={stat.trend === 'live' ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.change}
                  </motion.span>
                </div>
                <motion.div 
                  className="text-3xl font-bold text-hospitality-blue mb-1"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-soft-slate">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2" delay={0.4} variant="glass">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-hospitality-blue flex items-center gap-2">
                  Quick Actions
                  <Tooltip content="Frequently used actions for your workflow">
                    <AlertCircle className="w-4 h-4 text-soft-slate cursor-help" />
                  </Tooltip>
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="emergency" className="w-full h-28 flex-col gap-3" magnetic>
                    <Heart className="w-8 h-8" />
                    Emergency Booking
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="primary" className="w-full h-28 flex-col gap-3">
                    <Calendar className="w-6 h-6" />
                    Book Appointment
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="secondary" className="w-full h-28 flex-col gap-3">
                    <Users className="w-6 h-6" />
                    Add Patient
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="secondary" className="w-full h-28 flex-col gap-3">
                    <Zap className="w-6 h-6" />
                    Quick Actions
                  </Button>
                </motion.div>
              </div>
            </Card>

            <Card delay={0.5} variant="glass">
              <h2 className="text-xl font-semibold text-hospitality-blue mb-6">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {[
                  { action: 'Patient check-in', time: '5 minutes ago' },
                  { action: 'Prescription sent', time: '23 minutes ago' },
                  { action: 'Lab results received', time: '1 hour ago' },
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 pb-4 border-b border-gray-100 last:border-0"
                  >
                    <motion.div 
                      className="w-3 h-3 bg-vitality-mint rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-hospitality-blue">
                        {activity.action}
                      </div>
                      <div className="text-xs text-soft-slate">{activity.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          <Card delay={0.6} variant="glass">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-hospitality-blue">
                My Appointments
              </h2>
              <Button variant="secondary" size="sm">
                View All
              </Button>
            </div>

            {isLoading ? (
              <SkeletonLoader count={3} />
            ) : appointments.length === 0 ? (
              <EmptyState
                title="Your schedule is clear"
                message="Take a moment for yourself. Your schedule is beautifully clear today. Use this time to focus on what matters most."
                icon={Calendar}
                actionText="Schedule New Appointment"
                onAction={() => console.log('Schedule appointment')}
              />
            ) : (
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-4 biophilic-glass rounded-xl"
                  >
                    <div>
                      <div className="font-medium text-hospitality-blue">
                        {appointment.patient}
                      </div>
                      <div className="text-sm text-soft-slate">
                        {appointment.time}
                      </div>
                    </div>
                    <Button variant="secondary" size="sm">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  )
}
