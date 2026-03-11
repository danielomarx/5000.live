import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import WhatIsIncluded from '@/components/WhatIsIncluded'
import HowItWorks from '@/components/HowItWorks'
import WhoIsItFor from '@/components/WhoIsItFor'
import Guarantee from '@/components/Guarantee'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhatIsIncluded />
        <HowItWorks />
        <WhoIsItFor />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
