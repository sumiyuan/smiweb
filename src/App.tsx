import Navbar from './components/navbar'
import Hero from './components/hero'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { useState, useEffect, useRef } from 'react'

const App = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Section in view:', entry.target)
            if (entry.target === experienceRef.current) {
              setCurrentPage(2)
              console.log('experience section in view')
            } else if (entry.target === projectsRef.current) {
              setCurrentPage(2)
              console.log('projects section in view')
            } else if (entry.target === aboutRef.current) {
              setCurrentPage(1)
              console.log('About Me section in view')
            } else if (entry.target === heroRef.current) {
              setCurrentPage(0)
              console.log('hero section in view')
            } else if (entry.target === contactRef.current) {
              setCurrentPage(3)
              console.log('Contact section in view')
            }
          }
        })
      },
      {
        threshold: [0, 0.25, 0.5],
        rootMargin: '0px 0px -50% 0px'
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
    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }
    if (contactRef.current) {
      observer.observe(contactRef.current)
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
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current)
      }
      if (contactRef.current) {
        observer.unobserve(contactRef.current)
      }
    }
  }, [])

  return (
    <div className='font-montserrat bg-slate-950 min-h-screen'>
      {/* <div style={{ width: '100%', height: '600px', position: 'relative'}}>
        <DarkVeil bgColor="bg-slate-950"/>
      </div> */}
      <Navbar Page={currentPage} heroRef={heroRef} aboutRef={aboutRef} experienceRef={experienceRef} contactRef={contactRef}/>
      <Hero ref={heroRef}/>
      <AboutMe ref={aboutRef}/>
      <Experience ref={experienceRef}/>
      <Projects ref={projectsRef}/>
      <Contact ref={contactRef}/>
    </div>
  )
}

export default App
