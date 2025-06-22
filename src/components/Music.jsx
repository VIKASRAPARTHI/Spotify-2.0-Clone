import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Music = () => {
  const { playwithId, track } = useContext(PlayerContext)

  return (
    <div>
      <h1 className='text-3xl font-bold mb-8'>All Music</h1>

      <div className='mb-6'>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
          <p><b className='mr-4'>#</b>Title</p>
          <p>Artist</p>
          <p className='hidden sm:block'>Album</p>
          <img className='m-auto w-4' src={assets.clock_icon} alt=""/>
        </div>
        <hr className='border-[#a7a7a7] mb-4'/>
        
        {songsData.map((song, index) => (
          <div 
            key={song.id}
            onClick={() => playwithId(song.id)} 
            className={`grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer rounded-md ${track.id === song.id ? 'bg-[#ffffff1a]' : ''}`}
          >
            <div className='flex items-center'>
              <b className='mr-4 text-[#a7a7a7] w-4 text-center'>{index + 1}</b>
              <img className='w-10 h-10 rounded mr-4' src={song.image} alt=""/>
              <div>
                <p className={`font-semibold ${track.id === song.id ? 'text-green-500' : 'text-white'}`}>
                  {song.name}
                </p>
                <p className='text-sm text-[#a7a7a7]'>Artist Name</p>
              </div>
            </div>
            <p className='text-[15px]'>Sample Album</p>
            <p className='text-[15px] hidden sm:block'>2 days ago</p>
            <p className='text-[15px] text-center'>{song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Music