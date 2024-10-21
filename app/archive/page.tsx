"use client"
import React, { useState, useEffect } from 'react'
import projectData from '@/constants/projectData.json'
import { FaGithub, FaExternalLinkAlt, FaGlobe } from 'react-icons/fa';
import { ButtonTemplate, DropDownTemplate } from '@/components';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Projects() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const [filteredProjects, setFilteredProjects] = useState(projectData);
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set([searchParams.get('tab') || 'all']));
  const tab = searchParams.get('tab') || 'all';

  // Currently, the tabs don't filter the archieve page when clicked
  useEffect(() => {
    const newFilteredProjects = tab === 'all'
      ? projectData
      : projectData.filter(project => project.type.toLowerCase() === tab.toLowerCase());

    const sortedProjects = newFilteredProjects.sort((a, b) => {
      if (!a.year) return 1;
      if (!b.year) return -1;
      if (a.year === 'In-Progress') return -1;
      if (b.year === 'In-Progress') return 1;
      return parseInt(b.year) - parseInt(a.year);
    });

    setFilteredProjects(sortedProjects);
  }, [tab]);

  const handleSelectionChange = (selection: Set<string>) => {
    setSelectedKeys(selection);  // Update state
    const selectedTab = Array.from(selection)[0] || 'all';  // Get the first selected value or default to 'all'
    router.push(`/archive?tab=${selectedTab}`);  // Update URL with the selected tab
  };
  
  const btnStyle="font-bold text-3xl justify-center items-center hover:bg-blue-100 hover:shadow-md"

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-row justify-between items-center' >
          <div className='flex flex-row justify-center items-center'> 
            <ButtonTemplate 
              title={'<'} 
              action={() => router.back()} 
              btnStyle={btnStyle} /> 
            <h2 className="text-3xl font-bold text-left text-gray-800 mb-0 ml-4">Archive</h2> {/* Added margin-left for spacing */}
          </div>
          <DropDownTemplate 
            btnStyle={btnStyle}
            selectedKeys={selectedKeys}
            onSelectionChange={handleSelectionChange}
          />
        </div>
        <div className="min-w-full align-middle my-5">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Made at
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Built with
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProjects.map((project) => (
                <tr key={project.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.year}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{project.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.madeAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.subtitle}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm flex flex-row space-x-4">
                    {project.github && 
                      <a href={project.github} className="text-blue-500 hover:text-blue-600" aria-label="GitHub">
                        <FaGithub size={20} />
                      </a>
                    }
                    {project.link && 
                      <a href={project.link} className="text-blue-500 hover:text-blue-600" aria-label="Deployed Link">
                        <FaExternalLinkAlt size={20} />
                      </a>
                    }
                    {project.website && 
                      <a href={project.website} className="text-blue-500 hover:text-blue-600" aria-label="Website Link">
                        <FaGlobe size={20} />
                      </a>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
