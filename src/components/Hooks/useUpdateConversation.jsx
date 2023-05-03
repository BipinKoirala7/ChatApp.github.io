import useFetch from "./useFetch";
import { UserContext } from '../Context/UserInfoContext'
import { useContext, useEffect } from "react";

function useUpdateConversation(text, friend, id) {
    console.log("Custom hook Update Conversation rendered");
    const { ChangeAdminInfo } = useContext(UserContext);
    useEffect(() => {
        if (text) {
            const msgObj = {
                text: text,
                id: id,
                Send_to: friend,
                type: "send",
            };
            ChangeAdminInfo(prev => {

                return ({
                    ...prev,
                    [prev.conversation]:prev.conversation.push(msgObj)
                })
            })
        }
    },[text,friend,id])
    return true
}

export default useUpdateConversation