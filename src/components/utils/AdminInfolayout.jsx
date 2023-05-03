import { memo } from "react";
import AdminImg from '../../assets/Bipin.jpg'

function AdminInfoLayout(props) {
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
        <button className="border-0 font-bold aspect-square rounded-[50%] px-4 py-1 hover:bg-slate-400">
          <i className="fa-solid fa-pen"></i>
        </button>
      </div>
    );
}

export default memo(AdminInfoLayout)