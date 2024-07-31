import React from 'react'
import { PiCodeBold } from "react-icons/pi";
import Frontend from './skills/Frontend.jsx';
import { PiFileHtmlBold } from "react-icons/pi";
import { TbFileTypeCss } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiJson } from "react-icons/si";
import { TbFileTypeXml } from "react-icons/tb";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiReact } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import Backtend from './skills/Backend.jsx';
import { VscVscode } from "react-icons/vsc";
import Tools from './skills/Tools.jsx';
const TechnicalSkills = () => {
  const FrontendIcon = [
    { component: "sapui5", tooltip: "sapui5",url:"https://sapui5.hana.ondemand.com/" },
    { component: PiFileHtmlBold, tooltip: "HTML",url:"https://html.com/" },
    { component: TbFileTypeCss, tooltip: "CSS" ,url:"https://developer.mozilla.org/en-US/docs/Web/CSS"},
    { component: SiTailwindcss, tooltip: "Tailwind Css",url:"https://tailwindcss.com/" },
    { component: SiJson, tooltip: "JSON" ,url:"https://www.json.org/json-en.html"},
    { component: TbFileTypeXml, tooltip: "XML",url:"" },
    { component: AiOutlineJavaScript, tooltip: "Javascript" ,url:""},
    { component: SiReact, tooltip: "React",url:"" },
  ];
  const BacktendIcon = [
    { component: "sapui5", tooltip: "sap_capm" },
    { component: TbBrandNodejs, tooltip: "Node Js" },
    { component: SiExpress, tooltip: "Express" }
  ];
  const ToolArray = [

    { component: VscVscode, tooltip: "VS Code" }
  ];
  const UrlHandlerFrontEnd=(data)=>{
    debugger;
    window.open(data);
  }
  return (
    <>
      <div className="flex justify-center group items-center content-center group w-full h-[100px]  hover:opacity-90 cursor-pointer bg-gradient-to-r from-orange-950 to-orange-600 border border-orange-600 rounded-md shadow-lg shadow-orange-600 grayscale-0 hover:grayscale"  >
        <PiCodeBold className='text-2xl text-orange-400 group-hover:hidden' />
        <h1 className=' transform font-poppins text-orange-600 text-2xl group-hover:block hidden transition ease-in-out duration-300 '>Technical Skills</h1>
      </div>

      <h1 className='font-poppins text-orange-500 mt-4 ml-1 font-bold'> Font-End</h1>
      <div className='shadow-lg shadow-orange-600/50 grid grid-cols-6 justify-items-center gap-x-2  pb-4 mt-0 border border-orange-600 rounded-md'>

        {
          FrontendIcon.map((icon, i) => (<Frontend key={i} Icons={icon.component} tooltips={icon.tooltip} UrlHandlerFrontEnd ={()=>UrlHandlerFrontEnd(icon.url)}/>))
        }

      </div>
      <h1 className='font-poppins text-orange-500 mt-4 ml-1 font-bold'> Back-End</h1>
      <div className='shadow-lg shadow-orange-600/50 grid grid-cols-6 justify-items-center gap-x-2  pb-4 mt-0 border border-orange-600 rounded-md'>
        {
          BacktendIcon.map((icon, i) => (<Backtend key={i} Icons={icon.component} tooltips={icon.tooltip} />))
        }
      </div>
      <h1 className='font-poppins text-orange-500 mt-4 ml-1 font-bold'> Tools</h1>
      <div className='shadow-lg shadow-orange-600/50 grid grid-cols-6 justify-items-center gap-x-2  pb-4 mt-0 border border-orange-600 rounded-md'>
      <div className='hover:scale-105 ease-out transiton duration-300 relative group cursor-pointer shadow-lg shadow-orange-600/50 w-[7rem] h-[5rem] rounded-full bg-gradient-to-r from-blue-500  to-orange-600 border border-orange-600  mt-6 flex justify-center items-center content-center'>
          <div className={`imageWebIde mix-blend-multiply w-[4rem] h-[4rem] bg-cover bg-center`}></div>
          <div className="absolute ml-[80px] px-3 py-1 text-sm text-white bg-orange-600 rounded opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200  transform -translate-x-1/2 left-1 bottom-full mb-1">
             Sap Webide
            </div>
        </div>
        <div className='hover:scale-105 ease-out transiton duration-300 relative group cursor-pointer shadow-lg shadow-orange-600/50 w-[7rem] h-[5rem] rounded-full bg-gradient-to-r from-blue-500  to-orange-600 border border-orange-600  mt-6 flex justify-center items-center content-center'>
          <div className={`imageToolBas mix-blend-multiply w-[4rem] h-[4rem] bg-cover bg-center`}></div>
          <div className="absolute ml-[80px] px-3 py-1 text-sm text-white bg-orange-600 rounded opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200  transform -translate-x-1/2 left-1 bottom-full mb-1">
             Sap BAS
            </div>
        </div>
        {
          ToolArray.map((icon, i) => (<Tools key={i} Icons={icon.component} tooltips={icon.tooltip} />))
        }
      </div>
      
      <div className='w-full h-[50px] '></div>

    </>
  )
}

export default TechnicalSkills
