import React from 'react'
import Automatic
 from './Automatic';
import classes from './Mainbody.module.css';
import Videoss from './Videoss';

function Mainbody() {
  return (
    <div className = {classes.mainbody}>
       <Automatic />
       {/* <Videoss/> */}

    </div>
  )
}

export default Mainbody;
