import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 py-6 mt-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center flex flex-col justify-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Chris Hong. All rights reserved.
        </p>

        {/* <div className="flex mt-4 space-x-4">
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            Twitter
          </a>
          <a href="https://github.com/c1008h" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            GitHub
          </a>
          <a href="https://linkedin.com/in/hong-chris/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
            LinkedIn
          </a>
        </div> */}
      </div>
    </footer>
  )
}
