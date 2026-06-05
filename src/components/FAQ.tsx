'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How do I prepare for my spray tan?',
    a: "For the best results, exfoliate your skin 24 hours before your appointment and avoid using any oils or moisturisers on the day. Shave or wax at least 24 hours beforehand. Wear loose, dark clothing to your appointment and avoid tight clothing for at least 8 hours after.",
  },
  {
    q: 'How long will my tan last?',
    a: "A classic tan typically lasts 7–10 days with proper aftercare. An express tan can last slightly less. To extend the life of your tan, moisturise daily, avoid long hot baths, and pat dry after showering rather than rubbing.",
  },
  {
    q: 'Will I look orange?',
    a: "Absolutely not! I use professional-grade tanning solutions that are carefully matched to your natural skin tone. I\'ll consult with you before your appointment to ensure the shade is perfect — natural, sun-kissed, and completely tailored to you.",
  },
  {
    q: 'Where in Newcastle do you travel to?',
    a: "I cover Newcastle upon Tyne and surrounding areas including Gateshead, Jesmond, Gosforth, Heaton, Fenham, Tynemouth, Whitley Bay, and more. Get in touch to confirm your location — I aim to accommodate as many areas as possible.",
  },
  {
    q: 'How long does the appointment take?',
    a: "A classic or express tan typically takes 30–45 minutes including consultation. The luxury bridal package takes around 60 minutes. I\'ll always allow time to chat through your preferences and any questions you have.",
  },
  {
    q: 'Can I shower after my spray tan?',
    a: "With a classic tan, avoid water for at least 8 hours and ideally overnight. With an express tan, you can shower in as little as 1–4 hours (depending on the depth you want). I\'ll give you full aftercare instructions after every appointment.",
  },
  {
    q: 'Do you offer group bookings?',
    a: "Yes! I love doing hen parties, bridal parties, and group sessions. Get in touch to discuss group rates and I\'ll put together a package that works for you and your group.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-surface-raised">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <div className="animate-from-left md:sticky md:top-32">
            <p className="section-label mb-4">FAQ</p>
            <h2 className="font-heading text-4xl text-neutral-800 mb-5">
              Common Questions
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-8">
              Got questions? I&apos;ve answered the most common ones below. If you can&apos;t find what
              you&apos;re looking for, don&apos;t hesitate to reach out directly.
            </p>
            <a
              href="https://wa.me/447000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Ask a Question
            </a>
          </div>

          {/* Accordion */}
          <div className="animate-from-right space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200 rounded-md overflow-hidden transition-shadow duration-200 hover:shadow-sm"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-neutral-800 font-semibold text-sm pr-4">{faq.q}</span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center transition-all duration-200 ${
                      open === i ? 'bg-primary border-primary rotate-45' : ''
                    }`}
                  >
                    <svg
                      className={`w-3 h-3 transition-colors duration-200 ${open === i ? 'text-white' : 'text-neutral-400'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
