import React from 'react'
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
function Shop() {
    const {spark,air,menu,nikes,ellipse,black,sliders,search,setMenu,menus,heart2,jordan, likes,main,max,nike,shoe1} = useGlobal();    
    const details = [{
      name:'Nike jordan',
      img:max,
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
      img:black,
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
  return (
      <motion.div
      variants={variant} initial="initial" animate="animate" exit="exit"
   className=' px-6 w-screen h-[90vh] overflow-y-hidden bg-[#F7F7F9]'>
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

          <div className='flex items-center -translate-y-[160px] flex-col justify-center  '>
              <img src={air} className='' alt="" />
              <img className='-translate-y-[120px]' src={ellipse} alt="" />
          </div>
          <div>
          <div className='flex -translate-y-[230px] z-40 items-center justify-center w-[100%] gap-2 '>

            {
              details.map((shoe,id) =>{
                return(
                  <div className='bg-white flex items-center justify-center h-[60px] w-[80px] shadow-sm rounded-[15px] ' key={id}>
                    <img src={shoe.img} alt="" />

                    
                  </div>
                )
              })
            }
          </div>
          </div>
          <div className='-translate-y-[200px]'>
            <p className='opacity-[0.8] px-2  capitalize leading-[25px] '>The Max Air 270 unit delivers Unrivaled, All-Day Comfort, Running-Inspired Design Roots You do everythinh Nike...</p>
            <h4 className='text-[18px] font-[500] text-blue-500 text-right '>Read More</h4>
          </div>

          <div className=' flex w-screen pl-4 pr-12  justify-between items-center absolute bottom-4'>
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
