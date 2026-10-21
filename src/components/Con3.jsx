import reviewDot from '../assets/con3-dot-review.svg'
import introIcon from '../assets/con3-icon-int.svg'
import diagonalArrow from '../assets/con3-icon-arrow-up-right.svg'
import plusButtonWhite from '../assets/con3-plus-button-white.svg'
import plusDark from '../assets/con3-plus-white.svg'
import plusButtonGreen from '../assets/con3-plus-button-green.svg'
import plusLight from '../assets/con3-plus-green.svg'
import questionWindowIcon from '../assets/con3-icon-window.svg'
import questionDoubleWindowIcon from '../assets/con3-icon-double-window.svg'
import questionArchIcon from '../assets/con3-icon-arched-window.svg'
import questionGridIcon from '../assets/con3-icon-grid-window.svg'
import bannerImage from '../assets/con3-banner.png'
import automaticVentilationImage from '../assets/con3-card-automatic-ventilation.png'
import kitchenWindowImage from '../assets/con3-card-kitchen-window.png'
import insulationImage from '../assets/con3-card-insulation.png'
import benefitDot from '../assets/con3-dot-benefit.svg'
import awardIcon from '../assets/con3-award.svg'
import starIcon from '../assets/con3-star.svg'
import arrowLeftIcon from '../assets/con3-arrow-left.svg'
import arrowRightIcon from '../assets/con3-arrow-right.svg'
import '../styles/con3.css'

const questions = [
  { icon: questionWindowIcon, text: <>우리 집 창문,<br />아직 괜찮은 걸까요?</> },
  { icon: questionDoubleWindowIcon, text: <>우리 집에도<br />자동환기가 필요할까요?</> },
  { icon: questionArchIcon, text: <>창호 교체,<br />언제가 가장 적기일까요?</> },
  { icon: questionGridIcon, text: <>전기료를 줄이는<br />가장 쉬운 방법은 뭘까요?</> },
  { icon: questionWindowIcon, text: <>오래된 아파트도<br />새집처럼 달라질 수 있나요?</> },
]

const featureCards = [
  {
    image: automaticVentilationImage,
    imageClass: 'con3__feature-image--ventilation',
    imageAlt: '창호에 설치된 자동환기 장치',
    title: '휴그린 자동환기창 Pro',
    description: (
      <>
        <p>오늘도 창문은 닫았는데, 공기는 괜찮을까요?</p>
        <p>
          밖의 미세먼지는 막고, 집 안은 언제나 상쾌하게. 초미세먼지부터 유해 물질까지 효과적으로 걸러 더욱 깨끗하고 건강한 실내 공기를 유지합니다.
        </p>
      </>
    ),
  },
  {
    image: kitchenWindowImage,
    imageClass: 'con3__feature-image--kitchen',
    imageAlt: '창호가 설치된 모던한 주방',
    title: '주방 환기에 탁월한 프로젝트 창',
    description: (
      <>
        <p>요리 후에도 공기만큼은 가볍게.</p>
        <p>
          빠른 환기로 음식 냄새는 줄이고, 신선한 공기는 오래 머물도록 합니다. 매일 사용하는 주방을 더욱 쾌적하고 상쾌한 공간으로 만들어드립니다.
        </p>
      </>
    ),
  },
  {
    image: insulationImage,
    imageClass: 'con3__feature-image--insulation',
    imageAlt: '다양한 소재의 단열재 표면',
    title: '화재에 안전한 고성능 PF단열재',
    description: (
      <>
        <p>
          내열성과 내구성이 우수하여, PF 수지를 발포한<br />
          독립 기포율 95% 이상의 고성능 심재 준불연 단열재.
        </p>
        <p>
          보이지 않는 곳까지 안전을 생각한 설계로 오랜 시간 변함없는 단열 성능과 안심을 제공합니다.
        </p>
      </>
    ),
  },
]

