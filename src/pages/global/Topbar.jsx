import React, { useContext } from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from '../../theme'
import { CiBrightnessUp, CiDark, CiBellOn } from "react-icons/ci";
import { Switch } from "@material-tailwind/react";
import ProfilePic from '../../assets/tonze-bahago.jpg'

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <div className="flex justify-between gap-10 align-middle p-2 my-1 mx-2">
     {/* Notification */}
        <div>
          <button className='flex items-center justify-between w-40 border p-2 rounded-full'>
          <CiBellOn className='text-2xl' />
          Notification
          <span className='flex justify-center items-center bg-red-300 rounded-full w-8 h-8'>8</span>
          </button>
        </div>
      {/* Right side */}
      <div className='flex items-center gap-6'>
         {/*Toogle Light and Dark Mode*/}
        {/* <div onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "light" ? (
            <CiBrightnessUp className='text-2xl' />
          ) : (
            <CiDark className='text-2xl' />
          )}
        </div> */}
       
        <div>
        <Switch onClick={colorMode.toggleColorMode}color='teal'/>
      </div>
         {/* Profile Picture */}
      <div>
        <button className='flex gap-6 items-center w-40 border p-2 rounded-full'>
        <img src={ProfilePic} alt="" className='rounded-full object-cover w-9 h-9' />
        <span>Hi! Tonze</span>
        </button>
        
      </div>
      </div>
    </div>
  )
}

export default Topbar