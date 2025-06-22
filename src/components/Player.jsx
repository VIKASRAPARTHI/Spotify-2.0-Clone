import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = ({ onFullscreen, onMiniPlayer }) => {
    const [volume, setVolume] = useState(50)
    const [isLiked, setIsLiked] = useState(false)
    const [isShuffled, setIsShuffled] = useState(false)
    const [repeatMode, setRepeatMode] = useState(0)

    const {track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong, showQueue, setShowQueue} = useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={track.image} alt=""/>
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=""/>
                <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt=""/>
                {playStatus ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt=""/> : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt=""/>}
                <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt=""/>
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=""/>
            </div>
            <div className='flex items-center gap-5'>
                <p>{String(time.currentTime.minute).padStart(2, '0')}:{String(time.currentTime.second).padStart(2, '0')}</p>
                <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-600 rounded-full cursor-pointer h-1'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-500 rounded-full'/>
                </div> 
                <p>{String(time.totalTime.minute).padStart(2, '0')}:{String(time.totalTime.second).padStart(2, '0')}</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4' src={assets.plays_icon} alt=""/>
            <img className='w-4' src={assets.mic_icon} alt=""/>
            <img 
                onClick={() => {
                    console.log('Queue clicked, current state:', showQueue);
                    setShowQueue(!showQueue);
                }}
                className={`w-4 cursor-pointer hover:scale-110 transition-transform ${showQueue ? 'text-green-500' : 'opacity-70 hover:opacity-100'}`} 
                src={assets.queue_icon} 
                alt=""
            />
            <img className='w-4' src={assets.volume_icon} alt=""/>
            <div className='w-20 bg-slate-50 h-1 rounded'>

            </div>
            <img 
                onClick={onMiniPlayer}
                className='w-4 cursor-pointer hover:scale-110 transition-transform opacity-70 hover:opacity-100' 
                src={assets.mini_player_icon} 
                alt=""
            />
            <img 
                onClick={onFullscreen}
                className='w-4 cursor-pointer hover:scale-110 transition-transform opacity-70 hover:opacity-100' 
                src={assets.zoom_icon} 
                alt=""
            />
        </div>
    </div>
  )
}

export default Player
