import React from 'react'
import { FaLinkedin , FaInstagram, FaWhatsappSquare ,FaGithubSquare} from "react-icons/fa";
const Icons = () => {
    const iconArray = [
        { component: FaLinkedin},
        { component: FaInstagram },
        { component: FaWhatsappSquare },
        { component: FaGithubSquare},
      ];
  return (
    <>
    <div className="flex justify-around mt-8">
      {iconArray.map((icon, index) => {
        const IconComponent = icon.component;
        return (
          <IconComponent
            key={index}
            className='text-2xl text-orange-600 cursor-pointer hover:text-white'
          />
        );
      })}
    </div>
    
    </>
  )
}

export default Icons