function PlusButton({ variant = 'green', className = '' }) {
  const isWhite = variant === 'white'

  return (
    <span className={`con3__plus ${className}`} aria-hidden="true">
      <img src={isWhite ? plusButtonWhite : plusButtonGreen} alt="" />
      <img className="con3__plus-mark" src={isWhite ? plusDark : plusLight} alt="" />
    </span>
  )
}

function QuestionCard({ icon, text }) {
  return (
    <article className="con3__question-card">
      <img className="con3__question-icon" src={icon} alt="" />
      <h3 className="con3__question-text">{text}</h3>
      <PlusButton />
    </article>
  )
}

function FeatureCard({ image, imageClass, imageAlt, title, description }) {
  return (
    <article className="con3__feature-card">
      <div className="con3__feature-photo">
        <img className={imageClass} src={image} alt={imageAlt} />
      </div>
      <div className="con3__feature-copy">
        <div className="con3__feature-copy-inner">
          <p className="con3__feature-eyebrow">Easy mode</p>
          <div className="con3__feature-description-group">
            <h3 className="con3__feature-title">{title}</h3>
            <div className="con3__feature-description">{description}</div>
          </div>
        </div>
      </div>
    </article>
  )
}

function CurvedBenefitText() {
  return (
    <div className="con3__curved-text" aria-label="BEST BRAND HUGREEN">
      {[...'BEST BRAND - HUGREEN - '].map((character, index) => (
        <span
          key={`${character}-${index}`}
          style={{ '--rotation': `${index * 15}deg` }}
          aria-hidden="true"
        >
          {character}
        </span>
      ))}
    </div>
  )
}

function Con3() {
  return (
    <section className="con3" aria-label="고객 질문과 휴그린 혜택">
      <div className="con3__top-row">
        <div className="con3__review-panel">
          <div className="con3__review-label">
            <img src={reviewDot} alt="" />
            <span>Review</span>
          </div>
          <p className="con3__review-quote">
            겨울엔 춥고 여름엔 더웠던 우리 집.<br />
            창문을 바꾼 뒤 공기도, 생활도 편안해졌어요.
          </p>
        </div>

        <div className="con3__question-promo">
          <div className="con3__question-prompt">
            <div className="con3__prompt-label">
              <span><img src={introIcon} alt="" /></span>
              <span>int</span>
            </div>
            <div className="con3__prompt-copy">
              <p>
                가장 많이 묻는 질문부터 쉽게 알려드립니다.<br />
                창호가 어렵게 느껴진다면, 여기서부터 시작하세요!
              </p>
              <img src={diagonalArrow} alt="" />
            </div>
          </div>
          <div className="con3__consultation">
            <PlusButton variant="white" />
            <p>창.작 상담소 바로가기</p>
          </div>
        </div>
      </div>

      <div className="con3__questions">
        {questions.map((question, index) => (
          <QuestionCard key={index} {...question} />
        ))}
      </div>

      <div className="con3__banner">
        <img src={bannerImage} alt="창호가 있는 거실과 자연 풍경" />
        <p>HUGREEN</p>
      </div>

      <div className="con3__benefits">
        <div className="con3__benefit-column">
          <article className="con3__benefit-panel">
            <div className="con3__benefit-label">
              <img src={benefitDot} alt="" />
              <span>Benefit</span>
            </div>
            <CurvedBenefitText />
            <img className="con3__award" src={awardIcon} alt="" />
            <div className="con3__rating">
              <span>4.99</span>
              <img src={starIcon} alt="별점" />
            </div>
            <p className="con3__rating-copy">
              고객 만족도 1위!<br />
              많은 분들이 다시 휴그린을 선택하는 이유
            </p>
          </article>
          <div className="con3__arrows" aria-label="혜택 이미지 탐색 버튼">
            <span className="con3__arrow">
              <img src={arrowLeftIcon} alt="" />
            </span>
            <span className="con3__arrow">
              <img src={arrowRightIcon} alt="" />
            </span>
          </div>
        </div>

        {featureCards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Con3
