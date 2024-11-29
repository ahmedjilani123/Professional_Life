import React from 'react'
import experience from '../images/experience.jpg'
import '../component/partsdesign/profiledesign.css'
import {delay, motion} from 'framer-motion';
import { PiCodeBold } from "react-icons/pi";
const Experience = () => {
  const container =(delay)=>(
    {
      hidden:{x:-100,opacity:0},
      visible:{x:0,opacity:1},
      transition:{duration:5,delay:delay}
    }
  )
  const ArrayExperience=[
    {
      CompanyName:"Daffodils Info Solutions Pvt.Ltd",
      ProjectName:"Barcode Scan Application For Process Automation",
      Description:["The Barcode Scan Application for Process Automation aims to streamline and automate the process of managing production and stock transfers within the client's manufacturing and logistics operations","The solution involves the integration of barcode scanning functionality to track and process materials as they move through various stages, including FG (Finished Goods) to SFG (Semi-Finished Goods), and further to delivery and PGI (Post Goods Issue) to stock transfer.","The application is built using SAP Fiori/UI5, incorporating various controls such as Input, Button, FilterObject, Table (SAP.m.Table), Dialog, Fragment, Formatter, and Form to enhance user interaction and ensure a smooth, responsive, and efficient experience","The application also leverages OData services for seamless integration with backend systems, ensuring real-time data exchange for accurate tracking and updating of inventory and production data."]
    },
    {
      CompanyName:"Daffodils Info Solutions Pvt.Ltd",
      ProjectName:"Health Monitoring Application",
      Description:["The Health Monitoring Application is designed to track and monitor various health-related KPIs (Key Performance Indicators) for individuals.","It integrates real-time data from SAP APIs and provides a user-friendly interface based on SAP Fiori design principles","The application includes features like input fields for capturing user data such as date ranges or specific KPI searches, SAP.m.Table for displaying health metrics in a structured and sortable format, and a filter object to refine the displayed data based on user-defined criteria like date or thresholds"," Navigation between views is handled using a router with parameters, allowing seamless transitions with context-specific data such as user IDs or selected KPIs","To enhance visualization, the application leverages VizFrame charts, including pie charts for representing percentage-based distributions (e.g., time spent in different heart rate zones) and column charts for showing trends over time (e.g., weekly or monthly activity levels).By combining these controls and features, the application delivers actionable insights and an interactive user experience while maintaining responsiveness across all devices."]
    },
    {
      CompanyName:"Daffodils Info Solutions Pvt.Ltd",
      ProjectName:"Ticketalk",
      Description:["The Ticketalk Application is designed to streamline and manage the ticketing process within the organization"," The application provides functionality for raising, managing, and tracking tickets, enabling efficient communication and resolution of issues."," It includes features such as creating and managing tickets, viewing ticket details, closing tickets, and sending email notifications to the relevant client. Additionally, the system displays the details of users who created tickets, ensuring accountability and transparency","This application is built using SAP Fiori/UI5 and includes controls such as Input, MaskInput, SAP.m.Table, FilterObject, Flexible Column Layout, Dialog, ShellBar, and Fragment, enhancing its functionality and user experience."]
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
        <PiCodeBold className='text-2xl text-white group-hover:hidden' />
        <h1 className=' transform font-poppins text-2xl group-hover:block hidden transition ease-in-out duration-300 text-white '>Experience In IT Industry</h1>
    
        </motion.div>
         </div>
   
      {
        ArrayExperience.map((item,i)=>(
          <motion.div  variants={container(0.2)} initial="hidden" animate="visible" key={i} className='border py-2 border-orange-600 mt-3 rounded-md px-4  shadow-lg shadow-orange-600/50'>
          <div id='company_name' className='text-white '>
            <div className="relative group cursor-pointer flex w-auto">
              <h1 className='text-2xl font-poppins '>{item.CompanyName} </h1>
              <div className="absolute ml-[80px] px-3 py-1 text-sm text-white bg-orange-600 rounded opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200  transform -translate-x-1/2 left-1 bottom-full mb-1">
               Company Name
              </div>
            </div>
          </div>
  
          <div id='project_title' className='text-white pl-2 mt-1'>
          <div className="relative group cursor-pointer flex">
              <span className='text-1xl font-poppins mt-1 w-auto'>{item.ProjectName}</span>
              <div className="absolute ml-[80px] px-3 py-1 text-sm text-white bg-orange-600 rounded opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200  transform -translate-x-1/2 left-1 bottom-full mb-1">
               Project title
              </div>
            </div>
            </div>
          <div id='project_description' className='text-white pl-2 mt-2'>Description</div>
          <div id='description_points' className='text-white pl-5' >
            <ul className="list-none px-5 mt-2">
              {
                item.Description.map((items,i)=>(
                  <li key={i} className="relative  before:absolute before:left-0 before:content-['\29BF'] before:text-xs before:mt-[2px] before:text-orange-600 pl-5 font-poppins text-sm">
{items} </li>
                ))
              }
            </ul>
  
          </div>
        </motion.div>
        ))
      }
     
      
      <div className='w-full h-[50px] '></div>
    </>
  )
}

export default Experience
