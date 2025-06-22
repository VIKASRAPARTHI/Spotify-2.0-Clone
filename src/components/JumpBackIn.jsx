import React, { useContext } from 'react'
import { songsData, albumsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
import { useNavigate } from 'react-router-dom'

const JumpBackIn = () => {
  const { playwithId } = useContext(PlayerContext)
  const navigate = useNavigate()
  
  const mixedContent = [
    { type: 'song', ...songsData[0] },
    { type: 'album', ...albumsData[0] },
    { type: 'song', ...songsData[1] },
    { type: 'album', ...albumsData[1] },
    { type: 'song', ...songsData[2] },
    { type: 'album', ...albumsData[2] }
  ]

  const handleClick = (item) => {
    if (item.type === 'song') {
      playwithId(item.id)
    } else {
      navigate(`/album/${item.id}`)
    }
  }

  return (
    <div className='mb-8'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold'>Jump back in</h2>
        <p className='text-sm text-gray-400 hover:text-white cursor-pointer'>Show all</p>
      </div>
      <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        {mixedContent.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item)}
            className='bg-[#181818] hover:bg-[#282828] p-3 rounded-lg cursor-pointer transition-all group min-w-[140px] flex-shrink-0'
          >
            <div className='relative mb-3'>
              <img className='w-full aspect-square object-cover rounded-md' src={item.image} alt="" />
              <div className='absolute bottom-2 right-2 bg-green-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg'>
                <svg className='w-3 h-3 text-black' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M8 5v14l11-7z'/>
                </svg>
              </div>
            </div>
            <h3 className='font-medium text-white text-sm mb-1 truncate'>{item.name}</h3>
            <p className='text-xs text-gray-400 capitalize'>{item.type}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JumpBackIn