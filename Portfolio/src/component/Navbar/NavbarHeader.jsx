import React from 'react'
import { FaAlignRight ,FaArrowLeft} from "react-icons/fa6";

import {motion} from 'framer-motion'
const NavbarHeader = (props) => {
  const {WidthSetHandler,ShowMainProfile,showArrow}=props
  console.log(ShowMainProfile)
  return (
   <>
   <motion.div className='z-50 h-12 flex justify-between items-center content-center px-3 bg-custom-dark-blue  text-white sticky top-0'>
   <span className={` ${ !showArrow ? 'hidden':'block'} text-2xl font-sans cursor-pointer md:hidden  text-orange-600`} onClick={ShowMainProfile}><FaArrowLeft/></span>
  
    <motion.span className='text-2xl font-poppins  font-bold text-orange-600 cursor-pointer' whileHover={{ scale: 1.2 }}
    
   animate={{y:0}} initial={{y:-250}} transition={{delay:0.2, duration:1.5, type:"spring" ,stiffness:120}} >.Ahmed</motion.span>
    <span className='text-2xl font-sans cursor-pointer md:block hidden' onClick={WidthSetHandler}><FaAlignRight/></span>
   
   </motion.div>
   </>
  )
}

export default NavbarHeader
