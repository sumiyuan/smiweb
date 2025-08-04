import { forwardRef } from 'react'
import JobExperience from './JobExperience'

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className='flex flex-col items-center justify-center min-h-screen w-full pt-20 px-4'>
      <h1 className='text-4xl font-bold mb-8 text-indigo-300'>Experience</h1>
      
      <div className='flex flex-col items-center justify-center w-full max-w-4xl'>
        <JobExperience
          name="Hong Kong Applied Science and Technology Research Institute"
          jobTitle="Machine Learning Intern"
          date="May 2024 - August 2024"
          location="Hong Kong SAR, China"
          responsibilities={[
            "Developed and maintained full-stack web applications using React, Node.js, and TypeScript",
            "Collaborated with cross-functional teams to implement new features and improve existing functionality",
            "Optimized database queries and improved application performance by 25%",
            "Participated in code reviews and contributed to team documentation"
          ]}
        />
        
        <JobExperience
          name="University of Toronto RoboCup Team"
          jobTitle="Software Lead"
          date="January 2023 - Present"
          location="Toronto, Canada"
          responsibilities={[
            "Built responsive web applications using modern JavaScript frameworks",
            "Implemented RESTful APIs and integrated third-party services",
            "Worked with version control systems and participated in agile development processes",
            "Debugged and resolved technical issues across multiple platforms"
          ]}
        />
      </div>

      <h1 className='text-4xl font-bold mb-8 text-indigo-300'>Projects</h1>

      <div className='flex flex-col items-center justify-center w-full max-w-4xl'>
      <div className='flex flex-col items-center justify-center w-full max-w-4xl'>
        <JobExperience
          name="Hong Kong Applied Science and Technology Research Institute"
          jobTitle="Machine Learning Intern"
          date="May 2024 - August 2024"
          location="Hong Kong SAR, China"
          responsibilities={[
            "Developed and maintained full-stack web applications using React, Node.js, and TypeScript",
            "Collaborated with cross-functional teams to implement new features and improve existing functionality",
            "Optimized database queries and improved application performance by 25%",
            "Participated in code reviews and contributed to team documentation"
          ]}
        />
        
        <JobExperience
          name="University of Toronto RoboCup Team"
          jobTitle="Software Lead"
          date="January 2023 - Present"
          location="Toronto, Canada"
          responsibilities={[
            "Built responsive web applications using modern JavaScript frameworks",
            "Implemented RESTful APIs and integrated third-party services",
            "Worked with version control systems and participated in agile development processes",
            "Debugged and resolved technical issues across multiple platforms"
          ]}
          liveLink="https://www.robocup.ca/"
          githubLink="https://github.com/toronto-robotics"
        />
      </div>
      </div>
    </div>
  )
})

export default Experience;
