import { useState } from 'react'
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom'
import NavbarHeader from './component/Navbar/NavbarHeader'
import ProfileDesign from './component/partsdesign/profiledesign'
import Buttons from './component/partsdesign/buttons'
import FooterSideBar from './component/Navbar/FooterSideBar'
import About from './pages/About'
import Experience from './pages/Experience'
import TechnicalSkills from './pages/TechnicalSkills'
import SoftSkills from './pages/SoftSkills'
import Contact from './pages/Contact'
import SideLoaderBar from './component/Loader/SideLoaderBar'
import './App.css'
function App() {
  const [Loader,SetLoader]=useState(true);
  setTimeout(function(){
SetLoader(false);
  },1000)
  return (
    <>
    
    <NavbarHeader/>
    <div className='bg-slate-200 md:h-screen md:fixed w-full md:flex'>
      <div className='w-[350px] md:block hidden bg-custom-dark-blue p-2 mt-1 rounded-t-lg md:flex-col'>
        {
          Loader ? <SideLoaderBar></SideLoaderBar> : <ProfileDesign></ProfileDesign>
        }
       
        {/* <div>
        <ProfileDesign></ProfileDesign>
        <Buttons/>
        <FooterSideBar/>
        </div> */}
      
      </div>
      <div className='w-full bg-custom-dark-blue mb-12 p-2 mt-1 rounded-t-lg border-l-2 border-indigo-100 h-screen overflow-y-scroll custom-scrollbar'>
        
          <Routes>
            <Route path='/' element={<About/>} ></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/experience' element={<Experience/>}></Route>
            <Route path='/technical_skills' element={<TechnicalSkills/>}></Route>
            <Route path='/soft_skills' element={<SoftSkills/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        
        <div>

        </div>
    
      </div>
    </div>
    </>
  )
}



export default App
