import React from 'react'
import zVideo from "../video/video (2160p).mp4"
import Video2 from "../video/video2.mp4"
import Video3 from "../video/video3.mp4"
import Video4 from "../video/video4.mp4"
import Video5 from "../video/video5.mp4"
import Video6 from "../video/video6.mp4"


export const Video = () => {
  return (

    <div className='  h-max flex-row-span-2 justify-center mx-auto'>
        <h1 className=" text-5xl font-extrabold mt-24    ml-[550px] "> Video Player</h1>
        <p  className=' mt-24    ml-96 '>
        <video src= {zVideo} 
         width={640}
         height={360}
         autoPlay
         controls/>
        </p>
        
        <p  className=' mt-24   ml-96 '>
        <video src= {Video2} 
         width={640}
         height={360}
         autoPlay
         controls/>

        </p>
        <br></br>
        <p  className=' mt-24   ml-96 '>
        <video src= {Video3} 
          width={640}
          height={360}
         autoPlay
         controls/>

        </p>
        <p  className=' mt-24   ml-96 '>
        <video src= {Video4} 
        width={640}
        height={360}
         autoPlay
         controls/>

        </p>
        <p  className=' mt-24   ml-96 '>
        <video src= {Video5} 
          width={640}
          height={360}
         autoPlay
         controls/>

        </p>
        <p  className=' mt-24   ml-96 '>
        <video src= {Video6} 
          width={640}
          height={360}
         autoPlay
         controls/>

        </p>
       
       
       
       


    </div>
  )
}
