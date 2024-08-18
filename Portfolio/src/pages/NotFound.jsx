import React from 'react'
import figt404 from '../images/profile_404.jpeg'
const NotFound = () => {
  return (
    <div className="cursor-not-allowed flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
    <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
    <p className="mb-8">Sorry, the page you're looking for doesn't exist.</p>
    <div>
      <img src={figt404} alt="404 Not Found" className="w-72 cursor-not-allowed rounded-xl h-full shadow-md shadow-blue-600/30" />
    </div>
  </div>
  )
}

export default NotFound
