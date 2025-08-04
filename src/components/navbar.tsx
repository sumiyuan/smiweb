const Navbar = ({ Page, heroRef, aboutRef, experienceRef, contactRef }: { 
  Page: number; 
  heroRef: React.RefObject<HTMLDivElement | null>; 
  aboutRef: React.RefObject<HTMLDivElement | null>; 
  experienceRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}) => {
  //console.log('Navbar Page value:', Page)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const element = ref.current
      const elementPosition = element.offsetTop - 10// Account for navbar height
      const startPosition = window.pageYOffset
      const distance = elementPosition - startPosition
      const duration = 300 // 0.5 seconds
      let start: number | null = null
      
      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2
        if (t < 1) return c / 2 * t * t + b
        t--
        return -c / 2 * (t * (t - 2) - 1) + b
      }
      
      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
      }
      
      requestAnimationFrame(animation)
    }
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
      <div className="bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-indigo-300/20 shadow-lg">
        <div className="flex items-center justify-between min-w-[600px]">
          {/* Left side - Name Box */}
          <div className="flex items-center">
            <h2 className='text-indigo-300 text-xl font-bold'>
                Sunny Y.
            </h2>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection(heroRef)} 
              className={`transition-colors duration-200 font-normal cursor-pointer ${Page === 0 ? 'text-indigo-300' : 'text-white hover:text-white/80'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection(aboutRef)} 
              className={`transition-colors duration-200 font-normal cursor-pointer ${Page === 1 ? 'text-indigo-300' : 'text-white hover:text-white/80'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection(experienceRef)}
              className={`transition-colors duration-200 font-normal cursor-pointer ${Page === 2 ? 'text-indigo-300' : 'text-white hover:text-white/80'}`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection(contactRef)}
              className={`transition-colors duration-200 font-normal cursor-pointer ${Page === 3 ? 'text-indigo-300' : 'text-white hover:text-white/80'}`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
