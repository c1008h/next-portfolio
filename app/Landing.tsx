import React, { forwardRef } from 'react'
import { handleScrollToSection } from '@/utils/scroll'
interface LandingProps {
}

const Landing = forwardRef<HTMLDivElement, LandingProps>((props, ref) => {
  // import Image from 'next/image';

// Inside your CardTemplate component
{/* <div className={imageClasses} style={{ position: 'relative' }}>
  <Image 
    src={project.image} 
    alt={`${project.title} project thumbnail`}
    layout='fill'
    objectFit='cover' // Adjust as needed: cover, contain, etc.
  />
</div> */}
  return (


    <div 
      ref={ref}
      className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100 text-center"
    >
      <h1 className="text-4xl font-bold text-gray-800">Chris Hong</h1>
      <p className="mt-3 text-xl text-gray-600">Full Stack Developer / Software Developer</p>
      <div className="mt-6">
        <p 
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          onClick={() => handleScrollToSection('contact')}
        >
          Contact Me
        </p>
      </div>
    </div>
  )
})

Landing.displayName = 'Landing';

export default Landing;
