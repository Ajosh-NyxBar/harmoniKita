import { useState } from "react";
import logo from "../../../assets/Logo/logo-black.png";
import {
  RiMailUnreadFill,
  RiLock2Fill,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";

import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const FormRegister = ({ onRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister();
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 font-nunito">
      <img src={logo} alt="logo" width={140} className="mb-7" />
      <div className="text-center md:w-[500px] md:text-left">
        <h1 className="text-3xl font-bold mb-2">Register</h1>
        <p className="mb-6 text-left">Buat akunmu dan atur profilemu!</p>
      </div>
      <form onSubmit={handleSubmit} className="w-full md:w-[500px]">
        <div className="w-full mb-4">
          <div className="relative">
            <IoPersonCircleOutline
              size={20}
              className="absolute left-3 top-3 text-gray-400"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full border p-2 pl-10 rounded mb-2"
            />
          </div>
          <div className="relative">
            <RiMailUnreadFill className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 pl-10 rounded mb-2"
            />
          </div>
          <div className="relative">
            <RiLock2Fill className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border p-2 pl-10 rounded mb-2"
            />
            {showPassword ? (
              <RiEyeOffFill
                className="absolute right-3 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <RiEyeFill
                className="absolute right-3 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          <div className="relative">
            <RiLock2Fill className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Konfirmasi Password"
              className="w-full border p-2 pl-10 rounded mb-2"
            />
            {showPassword ? (
              <RiEyeOffFill
                className="absolute right-3 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <RiEyeFill
                className="absolute right-3 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          <div className="flex justify-start items-center gap-2 pl-2">
            <label className="relative cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="hidden"
              />
              {isChecked ? (
                <FaRegCheckCircle size={20} />
              ) : (
                <FaRegCircle size={20} />
              )}
            </label>
            <p>
              Saya menyetujui seluruh{" "}
              <a href="" className="text-ours-primary">
                syarat
              </a>{" "}
              dan{" "}
              <a href="" className="text-ours-primary">
                ketentuan
              </a>
            </p>
          </div>
        </div>
        <button type="submit" className="w-full bg-gray-300 p-2 rounded mb-4">
          Register
        </button>
        <p className="text-sm text-left">
          Have an account?{" "}
          <a href="/login" className="text-ours-primary">
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};

export default FormRegister;