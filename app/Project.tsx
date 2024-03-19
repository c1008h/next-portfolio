"use client"
import React, { useState } from 'react'
import { ButtonTemplate } from '@/components'

export default function Project() {
    const [activeTab, setActiveTab] = useState('Web Development');

    const btnBaseStyle = 'border px-4 py-2 text-sm font-medium leading-5 transition-colors duration-150 rounded-lg focus:outline-none';
    const btnActiveStyle = 'border-blue-500 text-blue-700 bg-blue-100';
    const btnInactiveStyle = 'border-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-50';

    const getBtnStyle = (title: string) => 
        `${btnBaseStyle} ${activeTab === title ? btnActiveStyle : btnInactiveStyle}`;

    return (
        <div className='flex flex-col w-screen h-screen items-center p-5'>
            <h1>My Latest Projects</h1>
            <div className='w-3/4 flex flex-row justify-evenly m-5'>
                {['Web Development', 'Mobile', 'Desktop', 'All'].map((title) => (
                    <ButtonTemplate 
                        key={title}
                        title={title} 
                        action={() => setActiveTab(title)}
                        btnStyle={getBtnStyle(title)} 
                    />
                ))}
            </div>
        </div>
    )
}
