import React from 'react'
import { useGlobal } from '../context'
import {Link} from 'react-router-dom'
import foot from '../assets/icons/foot.svg'
import home2 from './../assets/icons/home2.svg'
import hfill from './../assets/icons/hfill.png'
import hprofile from './../assets/icons/hprofile.png'
import hbell from './../assets/icons/hbell.png'
function Foot() {
  const {home,likes,cart,noti,profile,present,setPresent} = useGlobal();
  const handleClick = (param) =>{
    setPresent(param);
  }
  return (
    <footer className='  fixed bottom-0 h-[70px] flex justify-between items-center gap-10 w-screen px-10 py-4'>
      <div className='flex relative z-40 gap-8 '>
        <Link  to="/home" ><div onClick={() =>{handleClick('home')}}>{present === "home" ? <img src={home} alt="" /> : <img src={home2} alt="" />}</div></Link>
        <Link  to="/favorites" ><div onClick={() =>{handleClick('likes')}}>{present === "likes" ? <img src={hfill} alt="" /> : <img src={likes} alt="" />}</div></Link>        
      </div>
     <div className='h-[60px] tr w-[60px] flex items-center justify-center rounded-[50%] bg-blue-600 '>
        <img src={cart} alt="" />
      </div>
      <div className='flex r gap-8 '>
      <Link  to="/profile" ><div className='relative z-40' onClick={() =>{handleClick('bell')}}>{present === "bell" ? <img src={hbell}    alt="" /> : <img src={noti}  alt="" />}</div></Link>
      <Link  to="/notification" ><div className='relative z-40' onClick={() =>{handleClick('profile')}}>{present === "profile" ? <img   src={hprofile}  alt="" /> : <img src={profile} alt="" />}</div></Link>
        
        <img className='fixed w-screen  bottom-0 right-0 ' src={foot} alt="" />
      </div>
    </footer>
  )
}

export default Foot
