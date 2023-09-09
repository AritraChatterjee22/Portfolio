"use client"
import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'


export default function Projects() {

  const {ref, inView} = useInView({
      threshold: 0.4
    })
  const {setActiveSection} = useActiveSectionContext()

  useEffect(() =>{
    if(inView){
      setActiveSection("Projects")
    }
  }, [inView, setActiveSection])




  return (
    <section ref={ref} id='projects' className='scroll-mt-28'>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index)=> (
            <React.Fragment key={index}>
              <Project {...project}/>
            </React.Fragment>
          ))}
      </div>
    </section>
 )
}

