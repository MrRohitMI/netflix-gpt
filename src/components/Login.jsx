import React, { useRef, useState } from 'react'
import Header from './Header'
import BackgroundImage from '../assets/BackgroundNetflix.jpg'
import { validateData } from './utils/validate';
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("")
    const email = useRef(null);
    const password = useRef(null);
    const toggleSignInForm = () => {
        setIsSignInForm(prev => !prev)
    }
    const handleValidateForm = () => {
        const message = validateData(email.current.value,password.current.value);
        setErrorMessage(message);
    }
    return (
        <div>
            <Header />
            <div className='absolute'><img src={BackgroundImage} alt="" /></div>


            <form onSubmit={(e)=> e.preventDefault()} action="" className='bg-black w-3/12 my-49 mx-auto right-0 left-0 absolute p-12 rounded-lg opacity-85'>
                <h1 className='text-white text-3xl my-4 font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm ?
                <input type="text" placeholder='Enter Full Name' className='p-4 my-2 bg-gray-500 rounded w-full' /> : ""}
                <input ref={email} type="email" placeholder='Enter Email' className='p-4 my-2 bg-gray-500 rounded w-full' />
                <input ref={password} type="password" placeholder="Enter Password" name="" id="" className='p-4 my-2 bg-gray-500 rounded w-full' />
                <p className='font-bold text-red-600 my-2'>{errorMessage}</p>
                <button onClick={handleValidateForm} type="submit" className='p-4 mt-2 bg-red-700 w-full rounded-lg text-white font-bold text-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p onClick={toggleSignInForm} className='text-white mt-18 font-bold cursor-pointer'>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered ? Please Sign In Now"}</p>
            </form>

        </div>
    )
}

export default Login