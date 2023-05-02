import { memo } from "react";
import { useLocation } from "react-router-dom";

function Info() {
    const {state} = useLocation()
    console.log(state)
    return (
      <div className="relative gap-[5em] mr-auto ml-auto mt-2 mb-2 flex flex-col w-[90%] col-start-2 col-end-4">
        <div className=" gradient rounded-t-[1em] h-[13em] bg-slate-400"></div>
        <div className="flex gap-2 px-[2em] justify-between">
          <div className="flex gap-2 flex-col">
            <p className="font-bold text-[1.8em]">{state.name}</p>
            <div className="flex gap-2 items-center">
              <img src={`https://flagsapi.com/${state.country}/flat/32.png`} />
              <p>
                {state.location.state} , {state.location.country}
              </p>
            </div>
            <div className="flex items-center">
              <p className="border-r-2 px-2">@{state.login.username}</p>
              <p className="border-r-2 px-2">Front-End Developer at Google</p>
              <p className="text-slate-500 px-2">Full-time</p>
            </div>
            <div className="flex gap-4">
              <button className="px-2 flex items-center gap-2 py-[.4em] rounded-[.5em] border-2 border-slate-900 hover:text-white hover:bg-slate-900 transition-effect">
                <i className="fa-solid fa-share"></i>
                <p>Message</p>
              </button>
              <button className="px-2 flex items-center gap-2 py-[.4em] rounded-[.5em] bg-blue-600 text-white transition-effect hover:text-blue-600 hover:bg-blue-200 ">
                <i className="fa-solid fa-message"></i>
                <p>Share Profile</p>
              </button>
            </div>
            <fieldset className="grid grid-cols-2 gap-4 w-fit border-2 border-black px-4 py-2 rounded-2xl">
              <legend>Social</legend>
              <button className="flex gap-2 items-center border-2 border-black px-2 py-2 rounded-[.7em] w-fit">
                <i className="fa-brands fa-facebook text-[1.5em] text-blue-600"></i>
                <p className="font-bold text-lg">{state.login.username}</p>
              </button>
              <button className="flex items-center gap-2 border-2 border-black px-2 py-2 rounded-[.7em] w-fit">
                <i className="fa-brands fa-twitter text-[1.5em] text-blue-500"></i>
                <p className="font-bold text-lg">{state.login.username}</p>
              </button>
              <button className="flex items-center gap-2 border-2 border-black px-2 py-2 rounded-[.7em] w-fit">
                <i className="fa-brands fa-instagram text-[1.5em] text-red-600"></i>
                <p className="font-bold text-lg">{state.login.username}</p>
              </button>
              <button className="flex items-center gap-2 border-2 border-black px-2 py-2 rounded-[.7em] w-fit">
                <i className="fa-brands fa-linkedin text-[1.5em] text-blue-800"></i>
                <p className="font-bold text-lg">{state.login.username}</p>
              </button>
            </fieldset>
          </div>

          <div className="flex flex-col mr-auto ml-auto items-center justify-center min-w-[30%]">
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
          </div>
        </div>
        <img
          className="w-[10em] aspect-square bg-white border-[.3em] rounded-[50%] absolute top-[8em] left-[2em]"
          src={state.picture.large}
          alt=""
        />
      </div>
    );
}

export default memo(Info)