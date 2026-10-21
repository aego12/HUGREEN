import { useEffect, useRef, useState } from 'react'
import divider from '../assets/intro-divider.svg'
import windowImage from '../assets/intro-window.png'
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

    const timers = [
      window.setTimeout(() => setPhase(1), 350),
      window.setTimeout(() => setPhase(2), 1600),
      window.setTimeout(onComplete, 3300),
    ]

    return () => timers.forEach(window.clearTimeout)
  }, [onComplete])

  function moveCursor(event) {
    if (!cursorRef.current) return
    cursorRef.current.style.left = `${event.clientX}px`
    cursorRef.current.style.top = `${event.clientY}px`
  }

  return (
    <section className={`intro intro--phase-${phase}`} aria-label="휴그린 인트로" onPointerMove={moveCursor}>
      <img className="intro__divider" src={divider} alt="" />
      <div className="intro__wordmark" aria-label="HUGREEN.">
        <span aria-hidden="true">HUGR</span>
        <span aria-hidden="true">EEN.</span>
      </div>
      <div className="intro__window" aria-hidden="true">
        <img className="intro__window-image" src={windowImage} alt="" />
        <img className="intro__window-divider" src={divider} alt="" />
      </div>
      <button className="intro__skip" type="button" ref={cursorRef} onClick={onComplete} aria-label="인트로 건너뛰기">
        SKIP
      </button>
    </section>
  )
}

export default Intro
