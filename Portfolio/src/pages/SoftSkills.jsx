import React from 'react'
import {motion} from 'framer-motion'
import { AiOutlineSolution } from "react-icons/ai";
const SoftSkills = () => {
  const technicalSoftSkill=[
    {
      title:"Teamwork"
    },
    {
      title:"Creativity"
    },
    {
      title:"Critical thinking"
    },
    {
      title:"Problem solving"
    },
    {
      title:"Leadership"
    },
    {
      title:"Time Management"
    },
    {
      title:"Self Motivation"
    }
  ]
  const languageSoftSkill=[
    {
      title:"Hindi"
    },
    {
      title:"English"
    }
  ]
  const IconView =(duration)=>(
    {
      initial:{y:-10},
      animate:{
        y:[10,-10],
        transition:{
          duration:duration,
          ease:"linear",
          repeat:Infinity,
          repeatType:"reverse"

        }
      }
    }
  )
  return (
    <>
     <div  className="flex justify-center group items-center content-center group w-full h-[100px]  hover:opacity-90 cursor-pointer bg-gradient-to-r to-[#fac0a1]  from-orange-600 border border-orange-600 rounded-md shadow-lg shadow-orange-600 grayscale-0 hover:grayscale"  >
        <motion.div variants={IconView(2.5)} initial="initial" animate="animate">
        <AiOutlineSolution className='text-2xl text-white group-hover:hidden' />
        
        <h1 className=' transform font-poppins  text-2xl group-hover:block hidden transition ease-in-out duration-300 text-white '>Soft Skills</h1>
    
        </motion.div>
         </div>
  
      <h1 className='font-poppins text-orange-500 mt-4 ml-1 font-bold'> Soft Skill</h1>
     
    <div className='w-full shadow-lg mt-1 shadow-orange-600/50 grid md:grid-cols-4 grid-cols-2 grid-flow-col-1 gap-x-2 gap-y-4 md:gap-y-2 p-3  border border-orange-600 rounded-md'>
    {
      technicalSoftSkill.map((skill,i)=>{
       return (   <div key={i} className='relative w-fit h-auto flex group  rounded-xl border border-orange-600 cursor-pointer shadow-md hover:shadow-orange-500'>
          <div className='w-4 bg-orange-600 group-hover:bg-yellow-300 rounded-l-xl h-full absolute'></div>
          <div className='flex w-auto h-full justify-start items-center '>
            <span className='text-white px-6 pb-1 group-hover:scale-75 transitionn duration-300 ease-out'>{skill.title}</span>
          </div>
        </div>
       )
      })
    }
    </div>
    <h1 className='font-poppins text-orange-500 mt-4 ml-1 font-bold'> Languages</h1>
     
    <div className='w-full shadow-lg mt-1 shadow-orange-600/50 grid md:grid-cols-4 grid-cols-2 grid-flow-col-1 gap-x-2 md:gap-y-2 gap-y-4 p-3  border border-orange-600 rounded-md'>
    {
      languageSoftSkill.map((skill,i)=>{
       return (   <div key={i} className='relative w-fit h-auto flex group  rounded-xl border border-orange-600 cursor-pointer shadow-md hover:shadow-orange-500'>
          <div className='w-4 bg-orange-600 group-hover:bg-yellow-300 rounded-l-xl h-full absolute'></div>
          <div className='flex w-auto h-full justify-start items-center '>
            <span className='text-white px-6 pb-1 group-hover:scale-75 transitionn duration-300 ease-out'>{skill.title}</span>
          </div>
        </div>
       )
      })
    }
    </div>
    <div className='w-full h-[50px] '></div>
    </>
  )
}

export default SoftSkills
