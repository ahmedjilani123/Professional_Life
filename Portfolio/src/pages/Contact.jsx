import React from 'react'

const Contact = () => {
  const SubmitHandlerPress=()=>{
    alert("data is submitted")
  }
  return (
    <>
    <div className='px-3 bg-yellow-500/20 ml-9 w-[200px]  absolute   h-[400px] blur-3xl  rounded-full md:hidden'> </div>
    <div className='px-3 bg-blue-600/30 w-[200px] mt-[200px] ml-[70px] absolute h-[300px] blur-3xl  rounded-full md:hidden'> </div>
      <div id='mainFormPart' className='mt-[8rem]  relative md:mt-3 flex justify-center'>
        <div id='form' className='rounded-md w-[300px]  bg-white/10 shadow-md shadow-orange-600 border border-orange-600 px-2 py-3'>
    <div className='flex justify-center'>
    <h2 className='text-[#f06418] font-poppins font-bold'>Contact Form</h2>
         
    </div>
         <div className='flex justify-evenly flex-wrap w-full '>
          <div className='pt-2'>
            <label className='text-orange-600 font-poppins text-sm'>First Name</label>
            <div className='w-[7rem] h-8 shadow-md'>
              <input type="text" className='bg-transparent text-white w-full h-full rounded-md border border-orange-600 focus:border-blue-600  focus:shadow-blue-400 p-2 outline-none'></input>
            </div>
          </div>
          <div className='pt-2'>
            <label className='text-orange-600 font-poppins text-sm'>Last Name</label>
            <div className='w-[7rem] h-8 shadow-md'>
              <input type="text" className='bg-transparent text-white w-full h-full rounded-md border border-orange-600 focus:border-blue-600 p-2 outline-none shadow-md focus:shadow-blue-400'></input>
            </div>
          </div>
          </div>
          <div className='px-5 pt-2'>
            <label className='text-orange-600 font-poppins text-sm'>Email</label>
            <div className='w-full  h-8 shadow-md'>
              <input type="email" className='bg-transparent text-white w-full h-full rounded-md border border-orange-600 focus:border-blue-600 p-2 outline-none shadow-md focus:shadow-blue-400'></input>
            </div>
          </div>
          <div className='px-5 pt-2'>
            <label className='text-orange-600 font-poppins text-sm'>Contact No.</label>
            <div className='w-full  h-8 shadow-md'>
              <input type="number" className='bg-transparent text-white w-full h-full rounded-md border border-orange-600 focus:border-blue-600 p-2 outline-none shadow-md focus:shadow-blue-400'></input>
            </div>
          </div>
          <div className='px-5 pt-2'>
            <label className='text-orange-600 font-poppins text-sm'>Company Name</label>
            <div className='w-full  h-8 shadow-md'>
              <input type="text" className='bg-transparent text-white w-full h-full rounded-md border border-orange-600 focus:border-blue-600 p-2 outline-none shadow-md focus:shadow-blue-400'></input>
            </div>
          </div>
         
          <div className='px-5 pt-2'>
            <label className='text-orange-600 font-poppins text-sm'>FeedBack</label>
            <div className='w-full '>
              <textarea type="text" rows={2} aria-expanded="false" aria-required="true" draggable="true" className='bg-transparent text-white w-full h-full rounded-md border border-orange-600 focus:border-blue-600 p-2 outline-none shadow-md focus:shadow-blue-400'/>
            </div>
          </div>
          <div className='flex justify-evenly flex-wrap pt-2'>
          <div>
            <div className='w-[7rem] h-8 shadow-md groupc  rounded-md border border-orange-600  bg-transparent flex justify-center items-center'>
            <button className='text-[#f06418]  active:bg-[#f28043] active:text-white  h-full w-full rounded-md font-poppins shadow-md hover:shadow-[#fac0a1]'>Cancel</button>
            </div>
          </div>
          <div>
            <div className='w-[7rem] h-8 bg-[#f06418] shadow-md rounded-md  flex justify-center items-center border border-orange-600'>
            <button className='text-white  h-full w-full rounded-md font-poppins shadow-md hover:shadow-[#fac0a1] active:bg-[#f28043] ' onClick={SubmitHandlerPress}>Submit</button>
              </div>
          </div>
          </div>
        </div>
      </div>
      
      <div className='w-full h-[50px] '></div>
    </>
  )
}

export default Contact
