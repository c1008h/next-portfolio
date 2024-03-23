import React from 'react'
import { FaChevronDown, FaGithub, FaGithubAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import socialData from '@/constants/socialData.json'

export default function Sidebar() {

  return (
    <div className="flex flex-col fixed top-1/2 left-2.5 transform -translate-y-1/2 space-y-4 p-4 bg-white shadow-lg rounded-r-lg">
        <a href={`mailto:${socialData[0].email}`} className="hover:text-blue-500" aria-label="Email">
            <FaEnvelope size={30} />
        </a>
        <a href={socialData[0].github} target='__blank' className="hover:text-blue-500" aria-label="GitHub">
            <FaGithub size={30} />
        </a>
        {/* <FaGithubAlt size={30} /> */}
        <a href={socialData[0].linkedin} target='__blank' className="hover:text-blue-500" aria-label="LinkedIn">
            <FaLinkedin size={30} />
        </a>
    </div>
  )
}
