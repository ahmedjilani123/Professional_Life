import React from 'react'
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import { GiSandsOfTime } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
import { AiFillExperiment } from "react-icons/ai";
const Buttons = (props) => {
    const {eventFire} = props
    // const ClickHandlerPress = () => {
    //     alert("welcome");
    // }
    const btnArray = [
        { btnName: "About", path: "/about" ,component:CgProfile},
        { btnName: "Experience", path: "/experience",component: AiFillExperiment},
        { btnName: "Technical Skills", path: "/technical_skills",component:GiTechnoHeart },
        { btnName: "Soft Skills", path: "/soft_skills",component: GiSandsOfTime},
        { btnName: "Contact", path: "/contact",component:IoMdContacts },
        { btnName: "Education", path: "/education",component:MdOutlineCastForEducation }
    ];
    return (
        <>
        {
            btnArray.map((item,i)=> {
                const Icons = item.component;
               return (
                <div key={i} className={` font-poppins group mt-4 text-orange-600 border border-orange-600 rounded-md flex ${eventFire ? 'justify-between' : 'justify-center ' } p-1 hover:bg-white/30 backdrop-sepia-0  hover:shadow-inner hover:text-white `}>
                  
                    <Link className={`relative h-full text-orange-600 flex justify-center content-center pt-1 cursor-pointer ${eventFire ? 'w-auto' : 'w-full ' }`} to={item.path}><Icons className='w-full group-hover:text-white' /></Link>
                 {
                    !eventFire &&
                    <div className="opacity-0 hidden group-hover:block absolute ml-[80px] bottom-1 px-2 py-1 text-sm text-white bg-orange-600 rounded group-hover:visible group-hover:opacity-100 transition-opacity duration-200  transform  left-0 ">
                    {item.btnName}
            </div>
                 }  
               
                    <Link className={`font-poppins w-full flex justify-center ${eventFire ? 'block' : 'hidden' }` } to={item.path}>{item.btnName}</Link>
                </div>
               )
            })
           
        }
       
        
        </>
    )
}

export default Buttons
