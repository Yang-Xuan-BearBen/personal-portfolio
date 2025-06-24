import React from 'react'
import Navbar from './Ui/Navbar'
import MobileMenu from './Ui/MobileMenu'
import LoadingScreenAnimation from './Ui/LoadingScreenAnimation'
import Home from './Views/Home'
import About from './Views/About'
import Projects from './Views/Projects'
import Contact from './Views/Contact'
import Footer from './Views/Footer'
import AnimationWaves from './Ui/AnimationWaves'
import RevealOnScroll from './Ui/RevealOnScroll'

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {!isLoading && <LoadingScreenAnimation onComplete={() => { setIsLoading(true) }} />}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <RevealOnScroll>
        <Home />
        <AnimationWaves />
      </RevealOnScroll>
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </>
  )
}
