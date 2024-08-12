import React from 'react'
import Icons from '../partsdesign/Icons'



const FooterSideBar = (props) => {
 const {eventFire} = props;
  return ( 
    <>
      <div className='md:h-full h-screen border border-orange-600 overflow-y-hidden mt-5 rounded-sm p-2'>
       {
eventFire ?(
  <div className='flex  justify-between mt-2  w-full rounded-lg'>
          <button className='bg-orange-600  text-custom-dark-blue w-full rounded-l-lg md:h-9 h-16 text-2xl md:text-sm  active:text-orange-500 active:bg-white'>Download CV</button>
          <button className='bg-custom-dark-blue text-orange-600 w-full rounded-r-lg md:h-9 h-16 text-2xl md:text-sm border border-orange-600 active:bg-orange-500 active:text-white'>Hire Me</button>
      </div> 
) : (
  <div className='flex flex-col  justify-between w-full rounded-lg'>
          <button className='mt-1  border border-orange-600 rounded-md flex justify-center  p-1 hover:bg-slate-500 hover:shadow-inner bg-orange-600 text-white active:text-orange-600 active:bg-white'> CV</button>
          
          <button className='mt-1  text-orange-600 border border-orange-600 rounded-md flex  justify-center p-1 hover:bg-slate-500 hover:shadow-inner active:bg-orange-500 active:text-white'> HM</button>
         
          </div> 
          
)
       }
         
      </div>
    </>
  )
}

export default FooterSideBar
