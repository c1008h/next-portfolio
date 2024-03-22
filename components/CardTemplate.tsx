import React, { useState } from 'react'
import { ButtonTemplate } from '@/components'
import Image from "next/image";

interface CardTemplateProps {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    github?: string;
    link?: string;
    demo?: string;
    type: string;
    isReversed?: boolean;
}

export default function CardTemplate({
    isReversed, ...project
}: CardTemplateProps) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    
    const maxChar = 100;
    const descriptionExceedsLimit = project.description.length > maxChar;
    const displayedDescription = showFullDescription || !descriptionExceedsLimit ? project.description : `${project.description.substring(0, maxChar)}...`;

    const toggleDescription = () => setShowFullDescription(!showFullDescription);


    const containerClasses = `m-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col ${
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } hover:shadow-xl transition-shadow duration-300`;
    
    const imageClasses = `w-full md:w-1/3 h-auto object-cover ${
        isReversed ? 'md:rounded-tr-lg md:rounded-br-lg' : 'md:rounded-tl-lg md:rounded-bl-lg'
    }`;
    
    return (
        <div className={containerClasses} key={project.id}>
            <Image 
                src={project.image} 
                alt={`${project.title} project thumbnail`} 
                className={imageClasses}
                width={500}
                height={300}
                fill={false}
            />
            <div className='p-6 flex flex-col justify-between'>
                <div>
                    <h1 className='font-bold text-xl text-gray-800 mb-2'>{project.title} - <span className='font-medium text-lg text-gray-600'>{project.subtitle}</span></h1>
                    <p className='text-gray-700 mb-4'>{displayedDescription}</p>
                    {descriptionExceedsLimit && (
                        <ButtonTemplate 
                            action={toggleDescription} 
                            btnStyle='text-blue-500 hover:text-blue-600 transition-colors'
                            title={showFullDescription ? 'View Less' : 'View More'}
                        />
                    )}                
                </div>
                <div className='flex flex-wrap justify-start items-center gap-2'>
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className='inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors'>View on GitHub</a>}
                    {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className='inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors'>Visit Website</a>}
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className='inline-block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors'>Live Demo</a>}
                </div>
            </div>
        </div>
    )
}
