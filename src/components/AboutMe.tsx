import { forwardRef } from 'react'

const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {

  return (
    <div ref={ref} className='h-screen w-full pt-20 relative'>
      <div className='top-0 left-0 w-full h-25 bg-slate-900/40 backdrop-blur-sm absolute z-10 justify-center items-center flex'>
        <h2 className='text-2xl font-normal text-indigo-300'>
          01 About me
        </h2>
      </div>
      <div className='flex items-center justify-center h-full'>
        <div className='text-center text-white'>
          <h1 className='text-6xl font-bold mb-6 text-indigo-300'>About Me</h1>
          <p className='text-xl mb-8'>I'm a full-stack developer with a passion for building meaningful and impactful products.</p>
        </div>
      </div>
    </div>
  )
})

export default AboutMe
