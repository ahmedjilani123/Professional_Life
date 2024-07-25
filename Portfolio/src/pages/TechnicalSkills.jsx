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
    { component: "sapui5", tooltip: "sapui5" },
    { component: PiFileHtmlBold, tooltip: "HTML" },
    { component: TbFileTypeCss, tooltip: "CSS" },
    { component: SiTailwindcss, tooltip: "Tailwind Css" },
    { component: SiJson, tooltip: "JSON" },
    { component: TbFileTypeXml, tooltip: "XML" },
    { component: AiOutlineJavaScript, tooltip: "Javascript" },
    { component: SiReact, tooltip: "React" },
  ];
  const BacktendIcon = [
    { component: "sapui5", tooltip: "sap_capm" },
    { component: TbBrandNodejs, tooltip: "Node Js" },
    { component: SiExpress, tooltip: "Express" }
  ];
  const ToolArray = [
    { component: "Sap Bas", tooltip: "sap-bas" },
    { component: "Sap Webide", tooltip: "sap-webide" },
    { component: VscVscode, tooltip: "VS Code" }
  ];
  return (
    <>
      <div className="flex justify-center group items-center content-center group w-full h-[100px]  hover:opacity-90 cursor-pointer bg-gradient-to-r from-orange-950 to-orange-600 border border-orange-600 rounded-md shadow-lg shadow-orange-600 grayscale-0 hover:grayscale"  >
        <PiCodeBold className='text-2xl text-orange-400 group-hover:hidden' />
        <h1 className=' transform font-poppins text-orange-600 text-2xl group-hover:block hidden transition ease-in-out duration-300 '>Technical Skills</h1>
      </div>

      <h1 className='font-poppins text-orange-500 mt-4 ml-1 font-bold'> Font-End</h1>
      <div className='shadow-lg shadow-orange-600/50 grid grid-cols-6 justify-items-center gap-x-2  pb-4 mt-0 border border-orange-600 rounded-md'>

        {
          FrontendIcon.map((icon, i) => (<Frontend key={i} Icons={icon.component} tooltips={icon.tooltip} />))
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
        {
          ToolArray.map((icon, i) => (<Tools key={i} Icons={icon.component} tooltips={icon.tooltip} />))
        }
      </div>
      
      <div className='w-full h-[50px] '></div>

    </>
  )
}

export default TechnicalSkills
