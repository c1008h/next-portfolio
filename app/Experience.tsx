import React, { useState } from 'react'
import experienceData from '@/constants/experienceData.json'
import extracurricularData from '@/constants/extracurricularData.json'
import educationData from '@/constants/educationData.json'
import { ButtonTemplate, SectionTemplate } from '@/components'
import Link from 'next/link';

export default function Experience() {
    const [showOther, setShowOther] = useState<boolean>(false)
    const [showEducation, setShowEducation] = useState<boolean>(false)

    const handleShowOther = () => setShowOther(!showOther)
    const handleShowEducation = () => setShowEducation(!showEducation)

    return (
        <div className='flex flex-col items-center py-16 bg-gray-50' id='experience'>
            <h1 className='text-4xl font-bold text-gray-800 mb-8'>Work Experiences</h1>
            <div className='flex flex-col w-4/5 mb-4'>
                {experienceData.map((experience) => (
                    <SectionTemplate
                        key={experience.id} 
                        {...experience}
                    />
                ))}
            </div>
            <ButtonTemplate 
                btnStyle={'text-blue-700 bg-blue-100 hover:bg-blue-200 font-medium py-2 px-4 rounded mb-4'}
                title={showOther ? 'Hide Other Experiences' : 'Show Other Experiences'} 
                action={handleShowOther} 
            />
            {showOther && (
                <div className='flex flex-col w-4/5'>
                    {extracurricularData.map((extra) => (
                        <SectionTemplate 
                            key={extra.id}
                            {...extra}
                        />
                    ))}
                </div>
            )}

            <ButtonTemplate 
                title={showEducation ? 'Hide Education' : 'Show Education'} 
                action={handleShowEducation} 
                btnStyle={'text-green-700 bg-green-100 hover:bg-green-200 font-medium py-2 px-4 rounded mb-4'}
            />
            {showEducation && (
                <div className='flex flex-col w-4/5'>
                    {educationData.map((education) => (
                       <SectionTemplate 
                       key={education.id}
                       {...education}
                   /> 
                    ))}
                </div>
            )}
        </div>
    )
}
