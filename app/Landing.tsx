import React, { forwardRef } from 'react'

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
      className='flex flex-col w-screen h-screen justify-center items-center content-center self-center'
    >
        <h1>Chris Hong</h1>
        <p>Full Stack Developer / Software Developer</p>
    </div>
  )
})

Landing.displayName = 'Landing';

export default Landing;
