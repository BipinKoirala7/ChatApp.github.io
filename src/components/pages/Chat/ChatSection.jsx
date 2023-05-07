import { memo, useEffect, useRef } from "react";

import useGetConversation from "../../Hooks/useGetConversation";
import useGetReply from './../../Hooks/useGetReply'

function Chat(props) {

    const conversation = useGetConversation(
      props.msg,
      props.name,
      props.id,
      props.picture,
    );
    return (
        <div className="row-span-2 flex flex-col overflow-y-scroll px-4 py-4 hide-scrollbar gap-[2px]">
          {conversation}
        </div>
    );
}
export default memo(Chat)

// Remember that you can use multiple functions on a simgle page of jsx 

