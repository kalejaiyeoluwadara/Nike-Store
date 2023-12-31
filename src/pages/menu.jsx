import React from 'react'
import bac from './../assets/views/menubac.png'
import { useGlobal } from '../context'
import profile1 from './../assets/port3.jpg'
import sign from './../assets/icons/sign.png'
import { delay, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
Link
function Menu() {
    const {profile,love,cart,bell,menus,setMenu,sliders,settings,order} = useGlobal();
    const pages = [{
        name:'profile',
        img:cart
    },{
        name:'My Cart',
        img:cart
    },{
        name:'Favorite',
        img:love
    },{
        name:'Notification',
        img:bell
    },{
        name:'Order',
        img:order
    },{
        name:'Settings',
        img:settings
    }]
    const variant= {
        initial:{
          x:'-100vw'
        },
        animate:{
          x:0,
          transition:{delay:0,duration:0.5}
        },
        exit:{
          x:'-100vw',
          transition:{ease:'easeInOut'}
        }} 
  return (
    
<motion.div   variants={variant} initial="initial" animate="animate" exit="exit" className='bg-blue-500 fixed top-0 z-40 left-0 h-[110vh] px-10 py-10 w-screen '>
      <section>
      <motion.img          
           className='h-[120px] brw overflow-hidden w-[120px] rounded-[50%] ' src={profile1} alt="" />
        <h1 className='text-white ral mt-4 font-[500] capitalize text-[20px] '>Kalejaiye oluwadara</h1>
      </section>
      <section className=' mt-[60px] flex text-[18px]  flex-col text-white gap-8'>
        {
            pages.map((item,id) =>{
                return(
                    <motion.div 
                    onClick={() =>{setMenu(false)}}
                    whileHover={{
                      scale:1.1
                    }}
                    whileTap={{
                      scale:0.9
                    }}
                    className='flex gap-4 items-start '>
                        <div className='w-[40px]'>
                        <img src={item.img} alt="" />
                        </div>
                        <p className=' text-start capitalize '>{item.name}</p>
                    </motion.div>
                )
            })
        }
      </section>
      <section className='mt-10' >
        <hr className='' />
        <div>
        <div className='flex gap-4 mt-6 items-start '>
            <div className='w-[40px]'>
            <img initial={{x:-200}} animate={{x:0}} src={sign} alt="" />
            </div>
            <p className=' text-start text-white capitalize '>Sign out</p>
        </div>
        </div>
      </section>

      <motion.img initial={{x:200,opacity:0}}  transition={{delay:1}} animate={{x:0,opacity:1}} className='absolute top-0 -right-[40px] h-[90%] ' src={bac} alt="" />
    </motion.div>
  )
}

export default Menu
