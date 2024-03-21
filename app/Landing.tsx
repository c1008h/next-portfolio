import React, { forwardRef } from 'react'
import { handleScrollToSection } from '@/utils/scroll'
import { ButtonTemplate } from '@/components'
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
      className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center text-center"
    >
      <h1 className="text-6xl font-bold text-white">Chris Hong</h1>
      <p className="mt-4 text-xl text-gray-300">Full Stack Developer / Software Developer</p>
      <div className="mt-6">
        <ButtonTemplate 
          title={"Contact Me"}
          btnStyle={"mt-8 px-6 py-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-700 transition duration-300"}
          action={() => handleScrollToSection('contact')}
        />
      </div>
    </div>
  )
})

Landing.displayName = 'Landing';

export default Landing;
