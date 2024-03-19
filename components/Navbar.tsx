import React from 'react'

export default function Navbar() {
  return (
    <div className="flex w-screen justify-between">
        <h2>Chris Hong</h2>
        <ul className='flex flex-row'>
            <li>About</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Contact</li>
            <li>Resume</li>
        </ul>
    </div>
  )
}
