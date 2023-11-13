import React from 'react'
import { useGlobal } from '../context'
import {Link} from 'react-router-dom'
function Foot() {
  const {home,likes,cart,bell,profile} = useGlobal();
  return (
    <footer className='bg-white  fixed bottom-0 h-[70px] flex justify-between items-center gap-10 w-screen px-10 py-4'>
      <div className='flex gap-8 '>
        <Link to="/home" ><img src={home} alt="" /></Link>
        <Link to="/favorites" ><img src={likes} alt="" /></Link>
        
        
        
      </div>
     <div className='h-[60px] tr w-[60px] flex items-center justify-center rounded-[50%] bg-blue-600 '>
        <img src={cart} alt="" />
      </div>
      <div className='flex gap-8 '>
      <Link to="/profile" ><img src={profile} alt="" /></Link>
      <Link to="/notification" ><img src={profile} alt="" /></Link>
        
        
      </div>
    </footer>
  )
}

export default Foot
