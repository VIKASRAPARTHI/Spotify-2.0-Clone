import React from 'react'
import { assets, songsData, albumsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Genres = () => {
  const navigate = useNavigate()
  
  const genres = [
    { name: 'Pop', color: '#ff6b6b', songs: songsData.slice(0, 3) },
    { name: 'Rock', color: '#4ecdc4', songs: songsData.slice(2, 5) },
    { name: 'Hip-Hop', color: '#45b7d1', songs: songsData.slice(1, 4) },
    { name: 'Electronic', color: '#96ceb4', songs: songsData.slice(3, 6) },
    { name: 'Jazz', color: '#feca57', songs: songsData.slice(0, 2) },
    { name: 'Classical', color: '#ff9ff3', songs: songsData.slice(4, 7) }
  ]

  return (
    <div>
      <h1 className='text-3xl font-bold mb-8'>Browse by Genre</h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8'>
        {genres.map((genre, index) => (
          <div
            key={index}
            className='relative h-32 rounded-lg cursor-pointer overflow-hidden group'
            style={{ backgroundColor: genre.color }}
          >
            <div className='p-4 h-full flex flex-col justify-between'>
              <h3 className='text-white text-xl font-bold'>{genre.name}</h3>
              <div className='absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                <div className='bg-green-500 rounded-full p-3'>
                  <svg className='w-4 h-4 text-black' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Popular in Pop</h2>
        <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4'>
          {genres[0].songs.map((song) => (
            <div
              key={song.id}
              className='bg-[#181818] hover:bg-[#282828] p-4 rounded-lg cursor-pointer transition-all group min-w-[180px] flex-shrink-0'
            >
              <div className='relative mb-4'>
                <img className='w-full aspect-square object-cover rounded-md' src={song.image} alt="" />
                <div className='absolute bottom-2 right-2 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity'>
                  <svg className='w-4 h-4 text-black' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
              <h3 className='font-semibold text-white mb-2 truncate'>{song.name}</h3>
              <p className='text-sm text-gray-400'>{song.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Trending in Rock</h2>
        <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4'>
          {genres[1].songs.map((song) => (
            <div
              key={song.id}
              className='bg-[#181818] hover:bg-[#282828] p-4 rounded-lg cursor-pointer transition-all group min-w-[180px] flex-shrink-0'
            >
              <div className='relative mb-4'>
                <img className='w-full aspect-square object-cover rounded-md' src={song.image} alt="" />
                <div className='absolute bottom-2 right-2 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity'>
                  <svg className='w-4 h-4 text-black' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
              <h3 className='font-semibold text-white mb-2 truncate'>{song.name}</h3>
              <p className='text-sm text-gray-400'>{song.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Genres