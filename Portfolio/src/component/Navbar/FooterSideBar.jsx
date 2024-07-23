import React from 'react'
import Icons from '../partsdesign/Icons'

const FooterSideBar = () => {
  return (
    <>
      <div className='h-full border border-orange-600 overflow-y-hidden mt-5 rounded-sm p-2'>
        <div className='flex justify-between mt-2  w-full rounded-lg'>
            <button className='bg-orange-600 text-custom-dark-blue w-full rounded-l-lg h-9 active:bg-slate-100'>Click CV</button>
            <button className='bg-custom-dark-blue text-orange-600 w-full rounded-r-lg h-9 border border-orange-600 active:bg-orange-500'>Contact</button>
        </div>
        <div>
            <Icons></Icons>
        </div>
      </div>
    </>
  )
}

export default FooterSideBar
