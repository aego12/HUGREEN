import heroImage from '../assets/con4-main-photo.png'
import plusButton from '../assets/con4-plus-button.svg'
import plusMark from '../assets/con4-plus.svg'
import circleIcon from '../assets/con4-icon-circle.svg'
import windowIcon from '../assets/con4-icon-window.svg'
import circleWindowIcon from '../assets/con4-icon-circle-window.svg'
import review1Image from '../assets/con4-review-1.svg'
import review2Image from '../assets/con4-review-2.svg'
import review3Image from '../assets/con4-review-3.svg'
import review4Image from '../assets/con4-review-4.svg'
import review5Image from '../assets/con4-review-5.svg'
import review6Image from '../assets/con4-review-6.svg'
import review7Image from '../assets/con4-review-7.svg'
import review8Image from '../assets/con4-review-8.svg'
import '../styles/con4.css'

const reviews = [
  {
    image: review1Image,
    alt: '휴그린 창호를 설치한 아파트 거실',
    title: '20년 된 구축아파트, 휴그린 창호로 교체했어요',
    author: '강** (40대) 경기 남양주시',
    quote: '0년 된 구축아파트라 창호의 기본적인 사항이 문제였어요. 내외부의 풍압 및 온도 차단이 안되는 문제와 환기 고민을 해결해 준 휴그린 자동환기창 Pro 실내 공기 오염도를 자동으로 감지해주니 환기 걱정없고 가족들과 함께하는 매일의 일상 속 삶의 질이 업그레이드 되어 무척 만족스럽습니다.',
  },
  {
    image: review2Image,
    alt: '대로변 아파트에 설치한 휴그린 창호',
    title: '대로변 아파트의 소음과 환기 걱정 끝',
    author: '박** (40대) 경기 하남시',
    quote: '큰 도로에 가까운 아파트라 소음이 심한 편인데 창문을 닫아도 소음이 줄지 않아 불편했어요. 휴그린 원데이 시공을 알게 되어 반나절만에 거실창호를 교체했습니다. 환기를 생각해서 자동환기창 Pro를 설치했는데 에어컨 켤 때도 난방 할 때도 창문을 열지 않고 환기할 수 있어서 열손실이 적어 전기세를 아낄 수 있게 되었어요',
  },
  {
    image: review3Image,
    alt: '새 창호로 교체한 아파트 거실',
    title: '오래된 창문을 바꾸니 집 안 분위기까지 달라졌어요',
    author: '김** (40대) 서울 강동구',
    quote: '15년 넘게 살던 아파트라 창문 틈으로 찬바람이 들어오는 게 가장 큰 고민이었어요. 특히 겨울에는 난방을 해도 거실이 쉽게 따뜻해지지 않았는데, 휴그린 창호로 교체하고 나니 창가에 앉아 있어도 전보다 훨씬 편안해졌어요. 집 안 분위기까지 깔끔해져서 만족스럽습니다.',
  },
  {
    image: review4Image,
    alt: '휴그린 자동환기창 리모컨',
    title: '환기 걱정이 줄어드니 일상이 한결 편해졌어요',
    author: '이** (30대) 경기 성남시',
    quote: '맞벌이 부부라 집에 있는 시간이 많지 않아 평소 환기에 신경 쓰기가 어려웠어요. 그래서 이번에 휴그린 자동환기창 Pro를 선택했습니다. 실내 공기 상태에 따라 자동으로 환기를 도와주니 매번 창문을 열어야 하는 번거로움이 줄었어요. 아이와 함께 생활하는 공간이라 더욱 만족하고 있습니다.',
  },
  {
    image: review5Image,
    alt: '휴그린 창호를 설치한 아파트 거실',
    title: '밖에서 들리던 소음이 줄어들어 만족해요',
    author: '박** (50대) 인천 연수구',
    quote: '집 앞에 도로가 있어서 자동차 소음 때문에 스트레스를 많이 받았어요. 창문을 닫아도 외부 소리가 들려 창호 교체를 고민하다가 휴그린을 선택했습니다. 교체 후에는 이전보다 외부 소음이 덜 들려 집에서 쉬는 시간이 훨씬 편안해졌어요. 진작 바꿀 걸 그랬다는 생각이 듭니다.',
  },
  {
    image: review6Image,
    alt: '겨울철 창가에 설치한 휴그린 창호',
    title: '겨울마다 고민이던 찬바람, 이제는 걱정이 줄었어요',
    author: '정** (40대) 경기 수원시',
    quote: '겨울만 되면 창문 근처에서 찬바람이 느껴져 두꺼운 커튼을 꼭 쳐두곤 했어요. 오래된 창호를 교체하면서 단열을 가장 중요하게 생각했는데, 휴그린으로 바꾼 뒤에는 창가에서도 이전보다 따뜻하게 지낼 수 있어요. 가족들도 달라진 점을 느끼고 있어 만족스러운 선택이었습니다.',
  },
  {
    image: review7Image,
    alt: '부모님 댁에 설치한 휴그린 창호',
    title: '부모님 댁 창호를 교체해 드렸어요',
    author: '한** (20대) 경기 고양시',
    quote: '부모님이 오래된 아파트에 거주하고 계셔서 겨울철 추위와 창문 사용이 늘 걱정이었음. 이번에 휴그린 창호로 교체해 드렸는데, 창문도 부드럽게 열리고 닫혀서 사용하기 편하다고 하시네요. 실내도 이전보다 쾌적해진 것 같다고 좋아하셔서 저도 뿌듯합니다.',
  },
  {
    image: review8Image,
    alt: '휴그린 자동환기창이 설치된 거실',
    title: '창문 하나 바꿨을 뿐인데 생활이 달라졌어요',
    author: '윤** (40대) 대전 유성구',
    quote: '미세먼지가 심한 날에는 창문을 열어도 되는지 매번 고민했어요. 휴그린 자동환기창 Pro를 설치한 후에는 실내 공기 상태를 확인하고 환기를 관리할 수 있어 편리합니다. 특히 요리 후 실내 공기가 답답하게 느껴질 때 유용하게 사용하고 있어요. 가족들이 생활하는 공간을 더 편하게 관리할 수 있다는 점이 마음에 듭니다.',
  },
]

