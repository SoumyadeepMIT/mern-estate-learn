import React from 'react'
import { useSelector } from 'react-redux'

export default function () {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='p-3 mx-auto max-w-lg'>
      <h1 className='text-3xl font-semibold text-center my-7 mt-2'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img className='h-24 w-24 object-cover self-center rounded-full cursor-pointer' src={currentUser.avatar} alt='Profile' />
        <input placeholder='Username' id='username' type='text' className='border p-3 rounded-lg'></input>
        <input placeholder='Email' id='email' type='text' className='border p-3 rounded-lg'></input>
        <input placeholder='Password' id='password' type='password' className='border p-3 rounded-lg'></input>
        <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80 uppercase'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
