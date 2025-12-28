import { useState, useEffect } from 'react'
import { Calendar, Users, Activity, TrendingUp, Clock, AlertCircle } from 'lucide-react'
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      setAppointments([])
    }, 1500)
  }, [])

  const stats = [
    {
      label: 'Total Patients',
      value: '1,284',
      change: '+12%',
      icon: Users,
      color: 'healthcare-blue'
    },
    {
      label: 'Today\'s Appointments',
      value: '18',
      change: '+5',
      icon: Calendar,
      color: 'mint-sage'
    },
    {
      label: 'Active Sessions',
      value: '3',
      change: 'Now',
      icon: Activity,
      color: 'healthcare-blue'
    },
    {
      label: 'Patient Satisfaction',
      value: '98.5%',
      change: '+2.3%',
      icon: TrendingUp,
      color: 'mint-sage'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-medical-navy mb-2">
              Welcome back, Dr. Smith
            </h1>
            <p className="text-soft-slate">
              Here's what's happening with your practice today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={stat.label} delay={index * 0.1} hoverable>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-${stat.color}/10 rounded-lg`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                  <span className="text-xs font-medium text-mint-sage bg-mint-sage/10 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-medical-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-soft-slate">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2" delay={0.4}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-medical-navy flex items-center gap-2">
                  Quick Actions
                  <Tooltip content="Frequently used actions for your workflow">
                    <AlertCircle className="w-4 h-4 text-soft-slate cursor-help" />
                  </Tooltip>
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="primary" className="w-full h-24 flex-col gap-2">
                    <Calendar className="w-6 h-6" />
                    Book Appointment
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="secondary" className="w-full h-24 flex-col gap-2">
                    <Users className="w-6 h-6" />
                    Add Patient
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="secondary" className="w-full h-24 flex-col gap-2">
                    <Activity className="w-6 h-6" />
                    View Records
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="secondary" className="w-full h-24 flex-col gap-2">
                    <Clock className="w-6 h-6" />
                    Schedule
                  </Button>
                </motion.div>
              </div>
            </Card>

            <Card delay={0.5}>
              <h2 className="text-xl font-semibold text-medical-navy mb-6">
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
                    <div className="w-2 h-2 bg-healthcare-blue rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-medical-navy">
                        {activity.action}
                      </div>
                      <div className="text-xs text-soft-slate">{activity.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          <Card delay={0.6}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-medical-navy">
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
                message="Take a moment for yourself. No appointments scheduled for today."
                icon={Calendar}
              />
            ) : (
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <div className="font-medium text-medical-navy">
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
