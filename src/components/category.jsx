import React from 'react'

function Category() {
  return (
    <div className='mt-10 px-6'>
      <h1 className='font-[600] ral text-[19px] '>Select Category</h1>
     <div className='flex mt-4 w-auto gap-4 justify-between'>
     {['All shoes','Outdoor','Tennis'].map((item,id) =>{
        return(
            (item==='Outdoor') ? (<div className='bg-blue-500 text-white capitalize font-[300] h-[50px] w-[140px] rounded-[8px] flex items-center justify-center  ' key={id}>{item}</div>) : <div className='bg-white capitalize font-[300] h-[50px] w-[140px] rounded-[8px] flex items-center justify-center text-black ' key={id}>{item}</div>
        )
      })}
     </div>
    </div>
  )
}

export default Category
