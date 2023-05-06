import { useRef } from "react";

export default function DashboardModals(props) {
    const { shouldOpen, closeFn } = props;
    const SettingModalRef = useRef(null);
    const UserOptnsRef = useRef(null)
    shouldOpen ? UserOptnsRef.current.showModal(): ''

    return (
      <>
        <dialog ref={UserOptnsRef} className=" none relative px-4">
          <div className="flex flex-col px-2 py-2 gap-2">
            <button
              onClick={() => SettingModalRef.current.showModal()}
              className="transition-effect border-2 px-4 py-2 rounded-xl hover:bg-slate-600 hover:text-white hover:border-slate-600"
            >
              Setting
            </button>
            <button className="transition-effect border-2 px-4 py-2 rounded-xl hover:bg-slate-600 hover:text-white hover:border-slate-600">
              Favourites
            </button>
            <button
              className="absolute top-2 left-[80%]"
                onClick={() => {
                    closeFn()
                    UserOptnsRef.current.close();
                        }}
            >
              <i className="fa-solid fa-xmark transition-effect w-8 h-8 flex items-center justify-center rounded-[50%] hover:bg-slate-400 hover:text-white "></i>
            </button>
          </div>
        </dialog>
        {/* UserOptns modal end */}
        {/* Settings Modal */}
        <dialog ref={SettingModalRef} className="none relative">
          <div className="flex px-6 py-6 gap-2">
            <button>Chnage Information</button>
            <button
              className="absolute top-2 left-[80%]"
              onClick={() => SettingModalRef.current.close()}
            >
              <i className="fa-solid fa-xmark transition-effect w-8 h-8 flex items-center justify-center rounded-[50%] hover:bg-slate-400 hover:text-white "></i>
            </button>
          </div>
        </dialog>
      </>
    );
}