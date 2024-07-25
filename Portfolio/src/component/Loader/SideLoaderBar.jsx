import React from 'react'

const SideLoaderBar = () => {
    return (
        <>
        <div className='bg-slate-200 animate-pulse  rounded-md p-2 h-full'>
          <div className='border-2 bg-slate-200 rounded-md p-2'>
    <div className='w-full flex justify-center '>
    <div className='w-14 h-14 rounded-full bg-slate-300 cursor-pointer hover:opacity-50 hover:ease-out' ></div>
    </div>
    <div className='w-full flex justify-center mt-2'>
        <div className=' bg-slate-300 h-4 w-full' ></div>
    </div>
    <div className='w-full flex justify-center mt-2 rounded-lg'>
        <div className='bg-slate-300 h-2 w-full text-gray-500'></div>
    </div>

</div>
<div className='mt-4 mb-4 bg-slate-200'>
    <hr className='border-t-2 border-slate-300 my-4'></hr>
</div>
<div className=' w-full h-12 bg-slate-300 rounded-md'></div>
<div className='w-full h-12 bg-slate-300 rounded-md mt-2'></div>
<div className='w-full h-12 bg-slate-300 rounded-md mt-2'></div>
<div className='w-full h-12 bg-slate-300 rounded-md mt-2'></div>
<div className='w-full h-12 bg-slate-300 rounded-md mt-2'></div>
<div className='h-full border overflow-y-hidden mt-5 rounded-sm p-2'>
    <div className='w-full h-12 bg-slate-300 rounded-md'></div>
    <div className='flex justify-around mt-3'>
        <div className='rounded-full w-10 h-10 bg-slate-300'></div>
        <div className='rounded-full w-10 h-10 bg-slate-300'></div>
        <div className='rounded-full w-10 h-10 bg-slate-300'></div>
        <div className='rounded-full w-10 h-10 bg-slate-300'></div>
    </div>
</div>
</div>
        </>
    )
}

export default SideLoaderBar
