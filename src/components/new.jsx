import React from 'react'
import { useGlobal } from '../context';
import { motion } from 'framer-motion';
import star from '../assets/icons/Path.svg'
function New() {
    const {perc,main,news} = useGlobal();
  return (
    <article>
        <div className='flex justify-between items-center mt-10'>
            <h1 className='font-[600] ral text-[19px]  '>New arrivals</h1>
            <p className='font-[700] ral text-blue-600 cursor-pointer '>see all</p>
        </div>

        <div className='bg-white relative py-6 mt-6 px-6 rounded-[9px] flex justify-between items-center '>
        
        <section className='w-[70%]'>
          <h3 className='mb-3 ral font-[600]'>Summer sale</h3>
          <img className='animate-ping' src={perc} alt="" />
        </section>
        <section className='w-[30%] bg-red-300 ' >
          <img className='absolute right-[120px]  top-2' src={news} alt="" />
          <motion.img
          transition={{
            duration:0.3,
            ease:'easeInOut'
          }}
          whileHover={{
            rotate:40,
          }} src={main} className='absolute h-[130px] right-0 -top-6' alt="" />
        </section>
      </div>
    </article>


    
    
  )
}

export default New
