import React from 'react'

const Contact = () => {
  const SubmitHandlerPress=()=>{
    alert("data is submitted")
  }
  return (
    <>
      <div id='mainFormPart' className='w-full h-full  content-center flex justify-center items-center'>
        <div id='form' className='rounded-md w-[300px] shadow-md shadow-orange-600 border border-orange-600 px-2 py-3'>
    <div className='flex justify-center'>
    <h2 className='text-orange-600 font-poppins font-bold'>Contact Form</h2>
         
    </div>
         <div className='flex justify-evenly flex-wrap w-full '>
          <div className='pt-2'>
            <label className='text-orange-600 font-poppins text-sm'>First Name</label>
            <div className='w-[7rem] h-8 shadow-md'>
              <input type="text" className='bg-custom-dark-blue text-white w-full h-full rounded-md border border-orange-600 focus:border-blue-600 shadow-md focus:shadow-blue-400 p-2 outline-none'></input>
            </div>
          </div>
          <div className='pt-2'>
            <label className='text-orange-600 font-poppins text-sm'>Last Name</label>
            <div className='w-[7rem] h-8 shadow-md'>
              <input type="text" className='bg-custom-dark-blue text-white w-full h-full rounded-md border border-orange-600 focus:border-blue-600 p-2 outline-none shadow-md focus:shadow-blue-400'></input>
            </div>
          </div>
          </div>
          <div className='px-5 pt-2'>
            <label className='text-orange-600 font-poppins text-sm'>Email</label>
            <div className='w-full  h-8 shadow-md'>
              <input type="email" className='bg-custom-dark-blue text-white w-full h-full rounded-md border border-orange-600 focus:border-blue-600 p-2 outline-none shadow-md focus:shadow-blue-400'></input>
            </div>
          </div>
          <div className='px-5 pt-2'>
            <label className='text-orange-600 font-poppins text-sm'>Contact No.</label>
            <div className='w-full  h-8 shadow-md'>
              <input type="number" className='bg-custom-dark-blue text-white w-full h-full rounded-md border border-orange-600 focus:border-blue-600 p-2 outline-none shadow-md focus:shadow-blue-400'></input>
            </div>
          </div>
          <div className='px-5 pt-2'>
            <label className='text-orange-600 font-poppins text-sm'>Company Name</label>
            <div className='w-full  h-8 shadow-md'>
              <input type="text" className='bg-custom-dark-blue text-white w-full h-full rounded-md border border-orange-600 focus:border-blue-600 p-2 outline-none shadow-md focus:shadow-blue-400'></input>
            </div>
          </div>
          <div className='px-5 pt-2'>
            <label className='text-orange-600 font-poppins text-sm'>Gender</label>
            <div className='w-full  h-8  flex'>
              <input type="radio" name='gender' className='mb-1 rounded-md border focus:border-orange-600 p-2 outline-none'/>
              <span className='text-orange-700 ml-1'>Male</span>
              <input type="radio" name='gender' className='ml-4 mb-1  rounded-md border focus:border-orange-600 p-2 outline-none'/>
               <span className='text-orange-700 ml-1'>Female</span>
              
            </div>
          </div>
          <div className='px-5 pt-2'>
            <label className='text-orange-600 font-poppins text-sm'>FeedBack</label>
            <div className='w-full '>
              <textarea type="text" rows={2} aria-expanded="false" aria-required="true" draggable="true" className='bg-custom-dark-blue text-white w-full h-full rounded-md border border-orange-600 focus:border-blue-600 p-2 outline-none shadow-md focus:shadow-blue-400'/>
            </div>
          </div>
          <div className='flex justify-evenly flex-wrap pt-2'>
          <div>
            <div className='w-[7rem] h-8 shadow-md rounded-md border border-orange-600  bg-custom-dark-blue flex justify-center items-center'>
            <button className='text-red-700 font-bold h-full w-full rounded-md font-poppins shadow-lg hover:shadow-red-500'>Cancel</button>
            </div>
          </div>
          <div>
            <div className='w-[7rem] h-8 shadow-md rounded-md  flex justify-center items-center border border-blue-600'>
            <button className='text-white font-bold h-full w-full rounded-md font-poppins shadow-lg hover:shadow-blue-500 active:bg-blue-600 ' onClick={SubmitHandlerPress}>Submit</button>
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
