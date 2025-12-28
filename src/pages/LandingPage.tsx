import Header from '../components/Header'
import Hero from '../components/Hero'
import SecuritySection from '../components/SecuritySection'
import Pricing from '../components/Pricing'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SecuritySection />
      <Pricing />
    </div>
  )
}
