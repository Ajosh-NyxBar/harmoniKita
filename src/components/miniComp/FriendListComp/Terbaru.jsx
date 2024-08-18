import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Fade } from "react-awesome-reveal";
import { IoSearchSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const friends = [
  {
    name: "Bagus Maulana",
    age: 21,
    location: "Karawang",
    distance: "-1 Km",
    img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/zaitaku-iyada-5_11.jpeg?w=600&q=90",
  },
  {
    name: "Syaqueena",
    age: 23,
    location: "Bandung",
    distance: "+40 Km",
    img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/zaitaku-iyada-5_11.jpeg?w=600&q=90",
  },
  {
    name: "Cheryl",
    age: 23,
    location: "Jakarta",
    distance: "+20 Km",
    img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/zaitaku-iyada-5_11.jpeg?w=600&q=90",
  },
  {
    name: "Gustian",
    age: 25,
    location: "Solo",
    distance: "+400 Km",
    img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/zaitaku-iyada-5_11.jpeg?w=600&q=90",
  },
  {
    name: "Bagus Maulana",
    age: 21,
    location: "Karawang",
    distance: "-1 Km",
    img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/zaitaku-iyada-5_11.jpeg?w=600&q=90",
  },
  {
    name: "Syaqueena",
    age: 23,
    location: "Bandung",
    distance: "+40 Km",
    img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/zaitaku-iyada-5_11.jpeg?w=600&q=90",
  },
  {
    name: "Syaqueena",
    age: 23,
    location: "Bandung",
    distance: "+40 Km",
    img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/zaitaku-iyada-5_11.jpeg?w=600&q=90",
  },
  {
    name: "Syaqueena",
    age: 23,
    location: "Bandung",
    distance: "+40 Km",
    img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/zaitaku-iyada-5_11.jpeg?w=600&q=90",
  },
  {
    name: "Syaqueena",
    age: 23,
    location: "Bandung",
    distance: "+40 Km",
    img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/zaitaku-iyada-5_11.jpeg?w=600&q=90",
  },
];

const Terbaru = () => {
  return (
    <div className="p-4 max-h-[500px] bg-white mt-4 mx-4 rounded-2xl">
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-4">Terbaru</h1>
        <div className="flex justify-end p-3 max-w-[200px] md:max-w-none mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search"
            className="border border-slate-400 rounded-tl-2xl rounded-bl-2xl p-1 focus:outline-none w-full focus:border-ours-primary pl-5"
          />
          <div className="px-3 py-2 bg-ours-primary rounded-tr-2xl rounded-br-2xl">
            <IoSearchSharp color="white" size={20} />
          </div>
        </div>
      </motion.div>
      <PerfectScrollbar style={{ maxHeight: "500px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {friends.map((friend, index) => (
            <Fade key={index} direction="up" delay={index * 100}>
              <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={friend.img}
                  alt={friend.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-full">
                  <h2 className="text-lg font-bold">
                    {friend.name}, {friend.age}
                  </h2>
                  <div className="flex items-center">
                    <MdOutlineLocationOn size={20} />
                    <p className="ml-1">
                      {friend.location} ({friend.distance})
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default Terbaru;