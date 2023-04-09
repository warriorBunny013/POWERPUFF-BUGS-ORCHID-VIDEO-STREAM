import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.js'
// import http from 'http';
// import { Socket } from 'socket.io';
import { createServer } from "http";
import { Server } from "socket.io";




// import usersRoute from './routes/user.js'
import groupsRoute from './routes/group.js'
import watchlistRoute from './routes/watchlist.js'
const app=express();


dotenv.config();
app.use(cors())
// const server=http.createServer(app);
const httpServer = createServer();
const io = new Server(httpServer);
// var io=Socket(server)

// var io = require('socket.io')(server);


const connection=async()=>{
    try{
      await mongoose.connect(process.env.MONGO)
      console.log("connected to MONGODB")
    }catch(err){
      //  throw err;
      console.log("can't able to connect to MONGODB")
    }
}

mongoose.connection.on("disconnected",()=>{
  console.log("Disconnected to MONGODB")
})

//middlewares of all routes
app.use(cookieParser())

app.use(express.json())

app.use("/api/auth", authRoute);
// app.use("/api/users", usersRoute);
app.use("/api/groups", groupsRoute);
// app.use("/api/hotels/count", hotelsRoute);
app.use("/api/watchlist", watchlistRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  const PORT=8800;
app.listen(PORT,()=>{
    connection()
    console.log(`PORT ${PORT} is connected to backend`)
})


const users=[];
const rooms= new Map();

const getUsersByRoom=(room)=>{return rooms.get(room);}

const addNewUser = ({id,room,username,isHost})=>{
  console.log(id,room,username,isHost);
  if(isHost){
    rooms.set(room,[{id,username,isHost}]);
  }
  else{ 
    var users = getUsersByRoom(room);
    console.log('users',users);
    users.push({id:id,username:username,isHost:isHost});
    console.log(rooms);
    rooms.delete(room);
    rooms.set(room,users);
  }
}


io.on('connection',(client)=>{
  client.on('join-room',({sessionID,username,isHost})=>{
    /*client.broadcast.emit('get-current-time');
    client.on('return-current-time',(data)=>{
      client.emit('join-time',data.current_time);
    })*/
    addNewUser({id:client.id,room:'room-'+sessionID,username:username,isHost:isHost});
    client.join('room-'+sessionID);
    if(!isHost){
      var users = getUsersByRoom(room);
      users.forEach(user => {
        if(user.isHost){
          client.broadcast.to(user.id).emit('join-sync-time',client.id);
        }
      });
      console.log('reaches hs');
    }
  });
  /*
  client.on('join-sync-time',(clientID)=>{
    client.broadcast.to
  });
  client.on('return-sync-time',(clientID,time)=>{

  })*/

  client.on('time-sync',(data)=>{
    console.log('data: ',data);
    //client.broadcast.emit('current-time',data);
    io.to(data.room).emit('current-time',data);
  })

  client.on('send-message',(messageData,successCallback)=>{
    io.to(client.id.room).emit('new-message', { user: messageData.username, text: messageData.message });
    successCallback()
  })
});