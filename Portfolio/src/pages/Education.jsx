import React from 'react'
import '../component/partsdesign/profiledesign.css'
import { LuSchool2 } from "react-icons/lu";
const Education = () => {
  const EducationArray=[
    {
      degreeTitle:"Bachelor of Technology in Computer Science",
      universityName:"Silver Oak University",
      years:"Year : 2022-2026",
      percent:"GPA : 8.7",
      location:"Ahmedabad"
    },
    {
      degreeTitle:"Higher Secondary School Certificate",
      universityName:"Ankur High School",
      years:"Year : 2021-2022",
      percent:"Percentage : 8.7",
      location:"Ahmedabad"
    },
    {
      degreeTitle:"Secondary School Certificate",
      universityName:"Ruth Memorial School",
      years:"Year : 2019-2020",
      percent:"Percentage : 72.34",
      location:"Ahmedabad"
    }
  ]
  return (
    <>
      <div className="flex justify-center group items-center content-center group w-full h-[100px]  hover:opacity-90 cursor-pointer bg-gradient-to-r from-orange-950 to-orange-600 border border-orange-600 rounded-md shadow-lg shadow-orange-600 grayscale-0 hover:grayscale"  >
        <LuSchool2 className='text-2xl text-orange-400 group-hover:hidden' />
        <h1 className=' transform font-poppins text-orange-600 text-2xl group-hover:block hidden transition ease-in-out duration-300 '>Education</h1>
      </div>
      <h1 className='font-poppins text-orange-500 mt-4 ml-1 font-bold'>Education</h1>
      
      <div className='border grid md:grid-cols-3 grid-cols-1 gap-2 justify-items-center  border-orange-600 mt-1 rounded-md p-2  shadow-lg shadow-orange-600/50'>
      {
        EducationArray.map((item,i)=>{
          return (
            <div key={i} className='p-2 md:mt-0 mt-3 w-full text-white border border-orange-600 shadow-md shadow-orange-500/50 rounded-md cursor-pointer hover:border-blue-500 hover:shadow-blue-500 '>
          <h3 className="md:text-lg text-2xl font-semibold mb-2">{item.degreeTitle}</h3>
          <p className='text-xl md:text-sm '>{item.universityName}</p>
          <p className='text-xl md:text-sm '>{item.years}</p>
          <p className='text-xl md:text-sm '>{item.percent}</p>
          <p className=''>{item.location}</p>
        </div>
          )
        })
      }
        
      </div>
      <h1 className='font-poppins text-orange-500 mt-3 ml-1 font-bold'>Achievement</h1>
      
    </>
  )
}

export default Education
