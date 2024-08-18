import React from "react";
import img1 from "../../assets/img1.png";
import FormLogin from "./shared/FormLogin";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen font-nunito">
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
        <FormLogin />
        <div className="hidden md:flex w-full md:w-1/2 justify-center items-center">
          <img src={img1} alt="login" className="w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Login;