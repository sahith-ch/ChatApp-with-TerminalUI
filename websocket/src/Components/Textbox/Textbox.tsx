import React, { useEffect } from 'react'
import "./Textbox.css"
interface Props {
    username:string,
    room:string,
    setmsg:(e:any)=>void
    handler:()=>void
  Message:string;
  }

function Textbox(props: Props) {
    const {setmsg,handler,username,room,Message} = props
    const handleKeyDown = (event:any) => {
      
      if (event.key === 'Enter') {
     
        handler();
        setmsg("");
      }
      
    };
    return (
        <div className='input_Container'>
              <span style={{flexBasis:'auto' ,color:'green',fontSize:'20px',fontWeight:'bolder',marginRight:'1%'}}>
                /{username}/{room}/msg/ 
              </span> 
              <input value={Message} className='input_field' type='text' onKeyUp ={handleKeyDown} onChange={(e)=>{setmsg(e.target.value)}} placeholder='msg'/>
                
       

        </div>
    )
}

export default Textbox
