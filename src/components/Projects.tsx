import React, { forwardRef } from 'react'
import JobExperience from './JobExperience'

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full pt-10 px-4 py-16' ref={ref}>
        <h1 className='text-4xl font-bold mb-12 text-indigo-300'>Projects</h1>

        <div className='flex flex-col items-center justify-center w-full max-w-4xl space-y-8'>
        <JobExperience
            name="ClimbHub Mobile App"
            jobTitle="Developer"
            date="September 2024 - Present"
            location="Toronto, Canada"
            responsibilities={[
            "Designed and implemented an all in one competition planning web application using React, and Supabase allowing tournament organizers to easily manage invitation, participant information, and on the day tracking for climbs sent and score",
            "Designed and deployed mobile application using React Native for competitor on the day climb submission allowing for seamless compatibility and instantaneous rank update"
            ]}
        />
        
        <JobExperience
            name="CSC301 Project: AI code review agent"
            jobTitle="Developer"
            date="September 2024 - January 2025"
            location="Toronto, Canada"
            responsibilities={[
            "Led a 8 person software team to implement a code review command line algorithm using JavaScript that utilized Cohere AI to standardize code within client company Ollon to be used by 30+ employees.",
            "Developed and deployed various features requested by Ollon on Heroku using React for client verification and internal testing.",
            "Implemented functionality with scalability in mind, able to be scaled with more functionality with additional use cases."
            ]}
        />
        </div>
    </div>
  )}
)

export default Projects
