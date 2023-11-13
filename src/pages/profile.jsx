import React from 'react'
import Foot from '../components/foot'
import profile1 from './../assets/profile.png'
import edit from './../assets/icons/edit.png'
function Profile() {
  return (
    <div className='  pt-6 pb-[140px]  w-screen h-screen bg-[#f5f3f3]'>
      <section className='flex pr-6  justify-between mb-6 items-center '>
        <p className='opacity-[0]'>Empty</p>
        <h3 className='font-[700] text-[19px] ral '>Profile</h3>
        <p  className='font-[700]  text-blue-600 text-[17px] ral '>Edit</p>
      </section>
      <section className='flex    items-center justify-center'>
           <div className='relative'>
           <img src={profile1} alt="" />
            <img src={edit} className='bottom-0  absolute right-3' alt="" />
           </div>
      </section>
      <section className='mt-[50px]  gap-8 flex flex-col px-10 '>

        <div>
            <h1 className='ral font-[700] opacity-[0.9] '>Your Name</h1>
            <div className='bg-gray-200 uppercase font-[500] ral mt-2 h-[60px] rounded-[10px] flex items-center px-6 '><h1 className='outline-none' contentEditable="false">Emmanuel Oyiboke</h1></div>
        </div>

        <div>
            <h1 className='ral font-[700] opacity-[0.9] '>Email Address</h1>
            <div className='bg-gray-200 font-[500] ral mt-2 h-[60px] rounded-[10px] flex items-center px-6 '><h1 className='outline-none' contentEditable="false">emmanueloyiboke@gmail.com</h1></div>
        </div>

        <div>
            <h1 className='ral font-[700] opacity-[0.9] '>Password</h1>
            <div className='bg-gray-200 uppercase font-[500] ral mt-2 h-[60px] rounded-[10px] flex items-center px-6 '>
                <input className='bg-transparent font-[600] text-[35px] opacity-[0.8] ' type='password' value='hello' disabled />
            </div>
        </div>
        <h1 className='text-right -mt-4 opacity-[0.7] '>Recover Password</h1>
      </section>
      <Foot/>
    </div>
  )
}

export default Profile
