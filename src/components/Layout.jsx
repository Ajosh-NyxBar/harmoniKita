import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex font-nunito overflow-hidden">
      <Sidebar isOpen={isOpen} />
      <div className="w-full overflow-auto ">
        <div className="w-full flex justify-between md:justify-end p-3 shadow-2xl">
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
          </button>
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="border border-slate-400 rounded-tl-2xl rounded-bl-2xl p-1 focus:outline-none focus:border-ours-primary pl-5"
            />
            <div className="px-3 py-2 bg-ours-primary rounded-tr-2xl rounded-br-2xl">
              <IoSearchSharp color="white" size={20} />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
