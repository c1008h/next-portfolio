import React from 'react'

interface SectionTemplateProps {
    id: number;
    year: string;
    yearRange: string;
    name: string;
    institute: string;
    description: string;
    skills: string[];
}

export default function SectionTemplate({ 
    ...experience 
}: SectionTemplateProps) {
  return (
    <div key={experience.id} className='flex flex-row items-center'>
        <div className='w-1/5 justify-center items-center'>
            <p>{experience.yearRange}</p>
        </div>
        <div className='w-4/5 flex-col justify-center m-2'>
            <h1>{experience.name} @ <span>{experience.institute}</span></h1>
            <p>{experience.description}</p>
            <div className='flex flex-row flex-wrap'>
                {Array.isArray(experience.skills) && experience.skills.map((skill, index) => (
                    <div
                        className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full' 
                        key={index}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
