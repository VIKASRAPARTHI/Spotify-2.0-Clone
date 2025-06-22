import React, { useState, useContext } from 'react'
import { assets, songsData, albumsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { playwithId } = useContext(PlayerContext)

  const filteredSongs = songsData.filter(song =>
    song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.desc.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredAlbums = albumsData.filter(album =>
    album.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    album.desc.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className='relative mb-8'>
        <img className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5' src={assets.search_icon} alt="" />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full max-w-md bg-[#242424] text-white rounded-full py-3 pl-12 pr-4 outline-none'
        />
      </div>

      {searchQuery && (
        <div>
          {filteredSongs.length > 0 && (
            <div className='mb-8'>
              <h2 className='text-2xl font-bold mb-4'>Songs</h2>
              <div className='grid grid-cols-1 gap-2'>
                {filteredSongs.map((song) => (
                  <div
                    key={song.id}
                    onClick={() => playwithId(song.id)}
                    className='flex items-center gap-4 p-2 hover:bg-[#ffffff2b] rounded cursor-pointer'
                  >
                    <img className='w-12 h-12 rounded' src={song.image} alt="" />
                    <div className='flex-1'>
                      <p className='font-semibold'>{song.name}</p>
                      <p className='text-slate-200 text-sm'>{song.desc}</p>
                    </div>
                    <p className='text-slate-200 text-sm'>{song.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredAlbums.length > 0 && (
            <div>
              <h2 className='text-2xl font-bold mb-4'>Albums</h2>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {filteredAlbums.map((album) => (
                  <div
                    key={album.id}
                    className='bg-[#1f1f1f] p-4 rounded hover:bg-[#2a2a2a] cursor-pointer'
                  >
                    <img className='w-full rounded mb-2' src={album.image} alt="" />
                    <p className='font-semibold mb-1'>{album.name}</p>
                    <p className='text-slate-200 text-sm'>{album.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredSongs.length === 0 && filteredAlbums.length === 0 && (
            <div className='text-center py-8'>
              <p className='text-slate-400'>No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      )}

      {!searchQuery && (
        <div className='text-center py-8'>
          <p className='text-slate-400 text-lg'>Start typing to search for songs and albums</p>
        </div>
      )}
    </div>
  )
}

export default Search