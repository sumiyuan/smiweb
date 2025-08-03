import { forwardRef } from 'react'

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className='flex flex-col items-center justify-center h-screen w-full pt-20'>
      <h1 className='text-4xl font-bold mb-6 text-indigo-300'>Experience</h1>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-2xl font-bold mb-6 text-indigo-300'>Software Engineer Intern</h2>
          <p className='text-lg mb-6'>May 2024 - August 2024</p>
        </div>
      </div>
    </div>
  )
})

export default Experience;
