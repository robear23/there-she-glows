'use client'
import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('is-visible')
            // Stagger children
            const children = el.querySelectorAll('[data-stagger]')
            children.forEach((child, i) => {
              ;(child as HTMLElement).style.transitionDelay = `${i * 120}ms`
              child.classList.add('is-visible')
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const elements = document.querySelectorAll(
      '.animate-on-scroll, .animate-from-left, .animate-from-right'
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}
