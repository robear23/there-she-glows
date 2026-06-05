'use client'

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface-raised overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="animate-from-left relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <img
                src="/images/about-jessica.png"
                alt="Jessica Murphy performing mobile spray tan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 flex items-center gap-3 max-w-[200px]">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
              <div>
                <div className="text-neutral-800 font-semibold text-sm">Certified</div>
                <div className="text-neutral-500 text-xs">Professional Technician</div>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -top-8 -left-8 w-48 h-48 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
          </div>

          {/* Text column */}
          <div className="animate-from-right">
            <p className="section-label mb-4">About Jessica</p>
            <h2 className="font-heading text-4xl lg:text-5xl text-neutral-800 mb-6">
              Professional Tanning,{' '}
              <span className="italic text-primary">On Your Terms</span>
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              Hi! I&apos;m Jessica Murphy — a professionally trained spray tan technician based in
              Newcastle upon Tyne. I created <strong className="text-neutral-800">On The Glow</strong> to
              bring the salon experience directly to your home, making beautiful, natural-looking tans
              accessible for everyone.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Whether you&apos;re prepping for a holiday, a special occasion, or just want to feel your
              best every day — I offer a fully mobile, personal tanning service tailored to your skin
              tone and preferences. No salon queues, no travel, no stress. Just gorgeous colour and a
              service you can trust.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: '🏠', title: 'Fully Mobile', desc: 'I come to you, anywhere in Newcastle' },
                { icon: '🌿', title: 'Natural Results', desc: 'Tailored to your skin tone & desired depth' },
                { icon: '✨', title: 'Premium Solutions', desc: 'Professional-grade tanning products only' },
                { icon: '🕐', title: 'Flexible Booking', desc: 'Evenings & weekends available' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <div className="text-neutral-800 font-semibold text-sm">{item.title}</div>
                    <div className="text-neutral-500 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/447000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-3 text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
