"use client"
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'


export default function About() {
  const {ref, inView} = useInView({
      threshold: 0.75,
    })
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext()

  useEffect(() =>{
    if(inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection("About")
    }
  }, [inView, setActiveSection, timeOfLastClick])



  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28'
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.175}}
    id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      After completing my degree in{" "}
      <span className="font-medium">Computer Science Engineering (CSE)</span>, I
      have developed strong skills as a full-stack developer specializing in the{" "}
      <span className="font-medium">MERN stack</span> with an internship under my belt. My passion for web
      development fuels my drive to craft innovative and user-centered solutions.
      With a solid foundation in both front-end and back-end technologies, I am
      enthusiastic about contributing my expertise to a dynamic team and
      continually expanding my knowledge in the realm of software development. I am
      actively seeking opportunities that enable me to apply my technical
      proficiency and contribute to the success of forward-thinking organizations.
      </p>

      <p>
      <span className="italic">Beyond coding</span>, I find joy in reading books,
      learning new things, and spending quality time with my cat. My pursuit of
      knowledge extends beyond programming, as I am currently delving into{" "}
      <span className="font-medium">history and philosophy</span>. Additionally,
      I'm honing my skills in playing the piano, always eager to explore new
      horizons in both technology and life experiences. I am currently in search
      of a <span className="font-medium">full-time position</span> as a software
      developer to embark on the next chapter of my career.
     </p>
    </motion.section>
  )
}
