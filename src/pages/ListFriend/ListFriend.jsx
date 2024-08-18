import React from "react";
import FriendCard from "../../components/miniComp/FriendListComp/Card";
import Terbaru from "../../components/miniComp/FriendListComp/Terbaru";

const ListFriend = () => {
  return (
    <div className="bg-[#F2FBFD] h-screen max-h-[1440px] mx-auto overflow-y-scroll">
      <h1 className="text-sm font-bold font-nunito pt-4 mx-4">
        Akbar/<span className="text-ours-primary">List Friend</span>
      </h1>
      <FriendCard />
      <Terbaru />
    </div>
  );
};

export default ListFriend;
