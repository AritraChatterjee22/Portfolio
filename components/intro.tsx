"use client"
import Image from 'next/image'
import React from 'react'
import ME from "@/public/ME.jpeg"
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      {/*Image with animation*/}
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image src={ME} alt='Aritra Portrait'
            width="192"
            height="192"
            quality="100"
            priority={true}
            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>
          <motion.span className='absolute bottom-0 right-0 text-2xl'
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
     {/*Hero Text*/}
      <motion.p className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl'
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y:0}}
      >
        <span className='font-bold'>
          Hello I am Aritra.
         </span> I am a{" "}
         <span className='font-bold'>fresher full stack developer</span> with{" "} 
         <span className='font-bold'>8.84</span> CGPA with a few projects. I enjoy building
         <span className='italic'> sites & apps
         </span>. My focus is{" "}
         <span className='underline'>MERN stack.</span>
      </motion.p>
    </section>
  )
}
