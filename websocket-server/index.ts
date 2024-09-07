import express from "express"
import http from "http"
import {Server} from "socket.io"
import cors from "cors"
const app = express()
app.use(cors())
const server = http.createServer(app)

const io = new Server(server,{
  cors:{
    origin:"http://localhost:5173",
    methods:["GET","POST"]
  }
});
const users = {};
io.on("connection", (socket) => {
    console.log("yess")
    const {userId} = socket.handshake.query

  
    if (userId) {
      parseInt(userId)
      // Associate userId with the current socket ID
      users[userId] = socket.id;
      console.log(`User ${userId} connected with socket ID: ${socket.id}`);
    }

    socket.on("join_room",(data,userId)=>{
      socket.join(data)
      console.log("joined")
    })
    socket.on("reconnect",(data)=>{
      socket.join(data)
      console.log("rejoined")
    })

    socket.on("send_msg",(data)=>{
      console.log("data = ",data.message,data.room);
      socket.to(data.room).emit("receive_msg",data)
    })
  });
  
  server.listen(3000,()=>{
    console.log("listening 3000")
  });

