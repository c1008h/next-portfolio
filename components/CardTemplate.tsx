import React from 'react'
interface CardTemplateProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    github: string;
    link: string;
    demo: string;
    type: string;
    key: number;
    isReversed?: boolean;
}

export default function CardTemplate({
    key, isReversed, title, subtitle, description, image, github, link, demo, type
}: CardTemplateProps) {
    const containerClasses = `bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col ${
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } hover:shadow-xl transition-shadow duration-300`;
    
    const imageClasses = `w-full md:w-1/3 h-auto object-cover ${
        isReversed ? 'md:rounded-tr-lg md:rounded-br-lg' : 'md:rounded-tl-lg md:rounded-bl-lg'
    }`;
    
    return (
        <div className={containerClasses} key={key}>
            <img src={image} alt={`${title} project thumbnail`} className={imageClasses}/>
            <div className='p-6 flex flex-col justify-between'>
                <div>
                    <h1 className='font-bold text-xl text-gray-800 mb-2'>{title} - <span className='font-medium text-lg text-gray-600'>{subtitle}</span></h1>
                    <p className='text-gray-700 mb-4'>{description}</p>
                </div>
                <div className='flex flex-wrap justify-start items-center gap-2'>
                    {github && <a href={github} target="_blank" rel="noopener noreferrer" className='inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors'>View on GitHub</a>}
                    {link && <a href={link} target="_blank" rel="noopener noreferrer" className='inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors'>Visit Website</a>}
                    {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className='inline-block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors'>Live Demo</a>}
                </div>
            </div>
        </div>
    )
}
