import React from 'react'

export default function Current() {
  return (
    <div id="current-projects" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">What I&apos;m Working On</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">The Lounge: A Unified Messaging Platform</h3>
          <p className="text-md text-gray-600">
            Engaging with the full stack to create The Lounge, leveraging Next.js, Socket.IO, Firebase, TypeScript, and Node.js. The project focuses on real-time messaging across web and desktop platforms, with an emphasis on reliability and seamless user experiences. The integration of these technologies presents an exciting challenge, particularly in architecting a scalable backend and intuitive UI.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">TrailMix: Connecting Hikers with Real-Time Trail Updates</h3>
          <p className="text-md text-gray-600">
            Developing TrailMix, a React Native app for iOS that aims to enhance the hiking experience with live updates and community-driven insights. Using Firebase and Socket.IO, the app provides a platform for real-time information sharing among outdoor enthusiasts. The project tests the boundaries of mobile app development, focusing on performance and user engagement.
          </p>
        </div>
      </div>
    </div>

  )
}
