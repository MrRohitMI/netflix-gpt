import React from 'react'
import logo from '../assets/Netflix_Logo_PMS.png'
const Header = () => {
    return (
        <>
            <div className='absolute px-4 py-2 bg-gradient-to-b from-black z-10'><img src={logo} alt="Logo" className='w-45' />
            </div>
            
        </>
    )
}

export default Header