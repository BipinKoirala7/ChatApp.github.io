import React, { memo } from "react";

function AdminInfoLayout(props) {
    const {name,profession,picture} = props.info
    return (
      <div className="flex px-6 py-6 gap-4 items-center">
        <img
          src={picture.medium}
          alt=""
          className="w-16 aspect-square bg-gray-500 rounded-[50%]"
        />
        <div className="flex flex-col items-start">
          <p className="text-[1.4em] font-bold text-blue-500">{name}</p>
          <p className="">{profession}</p>
        </div>
        <button className="border-0 font-bold aspect-square rounded-[50%] px-4 py-1 hover:bg-slate-200">
          <i className="fa-solid fa-pen"></i>
        </button>
      </div>
    );
}

export default memo(AdminInfoLayout)