import React, {useEffect, useRef} from 'react'
import { Route, Routes, useLocation} from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import Search from './Search'
import Lyrics from './Lyrics'
import Library from './Library'
import Genres from './Genres'
import Music from './Music'
import Podcasts from './Podcasts'
import { albumsData } from '../assets/assets'

const Display = () => {

    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.slice(-1) : "";
    const bgColor = albumsData[Number(albumId)].bgColor;

    useEffect(() => {
        if(isAlbum) {
            displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
        } else{
            displayRef.current.style.background = `#121212`;
        }
    })

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-y-auto scrollbar-hide lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome/>} />
        <Route path='/album/:id' element={<DisplayAlbum/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/lyrics' element={<Lyrics/>} />
        <Route path='/library' element={<Library/>} />
        <Route path='/genres' element={<Genres/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/podcasts' element={<Podcasts/>} />
      </Routes>
    </div>
  )
}

export default Display
