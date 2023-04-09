import React from 'react'
import classes from './LeftSidebar.module.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieIcon from '@mui/icons-material/Movie';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import GroupsIcon from '@mui/icons-material/Groups';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

function LeftSidebar() {
  return (
    <div className = {classes.leftside}>
        {/* <h1 className = {classes.home}>Categories</h1> */}
      <ul className = {classes.listItems}>
      <Link to = '/'> <li><HomeIcon style={{paddingRight : "0.8rem", minWidth : "2.5rem"}}/><span className = {classes.lefttele}>
            Home</span></li></Link> 
        <li><MusicNoteIcon style={{paddingRight : "1rem",minWidth: '2.5rem'}}/><span className = {classes.lefttele}>Music</span></li>
        <li><MovieIcon style={{paddingRight : "0.8rem",minWidth: '2.5rem'}}/><span className = {classes.lefttele}>Movies</span></li>
        <li><SportsBasketballIcon style={{paddingRight : "1rem",minWidth: '2.5rem'}}/><span className = {classes.lefttele}>Sports</span></li>
        <li><NewspaperIcon style={{paddingRight : "1rem",minWidth: '2.7rem'}}/><span className = {classes.lefttele}>News</span></li></ul>

    <ul className = {classes.listItems}>
        <li>
          <Link to="/groups"><GroupsIcon style={{paddingRight : "1rem",minWidth: '2.5rem'}}/><span className = {classes.lefttele}>Groups</span></Link></li>
        </ul>
        <h2 className = {classes.home}><ChatIcon style={{paddingRight : "1.2rem",minWidth: '2.5rem'}}/><Link to='/Chat'><span className = {classes.lefttele}>Chat</span></Link></h2>
        <ul className = {classes.listItems}>
        <li><LogoutIcon style={{paddingRight : "1rem",minWidth: '2.5rem'}}/><span className = {classes.lefttele}>Log Out</span></li>
        </ul>
    </div>
  )
}

export default LeftSidebar;
