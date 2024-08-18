import { useState } from "react";
import logo from "../../../assets/Logo/logo-black.png";
import {
  RiFacebookFill,
  RiGoogleFill,
  RiMailUnreadFill,
  RiLock2Fill,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 font-nunito">
      <img src={logo} alt="logo" width={140} className="mb-7" />
      <div className="text-center md:w-[500px] md:text-left">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <p className="mb-6 text-left">Selamat datang! silahkan login</p>
      </div>
      <div className="flex gap-4 mb-4">
        <button className="flex items-center justify-center gap-2 border p-2 rounded w-[150px] md:w-[240px]">
          <RiGoogleFill />
          <p>Google</p>
        </button>
        <button className="flex items-center justify-center gap-2 border p-2 rounded w-[150px] md:w-[240px]">
          <RiFacebookFill />
          <p>Facebook</p>
        </button>
      </div>
      <p className="mb-4 text-left">Atau</p>
      <div className="w-full md:w-[500px]">
        <div className="w-full mb-4">
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
          <a href="#" className="text-ours-primary text-sm mb-4 text-left">
            Forgot Password?
          </a>
        </div>
        <button className="w-full bg-gray-300 p-2 rounded mb-4">Login</button>
        <p className="text-sm text-left">
          Don't have an account?{" "}
          <a href="/register" className="text-ours-primary">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default FormLogin;
