import React from 'react'
import '../../component/partsdesign/profiledesign.css'
const Tools = (props) => {
    const {Icons,tooltips} = props;
    const Icon=Icons
  return (
    
    <>
    
    
          <div className='mt-5  relative group cursor-pointer shadow-lg shadow-orange-600/50 w-[7rem] h-[5rem] rounded-full bg-gradient-to-r from-blue-500  to-orange-600 border border-orange-600  flex justify-center items-center content-center'>
             <div className='flex justify-center items-center content-center'><Icon className='w-[4rem] h-[4rem]'/></div>
             <div className="absolute ml-[80px] px-3 py-1 text-sm text-white bg-orange-600 rounded opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200  transform -translate-x-1/2 left-1 bottom-full mb-1">
              {tooltips}
               </div>
           </div>

       
    </>
  )
}

export default Tools;
