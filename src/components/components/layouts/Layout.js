import React from 'react';
import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar';
import Mainbody from './Mainbody';
import Rightsidebar from './Rightsidebar';
import classes from './Layout.module.css';
import Footerr from './Footerr';
import Videoss from './Videoss';
import Slidebar from './Slidebar';
import LoginPage from '../Pages/LoginPage';
import Feed from '../../Feed';
import Header from '../../Header';
function Layout(props) {
  return (
    <>
     
    <div className='pt-10'>
      {/* <Navbar/> */}
      <Header />
        <main className = {classes.main}>
         <LeftSidebar/>
         <Mainbody/>
         <Rightsidebar/>
        </main>
        <div className='top-[65%] left-10 text-2xl font-bold text-white font-sans flex align-middle pb-4 bg-black pl-10 pt-10'>Categories</div>
        <Slidebar/>
        {/* <div className='top-[65%] left-10 text-xl font-bold text-white font-sans flex align-middle pb-4 bg-stone-700 pl-10 pt-10'>Trending</div>  */}
         <Videoss/>
         <Feed/>
        <Footerr/>
        {/* <LoginPage/> */}
      
    </div>
    </>
  )
}

export default Layout;
