import titleVector from '../assets/text-box-title.svg'
import '../styles/text-box.css'

function TextBox() {
  return (
    <section className="text-box">
      <h2 className="text-box__heading">
        <img src={titleVector} alt="WHAT’S HUGREEN?" />
      </h2>
    </section>
  )
}

export default TextBox
