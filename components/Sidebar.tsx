import React from 'react'
import { FaChevronDown, FaGithub, FaGithubAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Sidebar() {
  return (
    <div className="flex flex-col fixed top-1/2 left-2.5 transform -translate-y-1/2 space-y-4 p-4 bg-white shadow-lg rounded-r-lg">
        <a href="mailto:honggchriss@gmail.com" className="hover:text-blue-500" aria-label="Email">
            <FaEnvelope size={30} />
        </a>
        <a href="https://github.com/c1008h" target='__blank' className="hover:text-blue-500" aria-label="GitHub">
            <FaGithub size={30} />
        </a>
        {/* <FaGithubAlt size={30} /> */}
        <a href="https://linkedin.com/in/hong-chris/" target='__blank' className="hover:text-blue-500" aria-label="LinkedIn">
            <FaLinkedin size={30} />
        </a>
    </div>
  )
}
