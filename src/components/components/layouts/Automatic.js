import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import { Videosapi } from '../Data/YoutubeApiresponse';

function Automatic() {
    const slides = [
    {
        title: 'Dream Girl',
        url : 'https://images.hdqwalls.com/wallpapers/butterfly-dream-girl-4k-wb.jpg'

    },
    { 
        title : 'Fault in our Stars!',
        url : 'https://images4.alphacoders.com/822/thumb-1920-822629.jpg'

    },
    {
        title :'Cardigan',
        url : 'https://i.ytimg.com/vi/K-a8s8OLBSE/maxresdefault.jpg'
    },
    {
        title :'Drumroll',
        url:'https://wallpapercave.com/wp/wp7285030.jpg'
        // url : 'https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'

    }
];

const[currentIndex, setCurrentIndex] = useState(0);
const[curridx, setcurridx] = useState(0);

const prevHandler = () => {
    if(currentIndex > 0){
        setCurrentIndex(currentIndex-1);
        
    }
    else{
        setCurrentIndex(slides.length-1);
    }
    console.log(currentIndex);
}

const nextHandler = () => {
    if(currentIndex < slides.length-1){
        setCurrentIndex(currentIndex+1);
    }
    else{
        setCurrentIndex(0);
    }
}
  return (

    <div className = 'max-w-[100%] h-[70vh] w-full m-auto py-1 px-4 relative rounded bg-black'>
       <div style = {{backgroundImage: `url(${slides[currentIndex].url})`}}className = 'w-full h-full roundex-2xl bg-center bg-cover duration-500 rounded-3xl'></div>
        <div className='absolute top-[65%] left-10 text-3xl font-bold text-teal-500 font-sans'>{slides[currentIndex].title}</div>
    <Link to = '/Video'>  <button variant="contained" className='max-w-[7rem] h-[2.8rem] absolute top-[75%] -translate-x-0 translate-y-{70%} left-10 text-white cursor-pointer bg-sky-900 rounded-2xl p-2 hover:bg-sky-800'>Watch Now</button></Link> 
        <div className='group-hover:block absolute top-[70%] -translate-x-0 translate-y-{-70%} right-20 text-2xl square-full p-2 bg-black/20 text-white cursor-pointer' onClick = {prevHandler}>
            <BsChevronCompactLeft size = {30}/></div>
        <div className = 'group-hover:block absolute top-[70%] -translate-x-0 translate-y-{-70%} right-8 text-2xl square-full p-2 bg-black/20 text-white cursor-pointer' onClick = {nextHandler}>
             <BsChevronCompactRight size={30}/>
       </div>
      
    </div>
  )
}

export default Automatic;
