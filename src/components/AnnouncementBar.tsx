'use client'

export default function AnnouncementBar() {
  const message = "✨ Newcastle's favourite mobile spray tanning service — professional, natural & delivered to your door ✨"
  const repeated = Array(6).fill(message).join('   •   ')

  return (
    <div className="bg-neutral-800 text-white text-xs font-medium tracking-wide py-2.5 overflow-hidden">
      <div className="flex">
        <div className="marquee-track flex-shrink-0 flex whitespace-nowrap">
          <span className="px-8 opacity-90">{repeated}&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;{repeated}</span>
        </div>
      </div>
    </div>
  )
}
