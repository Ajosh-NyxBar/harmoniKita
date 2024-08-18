import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineChat, MdOutlinePersonAddAlt1 } from "react-icons/md";

const MenuMatch = () => {
  return (
    <div className="bg-white absolute border border-ours-gray/50 rounded-lg flex flex-col justify-center items-center gap-4 ml-[37em] md:ml-[40em] lg:ml-[50em] mt-[-5em] py-2 px-3">
      <button>
        <AiOutlineLike className="text-ours-primary text-[20px] md:text-[25px] lg:text-[30px]" />
      </button>
      <button>
        <MdOutlineChat className="text-ours-gray/50 text-[20px] md:text-[25px] lg:text-[30px]" />
      </button>
      <button>
        <MdOutlinePersonAddAlt1 className="text-ours-gray/50 text-[20px] md:text-[25px] lg:text-[30px]" />
      </button>
    </div>
  );
};

export default MenuMatch;
