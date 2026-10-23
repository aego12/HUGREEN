import { useEffect, useRef, useState } from 'react'
import divider from '../assets/intro-divider.svg'
import windowImage from '../assets/intro-window.png'
import heroImage from '../assets/hero-background.png'
import '../styles/intro.css'

function Intro({ onComplete }) {
  const [phase, setPhase] = useState(0)
  const cursorRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      onComplete()
      return undefined
    }

    const timers = []
    let cancelled = false
    const image = new Image()
    image.src = heroImage
    // Decode the destination before starting the handoff, including on cold loads.
    image.decode().catch(() => {}).then(() => {
      if (cancelled) return
      timers.push(
        window.setTimeout(() => setPhase(1), 350),
        window.setTimeout(() => setPhase(2), 1600),
      )
    })

    return () => {
      cancelled = true
      timers.forEach(window.clearTimeout)
    }
  }, [onComplete])

  function moveCursor(event) {
    if (!cursorRef.current) return
    cursorRef.current.style.left = `${event.clientX}px`
    cursorRef.current.style.top = `${event.clientY}px`
  }

  return (
    <section
      className={`intro intro--phase-${phase}`}
      aria-label="휴그린 인트로"
      onPointerMove={moveCursor}
      onTransitionEnd={(event) => {
        if (phase === 2 && event.target.classList.contains('intro__window') && event.propertyName === 'width') {
          setPhase(3)
        }
        if (phase === 3 && event.target === event.currentTarget && event.propertyName === 'opacity') {
          onComplete()
        }
      }}
    >
      <img className="intro__divider" src={divider} alt="" />
      <div className="intro__wordmark" aria-label="HUGREEN.">
        <span aria-hidden="true">HUGR</span>
        <span aria-hidden="true">EEN.</span>
      </div>
      <div className="intro__window" aria-hidden="true">
        <img className="intro__window-image" src={windowImage} alt="" />
        <img className="intro__hero-image hero__image" src={heroImage} alt="" />
        <img className="intro__window-divider" src={divider} alt="" />
      </div>
      <button className="intro__skip" type="button" ref={cursorRef} onClick={onComplete} aria-label="인트로 건너뛰기">
        SKIP
      </button>
    </section>
  )
}

export default Intro
