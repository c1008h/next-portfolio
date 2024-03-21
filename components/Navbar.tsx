import React, { useState, useEffect } from 'react'
import Link from 'next/link'; 
import { handleScrollToSection } from '@/utils/scroll';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowNavbar = window.scrollY > 800;
      setShowNavbar(shouldShowNavbar);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex flex-row justify-between fixed top-0 left-0 w-full px-10 py-5 bg-gray-800 text-white shadow-md transition-opacity duration-300 ease-in-out ${showNavbar ? 'opacity-100 hover:opacity-100' : 'opacity-0 hover:opacity-100'} z-50`}>
      <h2 className="text-xl font-bold">Chris Hong</h2>
      <ul className='flex flex-row space-x-4'>
        <li className="hover:text-blue-300 transition-colors" onClick={() => handleScrollToSection('about')}>
          About
        </li>
        <li className="hover:text-blue-300 transition-colors" onClick={() => handleScrollToSection('projects')}>
          Projects
        </li>
        <li className="hover:text-blue-300 transition-colors" onClick={() => handleScrollToSection('experience')}>
          Experience
        </li>
        <li className="hover:text-blue-300 transition-colors" onClick={() => handleScrollToSection('contact')}>
          Contact
        </li>
        <li className="hover:text-blue-300 transition-colors">
          {/* <Link href="/path/to/resume.pdf" passHref> */}
            <a target="_blank" rel="noopener noreferrer">Resume</a>
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  )
}
