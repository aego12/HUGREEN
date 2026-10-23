import { useCallback, useState } from 'react'
import Intro from './components/Intro.jsx'
import Hero from './components/Hero.jsx'
import Con1 from './components/Con1.jsx'
import Con2 from './components/Con2.jsx'
import TextBox from './components/TextBox.jsx'
import Con3 from './components/Con3.jsx'
import Con4 from './components/Con4.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const completeIntro = useCallback(() => setIntroComplete(true), [])

  return (
    <>
      <main>
        <Hero isActive={introComplete} />
        <Con1 />
        <Con2 />
        <TextBox />
        <Con3 />
        <Con4 />
      </main>
      <Footer />
      {!introComplete && <Intro onComplete={completeIntro} />}
    </>
  )
}

export default App
