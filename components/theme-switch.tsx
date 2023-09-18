"use client"
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'


type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  //setting theme to light or dark and storing on localStorage
  const toogleTheme = () => {
      if(theme === 'light'){
          setTheme("dark")
          window.localStorage.setItem("theme", "dark");
        }else{
            setTheme("light")
            window.localStorage.setItem("theme", "light")
          }
    }

    //fetching theme from localStorage and setting the state to the theme
    //if localStorage is null then the theme of OS is applied
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null

        if(localTheme){
            setTheme(localTheme)
          }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
              setTheme("dark")
            }
      },[])

  return (
    <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all'
      onClick={toogleTheme}
    >
    {
      theme === "light" ? (
        <BsSun/>
      ) : (
        <BsMoon/>
      )
    }
    </button>
  )
}
