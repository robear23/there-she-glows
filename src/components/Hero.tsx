'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Beautiful glowing skin"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/50 to-neutral-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
      </div>

      {/* Decorative warm glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-white/90 text-xs font-medium tracking-widest uppercase">
              Mobile Tanning · Newcastle upon Tyne
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`font-heading text-5xl sm:text-6xl text-white leading-[1.05] mb-6 transition-all duration-700 delay-100 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Your Glow,{' '}
            <span className="italic text-secondary">Delivered</span>
            <br />
            to Your Door
          </h1>

          {/* Sub */}
          <p
            className={`text-white/80 text-lg leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Professional mobile spray tanning by Jessica Murphy. Sun-kissed, natural colour tailored
            to you — in the comfort of your own home.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button onClick={scrollToContact} className="btn-primary text-base px-8 py-4">
              Book Your Tan
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 text-white border border-white/40 hover:border-white/80 hover:bg-white/10 text-base px-8 py-4 rounded-md transition-all duration-200 font-medium"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/20 transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {[
              { value: '200+', label: 'Happy Clients' },
              { value: '5★', label: 'Average Rating' },
              { value: '100%', label: 'Mobile Service' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-white text-3xl font-heading">{stat.value}</div>
                <div className="text-white/60 text-sm font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>


    </section>
  )
}
