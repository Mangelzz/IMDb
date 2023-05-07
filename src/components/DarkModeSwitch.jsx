"use client"

import React, { useEffect, useState } from 'react'
import { MdLightMode } from 'react-icons/md'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'

export const DarkModeSwitch = () => {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <>
    {mounted && (currentTheme === 'dark' ? (
        <MdLightMode className='text-xl cursor-pointer hover:text-amber-500 transition-all' onClick={() => setTheme("light")} />

    ) : (
        <BsFillMoonStarsFill className='text-xl cursor-pointer hover:text-amber-500 transition-all' onClick={() => setTheme("dark")} />
    ))} 
    </>
  )
}
