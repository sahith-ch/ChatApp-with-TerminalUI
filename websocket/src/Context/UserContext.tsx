import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

export type msg={
data:any,
type:string
}

interface usertype{
    room:string,
    setroom:Dispatch<SetStateAction<string>>,
    currentUser:string,
    setcurrentUser:Dispatch<SetStateAction<string>>,
    messages:msg[],
    setmessages:Dispatch<SetStateAction<msg[]> >,
}

export const UserContext = React.createContext<usertype>({
    room:"",
    setroom:()=>{},
    currentUser:"",
    setcurrentUser:()=>{},
    messages:[{data:"",type:""}],
    setmessages:()=>{}
})
type props={
    children:ReactNode
}
const UserContextProvider=({children}:props)=>{
const [room,setroom]=useState("");
const [currentUser,setcurrentUser] =useState("")
const [messages,setmessages] =useState([{data:"",type:""}] )
return(
    <UserContext.Provider value={{room,setroom,currentUser,setcurrentUser,messages,setmessages}}>
        {children}
    </UserContext.Provider>
)

}

export default UserContextProvider