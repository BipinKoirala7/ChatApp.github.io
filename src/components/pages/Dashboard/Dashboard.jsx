import { memo, useContext} from "react";
import { UserContext } from "../../Context/UserInfoContext";
import AdminInfolayout from "../../utils/AdminInfolayout";
import ChatMembers from "./ChatMembers";

function DashBoard() {
  const UserInfo = useContext(UserContext)

  return (
    <div className="bg-slate-200 flex flex-col items-center gap-4">
      <AdminInfolayout info={UserInfo} />
      <div className=" flex gap-1 items-center bg-white px-2 py-2 rounded-[2em]">
        <i className=" cursor-pointer fa-solid fa-magnifying-glass aspect-square rounded-[50%] w-8 flex justify-center items-center text-slate-700 hover:bg-slate-400 hover:text-black"></i>
        <input className=" border-0 outline-none text-[1.2em] rounded-[2em]" type="text" placeholder="Search Friends"/>
      </div>
      <ChatMembers />
    </div>
  );
}

export default memo(DashBoard);
