import React from "react";
import foto from "../../../assets/kienzy.png";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./customScrollbar.css"; 

const matches = [
  { name: "Bagus", age: 21, location: "Karawang", foto: foto },
  { name: "Rere", age: 16, location: "Solo", foto: foto },
  { name: "Erinda", age: 18, location: "Subang", foto: foto },
  { name: "Bagus", age: 21, location: "Karawang", foto: foto },
  { name: "Bagus", age: 21, location: "Karawang", foto: foto },
  { name: "Bagus", age: 21, location: "Karawang", foto: foto },

  //   CONST INI KALO UDAH ADA BACKEND COMMAND AJA    
];

const RecentMatches = () => {
  return (
    <div className="p-4 bg-white rounded-lg mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold mb-4 hidden md:block">Recent your matches</h2>
        <PerfectScrollbar className="w-[850px] custom-scrollbar" option={{ suppressScrollY: true }}>
          <div className="flex space-x-4">
            {matches.map((match, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-300 rounded-md mb-2">
                  <img src={match.foto} alt="foto" className="w-full h-full object-cover rounded-md" />
                </div>
                <p className="text-sm font-semibold">
                  {match.name}, {match.age}
                </p>
                <p className="text-sm text-gray-500">{match.location}</p>
              </div>
            ))}
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default RecentMatches;