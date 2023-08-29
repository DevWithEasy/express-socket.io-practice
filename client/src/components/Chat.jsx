/* eslint-disable react/prop-types */
import { useState } from "react";

const Chat = ({socket,author,setAuthor,room,setRoom,joined,setJoined}) => {
    const [messages,setMessages] = useState([])
    const [message,setMessage] = useState('')
    const sendMessage=(e)=>{
        e.preventDefault()
        if(!message){
            return
        }
        socket.emit('send_message',{author,room,message})
    }
    const logout = ()=>{
        setAuthor('')
        setRoom('')
        setJoined(!joined)
    }


    socket.on('recieved_message',(data)=>{
        setMessages([...messages,data])
    })

    return (
        <div
            className="mx-4 w-full h-[80%] flex flex-col justify-between ring-2 ring-sky-500 rounded-xl"
        >
            <div
                className="relative h-12 flex justify-center items-center text-center bg-sky-500 text-white font-bold rounded-t-xl"
            >
                <span className="text-4xl">Chat</span>
                <button
                    onClick={()=>logout()}
                    className="absolute right-2 px-2 py-0.5 rounded-full border hover:bg-red-500"
                >
                    Logout
                </button>
            </div>
            <div>

            </div>
            <form
            onSubmit={(e)=>sendMessage(e)}
                className="h-12 px-2 w-full flex justify-between items-center border-t-2 rounded-b-xl"
            >
                <input 
                    type="text"
                    onChange={(e)=>setMessage(e.target.value)}
                    placeholder="write here..."
                    className="w-full h-full px-2 focus:outline-none"
                />
                <button
                type="submit"
                className="px-4 text-2xl hover:cursor-pointer"
                >
                    &#10148;
                </button>
            </form>
        </div>
    );
};

export default Chat;