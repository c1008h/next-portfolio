import React from 'react'

export default function Current() {
  return (
    <div className="bg-gray-50 p-5 my-10">
        <h2 className="text-3xl font-bold text-center mb-5">What I'm Working On</h2>
        <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700">
            Currently, I'm diving deep into [Technology or Framework], working on [Project Name], a project aimed at [Brief Project Goal]. I'm exploring [mention any specific feature or challenge], and I'm excited about the learning journey ahead.
            </p>
            <div className="mt-4 text-center">
            <a href="[Project_Link]" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">
                Check out the project
            </a>
            </div>
        </div>
    </div>
  )
}
