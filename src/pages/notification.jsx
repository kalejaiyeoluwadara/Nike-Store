import React,{useState} from 'react'
import { useGlobal } from '../context'
import Foot from '../components/foot';
import { motion } from 'framer-motion';
function Notification() {
    const {jordan,max,nike,main,shoe1,cipo} = useGlobal();
    const details = [{
        name:'Nike jordan',
        img:max,
        time:'7',
        price:'364.95',
        price2:'260.00',
      }, {
        name:'Nike Air Max',
        img:jordan,
        time:'40',
        price:'38.8',
        price2:'58.7',
      }]
   const details2 = [{
        name:'Nike Club Max',
        img:cipo,
        time:'40',
        price:'47.7',
        price2:'58.7',
      },{
        name:'Nike Air Max',
        img:shoe1,
        price:'57.6',
        time:'40',
        price2:'58.7',
      }, ]
    
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
    <motion.div  variants={variant} initial="initial" animate="animate" exit="exit" className="  pt-6 pb-[120px] relative   w-screen h-[100%] bg-[#F7F7F9]">
        <h1 className="font-[700] text-[19px] text-center ral ">Notification</h1>
        <section className='mt-10 px-6  '>
            <div>
                <h1 className="font-[700] text-[19px] ral ">Recent</h1>
                {/* single */}
              {
                    details.map((d,id) =>{
                        const [selected,setSelected] = useState(false);
                        return(
                            <motion.div 
                            whileTap={{
                                scale:0.5
                            }}
                            whileHover={{
                                // scale:1.1
                            }}
                            transition={{
                                duration:0.3
                            }}
                            key={id} onClick={() =>{setSelected(!selected)}}
 className={`flex ${selected ?  'bg-white px-4 shadow-md' :' bg-none' }  rounded-[12px]  py-4 mt-6 gap-6`}>
                    <div className={` ${selected ?  'bg-gray-100' :' bg-white' }  flex items-center justify-center w-[120px] h-[100px] rounded-[20px]`}>
                        <img src={d.img} alt="" />
                    </div>
                    <div>
                        <p className='text-right font-[600] text-gray-500 '>{d.time} min ago</p>
                        <h3 className={`capitalize ral font-[600]  ${selected?'text-blue-500 font-[700] ':'text-gray-700'} `}>We have new <br /> products with offer</h3>
                    <div className='flex gap-4'>
                        <p className='font-[600] text-gray-800 '>$364.95</p>
                        <p className='font-[600] text-gray-500 '>$260.00</p>
                    </div>
                    </div>
                </motion.div>
                        )
                    })
                }
            </div>
        </section>
        <section className='mt-10 px-6  '>
            <div>
                <h1 className="font-[700] text-[19px] ral ">Yesterday</h1>
                {/* single */}
                {
                    details2.map((d,id) =>{
                        const [select,setSelect] = useState(false)
                        return(
                            <motion.div
                            whileTap={{
                                scale:0.5
                            }}
                            whileHover={{
                                // scale:1.1
                            }}
                            transition={{
                                duration:0.3
                            }}
                            key={id} onClick={() =>{setSelect(!select)}}
                            className={`flex ${select ?  'bg-white px-4 shadow-md' :' bg-none' }  rounded-[12px] red-300 py-4 mt-6 gap-6`}>
                    <div className={`${select ?  'bg-gray-100' :' bg-white' }  flex items-center justify-center w-[120px] h-[100px] rounded-[20px]`}>
                        <img src={d.img} alt="" />
                    </div>
                    <div>
                        <p className='text-right font-[600] text-gray-500 '>{d.time} min ago</p>
                        <h3 className={`capitalize ral font-[600]  ${select?'text-blue-500 font-[700] ':'text-gray-700'} `}>We have new <br /> products with offer</h3>
                    <div className='flex gap-4'>
                        <p className='font-[600] text-gray-800 '>$364.95</p>
                        <p className='font-[600] text-gray-500 '>$260.00</p>
                    </div>
                    </div>
                </motion.div>
                        )
                    })
                }
            </div>
        </section>
        <Foot/>
    </motion.div>
  )
}

export default Notification
