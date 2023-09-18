"use client"
// import { document } from 'postcss';
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'


type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  //setting theme to light or dark and storing on localStorage
  //setting the theme to DOM for manual toogle
  const toogleTheme = () => {
      if(theme === 'light'){
          setTheme("dark")
          window.localStorage.setItem("theme", "dark");
          document.documentElement.classList.add("dark")
        }else{
            setTheme("light")
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
          }
    }

    //fetching theme from localStorage and setting the state to the theme
    //if localStorage is null then the theme of system is applied
    //setting the theme in DOM for manual toogle
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null

        if(localTheme){
            setTheme(localTheme)

            if(localTheme === 'dark'){
                document.documentElement.classList.add("dark")
              }
          }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
              setTheme("dark")
              document.documentElement.classList.add("dark")
            }
      },[])

  return (
    <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
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
