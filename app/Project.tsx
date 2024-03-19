"use client"
import React, { useState, useEffect } from 'react'
import { ButtonTemplate, CardTemplate } from '@/components'
import projectData from '@/constants/projectData.json'
import { ProjectProps } from '@/interface/ProjectProps'

export default function Project() {
    const [activeTab, setActiveTab] = useState<string>('Web');
    const [displayProjects, setDisplayProjects] = useState<ProjectProps[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<ProjectProps[]>([]);
    const [isViewMoreClicked, setIsViewMoreClicked] = useState<boolean>(false);
    const initialDisplayCount = 3

    useEffect(() => {
        setIsViewMoreClicked(false);

        const filteredProjects = projectData.filter(project => project.type.toLowerCase() === activeTab.toLowerCase());
        const projectsToShow = isViewMoreClicked ? filteredProjects : filteredProjects.slice(0, initialDisplayCount);
        
        setFilteredProjects(filteredProjects)
        setDisplayProjects(projectsToShow);
    }, [activeTab, isViewMoreClicked]); 

    const handleViewMore = () => {
        console.log('Before toggle:', isViewMoreClicked);
        setIsViewMoreClicked(!isViewMoreClicked);
        console.log('After toggle:', !isViewMoreClicked); // This will show the intended state, not the updated state, due to the async nature of setState
    }

    useEffect(() => {
        console.log('isViewMoreClicked updated:', isViewMoreClicked);
    }, [isViewMoreClicked]);

    const btnBaseStyle = 'border px-4 py-2 text-sm font-medium leading-5 transition-colors duration-150 rounded-lg focus:outline-none';
    const btnActiveStyle = 'border-blue-500 text-blue-700 bg-blue-100';
    const btnInactiveStyle = 'border-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-50';

    const getBtnStyle = (title: string) => `${btnBaseStyle} ${activeTab === title ? btnActiveStyle : btnInactiveStyle}`;

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
            <div className='w-full max-w-4xl grid gap-4'>
                {isViewMoreClicked ? filteredProjects.map((project, index) => (
                    <CardTemplate 
                        key={project.id}
                        isReversed={index % 2 !== 0}
                        {...project}
                    />
                )) : filteredProjects.slice(0, initialDisplayCount).map((project, index) => (
                    <CardTemplate 
                        key={project.id}
                        isReversed={index % 2 !== 0}
                        {...project}
                    />
                ))}
            </div>
            {projectData.filter(project => project.type.toLowerCase() === activeTab.toLowerCase()).length > initialDisplayCount && (
                <ButtonTemplate 
                    btnStyle="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    action={handleViewMore} 
                    title={!isViewMoreClicked ? 'View More' : 'View Less'}
                />
            )} 
        </div>
    )
}
