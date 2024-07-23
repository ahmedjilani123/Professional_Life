import React from 'react'
import Icons from '../partsdesign/Icons'

const FooterSideBar = () => {
  return (
    <>
      <div className='h-full border border-orange-600 overflow-y-hidden mt-5 rounded-sm p-2'>
        <div className='bg-white flex justify-between mt-2  w-full rounded-lg'>
            <button className='bg-slate-300 w-full rounded-l-lg h-9 hover:bg-orange-600'>Download CV</button>
            <button className='bg-slate-500 w-full rounded-r-lg h-9 hover:bg-orange-600'>Contact</button>
        </div>
        <div>
            <Icons></Icons>
        </div>
      </div>
    </>
  )
}

export default FooterSideBar
