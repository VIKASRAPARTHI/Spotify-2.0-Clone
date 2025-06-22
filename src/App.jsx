import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import Queue from './components/Queue'
import Login from './components/Login'
import FullscreenPlayer from './components/FullscreenPlayer'
import MiniPlayer from './components/MiniPlayer'
import { PlayerContext } from './context/PlayerContext'
import { useAuth } from './context/AuthContext'

const App = () => {
  const {audioRef, track} = useContext(PlayerContext);
  const { isAuthenticated, login, checkAuth } = useAuth();
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMiniPlayer, setIsMiniPlayer] = useState(false)

  useEffect(() => {
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <Login onLogin={login} />;
  }

  return (
    <div className = 'h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
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
