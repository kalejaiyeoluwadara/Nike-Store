import React from 'react'
import { useGlobal } from '../context'
import {Link} from 'react-router-dom'
import foot from '../assets/icons/foot.svg'
import { motion } from 'framer-motion'
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
        <Link  to="/home" ><div className=' ' onClick={() =>{handleClick('home')}}>{present === "home" ? <img src={home} alt="" /> : <motion.img   whileHover={{
              scale:1.1
            }}  
            
            whileTap={{
              scale:0.9
            }}
            transition={{
              duration:0.1,
              ease:'easeInOut'
            }} src={home2} alt="" />}</div></Link>
        <Link  to="/favorites" ><div onClick={() =>{handleClick('likes')}}>{present === "likes" ? <img src={hfill} alt="" /> : <motion.img   whileHover={{
              scale:1.1
            }}  
            
            whileTap={{
              scale:0.9
            }}
            transition={{
              duration:0.2,
              ease:'easeInOut'
            }} src={likes} alt="" />}</div></Link>        
      </div>
     <Link to='/shop' >
     <motion.div 
     className='h-[60px] sh tr w-[60px] ani flex items-center justify-center rounded-[50%] bg-blue-500 '>
        <img src={cart} alt="" />
      </motion.div>
     </Link>
      <div className='flex r gap-8 '>
      <Link  to="/notification" ><div className='relative z-40' onClick={() =>{handleClick('bell')}}>{present === "bell" ? <img src={hbell}    alt="" /> : <motion.img   whileHover={{
              scale:1.1
            }}  
            
            whileTap={{
              scale:0.9
            }}
            transition={{
              duration:0.2,
              ease:'easeInOut'
            }} src={noti}  alt="" />}</div></Link>
      <Link  to="/profile" ><div className='relative z-40' onClick={() =>{handleClick('profile')}}>{present === "profile" ? <img   src={hprofile}  alt="" /> : <motion.img   whileHover={{
              scale:1.1
            }}  
            
            whileTap={{
              scale:0.9
            }}
            transition={{
              duration:0.2,
              ease:'easeInOut'
            }} src={profile} alt="" />}</div></Link>
        
        <img className='fixed w-screen  bottom-0 right-0 ' src={foot} alt="" />
      </div>
    </footer>
  )
}

export default Foot
