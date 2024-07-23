import { useState } from 'react'
import NavbarHeader from './component/Navbar/NavbarHeader'
import ProfileDesign from './component/partsdesign/profiledesign'
import Buttons from './component/partsdesign/buttons'
import FooterSideBar from './component/Navbar/FooterSideBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <NavbarHeader/>
    <div className='bg-slate-200 md:h-screen md:fixed w-full md:flex'>
      <div className='w-[350px] md:block hidden bg-custom-dark-blue p-2 mt-1 rounded-t-lg md:flex-col'>
        <ProfileDesign></ProfileDesign>
        <Buttons/>
        <FooterSideBar/>
      </div>
      <div className='w-full bg-custom-dark-blue  p-2 mt-1 rounded-t-lg border-l-2 border-indigo-100'>
      </div>
    </div>
    </>
  )
}

export default App
