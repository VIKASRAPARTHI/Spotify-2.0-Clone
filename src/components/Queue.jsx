import React, { useContext } from 'react'
import { songsData, assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Queue = () => {
  const { track, playwithId, showQueue, setShowQueue } = useContext(PlayerContext)
  
  const upNext = songsData.filter(song => song.id !== track.id).slice(0, 10)

  return (
    <>
      {showQueue && (
        <div 
          onClick={() => setShowQueue(false)}
          className='fixed inset-0 bg-black bg-opacity-50 z-30'
        ></div>
      )}
      <div className={`fixed right-0 top-0 w-[350px] bg-[#121212] h-full p-4 transform transition-transform duration-300 z-40 border-l border-[#282828] ${showQueue ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-white font-bold text-lg'>Queue</h2>
        <img 
          onClick={() => setShowQueue(false)}
          className='w-4 cursor-pointer hover:scale-110 transition-transform rotate-180' 
          src={assets.arrow_icon} 
          alt="" 
        />
      </div>
      
      <div className='mb-6'>
        <h3 className='text-white font-semibold mb-3'>Now playing</h3>
        <div className='flex items-center gap-3 p-2 bg-[#1a1a1a] rounded-md'>
          <img className='w-12 h-12 rounded' src={track.image} alt="" />
          <div className='flex-1 min-w-0'>
            <p className='text-white font-semibold truncate'>{track.name}</p>
            <p className='text-gray-400 text-sm truncate'>{track.desc}</p>
          </div>
          <div className='w-4 h-4 bg-green-500 rounded-full flex items-center justify-center'>
            <div className='w-2 h-2 bg-black rounded-full animate-pulse'></div>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-white font-semibold mb-3'>Next up</h3>
        <div className='space-y-2'>
          {upNext.map((song, index) => (
            <div
              key={song.id}
              onClick={() => playwithId(song.id)}
              className='flex items-center gap-3 p-2 hover:bg-[#1a1a1a] rounded-md cursor-pointer group'
            >
              <img className='w-10 h-10 rounded' src={song.image} alt="" />
              <div className='flex-1 min-w-0'>
                <p className='text-white text-sm font-medium truncate group-hover:text-green-400'>{song.name}</p>
                <p className='text-gray-400 text-xs truncate'>{song.desc}</p>
              </div>
              <p className='text-gray-400 text-xs'>{song.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Queue