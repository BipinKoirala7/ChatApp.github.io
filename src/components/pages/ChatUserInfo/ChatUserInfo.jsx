import { memo } from "react";
import { useLocation ,NavLink} from "react-router-dom";

function CurrentChatUserInfo() {
    const { state } = useLocation()
    console.log(state)
    return (
      <div className="flex items-center gap-4 flex-col px-4 py-4 bg-slate-100">
        <NavLink to={`/info/${state.login.uuid}`} state={state}>
          <button className="flex items-center transition-effect gap-2 border-2 border-blue-600 px-2 py-[5px] rounded-[1em] text-blue-900 hover:bg-blue-500 hover:text-white ">
            <i className="fa-regular fa-circle-question text-[1.3em]"></i>
            <p>See About {state.name}</p>
          </button>
        </NavLink>
        <img
          className="w-24 aspect-square rounded-[50%] ml-auto mr-auto "
          src={state.picture.large}
          alt=""
        />
        <div className="flex flex-col py-4 px-4 w-fit justify-center items-center border-2 rounded-[2em]">
          <p className="text-[1.5em] text-blue-800">{state.name}</p>
          <p>{state.profession}</p>
        </div>
        <div className="flex w-[100%] py-4">
          <div className="flex flex-col items-center gap-2 border-e-2 w-[50%]">
            <button className="bg-blue-200 w-[5em] aspect-square rounded-[50%] grid place-items-center">
              <i className="fa-solid fa-comment text-[2.5em] text-blue-600 aspect-square"></i>
            </button>
            <p>Chat</p>
          </div>
          <div className="flex flex-col items-center gap-2 w-[50%] border-s-2">
            <button className="bg-blue-200 w-[5em] aspect-square rounded-[50%] grid place-items-center">
              <i className="fa-solid fa-video  text-[2.5em] text-blue-600 aspect-square"></i>
            </button>
            <p>Video</p>
          </div>
        </div>
        <div className="w-[100%] flex flex-col gap-2">
          <button className="transition-effect flex items-center gap-2 w-fit rounded-[.5em] px-2 py-2 hover:bg-slate-300">
            <i className="fa-regular fa-user"></i>
            <p>View Friends</p>
          </button>
          <button className="transition-effect flex items-center gap-2  w-fit px-2 py-2 rounded-[.5em] hover:bg-slate-300">
            <i className="fa-regular fa-heart"></i>
            <p>Add to Favourites</p>
          </button>
        </div>
        <div className="w-[100%] flex flex-col gap-2">
          <p className="text-lg font-bold">Attachments</p>
          <div className="flex w-[100%] justify-between">
            <button className="transition-effect w-14 aspect-square rounded-[.5em] bg-blue-200 text-blue-700 flex items-center justify-center hover:bg-blue-500 hover:text-white">
              PDF
            </button>
            <button className="transition-effect w-14 aspect-square rounded-[.5em] bg-blue-200 text-blue-700 flex items-center justify-center hover:bg-blue-500 hover:text-white">
              Video
            </button>
            <button className="transition-effect w-14 aspect-square rounded-[.5em] bg-blue-200 text-blue-700 flex items-center justify-center hover:bg-blue-500 hover:text-white">
              MP3
            </button>
            <button className="transition-effect w-14 aspect-square rounded-[.5em] bg-blue-200 text-blue-700 flex items-center justify-center hover:bg-blue-500 hover:text-white">
              Image
            </button>
          </div>
          <button className="mt-4 transition-effect w-fit hover:bg-blue-200 px-4 rounded-[1em] text-blue-800 mr-auto ml-auto border-2 border-blue-700">
            View all
          </button>
        </div>
      </div>
    );
}

export default memo(CurrentChatUserInfo)