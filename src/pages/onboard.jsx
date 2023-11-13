import React from 'react'
import {Link} from 'react-router-dom'
import logo from './../assets/icons/logo.png'
function Onboard() {
  return (
   <Link to='/home'>
    <div className='h-screen w-screen bg-blue-600 flex items-center justify-center  '>
      <img src={logo} alt="Nike Logo" />
    </div>
   </Link>
  )
}

export default Onboard
