import React from 'react'
import profile from '../images/profilephotp.jpg'
import { FaLinkedin, FaPhoneAlt, FaAddressCard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const About = () => {
  const ArrayAbout =[
    {
      headerName:'About',
      Description:"I am ahmed shaikh and I am pursing b.tech computer enginneering from (SOU) Silver Oak University.I have a good command of programming language like javascript ,c++ ,node js and python . I have a knowledge about sap  fiori/ui5 . I have a 2 year experience of IT industry.My strength is I'm a self-motivated and hardworking person My weakness is I'm an emotional person and I can feel comfortable and relaxed until I finish my work.I have developed a solid foundation in various aspects of computer science and engineering and have gained practical experience through my projects and internship.My long-term goal is to achieve a higher position in my career, and my short-term goal is to gain practical experience, which will help me achieve my long-term goal. My hobby is travelling and listening to music.Currently I am working with Daffodils info knowledge solutions as SAP UI5 Consultant since last 2 years and I have completed one end to end custom UI5 project implementations in sap Fiori.Having hands-on experience in SAP UI5/FIORI for around 2 years and Experience on using different data models in UI5 App. - JSON, OData, and Resource.Having knowledge in SAPUI5, SAP BTP-BAS, SAP Web-IDE, VS Code."
    },
    {
      headerName:'Objective',
      Description:"To work with an organization where can learn new skills andincrease my knowledge,abilities for the organization goals as wellas my professional growth along with the organization. and I amlooking for a challenging opportunity that will enable me to usemy skills and abilities to achieve a challenging goal."
    }
  ]
  const openLinkedInHandlerPress=()=>{
    window.open("https://www.linkedin.com/in/ahmed-jilani-profile/");
  }
  return (
    <>
      <div className='border border-orange-600 rounded-md flex  flex-col md:flex-row p-3 shadow-lg shadow-orange-600/50 '>

        <div id="Profile_left_side" className='w-auto h-full md:py-1 py-4 px-8 border border-orange-600 rounded-md flex justify-center'>
          <img src={profile} className='transition ease-out duration-300 w-[200px] md:h-[150px] rounded-full drop-shadow-xl border border-gray-500 cursor-pointer hover:opacity-50 hover:ease-out' />
        </div>
        <div className='md:ml-5 w-full h-full border mt-3 md:mt-0 border-orange-600 rounded-md pl-5'>
          <div className='flex h-full w-full'>
            <div className=' w-14 h-full'>
              <div className='w-9 h-9 rounded-full flex justify-center content-center items-center mt-1'><FaLinkedin className='text-3xl text-orange-600 cursor-pointer hover:text-white' /></div>
              <div className='w-9 h-9 rounded-full flex justify-center content-center items-center mt-1'><FaPhoneAlt className='text-2xl text-orange-600 cursor-pointer hover:text-white' /></div>
              <div className='w-9 h-9 rounded-full flex justify-center content-center items-center mt-1'><MdOutlineEmail className='text-3xl text-orange-600 cursor-pointer hover:text-white' /></div>
              <div className='w-9 h-9 rounded-full flex justify-center content-center items-center mt-1'><FaAddressCard className='text-2xl text-orange-600 cursor-pointer hover:text-white' /></div>
            </div>
            <div className=' w-full h-full'>
              <div className='w-9 h-9 rounded-full flex justify-start content-center items-center mt-1 '><span className='text-white hover:text-orange-600 active:text-blue-600 cursor-pointer' onClick={openLinkedInHandlerPress}>LinkedIn</span></div>
              <div className='w-full h-9 rounded-full flex justify-start content-center items-center mt-1 '><span className='text-white hover:text-orange-600 cursor-pointer'>+91 63530-38823</span></div>
              <div className='w-full h-9 rounded-full flex justify-start content-center items-center mt-1 '><span className='text-white hover:text-orange-600 cursor-pointer'>shaikhahmedjilani7860@gmail.com</span></div>
          
              <div className='w-full h-9 rounded-full flex justify-start content-center items-center mt-1 '><span className='text-white hover:text-orange-600 cursor-pointer'>Ahmedabad</span></div>
          
            </div>


          </div>
        </div>

      </div>
      {
        ArrayAbout.map((item,i)=>(
        
        <div key={i} className='border border-orange-600 rounded-md p-3 mt-4'>
        <h2 className='text-orange-600 text-xl cursor-pointer active:opacity-30 transition ease-out duration-300'>{item.headerName}</h2>
        <p className='text-white ml-12 mr-5'>
          {item.Description}
        </p>
        </div>
       
       
        ))
      }
      



     
  
     






      <div className='w-full h-[50px] '></div>
    </>
  )
}

export default About
