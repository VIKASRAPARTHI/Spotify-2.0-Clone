import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
    const navigate = useNavigate();
    const [showProfile, setShowProfile] = useState(false);
    const { user, logout } = useAuth();

  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-[#282828]' src={assets.arrow_left} alt=""/>
                <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-[#282828]' src={assets.arrow_right} alt=""/>
            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:scale-105 transition-transform'>Explore Premium</p>
                <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer hover:bg-[#282828]'>Install App</p>
                <img className='w-5 cursor-pointer hover:scale-110 transition-transform' src={assets.bell_icon} alt="notifications"/>
                <div className='relative'>
                    <div 
                        onClick={() => setShowProfile(!showProfile)}
                        className='bg-purple-500 text-black w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform'
                    >
                        {user?.displayName?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    {showProfile && (
                        <div className='absolute right-0 top-10 bg-[#282828] rounded-md p-2 w-48 shadow-lg z-50'>
                            <div className='flex flex-col gap-2'>
                                <div className='p-2 border-b border-[#3e3e3e]'>
                                    <p className='text-white font-semibold'>{user?.displayName}</p>
                                    <p className='text-gray-400 text-sm'>{user?.email}</p>
                                </div>
                                <p className='hover:bg-[#3e3e3e] p-2 rounded cursor-pointer'>Account</p>
                                <p className='hover:bg-[#3e3e3e] p-2 rounded cursor-pointer'>Profile</p>
                                <p className='hover:bg-[#3e3e3e] p-2 rounded cursor-pointer'>Settings</p>
                                <hr className='border-[#3e3e3e]'/>
                                <p onClick={logout} className='hover:bg-[#3e3e3e] p-2 rounded cursor-pointer'>Log out</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <p onClick={() => navigate('/')} className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer hover:scale-105 transition-transform'>All</p>
            <p onClick={() => navigate('/music')} className='bg-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-[#282828]'>Music</p>
            <p onClick={() => navigate('/podcasts')} className='bg-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-[#282828]'>Podcasts</p>
            <p onClick={() => navigate('/genres')} className='bg-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-[#282828]'>Genres</p>
        </div>
    </>
  )
}

export default Navbar
