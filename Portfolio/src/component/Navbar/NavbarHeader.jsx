import React from 'react'
import { FaAlignRight } from "react-icons/fa6";
const NavbarHeader = () => {
  return (
   <>
   <div className='h-12 flex justify-between items-center content-center px-3 bg-custom-dark-blue  text-white sticky top-0'>
    <span className='text-2xl font-sans font-bold'>.Ahmed</span>
    <span className='text-2xl font-sans'><FaAlignRight/></span>
   </div>
   </>
  )
}

export default NavbarHeader
