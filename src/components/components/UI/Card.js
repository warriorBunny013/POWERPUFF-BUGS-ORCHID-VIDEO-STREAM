import React from 'react';
import './Card.module.css';
import { Link, useParams } from 'react-router-dom';
import {AiOutlinePlayCircle} from 'react-icons/ai';

function Card(props) {
  const params = useParams();
  console.log(params);

  return (
    <div>
    <div className = "mr-1 relative opacity-1 hover:opacity-50 hover:select-all  mb-1 h-60 w-60 hover:cursor-pointer">
        <img alt = "Melody khao khud jaan jao" src = {props.thumbnail} className = "bg-cover h-52 w-60"/>
        
      <Link to = {"Video/" + props.id} ><div className = "absolute top-14 left-24 font-bold opacity-0 hover:opacity-100 hover:z-10 text-sky-700 hover:cursor-pointer">
        <AiOutlinePlayCircle className = "text-6xl"/>
        </div>
        </Link> 
    </div>
    </div>
  )
  }

export default Card;