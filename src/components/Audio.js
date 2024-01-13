import React from 'react'
import audio1 from "../components/audio/1.mp3"
import audio2 from "../components/audio/2.mp3"
import audio3 from "../components/audio/3.mp3"
import audio4 from "../components/audio/4.mp3"
import audio5 from "../components/audio/5.mp3"
import audio6 from "../components/audio/6.mp3"
import ReactAudioPlayer from 'react-audio-player';


export const Audio = () => {
  return (
    <div>
         <h1 className=" text-5xl font-extrabold mt-24    ml-[650px] "> Audio Player</h1>
    <p> 
        <ReactAudioPlayer  className='mt-24    ml-[650px]'
        src={audio1}
        autoPlay
        controls
        onPlay={() => console.log('Audio started playing')}
      onPause={() => console.log('Audio paused')}
      onEnded={() => console.log('Audio playback ended')}
        />

    </p>
    <p> 
        <ReactAudioPlayer  className='mt-24    ml-[650px]'
        src={audio2}
     
        controls
        onPlay={() => console.log('Audio started playing')}
      onPause={() => console.log('Audio paused')}
      onEnded={() => console.log('Audio playback ended')}
        />

    </p>
    <p> 
        <ReactAudioPlayer className='mt-24    ml-[650px]'
        src={audio3}
      
        controls
        onPlay={() => console.log('Audio started playing')}
      onPause={() => console.log('Audio paused')}
      onEnded={() => console.log('Audio playback ended')}
        />

    </p>
    <p> 
        <ReactAudioPlayer className='mt-24    ml-[650px]'
        src={audio4}

        controls
        onPlay={() => console.log('Audio started playing')}
      onPause={() => console.log('Audio paused')}
      onEnded={() => console.log('Audio playback ended')}
        />

    </p>
    <p> 
        <ReactAudioPlayer  className='mt-24    ml-[650px]'
        src={audio5}
    
        controls
        onPlay={() => console.log('Audio started playing')}
      onPause={() => console.log('Audio paused')}
      onEnded={() => console.log('Audio playback ended')}
        />

    </p>
    <p> 
        <ReactAudioPlayer  className='mt-24    ml-[650px]'
        src={audio6}
        
        controls
        onPlay={() => console.log('Audio started playing')}
      onPause={() => console.log('Audio paused')}
      onEnded={() => console.log('Audio playback ended')}
        />

    </p>
    
    </div>
  )
}

