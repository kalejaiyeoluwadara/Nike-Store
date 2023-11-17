import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
function Cover({children}) {
  return (
    <motion.div 
   
    className='w-[100%] bg-red-300 '>
      {children}
    </motion.div>
  )
}
export default Cover