const benefits = [circleIcon, windowIcon, circleWindowIcon]

function PlusButton() {
  return (
    <span className="con4__plus" aria-hidden="true">
      <img src={plusButton} alt="" />
      <img className="con4__plus-mark" src={plusMark} alt="" />
    </span>
  )
}

function ReviewCard({ review }) {
  return (
    <article className="con4__review-card">
      <div className="con4__review-image">
        <img src={review.image} alt={review.alt} />
      </div>
      <h3 className="con4__review-title">{review.title}</h3>
      <p className="con4__review-author">{review.author}</p>
      <p className="con4__review-quote">{review.quote}</p>
      <span className="con4__more">more</span>
    </article>
  )
}

function ReviewColumn({ items, direction }) {
  return (
    <div className={`con4__review-column con4__review-column--${direction}`}>
      <div className="con4__review-track">
        {[0, 1].map((copy) => (
          <div className="con4__review-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {items.map((review) => (
              <ReviewCard key={review.title} review={review} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function Con4() {
  return (
    <section className="con4" aria-label="휴그린 고객 후기">
      <article className="con4__intro-panel">
        <img className="con4__hero-image" src={heroImage} alt="휴그린 창호를 설치한 거실과 바깥 풍경" />
        <div className="con4__intro-heading">
          <span className="con4__review-badge">BEST review</span>
          <h2>평범했던 공간의<br />놀라운 변화를 확인해 보세요.</h2>
        </div>
        <div className="con4__benefits" aria-hidden="true">
          {benefits.map((icon) => <img key={icon} src={icon} alt="" />)}
        </div>
        <p className="con4__intro-copy">
          우리 집, 이렇게 달라질 수 있어요.<br />
          창문 하나로 달라지는 공간의 분위기와 일상.<br />
          휴그린과 함께 새로워진 우리 집의 모습을 만나보세요.
        </p>
        <PlusButton />
      </article>

      <div className="con4__reviews" aria-label="고객 후기 카드">
        <ReviewColumn items={reviews.slice(0, 4)} direction="up" />
        <ReviewColumn items={reviews.slice(4)} direction="down" />
      </div>
    </section>
  )
}

export default Con4
