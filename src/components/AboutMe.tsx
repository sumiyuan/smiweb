import { forwardRef } from 'react'

const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {

  return (
    <div ref={ref} className='h-screen w-full pt-20 relative'>
      {/* Section Banner */}
      {/* <div className='hidden md:flex top-0 left-0 w-full lg:h-25 md:h-20 bg-slate-900/40 backdrop-blur-sm absolute z-10 justify-center items-center'>
        <h2 className='text-2xl font-semibold text-slate-800/90'>
          01 About Me
        </h2>
      </div> */}

      {/* Section Content */}
      <div className='flex flex-col lg:flex-row items-center justify-center h-full px-4 md:px-8 lg:px-20 gap-8 lg:gap-16'>
        {/* Text */}
        <div className='text-white w-full lg:w-1/2'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-indigo-300'>About Me</h1>
          <p className='text-lg md:text-xl mb-6 md:mb-8'>
            I am an aspiring software engineer with a passion for building meaningful and impactful products. 
            I am currently a 4th year student at the <span className='text-indigo-300 font-semibold'>University of Toronto St. George campus</span>, studying Computer Science and Mathematics,
            with an interest in <span className='text-indigo-300'>software development</span>, <span className='text-indigo-300'>machine learning</span>, <span className='text-indigo-300'>robotics</span>, and <span className='text-indigo-300'>data science</span>.
            With a strong foundation in <span className='text-indigo-300'>Python</span> I am constantly learning and exploring new technologies to expand my skill set.
          </p>
          <p className='text-lg md:text-xl mb-6 md:mb-8'>
            Outside of academics, I am a passionate <span className='text-indigo-300'>robotics enthusiast</span> and <span className='text-indigo-300'>maker</span>.
            I was previously apart of the <span className='text-indigo-300'>University of Toronto Robotic Soccer Team</span> as a software lead, where I was in charge of the strategy and development of the team's software.
            I also enjoy rock climbing and have recently joined the executive team of the <span className='text-indigo-300'>University of Toronto Rock Climbing Club</span> as a <span className='text-indigo-300'>graphics designer</span> officer.
            Lastly, I am an avid gamer and enjoy playing <span className='text-indigo-300'>Valorant</span> and <span className='text-indigo-300'>League of Legends</span>, and have been apart of the University esports community for the duration of my study.
          </p>

          <p className='text-lg md:text-xl mb-6 md:mb-8'>
            I am currently looking for a <span className='text-indigo-300'>software engineering internship/full-time position</span> starting in January 2026.
          </p>
          <p className='text-lg md:text-xl mb-6 md:mb-8'>
            If you are interested in my work, please feel free to contact me at <a className='text-indigo-300' href='mailto:sunny.yuan0333@gmail.com'>sunny.yuan0333@gmail.com</a>.
          </p>
        </div>

        {/* Photo image hidden if mobile */}
        <div className='hidden lg:block'>
          <h1 className='text-6xl font-bold mb-6 text-indigo-300'>hehs</h1>
          {/* <img src={} alt="About Me" /> */}
        </div>
      </div>
    </div>
  )
})

export default AboutMe
