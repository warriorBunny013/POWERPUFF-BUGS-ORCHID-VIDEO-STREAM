import React from 'react'
import { useState } from 'react'
// import { FaCheck } from 'react-icons/fa'
import Navbar from '../layouts/Navbar';

const SignUp=()=> {
  const  [password,setPassword]=useState("");
  const  [confirm,setConfirm]=useState("");
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(password===confirm){
      console.log("confirmed !!")
    alert("welcome !")
    }
    else{
       console.log("not confirmed!!")
       alert("error! opps")
    }
  }

    
  return (
        <div>
            <Navbar/>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-700 p-8 px-8 mt-20 mb-3'  >
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN UP</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-900 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>E-mail</label>
                    <input className='rounded-lg bg-gray-900 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="emai;" />
                </div>

                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Create Password</label>
                    <input  className='p-2 rounded-lg bg-gray-900 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' onChange={(e)=>setPassword(e.target.value)} type="password" id="password"  />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Confirm Password</label>
                    <input  onChange={(e)=>setConfirm(e.target.value)}   className='p-2 rounded-lg bg-gray-900 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'  type="password" id="confirm_password" />
                    <div className='font-bold text-red-400'>
                    </div>
                </div>
                
                <button onClick={handleSubmit} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNUP</button>
                
            </form>
            
        </div>
    
  )
}

export default SignUp