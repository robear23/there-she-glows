'use client'
import { useState } from 'react'

const services = [
  {
    name: 'Classic Tan',
    price: 'From £25',
    duration: '30–45 min',
    description:
      'A beautiful, natural-looking tan developed overnight. Perfect for those who love a gradual, sun-kissed glow that lasts up to 10 days.',
    features: [
      'Personalised shade consultation',
      'Full-body application',
      'Lasts 7–10 days',
      'Pre-tan skin prep advice',
    ],
    image: '/images/classic-tan.png',
    popular: false,
    color: 'from-amber-50 to-orange-50',
  },
  {
    name: 'Express Tan',
    price: 'From £30',
    duration: '30 min',
    description:
      'Get a gorgeous golden glow in just 1–4 hours! Ideal when you need a stunning tan fast — perfect for last-minute events or a busy lifestyle.',
    features: [
      'Fast-developing formula',
      'Rinse off in 1–4 hours',
      'Deep, rich colour',
      'Ideal for events & occasions',
    ],
    image: '/images/express-tan.png',
    popular: true,
    color: 'from-rose-50 to-primary-light',
  },
  {
    name: 'Luxury Bridal Tan',
    price: 'From £50',
    duration: '60 min',
    description:
      'The ultimate pre-bridal glow experience. Includes a full skin consultation, exfoliation guide, and a luxurious tan application for your most important day.',
    features: [
      'Detailed skin consultation',
      'Luxury tanning solution',
      'Post-tan care pack included',
      'Touch-up service available',
    ],
    image: '/images/bridal-tan.png',
    popular: false,
    color: 'from-neutral-50 to-secondary/10',
  },
]

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-label mb-4">What I Offer</p>
          <h2 className="font-heading text-4xl lg:text-5xl text-neutral-800 mb-5">
            Tanning Services & Pricing
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto leading-relaxed">
            Every tan is uniquely tailored to you. Choose your perfect glow from our range of
            professional mobile tanning services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.name}
              data-stagger
              className="animate-on-scroll relative group cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wide">
                  Most Popular
                </div>
              )}
              <div
                className={`h-full rounded-lg border transition-all duration-300 overflow-hidden ${
                  service.popular
                    ? 'border-primary/40 shadow-xl'
                    : 'border-neutral-200 shadow-md hover:shadow-lg'
                } ${hovered === i ? 'scale-[1.02]' : ''}`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40`} />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-neutral-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading text-2xl text-neutral-800">{service.name}</h3>
                    <span className="text-primary font-semibold text-sm bg-primary-light px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-5">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
                        <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full py-3 rounded-md font-medium text-sm transition-all duration-200 ${
                      service.popular
                        ? 'bg-primary text-white hover:bg-primary-dark'
                        : 'btn-outline'
                    }`}
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-neutral-400 text-sm mt-10">
          All prices include travel within Newcastle. Group bookings & special event packages available — get in touch for a quote.
        </p>
      </div>
    </section>
  )
}
