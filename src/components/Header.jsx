import React from 'react'
import logo from '../assets/Netflix_Logo_PMS.png'
import userLogo from '../assets/user_profile_logo.png'
import { auth } from './utils/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <>
            <div className='absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center'><img src={logo} alt="Logo" className='w-45' />
                { user && <div className='flex gap-2'><img src={user.photoURL} alt="user logo" className='h-12 w-12' />
                    <div className='mt-1'><button className='bg-red-700 p-2 rounded text-white font-bold' onClick={handleSignOut}>Sign Out</button></div></div>}
            </div>

        </>
    )
}

export default Header