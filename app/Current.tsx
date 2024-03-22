import React, { useState } from 'react'
import { ModalTemplate, ButtonTemplate } from '@/components'

export default function Current() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<string>('');

  const handleOpenModal = (projectName: string) => {
    setCurrentProject(projectName);
    setIsModalOpen(true);
  };
  
  return (
    <div id="current-projects" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">What I&apos;m Currently Working On</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">The Lounge: Exploring Advanced Messaging Solutions</h3>
          {/* {short && <p>
            My current endeavor, The Lounge, is a deep dive into the synergy of Next.js, TypeScript, and Socket.IO, aimed at redefining real-time communication. This project goes beyond mere development, exploring how these technologies can interplay to create a robust and intuitive messaging platform. With Next.js enhancing SSR and static generation, TypeScript ensuring type safety, and Socket.IO facilitating real-time interactions, The Lounge aspires to set new standards in web-based communication, emphasizing reliability and a seamless user experience.
                      </p>} */}
            <p className="text-md text-gray-600">
              Dive into the synergy of Next.js, TypeScript, and Socket.IO with The Lounge. Click to learn more.

              {/* My current endeavor, The Lounge, focuses intensively on harnessing the power of Next.js, TypeScript, and Socket.IO to redefine the landscape of real-time communication. This project is not just about developing an application but about exploring the synergy between these cutting-edge technologies to create a messaging platform that's both robust and intuitive. By leveraging Next.js for server-side rendering and static site generation, TypeScript for adding type safety to enhance development efficiency and reduce runtime errors, and Socket.IO for enabling real-time, bidirectional communication between web clients and servers, I am aiming to push the boundaries of what's possible in web-based communication. The Lounge is a testament to my commitment to learning and mastering these technologies, with the goal of delivering a seamless user experience that prioritizes reliability and speed. */}
            </p>
            <ButtonTemplate 
              title={'Read more' }
              action={() => handleOpenModal('The Lounge')} 
              btnStyle={'text-blue-500 hover:underline'} 
            />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Untitled Communication App: Pioneering Real-Time Interactions</h3>
          <p className="text-md text-gray-600">
            {/* {short && <p>Embarking on a journey with an untitled communication app to revolutionize how we connect. Leveraging React Native for real-time updates and interactions, this project is all about enhancing connectivity and enriching the mobile communication experience.</p>} */}
            {/* In the realm of mobile development, I am embarking on an exciting journey with an untitled communication app. This project challenges me to leverage React Native, aiming to enhance how we connect and communicate in our daily lives. By incorporating real-time updates and interactions, I am delving into the complexities of networked communication, focusing on optimizing user engagement and app performance. This venture is not just about building another app—it's about pushing the boundaries of real-time technology to create meaningful connections and exploring how innovative solutions can improve our communication landscape. My objective is to deepen my understanding of mobile ecosystems and user experience design, marking another milestone in my continuous learning path. */}
            Join the journey with an untitled communication app aiming to revolutionize connectivity. Click to learn more.       
          </p>
          <ButtonTemplate 
            title={'Read more' }
            action={() => handleOpenModal('Untitled App')} 
            btnStyle={'text-blue-500 hover:underline'} 
          />
        </div>

        {isModalOpen && (
        <ModalTemplate onClose={() => setIsModalOpen(false)} label={currentProject} visible={isModalOpen}>
          {/* Content based on currentProject */}
          {currentProject === 'The Lounge' && (
            <p>
              My current endeavor, The Lounge, focuses intensively on harnessing the power of Next.js, TypeScript, and Socket.IO to redefine the landscape of real-time communication...
              {/* Full description here */}
            </p>
          )}
          {currentProject === 'Untitled App' && (
            <p>
              In the realm of mobile development, I am embarking on an exciting journey with an untitled communication app...
              {/* Full description here */}
            </p>
          )}
        </ModalTemplate>
      )}
      </div>
    </div>
  )
}
