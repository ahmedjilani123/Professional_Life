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
      CompanyName:"Daffodils info knowledge solutions",
      ProjectName:"Barcode Scan Application For Process Automation",
      Description:["Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views.","Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views.","Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views."]
    },
    {
      CompanyName:"Daffodils info knowledge solutions",
      ProjectName:"Barcode Scan Application For Process Automation",
      Description:["Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views.","Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views.","Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views."]
    },
    {
      CompanyName:"Daffodils info knowledge solutions",
      ProjectName:"Barcode Scan Application For Process Automation",
      Description:["Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views.","Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views.","Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views."]
    },
    {
      CompanyName:"Daffodils info knowledge solutions",
      ProjectName:"Barcode Scan Application For Process Automation",
      Description:["Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views.","Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views.","Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views."]
    },
    {
      CompanyName:"Daffodils info knowledge solutions",
      ProjectName:"Barcode Scan Application For Process Automation",
      Description:["Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views.","Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views.","Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views."]
    },
    {
      CompanyName:"Daffodils info knowledge solutions",
      ProjectName:"Barcode Scan Application For Process Automation",
      Description:["Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views.","Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views.","Developed the application using various UI5 controls like forms, table, Input, Select, Button, ComboBox, etc. in JavaScript and Xml Views."]
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
