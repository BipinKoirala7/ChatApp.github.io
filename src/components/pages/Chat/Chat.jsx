import {memo, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import useUpdateConversation from "../../Hooks/useUpdateConversation";
import ChatFooter from './ChatFooter'
import ChatHeader from "./ChatHeader";

function Chat() {
    const { state } = useLocation()
    const [msg, setmsg] = useState('')
    useEffect(() => {
        function Fetch() {
               useUpdateConversation(msg, state.name)
        }
        Fetch()
    },[msg])



    return (
      <div className="grid grid-rows-chat-grid grid-cols-1">
        <ChatHeader name={state.name} picture={state.picture.medium} />
            
{/* The chat is render here  */}
        <div className="row-span-2 flex">
                <div></div>
        </div>
            
        <ChatFooter name={state.name} setmsg={(text) => setmsg(text) } />
      </div>
    );
}

export default memo(Chat)