import React, { useState } from 'react'
import { assets, albumsData, songsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Library = () => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')
  
  const playlists = [
    { id: 1, name: "Liked Songs", type: "playlist", image: assets.spotify_logo, count: "52 songs" },
    { id: 2, name: "My Playlist #1", type: "playlist", image: songsData[0].image, count: "25 songs" },
    { id: 3, name: "Favorites", type: "playlist", image: songsData[1].image, count: "18 songs" },
    { id: 4, name: "Workout Mix", type: "playlist", image: songsData[2].image, count: "30 songs" },
  ]

  const recentlyPlayed = [
    ...albumsData.slice(0, 3).map(album => ({ ...album, type: "album" })),
    ...playlists.slice(0, 2)
  ]

  return (
    <div>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-6'>Your Library</h1>
        
        <div className='flex gap-2 mb-6'>
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all' ? 'bg-white text-black' : 'bg-[#232323] hover:bg-[#2a2a2a]'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('playlists')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'playlists' ? 'bg-white text-black' : 'bg-[#232323] hover:bg-[#2a2a2a]'
            }`}
          >
            Playlists
          </button>
          <button 
            onClick={() => setFilter('artists')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'artists' ? 'bg-white text-black' : 'bg-[#232323] hover:bg-[#2a2a2a]'
            }`}
          >
            Artists
          </button>
          <button 
            onClick={() => setFilter('albums')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'albums' ? 'bg-white text-black' : 'bg-[#232323] hover:bg-[#2a2a2a]'
            }`}
          >
            Albums
          </button>
        </div>

        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2'>
            <img className='w-4' src={assets.search_icon} alt="" />
            <span className='text-sm text-gray-400'>Search in Your Library</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-gray-400'>Recently added</span>
            <img className='w-4' src={assets.arrow_icon} alt="" />
          </div>
        </div>
      </div>

      <div className='space-y-2'>
        {recentlyPlayed.map((item, index) => (
          <div
            key={index}
            onClick={() => item.type === 'album' ? navigate(`/album/${item.id}`) : null}
            className='flex items-center gap-4 p-2 hover:bg-[#ffffff0b] rounded-md cursor-pointer group'
          >
            <img className='w-12 h-12 rounded' src={item.image} alt="" />
            <div className='flex-1 min-w-0'>
              <p className='font-semibold text-white truncate'>{item.name}</p>
              <div className='flex items-center gap-2'>
                <span className='text-sm text-gray-400 capitalize'>{item.type}</span>
                {item.count && (
                  <>
                    <span className='text-gray-400'>•</span>
                    <span className='text-sm text-gray-400'>{item.count}</span>
                  </>
                )}
              </div>
            </div>
            <div className='opacity-0 group-hover:opacity-100 transition-opacity'>
              <div className='bg-green-500 rounded-full p-2'>
                <svg className='w-3 h-3 text-black' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M8 5v14l11-7z'/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Library