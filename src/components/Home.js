import React from 'react'
import myImage from "../photos/img.png"
import { Link } from 'react-router-dom';



export const Home = () => {
  return (
    <div className=' flex  mx-auto mt-28 justify-center'>
        <div>
        <p className='font-extrabold text-7xl mt-6'> 
        <Link to="/video">
        Video Player
        </Link> 
        <span>
      </span><br></br> 
      <Link to="/audio " className='mt-3'>
      Audio Player.
      </Link> </p>
      </div>

       
       
      <div>
        <img src= {myImage}></img>
      </div>
    </div>
 
  )
}
