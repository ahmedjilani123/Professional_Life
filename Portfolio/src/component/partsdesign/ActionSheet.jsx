import React from 'react'

const ActionSheet = () => {
  return (
    <div>
       <div id='company_name' className='text-white '>
          <div className="relative group cursor-pointer flex w-auto">
            <h1 className='text-2xl font-poppins '>Daffodils info knowledge solutions </h1>
            <div className="absolute ml-[80px] px-3 z-99 py-1 text-sm text-white bg-orange-600 rounded opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200  transform -translate-x-1/2 left-1 bottom-full mb-1">
             Company Name
            </div>
          </div>
        </div>
    </div>
  )
}

export default ActionSheet
