import { useState } from 'react'
import {io} from 'socket.io-client'
import Join from './components/join'
import Chat from './components/Chat'
const socket = io('http://localhost:3001')

function App() {
  const [author,setAuthor] = useState('')
  const [room,setRoom] = useState('')
  const [joined,setJoined] = useState(false)


  return (
    <div
      className='h-screen flex justify-center items-center'
    >
      {!joined &&
        <Join {...{socket,author,setAuthor,room,setRoom,joined,setJoined}}/>
      }
      {joined &&
        <Chat {...{socket,author,setAuthor,room,setRoom,joined,setJoined}}/>
      }
    </div>
  )
}

export default App
