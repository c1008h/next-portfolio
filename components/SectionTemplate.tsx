import React from 'react'

interface RolesProps {
    title: string;
    description: string;
}

interface SectionTemplateProps {
    id: number;
    year: string;
    yearRange: string;
    name: string;
    skills?: string[];
    roles: RolesProps[];
}

export default function SectionTemplate({ 
    ...experience 
}: SectionTemplateProps) {

    const otherRoles = experience.roles.length > 1 && experience.roles.slice(1).map((role, index) => (
        <div key={index}>
            <h3 className="text-lg font-semibold">{role.title}</h3>
            {/* <p>{role.description}</p> */}
        </div>
    ))
    
    return (
        <div className='flex flex-row items-center bg-white shadow-md rounded-lg p-4 mb-3'>
            <div className='w-1/5 flex justify-center items-center'>
                <p className='text-sm font-medium text-gray-600'>{experience.yearRange}</p>
            </div>
            <div className='w-4/5 flex-col justify-center m-2'>
                <h3 className='text-xl font-semibold text-gray-800'>{experience.roles[0].title} @ <span className='font-normal'>{experience.name}</span></h3>
                {otherRoles}
                <p>{experience.roles[0].description}</p>
                <div className='flex flex-row flex-wrap mt-2'>
                    {Array.isArray(experience.skills) && experience.skills.map((skill, index) => (
                        <div
                            className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full' 
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
