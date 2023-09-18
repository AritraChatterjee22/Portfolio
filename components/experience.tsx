"use client"
import React, { useContext } from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { AiOutlineLink } from 'react-icons/ai';
import { useSectionInView } from '@/lib/hooks';
import {useTheme} from "@/context/theme-context"

export default function Experience() {
  const {ref} = useSectionInView("Experience", 0.4)
  const {theme} = useTheme()

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <div className="max-w-screen-lg mx-auto"> 
        <VerticalTimeline lineColor="">
          {
            experiencesData.map((item, index) =>(
              <React.Fragment key={index}>
                <VerticalTimelineElement
                contentStyle={{
                    background:
                    theme === 'light' ? "#f3f4f6" : "rgba(255, 255, 255, 0.5)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem"
                  }}
                  contentArrowStyle={{
                      borderRight: "0.4rem solid #9ca3af"
                    }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                      background: "white",
                      fontSize: "1.5rem"
                    }}
                >
                  <h3 className='font-semibold capitalize'>{item.title}</h3>
                  <p className='font-normal !mt-0'>{item.location}</p>
                  <p className='!mt-1 !font-normal text-gray-700'>{item.description}</p>
                  {item.certificateLink && (
                    <div style={{
                    position: "absolute",
                    bottom: "2px", 
                    right: "20px",   
                    marginTop: "20px"
                    }}
                    >
                      <a href={item.certificateLink} target='_blank' rel='noopener noreferrer'>
                        <AiOutlineLink/>
                      </a>
                    </div>
                  )}
                </VerticalTimelineElement>
              </React.Fragment>
            ))
          }
        </VerticalTimeline>
        </div>
    </section>
  )
}
