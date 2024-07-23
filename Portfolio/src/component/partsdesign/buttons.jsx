import React from 'react'
import { Link } from 'react-router-dom';
const Buttons = () => {
    // const ClickHandlerPress = () => {
    //     alert("welcome");
    // }
    const btnArray = [
        { btnName: "About", path: "/about" },
        { btnName: "Experience", path: "/experience" },
        { btnName: "Technical Skills", path: "/technical_skills" },
        { btnName: "Soft Skills", path: "/soft_skills" },
        { btnName: "Contact", path: "/contact" }
    ];
    return (
        <>
        {
            btnArray.map((item,i)=> {
               return (
                <div key={i} className='mt-4 text-orange-600 border border-orange-600 rounded-md flex justify-center p-1 hover:bg-slate-500 hover:shadow-inner'>
                    {/* <button className='w-full' onClick={ClickHandlerPress}>{item.btnName}</button> */}
                    <Link className='w-full flex justify-center' to={item.path}>{item.btnName}</Link>
                </div>
               )
            })
           
        }
       
        
        </>
    )
}

export default Buttons
