import React from 'react'
import Navbar from './Navbar'
import { videos } from '../Data/Videos';

function VideoStreaming(props) {
  return (
    <div>
        <div className = "bg-black m-auto text-white  w-5/5 rounded-3xl h-full">
            <div className = "m-auto text-white border-2 w-4/5 rounded-3xl h-96">
            <video controls className = "h-full w-full rounded-3xl">
           <source src={props.video} type="video/mp4"/>
             <source src="movie.ogg" type="video/ogg"/>
           Your browser does not support the video tag.
              </video>
            </div>
            </div>
            <div className = "m-auto w-4/5 text-white">
                 <div className = "font-bold text-teal-500 text-2xl mb-1">
                    {videos[props.id].title}
                 </div>
                 <div className = " text-white text-xl">
                  {videos[props.id].channelName}
                 </div>
                 <div className = "text-gray-300 text-xl">
                  {videos[props.id].description}
                 </div>
            </div>
      
    </div>
  )
}

export default VideoStreaming