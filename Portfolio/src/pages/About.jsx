import React from 'react'
import profile from '../images/profilephotp.jpg'
import { FaLinkedin, FaPhoneAlt, FaAddressCard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const About = () => {
  const openLinkedInHandlerPress=()=>{
    window.open("https://www.linkedin.com/in/ahmed-jilani-profile/");
  }
  return (
    <>
      <div className='border border-orange-600 rounded-md flex p-3 shadow-lg shadow-orange-600/50'>

        <div id="Profile_left_side" className='w-auto h-full py-1 px-8 border border-orange-600 rounded-md'>
          <img src={profile} className='transition ease-out duration-300 w-[200px] h-[150px] rounded-full drop-shadow-xl border border-gray-500 cursor-pointer hover:opacity-50 hover:ease-out' />
        </div>
        <div className='ml-5 w-full h-full border border-orange-600 rounded-md pl-5'>
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
      <div className='border border-orange-600 rounded-md p-3 mt-4'>
        <h2 className='text-orange-600 text-xl cursor-pointer active:opacity-30 transition ease-out duration-300'>About</h2>
        <p className='text-white ml-12 mr-5'>I am ahmed shaikh and i am pursing b.tech computer enginneering from silver oak university.I have a good command of programming language like javascript ,c++ ,node js and python . I have a knowledge about sap  fiori/ui5 . I have a 2 year experience of IT industry.</p>
      </div>
      <div className='border border-orange-600 rounded-md p-3 mt-4'>
        <h2 className='text-orange-600 text-xl cursor-pointer active:opacity-30 transition ease-out duration-300'>Objective</h2>
        <p className='text-white ml-12 mr-5'>To work with an organization where can learn new skills and
increase my knowledge,abilities for the organization goals as well
as my professional growth along with the organization. and I am
looking for a challenging opportunity that will enable me to use
my skills and abilities to achieve a challenging goal.</p>
      </div>
  
     






      <div className='w-full h-[50px] '></div>
    </>
  )
}

export default About
