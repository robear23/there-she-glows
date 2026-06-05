'use client'
import { useState } from 'react'

const reviews = [
  {
    name: 'Sophie R.',
    location: 'Jesmond, Newcastle',
    rating: 5,
    text: "Jessica is absolutely amazing! She came to my house the evening before my holiday and my tan looked so natural and even. I've had spray tans before but nothing compares to the colour I got. Will definitely be booking again!",
    avatar: 'SR',
    date: 'August 2025',
  },
  {
    name: 'Emily T.',
    location: 'Gosforth, Newcastle',
    rating: 5,
    text: "Booked an express tan for my sister's wedding and I looked absolutely glowing in all the photos. Jessica was so professional, put me at ease immediately and the tan lasted nearly 2 weeks! Could not recommend more.",
    avatar: 'ET',
    date: 'July 2025',
  },
  {
    name: 'Lauren M.',
    location: 'Gateshead',
    rating: 5,
    text: "I was nervous about getting a spray tan for the first time but Jessica made it so easy and comfortable. She explained everything, gave great pre-tan advice and the result was stunning. Such a lovely, professional service.",
    avatar: 'LM',
    date: 'September 2025',
  },
  {
    name: 'Charlotte B.',
    location: 'Heaton, Newcastle',
    rating: 5,
    text: "I get a tan from Jessica every month now — I'm obsessed! The fact that she comes to your home is SO convenient. The tan is always perfect, no streaks, no orange, just a beautiful sun-kissed glow. 10/10!",
    avatar: 'CB',
    date: 'October 2025',
  },
  {
    name: 'Natalie K.',
    location: 'Tynemouth',
    rating: 5,
    text: "Had the bridal package before my wedding and honestly my skin looked incredible. Jessica spent so much time making sure everything was perfect. All my bridesmaids wanted her number afterwards!",
    avatar: 'NK',
    date: 'June 2025',
  },
  {
    name: 'Rachel W.',
    location: 'Ponteland',
    rating: 5,
    text: "Jessica is so talented and the service is brilliant. I love that you can book in the evening after work, she's really flexible. The tan smells amazing too — not the usual fake tan smell at all!",
    avatar: 'RW',
    date: 'November 2025',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [visible, setVisible] = useState(3)

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-label mb-4">Client Love</p>
          <h2 className="font-heading text-4xl lg:text-5xl text-neutral-800 mb-5">
            What My Clients Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Stars count={5} />
            <span className="text-neutral-700 font-semibold">5.0</span>
            <span className="text-neutral-400 text-sm">·</span>
            <span className="text-neutral-500 text-sm">Based on 80+ reviews</span>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, visible).map((review, i) => (
            <div
              key={review.name}
              data-stagger
              className="animate-on-scroll card group hover:border-primary/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="text-neutral-800 font-semibold text-sm">{review.name}</div>
                    <div className="text-neutral-400 text-xs">{review.location}</div>
                  </div>
                </div>
                <span className="text-neutral-300 text-xs">{review.date}</span>
              </div>

              <Stars count={review.rating} />

              <p className="text-neutral-600 text-sm leading-relaxed mt-3 italic">&ldquo;{review.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Load more */}
        {visible < reviews.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible(reviews.length)}
              className="btn-outline"
            >
              Show All Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
