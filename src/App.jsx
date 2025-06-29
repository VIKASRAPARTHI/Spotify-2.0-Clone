import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import Queue from './components/Queue'
import Login from './components/Login'
import FullscreenPlayer from './components/FullscreenPlayer'
import MiniPlayer from './components/MiniPlayer'
import TopNavbar from './components/TopNavbar'
import { PlayerContext } from './context/PlayerContext'
import { useAuth } from './context/AuthContext'
import { assets } from './assets/assets'

const App = () => {
  const {audioRef, track} = useContext(PlayerContext);
  const { isAuthenticated, login, checkAuth } = useAuth();
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMiniPlayer, setIsMiniPlayer] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <Login onLogin={login} />;
  }

  return (
    <div className = 'h-screen bg-black'>
      <TopNavbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='h-[90%] flex pt-20'>
        <Sidebar/>
        <Display searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
        <Player 
          onFullscreen={() => setIsFullscreen(true)}
          onMiniPlayer={() => setIsMiniPlayer(true)}
        />
      <Queue/>
      {isFullscreen && <FullscreenPlayer onClose={() => setIsFullscreen(false)} />}
      {isMiniPlayer && <MiniPlayer onClose={() => setIsMiniPlayer(false)} />}
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}   

export default App
