import React from 'react'
import { useState } from 'react'
// import { FaCheck } from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { auth } from '../../../firebase';
const SignUp=()=> {
    const navigate=useNavigate();
  const  [password,setPassword]=useState("");
  const  [confirm,setConfirm]=useState("");
  const [values,setValues]=useState({
    name:"",
    email:"",
  })

  const [errorMsg,setErrorMsg]=useState("");
  
  const [submitButtonDisabed,setSubmitButtonDisabled]=useState(false);

  const handleSubmission=()=>{
    if(!values.name|| !values.email || !password.pass){
        setErrorMsg("Fill all fields");
       return;
    }
    if(password!==confirm){
       setErrorMsg("Password does not match");
    }
    setErrorMsg("")
    
    setSubmitButtonDisabled(true)

    createUserWithEmailAndPassword(auth,values.email,password.pass).then((res)=>{
        setSubmitButtonDisabled(false);
        const user=res.user;
         updateProfile(user,{
            displayName:values.name,
        })
        console.log(user);
        navigate("/");
    })
    .catch((err)=>{
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        console.log("Error",err)
    });
  }
    
  return (
        <div>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8 mt-20'  >
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN UP</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" onChange={(event)=>setValues((prev)=>({...prev,name:event.target.value}))} />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>E-mail</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email"onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))} />
                </div>

                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Create Password</label>
                    <input  className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' onChange={(event)=>setPassword((prev)=>({...prev,pass:event.target.value}))} type="password" id="password"   />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Confirm Password</label>
                    <input  className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'  type="password" id="confirm_password" onChange={(event)=>setConfirm((prev)=>({...prev,email:event.target.value}))}  />
                   
                </div>
                <div className='bg-red-500'>
                    <b className='text-1xl'>{errorMsg}</b>
                </div>
                <button onClick={handleSubmission} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' disabled={submitButtonDisabed}>SIGNUP</button>
                <p className='text-red-500'>Already have an account?{""}<span><Link to="/login">Login</Link></span></p>
            </form>
            
        </div>
    
  )
}


export default SignUp