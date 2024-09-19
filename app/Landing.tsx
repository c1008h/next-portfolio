import React, { forwardRef } from 'react'
import Image from 'next/image'
import { handleScrollToSection } from '@/utils/scroll'
import { ButtonTemplate } from '@/components'
import avatarIcon from '@/public/images/chris-icon.png'
interface LandingProps {
}

const Landing = forwardRef<HTMLDivElement, LandingProps>((props, ref) => {
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
      id='landing'
    >
      <h1 className="text-6xl font-bold text-white">Chris Hong</h1>
      <div className='flex flex-row items-center gap-2'>
        <div className="hover:animate-bounce transition-transform duration-500 ease-in-out">
          <Image 
            alt='avatar' 
            src={avatarIcon} 
            height={500} 
            width={500}
            className="rounded-full"
            style={{ filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))' }}

          />
        </div>
        <p style={{ filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))' }} className="mt-4 text-xl font-extrabold leading-7 text-gray-300 font-mono">Software Engineer</p>
      </div>
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
