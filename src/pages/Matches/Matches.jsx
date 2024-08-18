import React, { useState } from "react";
import { motion } from "framer-motion";
import CardUser from "../../components/miniComp/MatchComp/CardUser";
import CardFriend from "../../components/miniComp/MatchComp/CardFriend";
import love1 from "../../assets/icon/love.png";
import MenuMatch from "../../components/miniComp/MatchComp/MenuMatch";
import PesanTerhubung from "../../components/miniComp/MatchComp/pesanTerhubung";
import BtnFind from "../../components/miniComp/MatchComp/BtnFind";
import bg from "../../assets/bgIcon.png";

const Matches = () => {
  const [isFind, setIsFind] = useState(false);

  const dataUser = [
    {
      nama: "Chandra",
      umur: 21,
      location: "Selat Sunda",
      foto: "https://i.pravatar.cc/150?img=8",
    },
    {
      nama: "Allya",
      umur: 21,
      location: "Cikarang",
      foto: "https://i.pravatar.cc/150?img=5",
    },
  ];

  const handleButtonFind = () => {
    setIsFind((isFind) => !isFind);
  };

  return (
    <div className="h-screen md:h-[90%] p-4 bg-[#F2FBFD] overflow-y-auto">
      <h1 className="font-bold text-sm">
        Akbar/<span className="text-ours-primary">Matches</span>
      </h1>
      <div
        className="h-screen md:h-[90%] flex flex-col justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {isFind && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PesanTerhubung />
          </motion.div>
        )}
        <div
          className={`w-full flex flex-col md:flex-row justify-center items-center ${
            isFind ? "gap-0 md:gap-[2em]" : "gap-[1em] md:gap-[5em]"
          }`}
        >
          <CardUser data={dataUser[0]} isFind={isFind} />
          <motion.img
            src={love1}
            alt=""
            className={`w-[50px] h-[50px] ${isFind ? "mb-[17em] z-10" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          {isFind ? (
            <CardFriend data={dataUser[1]} isFind={isFind} />
          ) : (
            <CardFriend />
          )}
          {isFind && <MenuMatch />}
        </div>
      </div>
      <BtnFind onHandle={handleButtonFind} />
    </div>
  );
};

export default Matches;
