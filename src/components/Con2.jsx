import { useEffect, useRef } from 'react'
import facebookIcon from '../assets/con2-facebook.png'
import instagramIcon from '../assets/con2-instagram.png'
import blogIcon from '../assets/con2-blog.png'
import productImage from '../assets/con2-product-image.png'
import '../styles/con2.css'

function Con2() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      section.classList.add('con2--visible')
      observer.disconnect()
    }, { rootMargin: '0px 0px -15% 0px', threshold: 0 })

    section.classList.add('con2--reveal')
    observer.observe(section)
    return () => {
      observer.disconnect()
      section.classList.remove('con2--reveal', 'con2--visible')
    }
  }, [])

  return (
    <section className="con2" ref={sectionRef} aria-label="Product Information">
      <div className="con2__panel">
        <div className="con2__copy">
          <div className="con2__eyebrow">
            <ul>
              <li><span>Product Information</span></li>
            </ul>
          </div>
          <h2 className="con2__title">
            <span>오늘도 창문은 닫았는데</span>
            <span>공기는 괜찮을까요?</span>
          </h2>
          <div className="con2__description">
            <p>
              고성능 3중 안심 필터로 밖의 미세먼지는 막고, 집 안을 상쾌하게 관리하세요.
              <br />
              환기 때문에 전기료까지 걱정하셨나요? 시원함도, 따뜻함도 지키면서 똑똑하게 환기하세요.
            </p>
            <p>누구나 쉽게,몇 분이면 끝나는 필터 교체.</p>
          </div>
        </div>

        <ul className="con2__social" aria-label="소셜 미디어">
          <li>
            <img src={facebookIcon} alt="Facebook" />
          </li>
          <li>
            <img src={instagramIcon} alt="Instagram" />
          </li>
          <li>
            <img src={blogIcon} alt="Naver Blog" />
          </li>
        </ul>
      </div>

      <div className="con2__image-frame">
        <img
          className="con2__image"
          src={productImage}
          alt="창가에서 바깥 풍경을 바라보는 사람과 넓은 창호"
        />
      </div>
    </section>
  )
}

export default Con2
