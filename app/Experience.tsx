import React from 'react'
import experienceData from '@/constants/experienceData.json'
import { SectionTemplate } from '@/components'

export default function Experience() {
    return (
        <div className='flex flex-col w-screen justify-center items-center mt-10 p-5'>
            <h1>Work</h1>
            <div>
                {experienceData.map((experience) => (
                    <SectionTemplate
                        key={experience.id} 
                        {...experience}
                    />
                ))}
            </div>
        </div>
    )
}
