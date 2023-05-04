import {memo,useState,useEffect} from "react";
import { useLocation } from "react-router-dom";

import useGetConversation from "../../Hooks/useGetConversation";
import ChatFooter from './ChatFooter'
import ChatHeader from "./ChatHeader";
import ChatTextStyle from "../../utils/ChatTextStyle";

function Chat() {
  const { state } = useLocation()
  const [msg, setmsg] = useState('')
  const conversation = useGetConversation(msg, state.name, state.login.uuid, state.picture.medium)
  
  function handleclick(text) {
    setmsg(text)
  }
console.log("chat component rendered");
    return (
      <div className="grid grid-rows-chat-grid grid-cols-1">
        <ChatHeader name={state.name} picture={state.picture.medium} />
        <div className="row-span-2 flex flex-col overflow-y-scroll px-4 py-4 hide-scrollbar gap-[2px]">
        {conversation}
        </div>
        <ChatFooter name={state.name} setmsg={handleclick} />
      </div>
    );
}

export default memo(Chat)