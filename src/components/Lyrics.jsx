import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { assets } from '../assets/assets'

const Lyrics = () => {
  const { track } = useContext(PlayerContext)
  
  const sampleLyrics = [
    { time: "0:15", text: "Verse 1 starts here" },
    { time: "0:30", text: "This is a sample lyric line" },
    { time: "0:45", text: "Another line of the song" },
    { time: "1:00", text: "Chorus begins now" },
    { time: "1:15", text: "This is the chorus part" },
    { time: "1:30", text: "Singing along with the beat" },
    { time: "1:45", text: "Music fills the air" },
    { time: "2:00", text: "Verse 2 continues" },
  ]

  return (
    <div>
      <div className='flex items-center gap-2 mb-6'>
        <img className='w-8' src={assets.arrow_left} alt="" />
        <img className='w-8' src={assets.arrow_right} alt="" />
      </div>

      <div className='flex items-center gap-6 mb-8'>
        <img className='w-32 h-32 rounded-lg' src={track.image} alt="" />
        <div>
          <h1 className='text-4xl font-bold mb-2'>{track.name}</h1>
          <p className='text-gray-400 text-lg'>{track.desc}</p>
        </div>
      </div>

      <div className='mb-6'>
        <h2 className='text-2xl font-bold mb-4'>Lyrics</h2>
        <div className='space-y-4'>
          {sampleLyrics.map((line, index) => (
            <div key={index} className='flex items-start gap-4 hover:bg-[#ffffff0b] p-2 rounded-md cursor-pointer'>
              <span className='text-gray-400 text-sm min-w-[40px]'>{line.time}</span>
              <p className='text-white text-lg leading-relaxed'>{line.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-[#181818] p-6 rounded-lg'>
        <h3 className='text-xl font-bold mb-4'>About this song</h3>
        <div className='space-y-3'>
          <div className='flex justify-between'>
            <span className='text-gray-400'>Artist</span>
            <span className='text-white'>Sample Artist</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-400'>Album</span>
            <span className='text-white'>Sample Album</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-400'>Release Date</span>
            <span className='text-white'>2024</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-400'>Duration</span>
            <span className='text-white'>{track.duration}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lyrics