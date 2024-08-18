import { useState } from 'react'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
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
import Education from './pages/Education'
import {motion} from 'framer-motion';
import FloatingFooter from './component/Navbar/FloatingFooter';
import NotFound from './pages/NotFound'

function App() {
  const [Loader, SetLoader] = useState(true);
  const [change, setChange] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0); //buttons
    const [ShowView,SetShowView] = useState(false);//app index

    const ActivePress = (index) => {
        setActiveIndex(index);
        SetShowView(!ShowView);
    }
  setTimeout(function () {
    SetLoader(false);
  }, 1000)
  const WidthSetHandlerPress = () => {
    setChange(!change);
  }
  const ShowMainProfile =()=>{
    SetShowView(!ShowView);
  }
  return (
    <>

      <NavbarHeader showArrow ={ShowView} WidthSetHandler={WidthSetHandlerPress}  ShowMainProfile={ShowMainProfile}/>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2 ,duration:2,type:'tween'}} className='md:bg-slate-200 bg-custom-dark-blue   md:h-screen h-screen md:fixed w-full md:flex'>
        <motion.div  className={`${ShowView ? 'hidden':'block'}   ${change ? 'md:w-[350px]' : 'md:w-[90px]'} md:block w-full  bg-custom-dark-blue p-2 mt-1 rounded-t-lg md:flex-col`}>
 <ProfileDesign  eventFire={change} ViewShow={ActivePress} activeIndex={activeIndex} />
          {/* {
            Loader ? <SideLoaderBar></SideLoaderBar> : <ProfileDesign eventFire={change} />
          } */}
         

        </motion.div>
        <div className={`${ShowView ? 'block':'hidden'} w-full  md:block  bg-custom-dark-blue md:mb-12 p-2 mt-1 rounded-t-lg md:border-l-2  border-indigo-100 md:h-screen  md:overflow-y-scroll custom-scrollbar`}>
<div>
<Routes>
            <Route path='/' element={<About />} ></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/experience' element={<Experience />}></Route>
            <Route path='/technical_skills' element={<TechnicalSkills />}></Route>
            <Route path='/soft_skills' element={<SoftSkills />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/education' element={<Education />}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          
          </Routes>
</div>
<div>
<FloatingFooter></FloatingFooter>
</div>
         

          
        
          

        </div>
      </motion.div>
    </>
  )
}



export default App
