import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/Logo/logo-black.png";
import { IoPerson, IoChatboxEllipsesSharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserFriends, FaHeart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { motion } from "framer-motion";
const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  const sidebar = [
    {
      title: "Dashboard",
      link: "/",
      icon: <MdSpaceDashboard color="white" size={25} />,
    },
    {
      title: "List Friend",
      link: "/listfriend",
      icon: <FaUserFriends color="white" size={25} />,
    },
    {
      title: "Matches",
      link: "/matches",
      icon: <FaHeart color="white" size={25} />,
    },
    {
      title: "Chat",
      link: "/chat",
      icon: <IoChatboxEllipsesSharp color="white" size={25} />,
    },
    {
      title: "Settings",
      link: "/settings",
      icon: <IoMdSettings color="white" size={25} />,
    },
  ];

  return (
    <motion.aside
      className={`w-[300px] min-h-screen shadow-xl p-2 ${
        isOpen ? "block" : "hidden"
      } md:block`}
    >
      <div className="flex flex-col justify-between items-center">
        <img src={logo} alt="Logo" className="w-[180px] mt-[30px]" />
      </div>
      <div className="flex items-center w-[80%] mx-auto border-b border-black gap-2 mt-[30px] pl-5 p-3">
        <IoPerson size={20} className="text-ours-primary" />
        <h5 className="text-lg text-ours-primary">AkbarGanteng</h5>
      </div>
      <div className="w-[80%] mx-auto mt-[20px]">
        <h4 className="font-bold text-xl">Menu</h4>
        <div className="flex flex-col gap-2 mt-3">
          {sidebar.map((menu, index) => {
            const isActive = location.pathname === menu.link;

            return (
              <a href={menu.link} key={index}>
                <div
                  className={`flex items-center gap-2 rounded-xl py-4 px-3 md:px-6 
                    ${isActive ? "bg-ours-primary" : "bg-white"} 
                    ${isActive ? "text-white" : "text-black"} 
                    ${
                      isActive
                        ? "hover:bg-ours-primary/80"
                        : "hover:bg-gray-200"
                    }`}
                >
                  <div className={isActive ? "text-white" : "text-black"}>
                    {React.cloneElement(menu.icon, {
                      color: isActive ? "white" : "black",
                    })}
                  </div>
                  <p className="text-sm md:text-lg">{menu.title}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
