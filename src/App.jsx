import { useState } from 'react'
import { Header1 } from './components/header1/header1-card'
import { Header2 } from './components/header2/header2-card'
import { Hero1 } from './components/hero1/hero-card'
import { Hero2 } from './components/hero2/hero2-card'
import { Hero3 } from './components/hero3/hero3-card'
import { Service1 } from './components/service-1/service1-card'
import { Service2 } from './components/service-2/service2-card'
import { Footer1 } from './components/footer1/footer-card'
import { Footer2 } from './components/footer2/footer2-card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header1 />
      <Header2 />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Service1 />
      <Service2 />
      <Footer1 />
      <Footer2 />
    </>
  )
}

export default App
