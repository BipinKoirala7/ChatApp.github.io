import { useMemo, useRef } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useUpdateConversation(obj) {
    const key = 'conversation'
    let fullConversation = JSON.parse(localStorage.getItem(key)) || [];
    const NewConversation = useRef();
    useMemo(() => {
        NewConversation.current = obj;
        Object.keys(obj).length === 0
          ? ""
          : fullConversation.push(NewConversation.current);
        },[obj.text,obj.id])
    useLocalStorage(key, fullConversation);
}