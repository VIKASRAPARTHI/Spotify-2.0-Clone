import React from 'react'
import { albumsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const MadeForYou = () => {
  const navigate = useNavigate()
  
  const personalizedPlaylists = [
    { ...albumsData[0], name: "Discover Weekly", desc: "Your weekly mixtape of fresh music" },
    { ...albumsData[1], name: "Release Radar", desc: "Catch all the latest music from artists you follow" },
    { ...albumsData[2], name: "Daily Mix 1", desc: "Made for you" },
    { ...albumsData[3], name: "Daily Mix 2", desc: "Made for you" }
  ]

  return (
    <div className='mb-8'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold'>Made for you</h2>
        <p className='text-sm text-gray-400 hover:text-white cursor-pointer'>Show all</p>
      </div>
      <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        {personalizedPlaylists.map((playlist, index) => (
          <div
            key={index}
            onClick={() => navigate(`/album/${playlist.id}`)}
            className='bg-[#181818] hover:bg-[#282828] p-4 rounded-lg cursor-pointer transition-all group min-w-[180px] flex-shrink-0'
          >
            <div className='relative mb-4'>
              <img className='w-full aspect-square object-cover rounded-md' src={playlist.image} alt="" />
              <div className='absolute bottom-2 right-2 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg'>
                <svg className='w-4 h-4 text-black' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M8 5v14l11-7z'/>
                </svg>
              </div>
            </div>
            <h3 className='font-semibold text-white mb-2 truncate'>{playlist.name}</h3>
            <p className='text-sm text-gray-400 line-clamp-2'>{playlist.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MadeForYou