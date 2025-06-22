import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({name, image, desc, id}) => {

  const {playwithId} = useContext(PlayerContext)

  return (
    <div onClick={()=>playwithId(id)} className='bg-[#181818] hover:bg-[#282828] p-4 rounded-lg cursor-pointer transition-all group'>
      <div className='relative mb-4'>
        <img className='w-full aspect-square object-cover rounded-md' src={image} alt="" />
        <div className='absolute bottom-2 right-2 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg'>
          <svg className='w-4 h-4 text-black' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M8 5v14l11-7z'/>
          </svg>
        </div>
      </div>
      <h3 className='font-semibold text-white mb-2 truncate'>{name}</h3>
      <p className='text-sm text-gray-400 line-clamp-2'>{desc}</p>
    </div>
  )
}

export default SongItem
