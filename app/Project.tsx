"use client"
import React, { useState, useEffect } from 'react'
import { ButtonTemplate, CardTemplate } from '@/components'
import projectData from '@/constants/projectData.json'
import { ProjectProps } from '@/interface/ProjectProps'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Project() {
    const [activeTab, setActiveTab] = useState<string>('Web');
    const [filteredProjects, setFilteredProjects] = useState<ProjectProps[]>([]);
    const [isViewMoreClicked, setIsViewMoreClicked] = useState<boolean>(false);
    const displayCount = activeTab === 'All' ? filteredProjects.length : (isViewMoreClicked ? filteredProjects.length : 3);
    const router = useRouter();

    useEffect(() => {
        const newFilteredProjects = activeTab === 'All'
        ? projectData
        : projectData.filter(project => project.type.toLowerCase() === activeTab.toLowerCase());

        setFilteredProjects(newFilteredProjects)
    }, [activeTab]); 

    const toggleShowBtn = () => setIsViewMoreClicked(!isViewMoreClicked)

    const btnBaseStyle = 'border px-4 py-2 text-sm font-medium leading-5 transition-colors duration-150 rounded-lg focus:outline-none';
    const btnActiveStyle = 'border-blue-500 text-blue-700 bg-blue-100';
    const btnInactiveStyle = 'border-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-50';

    const getBtnStyle = (title: string) => `${btnBaseStyle} ${activeTab === title ? btnActiveStyle : btnInactiveStyle}`;

    const handleTabClick = (title: string) => {
        if (title === 'All') {
            router.push('/projects');
        } else {
            setActiveTab(title)
        }
    }
    return (
        <div className='flex flex-col items-center py-16' id='projects'>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
                My Projects
            </h1>            
            <div className='w-3/4 flex flex-row justify-evenly m-5'>
                {['Web', 'Mobile', 'Desktop', 'All'].map((title) => (
                    <ButtonTemplate 
                        key={title}
                        title={title} 
                        action={() => handleTabClick(title)}
                        btnStyle={getBtnStyle(title)} 
                    />
                ))}
            </div>
            <div className='w-full max-w-4xl grid gap-4'>
            {filteredProjects.slice(0, displayCount).map((project, index) => (
                    <CardTemplate 
                        key={project.id}
                        isReversed={index % 2 !== 0}
                        {...project}
                    />
                ))}
            </div>
            {activeTab !== 'All' && filteredProjects.length !== 0 && (
                <ButtonTemplate 
                    btnStyle="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    action={toggleShowBtn} 
                    title={!isViewMoreClicked ? 'View More' : 'View Less'}
                />
            )} 
        </div>
    )
}
