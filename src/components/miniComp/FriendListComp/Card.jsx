import React from "react";
import { FaUserFriends } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../../ui/card";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import panah from "../../../assets/icon/moving.png";

const data = [
  {
    title: "Teman",
    count: 121,
    growth: (
      <div className="flex items-center gap-2">
        <img src={panah} alt="panah" className="w-4 h-4" />
        <span className="font-bold">+10%</span>
        <span>bulan ini</span>
      </div>
    ),
    icon: <FaUserFriends className="text-white" />,
  },
  {
    title: "Laki - laki",
    count: 80,
    growth: (
      <div className="flex items-center gap-2">
        <img src={panah} alt="panah" className="w-4 h-4" />
        <span className="font-bold">+10%</span>
        <span>bulan ini</span>
      </div>
    ),
    icon: <FaUserFriends className="text-white" />,
  },
  {
    title: "Perempuan",
    count: 41,
    growth: (
      <div className="flex items-center gap-2">
        <img src={panah} alt="panah" className="w-4 h-4" />
        <span className="font-bold">+10%</span>
        <span>bulan ini</span>
      </div>
    ),
    icon: <FaUserFriends className="text-white" />,
  },
];

const FriendList = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-8 px-4 md:px-8 xl:px-12 pt-12">
      {data.map((item, index) => (
        <Fade
          direction="down"
          delay={200 * (index + 1)}
          cascade
          damping={0.1}
          triggerOnce
          key={index}
        >
          <Card className="relative w-[500px] max-w-[300px] h-[150px] flex flex-col pb-10 justify-center items-center cursor-pointer bg-white md:w-full">
            <CardHeader className="text-primary">
              <div>
                <div className="w-[60px] h-[60px] bg-primary text-black bg-ours-primary rounded-lg flex justify-center items-center absolute -top-6 left-6">
                  {item.icon}
                </div>
              </div>
            </CardHeader>
            <div className="min-w-full absolute -bottom-2">
              <CardContent className="">
                <CardTitle className="mb-2 text-right">{item.title}</CardTitle>
                <CardDescription className="text-lg text-right">
                  <CountUp end={item.count} duration={4} delay={1} />
                </CardDescription>
                <div className="mt-5">
                  <hr className="w-full border-t border-gray-300 mb-2" />
                  <CardDescription className="text-sm">
                    {item.growth}
                  </CardDescription>
                </div>
              </CardContent>
            </div>
          </Card>
        </Fade>
      ))}
    </div>
  );
};

export default FriendList;