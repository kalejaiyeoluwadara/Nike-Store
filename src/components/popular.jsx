import React from 'react'
import { useGlobal } from '../context'


function Popular() {
 const {jordan,max,likes} = useGlobal();
  return (
    <div className='mt-8 px-6'>
      <h1 className='font-[600] ral text-[19px]'>Popular shoes</h1>
        <section className='flex gap-6 justify-between'>
            {
                [max,jordan].map((item,id) =>{
                    return(
                        <section key={id} className=' bg-white relative mt-4 sh flex items-start flex-col py-3 px-4 rounded-[10px] justify-center w-[180px] '>
                        <div className='absolute top-3 left-3'>
                            <img src={likes} alt="" />
                        </div>
                        <div>
                            <img className=' mb-4 ' src={item} alt="" />
                        </div>
                        <div>
                            <h4 className='text-blue-600 font-[500] '>BEST SELLER</h4>
                            <h3 className='font-[500] text-[18px] opacity-[0.8] '>Nike jordan</h3>
                            <p className='font-[500] '>$320.00</p>
                        </div>
                
                        <div className='absolute text-[25px] font-[300] text-white bg-blue-600 sqr flex items-center justify-center h-[40px] w-[40px] right-0 bottom-0'>
                            +
                        </div>
                    </section>
                    )
                })
            }
        </section>
    </div>
  )
}

export default Popular
