import logo from '../assets/footer-logo.png'
import naverIcon from '../assets/footer-sns-naver.png'
import facebookIcon from '../assets/footer-sns-facebook.png'
import instagramIcon from '../assets/footer-sns-instagram.png'
import '../styles/footer.css'

const socialIcons = [
  { image: naverIcon, label: '네이버' },
  { image: facebookIcon, label: '페이스북' },
  { image: instagramIcon, label: '인스타그램' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__ticker" aria-hidden="true">
        <p>HUGREEN HUGREEN HUGREEN </p>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__information">
          <img className="site-footer__logo" src={logo} alt="휴그린" />

          <div className="site-footer__links-row">
            <nav className="site-footer__policy" aria-label="정책 안내">
              <span>서비스 이용약관</span>
              <span>개인정보 처리방침</span>
            </nav>
            <ul className="site-footer__socials" aria-label="소셜 미디어">
              {socialIcons.map(({ image, label }) => (
                <li key={label}><img src={image} alt={label} /></li>
              ))}
            </ul>
          </div>

          <div className="site-footer__company">
            <p>금호석유화학(주)&nbsp;04542 서울시 중구 청계천로 100, 시그니쳐 타워 동관 10층</p>
            <p aria-hidden="true">​</p>
            <p>COPYRIGHT© KUMHO PETROCHEMICAL. ALL RIGHT RESERVED</p>
          </div>
        </div>

        <div className="site-footer__wordmark" aria-hidden="true">
          <p>HUGREEN.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
