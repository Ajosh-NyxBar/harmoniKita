import React, { useState } from "react";
import imgRegister from "../../assets/imgRegister.png";
import FormRegister from "./shared/FormRegister";
import Modal from "./Modal";

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegister = () => {
    // Logic untuk register

    // Buat BACKEND KWKWKWWK
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleResendEmail = () => {
    // Logic untuk resend email
    
    // Buat BACKEND KWKWKWWK
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
        <div className="hidden md:flex w-full md:w-1/2 justify-center items-center">
          <img src={imgRegister} alt="login" className="w-3/4" />
        </div>
        <FormRegister onRegister={handleRegister} />
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal} onResend={handleResendEmail} />
      )}
    </div>
  );
};

export default Register;
