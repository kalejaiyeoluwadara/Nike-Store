import React from 'react'
import { useGlobal } from '../context'
import Foot from '../components/foot';

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
  return (
    <div className="  pt-6 pb-[140px]  w-screen h-auto bg-[#f5f3f3]">
        <h1 className="font-[700] text-[19px] text-center ral ">Notification</h1>
        <section className='mt-10 px-6  '>
            <div>
                <h1 className="font-[700] text-[19px] ral ">Recent</h1>
                {/* single */}
              {
                    details.map((d,id) =>{
                        return(
                            <div className='flex  mt-6 gap-6'>
                    <div className='bg-white hover:bg-gray-100 flex items-center justify-center w-[150px] h-[100px] rounded-[8px]'>
                        <img src={d.img} alt="" />
                    </div>
                    <div>
                        <p className='text-right font-[600] text-gray-500 '>{d.time} min ago</p>
                        <h3 className='capitalize ral font-[600]  text-gray-700 '>We have new <br /> products with offer</h3>
                    <div className='flex gap-4'>
                        <p className='font-[600] text-gray-800 '>$364.95</p>
                        <p className='font-[600] text-gray-500 '>$260.00</p>
                    </div>
                    </div>
                </div>
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
                        return(
                            <div className='flex mt-6 gap-6'>
                    <div className='bg-white flex items-center justify-center w-[150px] h-[100px] rounded-[8px]'>
                        <img src={d.img} alt="" />
                    </div>
                    <div>
                        <p className='text-right font-[600] text-gray-500 '>{d.time} min ago</p>
                        <h3 className='capitalize ral font-[600]  text-gray-700 '>We have new <br /> products with offer</h3>
                    <div className='flex gap-4'>
                        <p className='font-[600] text-gray-800 '>$364.95</p>
                        <p className='font-[600] text-gray-500 '>$260.00</p>
                    </div>
                    </div>
                </div>
                        )
                    })
                }
            </div>
        </section>
        <Foot/>
    </div>
  )
}

export default Notification
