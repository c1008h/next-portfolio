import React from 'react'

export default function Contact() {
  return (
<div className='flex flex-col items-center py-16 bg-gray-100' id='contact'>
  <h4 className='text-2xl text-blue-600 font-semibold mb-2'>What&apos;s Next?</h4>
  <h1 className='text-5xl font-bold text-gray-900 mb-6'>Get In Touch</h1>
  <p className='text-lg text-gray-700 max-w-md text-center mb-8'>
    I’m currently looking for new opportunities...
  </p>
  <a href="mailto:honggchriss@gmail.com" className='px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-150'>
    Say Hello
  </a>
</div>
  )
}
