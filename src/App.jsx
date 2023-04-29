import { useState } from 'react'

import './App.css'
import Chat from './components/Chat'
import ChatUserInfo from './components/ChatUserInfo'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  console.log(count,setCount)
  return (
    <div className=''>
      <Chat />
      <ChatUserInfo />
      <Dashboard />
    </div>
  )
}

export default App
