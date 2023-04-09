import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import Layout from './components/components/layouts/Layout';
import LoginPage from './components/components/Pages/LoginPage';
import SignUp from './components/components/Pages/Signup';
import Chat from './components/components/Pages/Chat';
import VideoStreaming from './components/components/layouts/VideoStreaming';
import { videos } from "./components/components/Data/Videos";
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

// import LoginPage from './components/Pages/LoginPage';
import {auth} from "./firebase"
import { useEffect } from 'react';
// import {useState} from 'react';




import LandingPage from './components/Pages/LandingPage'
 import Groups from './components/Pages/Groups/components/Landing/CreateGroup'

import {useState} from 'react';
// import {BrowserRouter as Router,Route,withRouter,Switch} from 'react-router-dom'; 
import Landing from './components/Pages/Groups/components/Landing/Landing';
import Video from './components/Pages/Groups/components/Video/Video';
import YTSession from './components/Pages/Groups/components/YTSession';
import NavBar from './components/Pages/Groups/components/NavBar/NavBar';


const App = () => {

    const [userName,setuserName]=useState("");
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        setuserName(user.displayName)
      }else setuserName("")
    })
  })


    const [sessionID, setSessionID] = useState('');
  const [isHost,setIsHost] = useState(false);
  const [vidID,setVidID] = useState('');
  const [userActionType,setUserActionType] = useState('join-room');

  const newSession = (vidID, session) => {
    setVidID(vidID);
    setSessionID(session);
    setIsHost(true);
    setUserActionType('create-room');
  };

  const defaultSession = () =>{
    
  }

    
    return (
        <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    <Header />
                    <Routes>
                    <Route path='/home' element = {<Layout/>}/>
                    <Route path = '/Login' element = {<LoginPage/>}/>
                    <Route path= '/Signup' element = {<SignUp/>}/>
                    <Route path = '/Chat' element = {<Chat/>}/>
                    <Route path = '/Video/0' element = {<VideoStreaming video = {videos[0].link} id = {0}/>}/>
       <Route path = '/Video/1' element = {<VideoStreaming video = {videos[1].link} id = {1}/>}/>
       <Route path = '/Video/2' element = {<VideoStreaming video = {videos[2].link} id = {2}/>}/>
       <Route path = '/Video/3' element = {<VideoStreaming video = {videos[3].link} id = {3}/>}/>
       <Route path = '/Video/4' element = {<VideoStreaming video = {videos[4].link} id = {4}/>}/>
       <Route path = '/Video/5' element = {<VideoStreaming video = {videos[5].link} id = {5}/>}/>
       <Route path = '/Video/6' element = {<VideoStreaming video = {videos[6].link} id = {6}/>}/>
       <Route path = '/Video/7' element = {<VideoStreaming video = {videos[7].link} id = {7}/>}/>
       <Route path = '/Video/8' element = {<VideoStreaming video = {videos[8].link} id = {8}/>}/>
       <Route path = '/Video/9' element = {<VideoStreaming video = {videos[9].link} id = {9}/>}/>
       <Route path = '/Video/10' element = {<VideoStreaming video = {videos[10].link} id = {10}/>}/>
       <Route path = '/Video/11' element = {<VideoStreaming video = {videos[11].link} id = {11}/>}/>                        <Route path="/feed" exact element={<Feed />} />
                        <Route
                            path="/searchResult/:searchQuery"
                            element={<SearchResult />}
                        />
                        <Route path="/video/:id" element={<VideoDetails />} />
                        <Route exact path='/groups' element={<Landing session={newSession} />} />
                        <Route exact path='/groups/watch/host/:sessionID/:vidID' element={<YTSession vidID={vidID} sessionID={sessionID} isHost={isHost} userAction={'create-room'} />} />
                        <Route exact path='/groups/watch/:sessionID/:vidID' element={<YTSession vidID={vidID} sessionID={sessionID} isHost={isHost} userAction={userActionType} />} />
                        <Route path='/' element = {<LoginPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    );
};

export default App;
