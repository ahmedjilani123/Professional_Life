import React from 'react'

const Tools = (props) => {
    const {Icons,tooltips} = props;
    const Icon=Icons
    const Background ="bg-"+tooltips;
  return (
    
    <>
    
       { tooltips.includes('sap') ? <div className='relative group cursor-pointer shadow-lg shadow-orange-600/50 w-[7rem] h-[5rem] rounded-full bg-gradient-to-r from-blue-500  to-orange-600 border border-orange-600  mt-6 flex justify-center items-center content-center'>
          <div className={`${Background} == 'bg-sap-webide' ? 'bg-sap-webide' : 'bg-sap-bas' mix-blend-multiply w-[4rem] h-[4rem] bg-cover bg-center`}></div>
          <div className="absolute ml-[80px] px-3 py-1 text-sm text-white bg-orange-600 rounded opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200  transform -translate-x-1/2 left-1 bottom-full mb-1">
             {Icon}
            </div>
        </div>
         : <div className='mt-5  relative group cursor-pointer shadow-lg shadow-orange-600/50 w-[7rem] h-[5rem] rounded-full bg-gradient-to-r from-blue-500  to-orange-600 border border-orange-600  flex justify-center items-center content-center'>
             <div className='flex justify-center items-center content-center'><Icon className='w-[4rem] h-[4rem]'/></div>
             <div className="absolute ml-[80px] px-3 py-1 text-sm text-white bg-orange-600 rounded opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200  transform -translate-x-1/2 left-1 bottom-full mb-1">
              {tooltips}
               </div>
           </div>
}
       
    </>
  )
}

export default Tools;
