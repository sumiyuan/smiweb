import Icons from './icons/icons'
import { forwardRef } from 'react'

const Hero = forwardRef<HTMLDivElement>((_, ref) => {

  return (
    <div ref={ref} className='h-screen w-full pt-20 pb-8 relative'>
        {/* Left Blob */}
      <div className='blob w-90 h-90 bg-pink-300 rounded-full absolute z-0 top-1/3 left-1/6 filter blur-3xl opacity-60 animate-blob'></div>


      <div className='blob w-130 h-130 bg-blue-600 rounded-full absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-3xl opacity-50 animate-blob3'></div>

      {/* Right Blob */}
      <div className='blob w-90 h-90 bg-violet-400 rounded-full absolute z-0 top-2/3 left-3/5 filter blur-3xl opacity-60 animate-blob2'></div>

      {/* Content */}
      <div className='flex items-center justify-center h-full relative z-10 px-4'>
        <div className='text-center text-white'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 text-indigo-300'>Hello, I'm Sunny Yuan</h1>
          <p className='text-lg md:text-xl mb-8'>I like to build meaningful and impactful products.</p>
          <div className='flex items-center justify-center gap-4 mb-8'>
            <a href="https://www.linkedin.com/in/suni-yuan/" className='hover:text-indigo-300 transition-colors duration-200'>
              <Icons names="linkedin" />
            </a>
            <a href="https://github.com/sumiyuan" className='hover:text-indigo-300 transition-colors duration-200'>
              <Icons names="github" />
            </a>
            <a href="https://www.instagram.com/smi_yuan/" className='hover:text-indigo-300 transition-colors duration-200'>
              <Icons names="instagram" />
            </a>
          </div>
          <a className='bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200' href="/Resume 2025.pdf">
            My Resume
          </a>
        </div>
      </div>
    </div>
  )
})

export default Hero
