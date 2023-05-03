import { memo, useState } from "react";
import { useRef } from "react";

function ChatFooter(props) {
  const [text, setText] = useState('')
  const ref = useRef(null)

  function handleclick() {
    props.setmsg(text)
    ref.current.focus()
    setText('')
  }
  console.log("Chat footer component rendered");
    return (
      <div className="sticky bottom-[-1] bg-white row-span-3 border-t-[.2em] px-6 py-4">
        <div className="flex gap-2 bg-slate-100 rounded-[2em] justify-evenly border-slate-300 px-2 py-2 h-[100%] items-center">
          <i className="fa-solid fa-microphone transition-effect flex items-center justify-center rounded-[50%] text-slate-500 w-16 aspect-square text-[1.2em] cursor-pointer hover:bg-slate-300 "></i>
          <input
            type="text"
            className="bg-slate-100 w-[80%] px-2 py-2 outline-none"
            placeholder={`Text Something to ${props.name}`}
            onChange={(e) => setText(e.target.value)}
            value={text}
            ref={ref}
          />
          <i className="fa-solid flex items-center transition-effect justify-center rounded-[50%] fa-link text-slate-500 w-16 aspect-square text-[1.4em] cursor-pointer hover:bg-slate-300 "></i>
          <i className="fa-solid flex items-center transition-effect justify-center rounded-[50%] fa-camera text-slate-500 w-16 aspect-square text-[1.4em] cursor-pointer hover:bg-slate-300 "></i>
          <i className="fa-regular flex items-center transition-effect justify-center rounded-[50%] fa-face-smile text-slate-500 w-16 aspect-square text-[1.4em] cursor-pointer hover:bg-slate-300 "></i>
          <i
            onClick={handleclick}
            className="fa-solid flex items-center transition-effect justify-center rounded-[50%] fa-paper-plane text-blue-600 w-16 aspect-square text-[1.4em] cursor-pointer hover:bg-blue-600 hover:text-white"
          ></i>
        </div>
      </div>
    );
}

export default memo(ChatFooter)