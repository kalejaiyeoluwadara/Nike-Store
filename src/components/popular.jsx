import React,{useState} from 'react'
import { useGlobal } from '../context'
import { motion } from 'framer-motion';
import heart from '../assets/icons/heart.png'
function Popular() {
 const {max,likes,heart2,details} = useGlobal();

  return (
    <div 
    
    className='mt-8 px-6'>
      <h1 className='font-[600] ral text-[19px]'>Popular shoes</h1>
        <motion.section layout className='flex gap-6 justify-between'>
            {
                details.map((item,id) =>{
                    const [clicked,setClicked] = useState(false)
                    return(
                        <motion.section onClick={() =>{
                        setClicked(!clicked);
                        }} key={id} 
                        transition={{
                            duration:0.3
                        }}
                        whileHover={{
                            y:-10,
                            scale:1.1
                            
                        }} className=' bg-white relative mt-4 sh flex items-start flex-col py-3 px-4 rounded-[16px] justify-center w-[180px] '>
                        <div  className='absolute top-3 left-3'>
                            {clicked ? <img src={heart2} alt="" /> : <img src={heart} alt="" />}
                        </div>
                        <div>
                            <img className=' mb-4 ' src={item.img} alt="" />
                        </div>
                        <div>
                            <h4 className='text-blue-600 font-[500] '>BEST SELLER</h4>
                            <h3 className='font-[500] text-[18px] opacity-[0.8] '>{item.name}</h3>
                            <p className='font-[500] '>{item.price}</p>
                        </div>
                
                        <div className='absolute text-[25px] font-[300] text-white bg-blue-500 sqr flex items-center justify-center h-[40px] w-[40px] right-0 bottom-0'>
                            +
                        </div>
                    </motion.section>
                    )
                })
            }
        </motion.section>
    </div>
  )
}

export default Popular
