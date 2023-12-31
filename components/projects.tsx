"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import {useSectionInView} from "@/lib/hooks"

export default function Projects() {

  const {ref} = useSectionInView("Projects", 0.4)
  


//replacing with custom hook
{/*  const {ref, inView} = useInView({
      threshold: 0.4
    })
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext()

  useEffect(() =>{
    if(inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection("Projects")
    }
  }, [inView, setActiveSection, timeOfLastClick]) */}




  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
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

