import React from 'react'
import  '../../component/partsdesign/profiledesign.css';

const Frontend = (props) => {
    const {Icons,tooltips,UrlHandlerFrontEnd} = props;
    const Icon=Icons
  return (
    <>
       { tooltips == "sapui5" ? <div onClick={UrlHandlerFrontEnd} className='active:bg-slate-300 group  relative group cursor-pointer shadow-lg shadow-orange-600/50 w-[7rem] h-[5rem] rounded-md bg-gradient-to-r from-[#f69e6e]  to-orange-600 border border-orange-600  mt-6 flex justify-center items-center content-center'>
          <div className='imageUI5 group-hover:scale-75 transition ease-in-out duration-300 mix-blend-multiply w-[4rem] h-[4rem] bg-cover bg-center'></div>
          <div className="absolute ml-[80px] px-3 py-1 text-sm text-white bg-orange-600 rounded opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200  transform -translate-x-1/2 left-1 bottom-full mb-1">
             {tooltips}
            </div>
        </div> : <div onClick={UrlHandlerFrontEnd} className='mt-5 group hover:skew-y-6 ease-out duration-300 transition relative group cursor-pointer shadow-lg shadow-orange-600/50 w-[7rem] h-[5rem] rounded-md bg-gradient-to-r from-[#f69e6e]    to-orange-600 border border-orange-600  flex justify-center items-center content-center'>
             <div className='flex justify-center group-hover:scale-75 transition ease-in-out duration-300 items-center content-center'><Icon className='w-[4rem] h-[4rem]'/></div>
             <div className="absolute ml-[80px] px-3 py-1 text-sm text-white bg-orange-600 rounded opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200  transform -translate-x-1/2 left-1 bottom-full mb-1">
              {tooltips}
               </div>
           </div>
}
       
    </>
  )
}

export default Frontend;
