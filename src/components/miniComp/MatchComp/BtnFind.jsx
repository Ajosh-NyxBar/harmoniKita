import { IoSearchSharp } from "react-icons/io5";

const BtnFind = ({ onHandle }) => {
  return (
    <div className="flex justify-center items-center">
      <button onClick={onHandle}>
        <div className="flex justify-center items-center gap-2 bg-ours-primary rounded-full text-white px-10 py-2">
          <IoSearchSharp />
          <p>Find</p>
        </div>
      </button>
    </div>
  );
};

export default BtnFind;
