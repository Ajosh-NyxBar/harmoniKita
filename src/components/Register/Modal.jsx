import React from 'react';
import messege from "../../assets/icon/message.png"

const Modal = ({ onClose, onResend }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-nunito">
      <div className="bg-white p-8 rounded-lg shadow-lg  max-w-[355px] w-full max-h-[455px] h-full">
        <div className="flex flex-col items-center">
          <img src={messege} alt="Verify Email" className="w-32 h-32 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Verify your email</h2>
          <div className='text-[#4B515F]'>

          <p className="text-left mb-4 text-sm">
            We have just sent an email verification link to your email. Please check your email and click on that link to verify your email address.
          </p>
          <p className="text-left mb-6 text-sm">
            If not auto redirected after verification, click on the continue button.
          </p>
          </div>
          <button
            onClick={onClose}
            className="bg-ours-primary text-white px-4 py-2 rounded mb-2 w-full"
          >
            Continue
          </button>
          <button
            onClick={onResend}
            className="text-ours-primary px-4 py-2 rounded w-full hover:bg-ours-primary/30 hover:text-ours-primary"
          >
            Resend email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;