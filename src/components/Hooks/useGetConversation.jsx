import {  useRef } from "react";
import useUpdateConversation from "./useUpdateConversation";
import ChatTextStyle from "../utils/ChatTextStyle";

function useGetConversation(text, friend, id,picture) {
    console.log("Custom hook Update Conversation rendered")
    const messageObj = useRef({})
    if (text) {
        messageObj.current = {
          text: text,
          id: id,
          Send_to: friend,
          type: "send",
        };
    }
    useUpdateConversation(messageObj.current);
}

export default useGetConversation