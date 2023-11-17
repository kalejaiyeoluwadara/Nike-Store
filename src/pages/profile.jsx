import React from 'react'
import Foot from '../components/foot'
import profile1 from './../assets/profile.png'
import edit from './../assets/icons/edit.png'
import { motion } from 'framer-motion'
import { useGlobal } from '../context'
function Profile() {
  const variant= {
    initial:{
      x:'-100vw'
    },
    animate:{
      x:0,
      transition:{delay:0.2,duration:0.5}
    },
    exit:{
      x:'100vw',
      transition:{ease:'easeInOut'}
    }} 
  return (
    <motion.div  variants={variant} initial="initial" animate="animate" exit="exit"
    className='h-screen bg-[#F7F7F9]'>
      <div className=' h-[600px] overflow-x-hidden w-[100%] ' >
      <section className='flex pr-6  pt-4 justify-between mb-6 items-center '>
        <p className='opacity-[0]'>Empty</p>
        <h3 className='font-[700] text-[19px] ral '>Profile</h3>
        <p  className='font-[700]  text-blue-600 text-[17px] ral '>Edit</p>
      </section>
    
      <section className='flex    items-center justify-center'>
           <div className='relative'>
           <img className='' src={profile1} alt="" />
            <img src={edit} className='bottom-0  absolute right-3' alt="" />
           </div>
      </section>

      <section className='mt-[50px] pb-20 w-[100%] px-6 gap-8 flex flex-col '>
        <div>
            <h1 className='ral font-[700] opacity-[0.9] '>Your Name</h1>
            <div className='bg-gray-200 uppercase font-[500] ral mt-2 h-[60px] rounded-[10px] flex items-center px-6 '><h1 className='outline-none' >Emmanuel Oyiboke</h1></div>
        </div>

        <div>
            <h1 className='ral font-[700] opacity-[0.9] '>Email Address</h1>
            <div className='bg-gray-200 font-[500] ral mt-2 h-[60px] rounded-[10px] flex items-center px-6 '><h1 className='outline-none' >emmanueloyiboke@gmail.com</h1></div>
        </div>

        <div>
            <h1 className='ral font-[700] opacity-[0.9] '>Password</h1>
            <div className='bg-gray-200 uppercase font-[500] ral mt-2 h-[60px] rounded-[10px] flex items-center px-6 '>
                <input className='bg-transparent font-[600] text-[30px] opacity-[0.8] ' type='password' value='hello' disabled />
            </div>
        </div>
        <h1 className='text-right -mt-4 opacity-[0.7] '>Recover Password</h1>
      </section>
      </div>
      <Foot/>
    </motion.div>
  )
}

export default Profile
