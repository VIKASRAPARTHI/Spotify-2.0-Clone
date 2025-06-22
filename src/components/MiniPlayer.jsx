import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { assets } from '../assets/assets'

const MiniPlayer = ({ onClose }) => {
  const { track, playStatus, play, pause, previous, next } = useContext(PlayerContext)

  return (
    <div className='fixed bottom-4 right-4 bg-[#181818] rounded-lg p-3 shadow-2xl z-40 border border-[#282828]'>
      <div className='flex items-center gap-3'>
        <img className='w-12 h-12 rounded' src={track.image} alt="" />
        <div className='min-w-0'>
          <p className='text-white text-sm font-semibold truncate w-32'>{track.name}</p>
          <p className='text-gray-400 text-xs truncate'>Artist Name</p>
        </div>
        <div className='flex items-center gap-2'>
          <img onClick={previous} className='w-3 cursor-pointer opacity-70 hover:opacity-100' src={assets.prev_icon} alt=""/>
          <div className='hover:scale-105 transition-transform cursor-pointer'>
            {playStatus ? 
              <img onClick={pause} className='w-4 opacity-70 hover:opacity-100' src={assets.pause_icon} alt=""/> : 
              <img onClick={play} className='w-4 opacity-70 hover:opacity-100' src={assets.play_icon} alt=""/>
            }
          </div>
          <img onClick={next} className='w-3 cursor-pointer opacity-70 hover:opacity-100' src={assets.next_icon} alt=""/>
          <button onClick={onClose} className='text-gray-400 hover:text-white ml-2'>
            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MiniPlayer