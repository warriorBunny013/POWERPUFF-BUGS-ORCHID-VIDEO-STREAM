import React from 'react'
import Navbar from '../layouts/Navbar'

const LoginPage=()=> {
  return (
        <div>
            <Navbar/>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-700 p-8 px-8 mt-20'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>LOGIN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-900 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-900 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>LOGIN</button>
                
            </form>
        </div>
    
  )
}

export default LoginPage