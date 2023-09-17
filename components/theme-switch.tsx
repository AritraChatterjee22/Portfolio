"use client"
import React, { useState } from 'react'
import { BsSun } from 'react-icons/bs'


type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState()<Theme>("light");

  const toogleTheme = () => {
      if(theme === 'light'){
          setTheme("dark")
        }else{
            setTheme("light")
          }
    }

  return (
    <button>
      <BsSun className='fixed bottom-5 right-5 bg-white w-[1.6rem] h-[1.6rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all'
      onClick={}
      />
    </button>
  )
}
