import React from 'react'

export default function Contact() {
  return (
    <div className='flex flex-col w-screen justify-center items-center p-5 bg-gray-100 text-gray-800'>
      <h4 className='text-lg text-blue-600 font-semibold mb-2'>What's Next?</h4>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>Get In Touch</h1>
      <p className='text-md text-gray-700 max-w-md text-center mb-5'>
        I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, feel free to drop me a message!
      </p>
      <a href="mailto:honggchriss@gmail.com" className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-150'>
        Say Hello
      </a>
    </div>
  )
}
