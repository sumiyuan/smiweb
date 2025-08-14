import { forwardRef } from 'react'
import JobExperience from './JobExperience'

const Experience = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className='flex flex-col items-center justify-center min-h-screen w-full pt-20 px-4 py-16'>
      <h1 className='text-4xl font-bold mb-12 text-indigo-300'>Experience</h1>
      
      <div className='flex flex-col items-center justify-center w-full max-w-4xl space-y-8'>
        <JobExperience
          name="Hong Kong Applied Science and Technology Research Institute"
          jobTitle="Machine Learning Intern"
          date="May 2024 - August 2024"
          location="Hong Kong SAR, China"
          responsibilities={[
            "Led a team of 6 interns to design, implement and benchmark SAM1, SAM2 image segmentation model to detect metallic deformation defects in car parts using Python, Transformer and Pytorch",
            "Achieved an accuracy of 82% IoU comparing output mask to ground truth mask utilizing Adam optimizer and a custom dice cross entropy loss function for training",
            "Implemented an algorithm in Verilog to activate a camera and lights using an internal clock with the Vivado design suite on a Zynq 7400 series Xilinx Z7020 development board",
            "Initiated an after work rock climbing initiative that involved 20+ employees to experience bouldering"
          ]}
        />
        
        <JobExperience
          name="University of Toronto RoboCup Team"
          jobTitle="Software Lead"
          date="October 2022 - April 2025"
          location="Toronto, Canada"
          responsibilities={[
            "Led a 8 person software team to implement behavioral and scoring algorithms for the robot",
            "Rewritten and implemented main strategy code as a behavioral tree with PyTree and ROS1",
            "Designed and implemented 2D testing environment for strategy development and software debugging with PyGame",
            "Debugged robot operation strategies with Python and OpenCV within a simulated environment using WeBots",
            "Represented UofT internationally by competing and placing 4th overall at the 2023 RoboCup"
          ]}
          githubLink='https://github.com/utra-robosoccer/soccerbot'
        />
      </div>
    </div>
  )
})

export default Experience;
