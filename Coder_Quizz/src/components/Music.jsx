import React, { useState, useRef } from 'react';
import musicFile from '../img/music.mp3';
import "./Music.css"

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayerRef = useRef(null);

  const soundFile = musicFile;

  const handlePlayPause = () => {
    if (isPlaying) {
      audioPlayerRef.current.pause();
      setIsPlaying(false);
    } else {
      audioPlayerRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSongEnd = () => {
    setIsPlaying(false);
    audioPlayerRef.current.currentTime = 0;
    setIsPlaying(true);
  };

  return (
    <div className='music-container'>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play Music'}</button>
      <div>
        <audio
          ref={audioPlayerRef}
          src={soundFile}
          onEnded={handleSongEnd}
        />
      </div>
    </div>
  );
};

export default Music;
