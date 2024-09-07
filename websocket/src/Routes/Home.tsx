import React, { useContext, useEffect } from 'react'
import  { UserContext } from '../Context/UserContext';

import { Link } from 'react-router-dom';
import { socket } from '../App';

interface Props {}
function Home(props: Props) {
    const {} = props

    const userId = localStorage.getItem('userId')
     const room =localStorage.getItem("room")
     const currentUser =localStorage.getItem("currentUser")
 
  const roomhandler=async()=>{
        if(room!==""){
            await socket.emit("join_room",room,userId);
        }
    }

    return (
        <div>
                <input onChange={(e)=>{localStorage.setItem("currentUser",e.target.value)}} placeholder='username'/>
    <input onChange={(e)=>{ localStorage.setItem("room",e.target.value)}} placeholder='room'/>
  <Link to={"/chat"}>
  <button onClick={roomhandler}>Join</button>
  
  </Link>
        </div>
    )
}

export default Home
