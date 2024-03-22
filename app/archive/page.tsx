"use client"
import React from 'react'
import projectData from '@/constants/projectData.json'
import { FaGithub, FaExternalLinkAlt, FaGlobe } from 'react-icons/fa';
import { ButtonTemplate } from '@/components';
import { useRouter } from 'next/navigation';

export default function Projects() {
  const router = useRouter()

  const sortedProjects = projectData.sort((a, b) => {
    if (!a.year) return 1;
    if (!b.year) return -1;
    if (a.year === 'In-Progress') return -1;
    if (b.year === 'In-Progress') return 1;
    return parseInt(b.year) - parseInt(a.year);
  });

  const handleBack = () => {
    router.push('/');
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-row justify-items-start' >
          <ButtonTemplate title={'<'} action={() => handleBack()} btnStyle={'font-bold text-3xl text-left'} />
          <h2 className="text-3xl font-bold text-left text-gray-800 mb-12">Archive</h2>
        </div>
        <div className="min-w-full align-middle">
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
              {sortedProjects.map((project) => (
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
