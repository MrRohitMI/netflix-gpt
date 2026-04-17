import React, { useEffect } from 'react'
import logo from '../assets/Netflix_Logo_PMS.png'
import { auth } from './utils/firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from './utils/userSlice'
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.log(error)
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });

        // unsubscribe when component unmounts
        return () => unsubscribe();

    }, [])
    return (
        <>
            <div className='absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center'><img src={logo} alt="Logo" className='w-45' />
                {user && <div className='flex gap-2'><img src={user.photoURL} alt="user logo" className='h-12 w-12' />
                    <div className='mt-1'><button className='bg-red-700 p-2 rounded text-white font-bold mr-2' onClick={handleSignOut}>Sign Out</button></div></div>}
            </div>

        </>
    )
}

export default Header