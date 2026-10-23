import { useEffect, useRef } from 'react'
import city from '../assets/con1-city.png'
import landscape from '../assets/con1-landscape.png'
import frame from '../assets/con1-frame.svg'
import topLine from '../assets/con1-line-top.svg'
import middleLine from '../assets/con1-line-middle.svg'
import bottomLine from '../assets/con1-line-bottom.svg'
import '../styles/con1.css'

const lines = [
  { before: '창호에', after: '대한', image: city, divider: topLine, crop: 'top' },
  { before: '생', after: '각을', image: city, divider: middleLine, crop: 'middle' },
  { before: '환기', after: '하다.', image: landscape, divider: bottomLine, crop: 'bottom' },
]

function MessageLine({ before, after, image, divider, crop }) {
  return (
    <span className={`con1__line con1__line--${crop}`} aria-hidden="true">
      <span>{before}</span>
      <span className="con1__window">
        <span className="con1__picture">
          <img className="con1__frame" src={frame} alt="" />
          <img className="con1__photo" src={image} alt="" />
          <img className="con1__divider" src={divider} alt="" />
        </span>
      </span>
      <span>{after}</span>
    </span>
  )
}

function Con1() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const rows = section.querySelectorAll('.con1__line')
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let request = 0

    function update() {
      request = 0
      const top = section.getBoundingClientRect().top
      // One continuous scroll range, staggered from the first line down.
      const travel = window.innerHeight * 0.36
      rows.forEach((row, index) => {
        const progress = preference.matches ? 1 : Math.max(0, Math.min(1,
          (window.innerHeight * 0.8 - top - index * travel * 0.35) / travel,
        ))
        row.style.setProperty('--reveal', progress)
      })
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
    <section className="con1" ref={sectionRef} aria-label="휴그린 브랜드 메시지">
      <h2 className="con1__heading" aria-label="창호에 대한 생각을 환기하다.">
        {lines.map((line) => <MessageLine key={line.crop} {...line} />)}
      </h2>
    </section>
  )
}

export default Con1
