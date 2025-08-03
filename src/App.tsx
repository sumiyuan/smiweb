import Navbar from './components/navbar'
import Hero from './components/hero'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import { useState, useEffect, useRef } from 'react'

const App = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) {
              setCurrentPage(0)
              //console.log('Hero section in view')
            } else if (entry.target === aboutRef.current) {
              setCurrentPage(1)
              //console.log('About Me section in view')
            } else if (entry.target === experienceRef.current) {
              setCurrentPage(2)
              //console.log('Experience section in view')
            }
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }
    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }
    if (experienceRef.current) {
      observer.observe(experienceRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current)
      }
    }
  }, [])

  return (
    <div className='font-montserrat bg-slate-950 min-h-screen'>
      <Navbar Page={currentPage} heroRef={heroRef} aboutRef={aboutRef} experienceRef={experienceRef}/>
      <Hero ref={heroRef}/>
      <AboutMe ref={aboutRef}/>
      <Experience ref={experienceRef}/>
    </div>
  )
}

export default App
