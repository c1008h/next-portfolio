import React from 'react'

interface SectionTemplateProps {
    id: number;
    year: string;
    yearRange: string;
    name: string;
    institute: string;
    description: string;
}

export default function SectionTemplate({ 
    ...experience 
}: SectionTemplateProps) {
  return (
    <div key={experience.id}>
      <h1>{experience.name} @ <span>{experience.institute}</span></h1>
      <p>{experience.yearRange}</p>
    </div>
  )
}
