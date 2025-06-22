import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className = 'bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div onClick={()=>navigate('/')} className = 'flex items-center gap-3 pl-8 cursor-pointer hover:bg-[#1a1a1a] py-2 rounded-md mx-2 transition-colors'>
                <img className='w-6' src={assets.home_icon} alt = ""/>
                <p className='font-bold'>Home</p>
            </div>
            <div onClick={()=>navigate('/search')} className = 'flex items-center gap-3 pl-8 cursor-pointer hover:bg-[#1a1a1a] py-2 rounded-md mx-2 transition-colors'>
                <img className='w-6' src={assets.search_icon} alt = ""/>
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded overflow-y-auto'>
            <div onClick={()=>navigate('/library')} className='p-4 flex items-center justify-between hover:bg-[#1a1a1a] rounded-md mx-2 transition-colors cursor-pointer'>
                <div className='flex items-center gap-3'>
                    <img src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-5 cursor-pointer hover:scale-110 transition-transform' src={assets.arrow_icon} alt=""/>
                    <img className='w-5 cursor-pointer hover:scale-110 transition-transform' src={assets.plus_icon} alt=""/>
                </div>
            </div>
            <div className='px-4 mb-4'>
                <div className='flex gap-2 mb-4'>
                    <span className='bg-[#232323] hover:bg-[#2a2a2a] px-3 py-1 rounded-full text-sm cursor-pointer transition-colors'>Playlists</span>
                    <span className='bg-[#232323] hover:bg-[#2a2a2a] px-3 py-1 rounded-full text-sm cursor-pointer transition-colors'>Artists</span>
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <img className='w-4 cursor-pointer hover:scale-110 transition-transform' src={assets.search_icon} alt=""/>
                    <div className='flex items-center gap-2'>
                        <span className='text-sm text-gray-400 hover:text-white cursor-pointer'>Recently added</span>
                        <img className='w-4 cursor-pointer hover:scale-110 transition-transform' src={assets.arrow_icon} alt=""/>
                    </div>
                </div>
            </div>
            <div className='px-2'>
                <div className='p-4 bg-[#242424] rounded-lg font-semibold flex flex-col items-start justify-start gap-2 mb-4'>
                    <h1 className='text-white'>Create your first playlist</h1>
                    <p className='font-light text-sm text-gray-300'>It's easy we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-black rounded-full mt-2 hover:scale-105 transition-transform font-semibold'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#242424] rounded-lg font-semibold flex flex-col items-start justify-start gap-2'>
                    <h1 className='text-white'>Let's find some podcasts to follow</h1>
                    <p className='font-light text-sm text-gray-300'>We'll keep you updated on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-black rounded-full mt-2 hover:scale-105 transition-transform font-semibold'>Browse podcasts</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Sidebar
