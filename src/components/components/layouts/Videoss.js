import React from 'react';
import Card from '../UI/Card';
import classes from './Videoss.module.css';
import { videos } from '../Data/Videos';

function Videoss() {
  return (
    <div className = {classes.videoContainer}>

      <div className='top-[65%] left-10 text-2xl font-bold text-white font-sans flex align-middle pb-10 bg-black pl-10 pt-10'>Trending</div>
       <div className = 'flex gap-4 pl-4 mb-10' style = {{display : "flex", flexDirection : "row",flexWrap : "wrap" , margin: "auto", alignItems : "center", justifyContent : "center", marginBottom : "2rem"}}>
        {
          videos.map((items) => {
            return <Card thumbnail= {items.thumbnail} id = {items.id}/>
          })
        }
       </div>

    </div>
  )
}

export default Videoss;
