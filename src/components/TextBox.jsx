import { useEffect, useRef, useState } from 'react'
import titleVector from '../assets/text-box-title.svg'
import '../styles/text-box.css'

const titles = ['WHAT’S HUGREEN?', 'WHY HUGREEN?', 'HOW HUGREEN?']

function TextBox() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [activeTitle, setActiveTitle] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let request = 0

    function update() {
      request = 0
      const heading = track.parentElement
      const start = (window.innerHeight - heading.offsetHeight) / 2
      const distance = section.offsetHeight - heading.offsetHeight
      const progress = Math.max(0, Math.min(2,
        (start - section.getBoundingClientRect().top) / distance * 2,
      ))
      const stage = Math.floor(progress)
      // Hold each title before sliding the next one through the same clip.
      const offset = stage + Math.max(0, (progress - stage - 0.3) / 0.7)
      const position = preference.matches ? Math.round(offset) : offset
      track.style.transform = `translateY(${-position * heading.offsetHeight}px)`
      setActiveTitle(Math.round(position))
    }

    function schedule() {
      if (!request) request = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    preference.addEventListener('change', schedule)
    return () => {
      window.cancelAnimationFrame(request)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      preference.removeEventListener('change', schedule)
    }
  }, [])

  return (
    <section className="text-box" ref={sectionRef}>
      <h2 className="text-box__heading" aria-label={titles[activeTitle]}>
        <span className="text-box__track" ref={trackRef} aria-hidden="true">
          {titles.map((title, index) => (
            <span className="text-box__slide" key={title}>
              {index === 0 ? <img src={titleVector} alt="" /> : title}
            </span>
          ))}
        </span>
      </h2>
    </section>
  )
}

export default TextBox
