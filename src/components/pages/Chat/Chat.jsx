import {memo,useState} from "react";
import { useLocation } from "react-router-dom";

import ChatFooter from './ChatFooter'
import ChatHeader from "./ChatHeader";
import ChatSection from './ChatSection'

function Chat() {
  const { state } = useLocation()
  const [msg, setmsg] = useState('')
  
  function handleclick(text) {
    setmsg(text)
  }
console.log("chat component rendered");
    return (
      <div className="grid grid-rows-chat-grid grid-cols-1 max-h-screen">
        <ChatHeader name={state.name} picture={state.picture.medium} />
        <ChatSection id={state.login.uuid} name={state.name} picture={state.picture.medium} msg={msg} />
        <ChatFooter name={state.name} setmsg={handleclick} />
      </div>
    );
}

export default memo(Chat)