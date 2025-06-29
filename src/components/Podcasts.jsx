import React from 'react'
import { assets } from '../assets/assets'

const Podcasts = () => {
  const podcastsData = [
    {
      id: 1,
      name: "Tech Talk Daily",
      host: "John Smith",
      image: "https://via.placeholder.com/150",
      description: "Daily discussions about the latest in technology",
      episodes: 245,
      duration: "45 min"
    },
    {
      id: 2,
      name: "Music Industry Insights",
      host: "Sarah Johnson",
      image: "https://via.placeholder.com/150",
      description: "Behind the scenes of the music industry",
      episodes: 128,
      duration: "35 min"
    },
    {
      id: 3,
      name: "Creative Minds",
      host: "Mike Davis",
      image: "https://via.placeholder.com/150",
      description: "Interviews with creative professionals",
      episodes: 89,
      duration: "50 min"
    },
    {
      id: 4,
      name: "Business Breakthrough",
      host: "Lisa Chen",
      image: "https://via.placeholder.com/150",
      description: "Success stories from entrepreneurs",
      episodes: 156,
      duration: "40 min"
    }
  ]

  return (
    <div className='px-6'>
      <h1 className='text-3xl font-bold mb-8'>Podcasts</h1>

      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Popular Podcasts</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {podcastsData.map((podcast) => (
            <div
              key={podcast.id}
              className='bg-[#181818] hover:bg-[#282828] p-4 rounded-lg cursor-pointer transition-all group'
            >
              <div className='relative mb-4'>
                <div className='w-full aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center'>
                  <svg className='w-12 h-12 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/>
                  </svg>
                </div>
                <div className='absolute bottom-2 right-2 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg'>
                  <svg className='w-4 h-4 text-black' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
              <h3 className='font-semibold text-white mb-2 truncate'>{podcast.name}</h3>
              <p className='text-sm text-gray-400 mb-2'>by {podcast.host}</p>
              <p className='text-xs text-gray-400 mb-2 line-clamp-2'>{podcast.description}</p>
              <div className='flex justify-between text-xs text-gray-400'>
                <span>{podcast.episodes} episodes</span>
                <span>{podcast.duration} avg</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Recent Episodes</h2>
        <div className='space-y-3'>
          {podcastsData.slice(0, 3).map((podcast, index) => (
            <div
              key={index}
              className='flex items-center gap-4 p-3 hover:bg-[#ffffff0b] rounded-md cursor-pointer group'
            >
              <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center flex-shrink-0'>
                <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M8 5v14l11-7z'/>
                </svg>
              </div>
              <div className='flex-1 min-w-0'>
                <h4 className='font-semibold text-white truncate'>Episode {index + 1}: Latest Update</h4>
                <p className='text-sm text-gray-400 truncate'>{podcast.name} • {podcast.host}</p>
                <p className='text-xs text-gray-400'>2 days ago • {podcast.duration}</p>
              </div>
              <div className='opacity-0 group-hover:opacity-100 transition-opacity'>
                <div className='bg-green-500 rounded-full p-2'>
                  <svg className='w-4 h-4 text-black' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M8 5v14l11-7z'/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Podcasts