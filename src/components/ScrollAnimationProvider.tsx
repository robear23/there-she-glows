'use client'
import { useEffect } from 'react'

export default function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            const staggered = entry.target.querySelectorAll('[data-stagger]')
            staggered.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('is-visible')
              }, i * 130)
            })
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.animate-on-scroll, .animate-from-left, .animate-from-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return <>{children}</>
}
