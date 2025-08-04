import { forwardRef } from 'react'

interface JobExperienceProps {
  name: string
  jobTitle: string
  date: string
  location: string
  responsibilities: string[]
  liveLink?: string
  githubLink?: string
}

const JobExperience = forwardRef<HTMLDivElement, JobExperienceProps>(({ name, jobTitle, date, location, responsibilities, liveLink, githubLink }, ref) => {
  return (
    <div ref={ref} className='bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8 border border-indigo-300/20 max-w-2xl'>
      <div className='mb-4'>
        <div className='flex justify-between items-center mb-1 mx-0.5'>
          <h3 className='text-2xl font-bold text-indigo-300 mb-2'>{name}</h3>
          <p className='text-indigo-300/80 text-lg'>{location}</p>
        </div>
        <div className='flex justify-between items-center mb-1'>
          <h4 className='text-xl font-semibold text-white'>{jobTitle}</h4>
          <p className='text-indigo-300/80 text-lg'>{date}</p>
        </div>
      </div>
      
      <div className='space-y-2'>
        <h5 className='text-white font-semibold mb-3'>Key Responsibilities:</h5>
        <ul className='space-y-2'>
          {responsibilities.map((responsibility, index) => (
            <li key={index} className='text-white/90 flex items-start'>
              <span className='text-indigo-300 mr-2 mt-1'>•</span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
      {(liveLink || githubLink) && (
        <div className='flex justify-center items-center mt-6 gap-8'>
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className='bg-emerald-500/60 backdrop-blur-sm text-white px-8 py-3 rounded-full border border-white/30 hover:bg-emerald-500/80 transition-all duration-200'
            >
              Live Link
            </a>
          )}
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className='bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200'
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  )
})

export default JobExperience 