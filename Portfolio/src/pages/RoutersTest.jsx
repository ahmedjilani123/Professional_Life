import React from 'react'
import { Link } from 'react-router-dom';

const RoutersTest = () => {
  return (
    <div>
      <Link to='/about' className='text-white'>About</Link>
      <Link to='/experience' className='text-white'>experience</Link>
      <Link to='/h' className='text-white'>home</Link>
    </div>
  )
}

export default RoutersTest
