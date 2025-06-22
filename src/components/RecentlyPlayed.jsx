import React, { useContext } from 'react'
import { songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const RecentlyPlayed = () => {
  const { playwithId } = useContext(PlayerContext)
  
  const recentSongs = songsData.slice(0, 6)

  return (
    <div className='mb-8'>
      <h2 className='text-2xl font-bold mb-4'>Recently played</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {recentSongs.map((song) => (
          <div
            key={song.id}
            onClick={() => playwithId(song.id)}
            className='flex items-center bg-[#ffffff0b] hover:bg-[#ffffff1a] rounded-md p-2 cursor-pointer group transition-all'
          >
            <img className='w-16 h-16 rounded mr-4' src={song.image} alt="" />
            <div className='flex-1 min-w-0'>
              <p className='font-semibold text-white truncate'>{song.name}</p>
              <p className='text-sm text-gray-400 truncate'>{song.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentlyPlayed