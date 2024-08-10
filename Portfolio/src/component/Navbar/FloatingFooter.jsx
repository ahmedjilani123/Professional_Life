import React from 'react'
import Icons from '../partsdesign/Icons'

const FloatingFooter = () => {
  return (
    <div className='w-fit justify-center fixed  h-10  bottom-2 right-5 shadow-md shadow-white/30 backdrop-sepia-0 bg-white/30 border border-orange-600 rounded-md '>
    <div className='flex gap-x-4 w-full rounded-md h-full px-3  content-center justify-center  items-center'>
    <Icons></Icons>
    </div>


  </div>
  )
}

export default FloatingFooter
