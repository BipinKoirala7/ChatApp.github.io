import {memo} from "react"

function ChatBox(props) {
    const time = new Date
    console.log(props)
    return (
      <div className="flex align-center w-[100%] px-2 py-2 mb-3 gap-4 rounded-[1.5em] cursor-pointer hover:bg-white">
        <img
          src={props.obj.picture.medium}
          alt=""
          className="w-[3.5em] aspect-square rounded-[50%] bg-slate-700"
        />
        <div className="flex flex-col align-start justify-center w-[50%]">
          <p className="text-blue-500 font-bold">{props.obj.name}</p>
          <p className="text-sm">{props.obj.profession}</p>
        </div>
        <div className="flex flex-col justify-center items-end">
          <p className="text-[0.8em] text-slate-600">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p className="flex justify-center text-sm items-center text-slate-200 font-bold w-[1.3em] aspect-square rounded-[50%] bg-blue-500">
            1
          </p>
        </div>
      </div>
    );
}

export default memo(ChatBox)