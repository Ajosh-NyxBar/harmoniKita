import React from "react";
import Recent from "../components/miniComp/DashboardComp/Recent";
import Activity from "../components/miniComp/DashboardComp/Activity";

const Dashboard = () => {
  return (
    <div className="w-full p-4 md:overflow-hidden bg-[#F2FBFD]">
      <div className="flex flex-col">
        <h1 className="font-bold font-nunito text-sm">
          Akbar/<span className="text-ours-primary">Dashboard</span>
        </h1>
      </div>
      <Recent />
      <Activity />
    </div>
  );
};

export default Dashboard;
