import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";
import { auth } from "../../../firebase";

const LoginPage=()=> {
    const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
        <div>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8 mt-20'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>LOGIN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" id="name" onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))} />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password"onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))}/>
                </div>
                <b className='text-red-600'>{errorMsg}</b>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'disabled={submitButtonDisabled} onClick={handleSubmission}>LOGIN</button>
                
                <p className='text-red-500'>Don't have an account?{""}<span><Link to="/signup">SignUp</Link></span></p>
            </form>
        </div>
    
  )
}

export default LoginPage