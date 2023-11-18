import React, { useState } from 'react'
import Foot from '../components/foot'
import { useGlobal } from '../context';
import Category from '../components/category';
import Popular from '../components/popular';
import {Link} from 'react-router-dom'
import left from '../assets/icons/left.png'
import New from '../components/new';
import { motion,AnimatePresence } from 'framer-motion';
import Cover from './cover';
import bag2 from '../assets/icons/bag2.png'
import bag3 from '../assets/icons/bag2.svg'

import Menu from './menu';
import Control from '../components/control';
function Shop() {
    const {spark,cipo,air,menu,nikes,ellipse,black,sliders,search,setMenu,menus,heart2,jordan, likes,main,max,nike,shoe1} = useGlobal();    
    const details = [{
      name:'Nike jordan',
      img:cipo,
      price:'58.7'
    }, {
      name:'Nike Air Max',
      img:jordan,
      price:'38.8'
    },{
      name:'Nike Club Max',
      img:nikes,
      price:'47.7'
    },{
      name:'Nike Air Max',
      img:shoe1,
      price:'57.6'
    },
    {
      name:'Nike Air Max',
      img:air,
      price:'57.6'
    },

  ]
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
      const [shoe,setShoe] = useState(air);
      const [more,setMore] = useState(false);
      const text =`The Max Air 270 unit delivers Unrivaled, All-Day Comfort, Running-Inspired Design Roots You do everything Nike, The best of the best Nikes just tryna keep the text long for readmore to look useful.😎✌👌`
      
  return (
      <motion.div
      variants={variant} initial="initial" animate="animate" exit="exit"
   className=' px-6 w-screen h-[890px] overflow-y-hidden bg-[#F7F7F9]'>
       {/* Intro section */}
     <section className='flex items-center justify-between pt-6 '>
      <Link to='/home' >
        <div className= ' h-[45px] w-[45px] flex items-center justify-center bg-white shadow-sm rounded-[50%] '>
            <img  src={left} alt="" />
        </div>
       </Link>
       <div className='flex items-start'>
           <h1 className='font-[700] ral text-[20px] '>Sneaker Shop</h1>
       </div>
       <div className='bg-white relative h-[45px] w-[45px] shadow-sm rounded-[50%]  flex items-center justify-center '>
         <img  src={bag2} alt="" />
         <div className='h-[10px] absolute top-0 right-0 w-[10px] bg-red-500 rounded-[50%] ' />
       </div>
     </section>

     
       {/* Main section */}
        <section className='mt-10'>
          <div className='ral'>
            <h1 className='capitalize ral font-[700] leading-[34px] mb-2 text-[30px]  '>Nike air max 270 <br />Essential</h1>
            <p className=' font-[500] ral text-[20px]  mb-[8px] opacity-[0.8] '>Men's shoes</p>
            <h2 className='capitalize font-[600] mb-6 leading-[34px] text-[30px] '>$179.39</h2>
          </div>

          <div className='flex items-center h-[500px] -translate-y-[160px] flex-col justify-center  '>
              <motion.img  layout src={shoe} className='h-[500px] object-fit:cover ' alt="" />
              <img className='-translate-y-[120px]' src={ellipse} alt="" />
              <Control/>
          </div>


          <div className='flex -translate-y-[230px] z-40 items-center justify-center w-[100%] gap-2 '>
            {
              details.map((shoe,id) =>{
                return(
                  <div onClick={() =>{setShoe(shoe.img)}} className='bg-white flex items-center justify-center h-[60px] w-[80px] shadow-sm rounded-[15px] ' key={id}>
                    <img src={shoe.img} alt="" />
                  </div>
                )
              })
            }
          </div>
          <div className='-translate-y-[200px]'>
            <motion.p layout className='opacity-[0.8] px-2  capitalize leading-[25px] '>{!more ? `${text.substring(0, 100)}...` : text}</motion.p>
            <motion.h4
             whileTap={{
              scale:0.9
            }}
            onClick={() =>{setMore(!more)}} className='text-[18px] font-[500] text-blue-500 text-right '>{!more?"Read More":"Read less"}</motion.h4>
          </div>
            {/* foot */}
          <div className=' flex w-screen pl-4 pr-12  justify-between items-center fixed bottom-4'>
            <div className='bg-gray-200 rounded-[50%] flex items-center justify-center h-[50px] w-[50px]  '>
              <img src={likes} alt="" />
            </div>
            <div className='w-[200px] h-[50px] rounded-[10px] text-white flex items-center justify-center gap-3 bg-blue-500 '>
              <img src={bag3} alt="" />
              <p>Add To Cart</p>
            </div>
          </div>
          
        </section>


   </motion.div>
  )
}

export default Shop;
