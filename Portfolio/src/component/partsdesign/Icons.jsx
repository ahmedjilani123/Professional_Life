import React from 'react'
import { FaLinkedin , FaInstagram, FaWhatsappSquare ,FaGithubSquare} from "react-icons/fa";
const Icons = () => {
    const iconArray = [
        { component: FaLinkedin ,link:'https://www.linkedin.com/in/ahmed-jilani-profile/'},
        { component: FaInstagram ,link:''},
        { component: FaWhatsappSquare,link:'https://web.whatsapp.com/' },
        { component: FaGithubSquare,link:'https://github.com/ahmedjilani123'},
      ];
      const OpenLinkIcon=(link)=>{
        debugger;
        window.open(link);
      }
  return (
    <>
  
      {iconArray.map((icon, index) => {
        const IconComponent = icon.component;
        return (
          <IconComponent
            key={index} onClick={()=>OpenLinkIcon(icon.link)}
            className='text-2xl text-orange-600 cursor-pointer hover:text-white shadow-lg shadow-orange-600/50'
          />
        );
      })}
    
    
    </>
  )
}

export default Icons
