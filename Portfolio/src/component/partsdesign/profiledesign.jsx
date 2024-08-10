import React from 'react'
import profile from '../../images/profilephotp.jpg';
import './profiledesign.css'
import Buttons from './buttons';
import FooterSideBar from '../Navbar/FooterSideBar';
const ProfileDesign = (props) => {
    const {eventFire} = props;
  return (
    <>
<div className='border-2 border-orange-600 rounded-md p-2 shadow-lg shadow-orange-600/50'>
    <div className='w-full flex justify-center '>
    <img src={profile} className='w-14 h-14 rounded-full drop-shadow-xl border border-gray-500 cursor-pointer hover:opacity-50 hover:ease-out' aria-label='profile image' alt='profile image' aria-description='profile image' />
    </div>
    
    <div className='w-full flex justify-center mt-2'>
        <h2 className='text-2xl text-orange-600 font-poppins font-bold' >{eventFire ? 'Ahmed Shaikh' : 'AS'}</h2>
    </div>
    <div className='w-full flex justify-center '>
        <span className='btn-shine text-xl font-sans font-semibold text-gray-500'>{eventFire ? 'App Developer' : 'App'}</span>
    </div>

</div>
<div className='mt-4 mb-4 text-orange-600'>
    <hr className='border-t-2 border-orange-600 my-4'></hr>
</div>
<Buttons eventFire={eventFire}></Buttons>
<FooterSideBar eventFire={eventFire}></FooterSideBar>
    </>
  )
}

export default ProfileDesign
