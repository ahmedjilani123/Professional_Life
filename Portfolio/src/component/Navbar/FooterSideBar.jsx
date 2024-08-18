import React, { useState } from 'react'
import Icons from '../partsdesign/Icons'
import { LuSchool2 } from "react-icons/lu";
import Resume from '../../pages/Resume';

import { PDFViewer, PDFDownloadLink} from '@react-pdf/renderer';
const FooterSideBar = (props) => {

  const [Open, SetOpen] = useState(false);
  const [OpenCV, SetOpenCV] = useState(false);
  const { eventFire } = props;
  const DialogHireMePress = () => {
    SetOpen(!Open);
  }
  const DialogCVMePress = () => {
    SetOpenCV(!OpenCV);
  }
  const width =window.screen.width;
  const widthPDF = width > 430 ? '700px' : 'auto';
  console.log(width +'='+widthPDF)
  const resumeData = {
    name: "John Doe",
    title: "Software Engineer",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    experience: [
      {
        company: "Company A",
        position: "Frontend Developer",
        duration: "Jan 2020 - Present",
        description: "Worked on building web applications using React.js.",
      },
      {
        company: "Company B",
        position: "Backend Developer",
        duration: "Jan 2018 - Dec 2019",
        description: "Developed REST APIs using Node.js and Express.",
      },
    ],
    education: [
      {
        institution: "University X",
        degree: "Bachelor of Science in Computer Science",
        year: "2017",
      },
    ],
  };


  return (
    <>
      <div className='md:h-full h-screen border border-orange-600 overflow-y-hidden mt-5 rounded-sm p-2'>

        {
          eventFire ? (
            <div className='flex  justify-between mt-2  w-full rounded-lg'>
              <button onClick={DialogCVMePress} className='bg-orange-600  text-white w-full rounded-l-lg md:h-9 h-16 text-2xl md:text-sm  active:text-orange-500 active:bg-white'>Download CV</button>
              <button onClick={DialogHireMePress} className='bg-custom-dark-blue text-orange-600 w-full rounded-r-lg md:h-9 h-16 text-2xl md:text-sm border border-orange-600 active:bg-orange-500 active:text-white'>Hire Me</button>
            </div>
          ) : (
            <div className='flex flex-col  justify-between w-full rounded-lg'>
              <button onClick={DialogCVMePress} className='mt-1  border border-orange-600 rounded-md flex justify-center  p-1 hover:bg-slate-500 hover:shadow-inner bg-orange-600 text-white active:text-orange-600 active:bg-white'> CV</button>

              <button onClick={DialogHireMePress} className='mt-1  text-orange-600 border border-orange-600 rounded-md flex  justify-center p-1 hover:bg-slate-500 hover:shadow-inner active:bg-orange-500 active:text-white'> HM</button>

            </div>

          )
        }

<div className={`bg-gray-300/50 w-full h-full  absolute ${OpenCV ? "inset-0" : "hidden"} z-50 flex justify-center items-center  `}>
          <div className="bg-custom-dark-blue ">
          
            <PDFViewer  style={{ height: '500px',width:widthPDF}}>
              <Resume />
            </PDFViewer>
            <div id='footerPDF' className='w-full h-11 border-t  flex justify-end items-center'>
              <button onClick={DialogCVMePress} className='w-[80px] h-7  rounded-md mr-3 text-orange-600 hover:bg-LightBackC  font-poppins border border-LightBackC active:border-blue-600'>Cancel</button>
            </div>
          </div>
           </div>


        <div className={`bg-gray-300/50 w-full h-full  absolute ${Open ? "inset-0" : "hidden"} z-50 flex justify-center items-center  `}>
          <div className='bg-white rounded-lg h-[140px] w-[300px] flex flex-col  justify-between border border-black shadow-2xl '>
            <div id='header' className='w-full h-11 border-b border-black flex'>
              <LuSchool2 className='text-2xl m-2  text-orange-600' />
              <h2 className='text-gray-700  font-poppins font-bold mt-3'>Work In Progress</h2>

            </div>
            <div id='content' className='w-full h-[40px] '>
              <p className='pl-2'>Daffodils Info Knowledge Solutions</p>
            </div>
            <div id='footer' className='w-full h-11 border-t  flex justify-end items-center'>
              <button onClick={DialogHireMePress} className='w-[60px] h-7 border hover:bg-orange-700 bg-orange-600 rounded-md mr-3 text-white font-poppins active:border-white active:bg-white active:text-black'>OK</button>
              <button onClick={DialogHireMePress} className='w-[80px] h-7 border border-white rounded-md mr-3 text-orange-600 hover:border-gray-200 font-poppins active:border-blue-600'>Cancel</button>
            </div>
            {/* <span onClick={DialogHireMePress} className='float-right cursor-pointer'>X</span>
        <div className='flex items-center flex-col '>
        <LuSchool2 className='text-3xl mt-5  text-orange-600'/>
<h2 className='text-gray-700  font-poppins font-bold mt-2'>Work In Progress</h2>
<p className='text-gray-400 text-center font-poppins font-light'>Daffodils Info Knowledge Solutions</p>
        </div> */}

          </div>
        </div>

      </div>
    </>
  )
}

export default FooterSideBar
