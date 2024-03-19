"use client"
import React, { useState, useEffect } from 'react'
import { ButtonTemplate, CardTemplate } from '@/components'
import projectData from '@/constants/projectData.json'
import { ProjectProps } from '@/interface/ProjectProps'

export default function Project() {
    const [activeTab, setActiveTab] = useState<string>('Web');
    const [displayProjects, setDisplayProjects] = useState<ProjectProps[]>([]);
    const initialDisplayCount = 3;

    useEffect(() => {
        console.log('projects data', projectData)
        const projectsToShow = projectData
        .filter(project => activeTab === 'All' || project.type === activeTab)
        .slice(0, displayProjects.length > initialDisplayCount ? projectData.length : initialDisplayCount);
    
        console.log('projects to show', projectsToShow)
        setDisplayProjects(projectsToShow);

    }, [activeTab, displayProjects.length]);

    const handleViewMore = () => setDisplayProjects(projectData.filter(project => activeTab === 'All' || project.type === activeTab));

    const btnBaseStyle = 'border px-4 py-2 text-sm font-medium leading-5 transition-colors duration-150 rounded-lg focus:outline-none';
    const btnActiveStyle = 'border-blue-500 text-blue-700 bg-blue-100';
    const btnInactiveStyle = 'border-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-50';

    const getBtnStyle = (title: string) => `${btnBaseStyle} ${activeTab === title ? btnActiveStyle : btnInactiveStyle}`;

    console.log('display projects:', displayProjects)
    return (
        <div className='flex flex-col w-screen h-screen items-center p-5'>
            <h1>My Latest Projects</h1>
            <div className='w-3/4 flex flex-row justify-evenly m-5'>
                {['Web', 'Mobile', 'Desktop', 'All'].map((title) => (
                    <ButtonTemplate 
                        key={title}
                        title={title} 
                        action={() => setActiveTab(title)}
                        btnStyle={getBtnStyle(title)} 
                    />
                ))}
            </div>
            <div className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4'>
                {displayProjects.map((project, index) => (
                    <CardTemplate 
                        key={project.id}
                        // title={project.title}
                        // subtitle={project.subtitle}
                        // description={project.description}
                        isReversed={index % 2 !== 0}
                        {...project}
                    />
                ))}
            </div>
            {projectData.filter(project => activeTab === 'All' || project.type === activeTab).length > initialDisplayCount && displayProjects.length <= initialDisplayCount && (
                <ButtonTemplate 
                    btnStyle="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    action={handleViewMore} 
                    title='View More'
                />
            )}
        </div>
    )
}
