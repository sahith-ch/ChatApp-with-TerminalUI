import React from 'react'
import "./MessageContainer.css"
interface Props {
room:string,
data:any[],

username:string
}


function MessageContainer(props: Props) {
    const {room,data,username} = props
console.log("data",data)
    return (
       <div className='msg_container'>
  
            {data.map((d)=>(
      <div  className={`msg_box_${d.type}`}>

      <div className='msg'>


{
    (d.type!=='')?
    (d.type=='recieved')?            
<p>/{d.data.currentUser}: {d.data.message}</p>   :   <p>/me: {d.data.message}</p> :<></>
}
</div>
      </div>

            ))
            }
                    {/* {sent_Data.map((d)=>(
                <div className='sent_msg_box'>




<h2>{d.message}</h2>      
</div>
            ))
            } */}
            
          
       </div> 
    )
}

export default MessageContainer
