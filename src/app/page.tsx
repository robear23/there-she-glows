import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import About from '@/components/About'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider'

export default function Home() {
  return (
    <ScrollAnimationProvider>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </ScrollAnimationProvider>
  )
}
