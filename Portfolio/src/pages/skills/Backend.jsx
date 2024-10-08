import React from 'react'
import '../../component/partsdesign/profiledesign.css'
const Backtend = (props) => {
    const {Icons,tooltips} = props;
    const Icon=Icons
  return (
    <>
       { tooltips == "sap_capm" ? <div className='group hover:scale-105 ease-out transiton duration-300 relative group cursor-pointer shadow-lg shadow-orange-600/50 w-[7rem] h-[5rem] rounded-md bg-gradient-to-r from-[#fac0a1]  to-orange-600 border border-orange-600  mt-6 flex justify-center items-center content-center'>
          <div className='imageCapm group-hover:scale-75 transition ease-out duration-200 mix-blend-multiply w-[4rem] h-[4rem] bg-cover bg-center'></div>
          <div className="absolute ml-[80px] px-3 py-1 text-sm text-white bg-orange-600 rounded opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200  transform -translate-x-1/2 left-1 bottom-full mb-1">
             {tooltips.replace("_"," ")}
            </div>
        </div> : <div className='mt-5 hover:scale-105 group ease-out transiton duration-300  relative group cursor-pointer shadow-lg shadow-orange-600/50 w-[7rem] h-[5rem] rounded-md bg-gradient-to-r from-[#fac0a1]  to-orange-600 border border-orange-600  flex justify-center items-center content-center'>
             <div className='flex group-hover:scale-75 transition ease-out duration-200 justify-center items-center content-center'><Icon className='w-[4rem] h-[4rem]'/></div>
             <div className="absolute ml-[80px] px-3 py-1 text-sm text-white bg-orange-600 rounded opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200  transform -translate-x-1/2 left-1 bottom-full mb-1">
              {tooltips}
               </div>
           </div>
}
       
    </>
  )
}

export default Backtend;
