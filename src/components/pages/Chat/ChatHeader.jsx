import { memo } from "react";

function ChatHeader(props) {
  console.log("Chat Header component rendered");
    return (
      <div className="row-span-1 flex items-center justify-between py-2 px-8 bg-slate-100 border-b-[.2em] border-slate-300">
        <div className="flex items-center gap-2">
          <img
            src={props.picture}
            alt=""
            className="mr-auto w-12 aspect-square rounded-[50%]"
          />
          <p className="mr-auto text-lg">{props.name}</p>
          <div className="w-2 h-2 rounded-[50%] bg-green-500"></div>
        </div>
        <div className="flex items-center">
          <i className="fa-solid text-slate-500 fa-magnifying-glass text-[1.3em] w-12 h-12 rounded-[50%] flex items-center justify-center cursor-pointer hover:bg-slate-200"></i>
          <i className="fa-regular text-slate-500 fa-heart text-[1.3em] w-12 h-12 rounded-[50%] flex items-center justify-center cursor-pointer hover:bg-slate-200"></i>
          <i className="fa-regular text-slate-500 fa-bell text-[1.3em] w-12 h-12 rounded-[50%] flex items-center justify-center cursor-pointer hover:bg-slate-200"></i>
        </div>
      </div>
    );
}

export default memo(ChatHeader)