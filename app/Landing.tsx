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
      className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-br from-[#A1CDF4] to-[#B5B1B2] text-center"

      // className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center text-center"
      id='landing'
    >
      <div className='flex flex-row justify-center items-center gap-2'>
        <div className="animate-float transition-transform duration-700 ease-in-out">
          <Image 
            alt='avatar' 
            src={avatarIcon} 
            height={500} 
            width={500}
            className="rounded-full"
            style={{ filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))' }}

          />
        </div>
        <div 
          className="transition-all duration-700 ease-in-out transform hover:scale-105 animate-fade-in"
          style={{ filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))' }}
        >
          <h1 className="text-6xl font-extrabold font-mono text-white">Chris Hong</h1>
          <p  className="mt-4 text-2xl font-extrabold leading-7 text-slate-100 font-mono">Software Engineer</p>
        </div>

      </div>
      <div className="mt-6">
        <ButtonTemplate 
          title={"Contact Me"}
          btnStyle="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
          action={() => handleScrollToSection('contact')}
        />
      </div>
    </div>
  )
})

Landing.displayName = 'Landing';

export default Landing;
