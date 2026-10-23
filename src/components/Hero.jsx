import { useEffect, useState } from 'react'
import heroImage from '../assets/hero-background.png'
import springImage from '../assets/hero-slide-spring.png'
import autumnImage from '../assets/hero-slide-autumn.png'
import winterImage from '../assets/hero-slide-winter.png'
import logoImage from '../assets/hero-logo.png'
import menuIcon from '../assets/hero-menu.svg'
import '../styles/hero.css'

const heroSlides = [
  { image: heroImage, alt: '넓은 창 너머로 보이는 산과 호수, 창가에 서 있는 사람' },
  { image: springImage, alt: '봄 풍경을 배경으로 창가에 서 있는 사람' },
  { image: autumnImage, alt: '가을 풍경을 배경으로 창가에 서 있는 사람' },
  { image: winterImage, alt: '눈 덮인 겨울 풍경을 배경으로 창가에 서 있는 사람' },
]

const slideInterval = 5000

const navigationItems = [
  'PRODUCT',
  'BRAND',
  'CS CENTER',
  '대리점',
  '그린리모델링',
]

function Hero({ isActive = true }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(() => (
    typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ))

  useEffect(() => {
    if (isPaused || !isActive) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % heroSlides.length)
    }, slideInterval)

    return () => window.clearInterval(intervalId)
  }, [isPaused, isActive])

  return (
    <section className="hero" aria-label="휴그린 메인">
      <div
        className="hero__slider"
        role="region"
        aria-roledescription="carousel"
        aria-label="휴그린 창호 이미지"
        style={{ '--current-slide': currentSlide }}
      >
        <div className="hero__slider-track">
          {heroSlides.map((slide, index) => (
            <div
              className="hero__slide"
              key={slide.image}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} / ${heroSlides.length}`}
              aria-hidden={index !== currentSlide}
            >
              <img className="hero__image" src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </div>
        <button
          className="hero__slider-control"
          type="button"
          aria-pressed={isPaused}
          onClick={() => setIsPaused((paused) => !paused)}
        >
          {isPaused ? '자동 슬라이드 재생' : '자동 슬라이드 일시 정지'}
        </button>
      </div>

      <header className="hero__header">
        <img className="hero__logo" src={logoImage} alt="휴그린" />
        <nav className="hero__navigation" aria-label="주요 메뉴">
          <ul className="hero__navigation-list">
            {navigationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
        <span className="hero__menu" aria-hidden="true">
          <img src={menuIcon} alt="" />
        </span>
      </header>

      <div className="hero__copy">
        <p className="hero__tagline">창호에 대한 생각을 환기하다.</p>
        <h1 className="hero__wordmark">HUGREEN.</h1>
      </div>
    </section>
  )
}

export default Hero
