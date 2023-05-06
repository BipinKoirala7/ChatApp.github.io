import { memo,useRef } from "react";
import AdminImg from '../../assets/Bipin.jpg'
import DashboardModals from "../pages/Dashboard/dashboardPopups";
import { useState } from "react";

function AdminInfoLayout(props) {
  const[OpenUserOptns, setOpenUserOptns] = useState(false)

  console.log("AdminInfoLayout component rendered");
    const {name,profession} = props.info.AdminInfo
    return (
      <div className="flex py-6 gap-4 items-center">
        <img
          src={AdminImg}
          alt=""
          className="w-16 aspect-square bg-gray-500 rounded-[50%]"
        />
        <div className="flex flex-col items-start">
          <p className="text-[1.4em] font-bold text-blue-500">{name}</p>
          <p className="">{profession}</p>
        </div>
        <button
          onClick={() => setOpenUserOptns(prev => !prev)}
          className="border-0 font-bold aspect-square rounded-[50%] px-4 py-1 hover:bg-slate-400"
        >
          <i className="fa-solid fa-pen"></i>
        </button>
        <DashboardModals shouldOpen={OpenUserOptns} closeFn={()=> setOpenUserOptns(false)} />
        {/* comes to play when click the pen edit btn */}
      </div>
    );
}

export default memo(AdminInfoLayout)