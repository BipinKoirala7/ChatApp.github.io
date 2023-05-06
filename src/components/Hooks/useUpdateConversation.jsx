import { useMemo, useRef } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useUpdateConversation(obj) {
    const key = 'conversation'
  let fullConversation = JSON.parse(localStorage.getItem(key)) || []
    const NewConversation = useRef();
    useMemo(() => {
        NewConversation.current = obj;
        Object.keys(obj).length === 0
          ? ""
          : fullConversation.push(NewConversation.current);
        },[obj.text])
  useLocalStorage(key, fullConversation);
  return fullConversation
}

// use a dependency which gives unique identifiers for each message obj and use that as the dependency in the use MEmeo and then the messsage can be checked with use memeo at one place only 