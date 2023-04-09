import React from 'react'
import classes from './Wishlistitem.module.css';


function Wishlistiems(props) {
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
    // <div className = {classes.rightsidebar}>
        <div className = {classes.wishBox}>
          <div className = {classes.imageBox}>
              <img className={classes.image} src = {props.image}/>
          </div>
          <div className = {classes.description}>
             <div className = {classes.videoTitle}>
                  {props.title}
             </div>
             <div className = {classes.channelName}>
                  {props.channel}
             </div>
          </div>

        {/* </div> */}
    </div>
  )
}

export default Wishlistiems
