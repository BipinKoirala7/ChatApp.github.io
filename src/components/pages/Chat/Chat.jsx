import {memo,useContext, useState,useEffect} from "react";
import { useLocation } from "react-router-dom";

import useUpdateConversation from "../../Hooks/useUpdateConversation";
import ChatFooter from './ChatFooter'
import ChatHeader from "./ChatHeader";
import { UserContext } from "../../Context/UserInfoContext";
import ChatTextStyle from "../../utils/ChatTextStyle";

function Chat() {
  const { state } = useLocation()
  const data= useContext(UserContext)
  const [msg, setmsg] = useState('')
  const updated = useUpdateConversation(msg, state.name, state.login.uuid)
  let ChatEl

  useEffect(() => {
  }, [msg])
  

  function handleclick(text) {
    setmsg(text)
  }

  function showConversation() {
    const conversationobj = data.AdminInfo.conversation.filter(item => {
      return item.id === state.login.uuid
    })
    console.log(conversationobj)
    ChatEl = conversationobj.map((item, index) => <ChatTextStyle obj={item} key={index} name={state.name} picture={state.picture.medium} />)
    return ChatEl
  }
console.log("chat component rendered");
    return (
      <div className="grid grid-rows-chat-grid grid-cols-1">
        <ChatHeader name={state.name} picture={state.picture.medium} />
        <div className="row-span-2 flex flex-col overflow-y-scroll px-4 py-4 hide-scrollbar gap-[2px]">
          {showConversation()}
        </div>
        <ChatFooter name={state.name} setmsg={handleclick} />
      </div>
    );
}

export default memo(Chat)