import React from 'react'
import Foot from '../components/foot'
import { useGlobal } from '../context';
import Category from '../components/category';
import Popular from '../components/popular';
import {Link} from 'react-router-dom'
import bag2 from '../assets/icons/bag2.png'
import New from '../components/new';
import { motion,AnimatePresence } from 'framer-motion';
import Menu from './menu';
function Home() {
    const {spark,menu,sliders,search,setMenu,menus} = useGlobal();    
    const variant= {
      initial:{
        x:'0'
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
      <motion.div
      variants={variant} initial="initial" animate="animate" exit="exit"
   className=' relative pb-[140px] w-screen h-[auto] bg-[#F7F7F9]'>
       {/* Intro section */}
     <section className='flex items-center justify-between px-6 pt-6 '>
     <AnimatePresence>
     {menus && <Menu/>}
     </AnimatePresence>

       <div>
          <img onClick={() =>{setMenu(true)}} src={menu} alt="" />
       </div>
       <div className='flex items-start'>
           <img src={spark} alt="" />
           <h1 className='font-[700] ral text-[40px] '>Explore</h1>
       </div>
       <div className='bg-white relative h-[45px] w-[45px] shadow-sm rounded-[50%]  flex items-center justify-center '>
         <img  src={bag2} alt="" />
         <div className='h-[10px] absolute top-0 right-0 w-[10px] bg-red-500 rounded-[50%] ' />
       </div>
     </section>

     {/* search section */}
     <section className='flex px-6 mt-6 items-center justify-between gap-4'>
       <div className='bg-white px-4 shadow-md h-[50px] w-[80%] rounded-[10px] flex items-center justify-start gap-4 '>
               <img className='opacity-[0.6]' src={search} alt="" />
               <input className='w-[90%]  outline-none placeholder:text-bg-gray-900 placeholder:opacity-1 ' placeholder='Looking for shoes' type="text" />
       </div>
       <div className='h-[50px] flex items-center justify-center w-[50px] bg-blue-500 rounded-[50%] '>
           <img src={sliders} alt="" />
       </div>
     </section>
       
       {/* Main section */}
     <section>
       <Category/>
       <Popular/>
       <div className='px-6'>
       <New/>
       </div>
     </section>
     <Foot/>
   </motion.div>
  )
}

export default Home;
