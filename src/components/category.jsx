import React,{useState} from 'react'
import {motion} from 'framer-motion'
function Category() {
  const [state,setState] = useState('Outdoor');
  const variant = {
    hover:{
      scale:1.1
    },
    click:{
        scale:0.9
    },
    transition:{
      duration:0.4
    }    
  }
  return (
    <div className='mt-10 px-6'>
      <h1 className='font-[600] ral text-[19px] '>Select Category</h1>
     <div className='flex mt-4 w-auto gap-4 justify-between'>
     {['All shoes','Outdoor','Tennis'].map((item,id) =>{
        return(
            (state===item) ? (<motion.div  whileHover={{
              scale:1.1
            }}  
            
            whileTap={{
              scale:0.9
            }}
            transition={{
              duration:0.2
            }}
            className='bg-blue-500  text-white capitalize font-[300] h-[50px] w-[140px] rounded-[8px] flex items-center justify-center  ' key={id}>{item}</motion.div>) : <motion.div
            whileHover={{
              scale:1.1
            }}  
            
            whileTap={{
              scale:0.9
            }}
            transition={{
              duration:0.2,
              ease:'easeInOut'
            }}
            onClick={() =>{setState(item)}}  className='bg-white capitalize font-[300] h-[50px] w-[140px] rounded-[8px] flex items-center justify-center hover:bg-blue-500 hover:text-white text-black ' key={id}>{item}</motion.div>
        )
      })}
     </div>
    </div>
  )
}

export default Category
