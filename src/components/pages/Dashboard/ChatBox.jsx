import {memo} from "react";

function ChatBox(props) {
    console.log(props)
    return (
        <div>this is a chat box that goes in the dashboard</div>
    )
}

export default memo(ChatBox)