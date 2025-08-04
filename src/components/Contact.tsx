import React, { forwardRef } from 'react'

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="text-lg">
        I'm always looking for new opportunities and collaborations. Feel free to reach out to me via email or connect with me on LinkedIn.
      </p>
      <div className="flex flex-col items-center justify-center">
        <a href="mailto:contact@example.com" className="text-blue-500 hover:text-blue-700">Email</a>
        <a href="https://www.linkedin.com/in/your-profile" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
      </div>
    </div>
  )
})

export default Contact
