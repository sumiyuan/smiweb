const Navbar = ({ Page, heroRef, aboutRef }: { 
  Page: number; 
  heroRef: React.RefObject<HTMLDivElement | null>; 
  aboutRef: React.RefObject<HTMLDivElement | null>; 
}) => {

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
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
              className={`transition-colors duration-200 font-normal cursor-pointer ${Page === 2 ? 'text-indigo-300' : 'text-white hover:text-white/80'}`}
            >
              Services
            </button>
            <button 
              className={`transition-colors duration-200 font-normal cursor-pointer ${Page === 3 ? 'text-indigo-300' : 'text-white hover:text-white/80'}`}
            >
              Portfolio
            </button>
            <button 
              className={`transition-colors duration-200 font-normal cursor-pointer ${Page === 4 ? 'text-indigo-300' : 'text-white hover:text-white/80'}`}
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
