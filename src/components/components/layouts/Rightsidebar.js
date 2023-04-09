import React from 'react';
import classes from './Rightsidebar.module.css';
import Wishlistiems from './Wishlistiems';

function Rightsidebar() {
  const slides = [
    {
        title: 'Dream Girl',
        url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8oL_a3Yk9gNkqAaJLzYzATnP2v4boFat_g&usqp=CAU'

    },
    { 
        title : 'Fault in our Stars!',
        url : 'https://plus.unsplash.com/premium_photo-1678935939781-7e5df8a2001b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'

    },
    {
        title :'Beauty and Beast',
        url : 'https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
        title :'Blackpink',
        url : 'https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'

    }
];


  return (
    <div className = {classes.rightParent}>
        <div className='top-[65%] left-10 text-xl font-bold text-white font-sans flex align-middle justify-center pb-4 bg-black'>Watched</div>
       {slides.map((item) => {
             return <Wishlistiems title = {item.title} channel = "Melody" image = {item.url}/>
       })}
        <button variant="contained" className='max-w-[100%] h-[2.8rem] -translate-x-0 translate-y-{70%} left-10 text-white cursor-pointer bg-sky-900 rounded-2xl p-2 mt-3 hover:bg-sky-800'>See All</button>



    </div>
  )
}

export default Rightsidebar;
