import {memo} from "react";
import AdminImg from "../../assets/Bipin.jpg";

function TextStyle(props) {
  console.log("Chat Text Style component rendered");
    const { obj, picture, name } = props
    return (
      <div
        className={`flex ${obj.type === 'send' ? 'flex-row-reverse' : ''} items-center gap-2 w-fit max-w-[70%] text-white ${obj.type === 'send' ? 'ml-auto':''}`}
      >
        <img
          src={obj.type === "send" ? AdminImg : picture}
          alt=""
          className={`w-4 h-4 rounded-[50%]`}
        />
        <p className="bg-blue-600 rounded-xl px-2 py-[2px] text-[1.1em]">
          {obj.text}
        </p>
      </div>
    );
}

export default memo(TextStyle)