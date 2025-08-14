import React, { forwardRef, useActionState, useState } from 'react'
import Icons from './icons/icons'
import emailjs from '@emailjs/browser'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
    // Hook reads the status of the *nearest* <form> action.
    const { pending } = useFormStatus();
  
    return (
      <button
        type="submit"
        disabled={pending}
        className="px-5 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    );
  }

const Contact = forwardRef<HTMLDivElement>((props, ref) => {

    const sendEmail = async (_prev: string | null, formData: FormData) => {
        try {
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                {
                    from_name: formData.get('name'),
                    from_email: formData.get('email'),
                    message: formData.get('message')
                },
                import.meta.env.VITE_PUBLIC_KEY
            )
            return 'Email sent successfully'
        } catch (error) {
            console.error('Error sending email:', error)
            return 'Failed to send email'
        }
    }

    const [statusMsg, formAction] = useActionState(sendEmail, null)

  return (
    <div ref={ref} className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-indigo-300">Let's Connect</h1>
      <p className="text-lg text-white px-4">
        Feel free to reach out to me via email or connect with me on LinkedIn for a coffee chat.
      </p>

      {/* Social Media Links */}
        <div className='flex items-center justify-center gap-4 mb-8 text-white pt-2'>
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

        {/* Email Form*/}
        <form action={formAction} className='flex flex-col items-center justify-center w-full max-w-2xl px-4'>
            <div className='w-full mb-4'>
                <label htmlFor="name" className="block mb-1 font-medium text-white">Name</label>
                <input type="text" name="name" id="name" required placeholder='Your Name' className='w-full p-3 rounded-md border border-gray-300 text-white bg-transparent'/>
            </div>
            <div className='w-full mb-4'>
                <label htmlFor="email" className="block mb-1 font-medium text-white">Email</label>
                <input type="email" name="email" id="email" required placeholder='Your Email' className='w-full p-3 rounded-md border border-gray-300 text-white bg-transparent'/>
            </div>

            <div className='w-full mb-4'>
          <label htmlFor="message" className="block mb-1 font-medium text-white">
                Message
            </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full p-3 border rounded-md text-white bg-transparent"
                    placeholder="Your message…"
                />
            </div>
            <SubmitButton />
        </form>
        
    </div>
  )
})

export default Contact
