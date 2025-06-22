import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'
import RecentlyPlayed from './RecentlyPlayed'
import MadeForYou from './MadeForYou'
import JumpBackIn from './JumpBackIn'

const DisplayHome = () => {
  const currentHour = new Date().getHours()
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <>
        <Navbar/>
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
  )
}

export default DisplayHome
