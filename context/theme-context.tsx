"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'



type Theme = "light" | "dark";

type ThemeContextProviderProps = {
    children: React.ReactNode;
  }

type ThemeContextType = {
    theme: Theme;
    toogleTheme: () => void;
  }

const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider({
    children
  }: ThemeContextProviderProps) {

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
    <ThemeContext.Provider value={{
        theme,
        toogleTheme
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(){
    const context = useContext(ThemeContext);

    if(context === null){
        throw new Error("useTheme must be used within ThemeContextProvider")
      }
    return context;
  }

