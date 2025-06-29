import React from 'react'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'
import RecentlyPlayed from './RecentlyPlayed'
import MadeForYou from './MadeForYou'
import JumpBackIn from './JumpBackIn'

const DisplayHome = ({ searchQuery, setSearchQuery }) => {
  const currentHour = new Date().getHours()
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening'

  const filteredSongs = searchQuery 
    ? songsData.filter(song =>
        song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : songsData

  const filteredAlbums = searchQuery 
    ? albumsData.filter(album =>
        album.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        album.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : albumsData

  return (
    <div className='px-6'>
        {searchQuery ? (
          <div className='mt-6'>
            <h1 className='text-2xl font-bold mb-6'>Search results for "{searchQuery}"</h1>
            {filteredSongs.length > 0 && (
              <div className='mb-6'>
                <h2 className='text-xl font-bold mb-4'>Songs</h2>
                <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                  {filteredSongs.map((item, index)=>(<div key={index} className='min-w-[180px] flex-shrink-0'><SongItem name={item.name} desc={item.desc} id={item.id} image={item.image}/></div>))}
                </div>
              </div>
            )}
            {filteredAlbums.length > 0 && (
              <div className='mb-6'>
                <h2 className='text-xl font-bold mb-4'>Albums</h2>
                <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                  {filteredAlbums.map((item, index)=>(<div key={index} className='min-w-[180px] flex-shrink-0'><AlbumItem name={item.name} desc={item.desc} id={item.id} image={item.image}/></div>))}
                </div>
              </div>
            )}
            {filteredSongs.length === 0 && filteredAlbums.length === 0 && (
              <div className='text-center py-8'>
                <p className='text-gray-400'>No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className='mt-6'>
              <h1 className='text-3xl font-bold mb-6'>{greeting}</h1>
              <RecentlyPlayed/>
              <JumpBackIn/>
              <MadeForYou/>
            </div>
            <div className='mb-4'>
              <div className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl font-bold'>Featured Charts</h1>
                <p className='text-sm text-gray-400 hover:text-white cursor-pointer'>Show all</p>
              </div>
              <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                  {albumsData.map((item, index)=>(<div key={index} className='min-w-[180px] flex-shrink-0'><AlbumItem name={item.name} desc={item.desc} id={item.id} image={item.image}/></div>))}
              </div>  
            </div>
            <div className='mb-4'>
              <div className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl font-bold'>Today's biggest hits</h1>
                <p className='text-sm text-gray-400 hover:text-white cursor-pointer'>Show all</p>
              </div>
              <div className='flex overflow-x-auto scrollbar-hide gap-4 pb-4' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                  {songsData.map((item, index)=>(<div key={index} className='min-w-[180px] flex-shrink-0'><SongItem name={item.name} desc={item.desc} id={item.id} image={item.image}/></div>))}
              </div>  
            </div>
          </>
        )}
    </div>
  )
}

export default DisplayHome
