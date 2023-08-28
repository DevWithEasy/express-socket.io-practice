import { useEffect, useState } from 'react'
import {io} from 'socket.io-client'
const socket = io('http://localhost:3001')

function App() {
  const [message,setMessage] = useState('')
  const [messages,setMessages] = useState([])
  const sendMessage =()=>{
    socket.emit('send_message',{message})
  }
  socket.on('receive_message',(data)=>{
    setMessages([...messages, data.message])
  })
  console.log(messages)
  return (
    <div
      className='p-10'
    >
        <input 
          type="text"
          onChange={(e)=>setMessage(e.target.value)}
          className='border p-2 rounded-lg'
        />
        <button
          onClick={()=>sendMessage()}
          className='bg-gray-100 p-2 m-2'
        >
          Send
        </button>
        <div>
          {messages && 
            messages.map((message,i)=><p key={i}>{message}</p>)
          }
        </div>
    </div>
  )
}

export default App
