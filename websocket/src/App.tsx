import React, { useEffect, useMemo, useState } from 'react'
import io  from "socket.io-client";
import MessageContainer from './Components/Message_Container/MessageContainer';
import Textbox from './Components/Textbox/Textbox';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import ChatRoom from './Routes/ChatRoom';

interface Props {}
const username = localStorage.getItem('currentUser')||" "
const getrandomval=()=>{
  //use number
  console.log("username",username)
  return username+Math.random()
}
const userId = localStorage.getItem('userId') ||getrandomval();
localStorage.setItem('userId', userId);

export const socket =io("http://localhost:3000", {
  autoConnect: true,
  query: {
    userId, // Pass userId to the server during connection
  }}
)
function App(props: Props) {


//  const [recievedata,setrecievedata] = useState<any[]>([])
//  const [sentdata,setsentdata] = useState<any[]>([])
//  const [Messages,setMessages] = useState<any[]>([])


  return (
    <div style={{'background':"black","height":"100vh"}}>
<Routes>
  <Route path='/'  element={<Home/>}/> 
  <Route path='/chat'  element={<ChatRoom/>}/> 

</Routes>

</div>

  )
}

export default App
