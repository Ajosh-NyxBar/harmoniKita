import { MdOutlineLocationOn } from "react-icons/md";

const CardUser = ({ data, isFind }) => {
  return (
    <div
      className={`w-[200px] lg:w-[290px] flex flex-col gap-2 justify-center items-center ${
        isFind ? "rotate-[15deg]" : ""
      } bg-gradient-to-br from-[#71E6FF] to-ours-primary p-3 rounded-xl`}
    >
      <img
        src={data.foto}
        alt={`Foto ${data.nama}`}
        className="w-[160px] lg:w-[260px] h-[200px] lg:h-[300px] object-cover bg-center rounded-xl"
      />
      <h1 className="text-white">
        {data.nama}, {data.umur}{" "}
      </h1>
      <div className="flex justify-center items-center gap-1">
        <MdOutlineLocationOn size={20} color="white" />
        <p className="text-white/80 text-sm">{data.location}</p>
      </div>
    </div>
  );
};

export default CardUser;
