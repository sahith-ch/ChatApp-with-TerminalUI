import React, { useContext, useEffect, useState } from 'react'
import MessageContainer from '../Components/Message_Container/MessageContainer'
import Textbox from '../Components/Textbox/Textbox'

import { socket } from '../App'

interface Props {}

function ChatRoom(props: Props) {
    const {} = props
    const userId = localStorage.getItem('userId')
    const room =localStorage.getItem("room")
 const currentUser = localStorage.getItem("currentUser")
 console.log("Room",room,"user",currentUser)
const [AllMessages,setAllMessages] = useState<any[]>([])
 const [Message,setMessage] = useState("")
useEffect(()=>{
 async()=>await socket.emit('join',room,userId)
},[])

    useEffect(()=>{
      console.log(socket)
      socket.off("receive_msg").on("receive_msg",(data)=>{
        console.log(socket)
   setAllMessages((prevMessages)=>[...prevMessages,{data:data,type:"recieved"}]);
       
         })
         
       },[socket])


       const handler = async()=>{
        if(room !=="" && currentUser!=="" && Message!==""){
          let data={username:currentUser,message:Message}

         await socket.emit("send_msg",{message:Message,room,currentUser})
         setAllMessages((prevMessages)=>[...prevMessages,{data:data,type:"sent"}]);

         //  alert("messagesent") 
        }//alert(msg)
        }
    return (
        <div>
            
                <MessageContainer data={AllMessages}  username={currentUser?currentUser:" "} room={room?room:" "}  />
            
<Textbox Message={Message} username={currentUser?currentUser:" "} room={room?room:" "} setmsg={setMessage} handler={handler}/>

        </div>
    )
}

export default ChatRoom
