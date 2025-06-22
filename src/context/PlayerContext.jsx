import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  })

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Play error:', e));
      setPlayStatus(true);
    }
  }
  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  }

  const playwithId = async (id) => {
    setTrack(songsData[id]);
    setPlayStatus(true);
    // Small delay to ensure track is set
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.log('Play error:', e));
      }
    }, 100);
  }

  const previous = async () => {
    if(track.id>0) {
        setTrack(songsData[track.id-1]);
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.play().catch(e => console.log('Play error:', e));
            setPlayStatus(true);
          }
        }, 100);
    }
  }

   const next = async () => {
    if(track.id < songsData.length-1) {
        setTrack(songsData[track.id+1]);
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.play().catch(e => console.log('Play error:', e));
            setPlayStatus(true);
          }
        }, 100);
    }
  }

  const seekSong = async(e)=> {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => {
        if (seekBar.current && audio.duration) {
          const progress = (audio.currentTime / audio.duration) * 100;
          seekBar.current.style.width = progress + "%";
        }
        
        setTime({
          currentTime: {
            second: Math.floor(audio.currentTime % 60),
            minute: Math.floor(audio.currentTime / 60),
          },
          totalTime: {
            second: Math.floor((audio.duration || 0) % 60),
            minute: Math.floor((audio.duration || 0) / 60),
          },
        });
      };

      // Set up event listeners
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateTime);
      audio.addEventListener('durationchange', updateTime);
      
      // Force initial update
      setTimeout(updateTime, 100);
      
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateTime);
        audio.removeEventListener('durationchange', updateTime);
      };
    }
  }, [track])

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playwithId,
    previous,
    next,
    seekSong,
    showQueue,
    setShowQueue
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider };
export default PlayerContextProvider;
