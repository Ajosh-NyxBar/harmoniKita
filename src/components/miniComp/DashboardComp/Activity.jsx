import React from "react";
import UserIcon from "../../../assets/icon/person.png";
import FriendsIcon from "../../../assets/icon/person (1).png";
import ChatIcon from "../../../assets/icon/person (2).png";
import SettingsIcon from "../../../assets/icon/person (3).png";
import MatchesIcon from "../../../assets/icon/person (5).png";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./customScrollbar.css";

const activities = [
  {
    icon: <img src={UserIcon} alt="User" />,
    title: "User",
    description: "Anda baru saja mengganti username",
    time: "1 hour ago",
  },
  {
    icon: <img src={FriendsIcon} alt="List Friends" />,
    title: "List Friends",
    description: "Ahmad menambahkan teman baru",
    time: "2 hour ago",
  },
  {
    icon: <img src={ChatIcon} alt="Chat" />,
    title: "Chat",
    description: "Ahmad mengirim pesan baru",
    time: "3 hour ago",
  },
  {
    icon: <img src={SettingsIcon} alt="Settings" />,
    title: "Settings",
    description: "Anda mengganti ukuran font",
    time: "6 hour ago",
  },
  {
    icon: <img src={FriendsIcon} alt="List Friends" />,
    title: "List Friends",
    description: "Ahmad menambahkan teman baru",
    time: "2 hour ago",
  },
  {
    icon: <img src={MatchesIcon} alt="Matches" />,
    title: "Matches",
    description: "Bryan menjadi matches terbarumu",
    time: "6 hour ago",
  },
  {
    icon: <img src={SettingsIcon} alt="Settings" />,
    title: "Settings",
    description: "Anda mengganti ukuran font",
    time: "6 hour ago",
  },
  //   CONST INI KALO UDAH ADA BACKEND COMMAND AJA
];

const Activity = () => {
  return (
    <div className="p-4 bg-white rounded-lg mt-4 max-w-[395px] max-h-[500px] overflow-hidden">
      <h2 className="text-lg font-bold mb-4">Activity</h2>
      <PerfectScrollbar style={{ maxHeight: "370px" }} className="custom-scrollbar">
        <div className="space-y-4 custom-scrollbar">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{activity.icon}</div>
                <div>
                  <p className="font-semibold">{activity.title}</p>
                  <p className="text-[12px] text-gray-500 md:text-[14px]">{activity.description}</p>
                </div>
              </div>
              <div className="text-[8px] md:text-[12px] text-gray-400">
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default Activity;