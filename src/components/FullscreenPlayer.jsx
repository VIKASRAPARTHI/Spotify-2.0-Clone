import React, { useContext, useRef } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { assets } from '../assets/assets'

const FullscreenPlayer = ({ onClose }) => {
  const { track, playStatus, play, pause, time, previous, next, audioRef } = useContext(PlayerContext)
  const fullscreenSeekBar = useRef()
  const fullscreenSeekBg = useRef()

  const handleSeek = (e) => {
    if (audioRef.current && fullscreenSeekBg.current) {
      const rect = fullscreenSeekBg.current.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const width = rect.width
      const duration = audioRef.current.duration
      audioRef.current.currentTime = (clickX / width) * duration
    }
  }

  return (
    <div className='fixed inset-0 bg-gradient-to-b from-[#1db954] to-[#191414] z-50 flex flex-col'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='text-white text-lg font-semibold'>Now Playing</h2>
        <button onClick={onClose} className='text-white hover:text-gray-300'>
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/>
          </svg>
        </button>
      </div>

      <div className='flex-1 flex flex-col items-center justify-center p-8'>
        <div className='w-80 h-80 mb-8'>
          <img className='w-full h-full object-cover rounded-lg shadow-2xl' src={track.image} alt="" />
        </div>

        <div className='text-center mb-8'>
          <h1 className='text-white text-4xl font-bold mb-2'>{track.name}</h1>
          <p className='text-gray-300 text-xl'>Artist Name</p>
        </div>

        <div className='w-full max-w-md mb-8'>
          <div className='flex items-center gap-4 mb-4'>
            <p className='text-white text-sm'>
              {String(time.currentTime.minute).padStart(2, '0')}:{String(time.currentTime.second).padStart(2, '0')}
            </p>
            <div ref={fullscreenSeekBg} onClick={handleSeek} className='flex-1 bg-gray-600 rounded-full cursor-pointer h-2'>
              <div 
                className='h-full bg-green-500 rounded-full transition-all'
                style={{
                  width: `${((time.currentTime.minute * 60 + time.currentTime.second) / (time.totalTime.minute * 60 + time.totalTime.second || 1)) * 100}%`
                }}
              ></div>
            </div>
            <p className='text-white text-sm'>
              {String(time.totalTime.minute).padStart(2, '0')}:{String(time.totalTime.second).padStart(2, '0')}
            </p>
          </div>
        </div>

        <div className='flex items-center gap-8'>
          <img className='w-8 cursor-pointer opacity-70 hover:opacity-100' src={assets.shuffle_icon} alt=""/>
          <img onClick={previous} className='w-8 cursor-pointer opacity-70 hover:opacity-100' src={assets.prev_icon} alt=""/>
          <div className='hover:scale-105 transition-transform cursor-pointer'>
            {playStatus ? 
              <img onClick={pause} className='w-8 opacity-70 hover:opacity-100' src={assets.pause_icon} alt=""/> : 
              <img onClick={play} className='w-8 opacity-70 hover:opacity-100' src={assets.play_icon} alt=""/>
            }
          </div>
          <img onClick={next} className='w-8 cursor-pointer opacity-70 hover:opacity-100' src={assets.next_icon} alt=""/>
          <img className='w-8 cursor-pointer opacity-70 hover:opacity-100' src={assets.loop_icon} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default FullscreenPlayer