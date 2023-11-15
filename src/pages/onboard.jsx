import React from 'react'
import {Link} from 'react-router-dom'

import logo from './../assets/icons/logo.png'
import logo2 from './../assets/icons/nike.svg'
function Onboard() {
  return (
   <Link to='/home'>
    <div className='h-screen board w-screen bg-blue-500 flex items-center justify-center  '>
     <div className='flex flex-col items-center justify-center gap-4'>
     <img src={logo2} alt='' />
      <h1 className='font-[700] text-white text-[90px] ' >NIKE</h1>
     </div>
    </div>
   </Link>
  )
}

export default Onboard
