import { MdOutlineLocationOn } from "react-icons/md";

const CardFriend = ({ data, isFind = null }) => {
  return (
    <div
      className={`w-[200px] lg:w-[290px] flex flex-col gap-2 justify-center items-center ${
        isFind ? "rotate-[-15deg]" : ""
      } bg-ours-gray p-3 rounded-xl`}
    >
      {data ? (
        <img
          src={data.foto}
          alt={`Foto ${data.nama}`}
          className="w-[160px] lg:w-[260px] h-[200px] lg:h-[300px] object-cover bg-center rounded-xl"
        />
      ) : (
        <div className="w-[160px] lg:w-[260px] h-[200px] lg:h-[300px] bg-[#8D8D8D] object-cover bg-center rounded-xl"></div>
      )}

      <h1 className="text-white">
        {data?.nama || "Unknown"}
        {isFind ? ", " : ""}
        {data?.umur || null}{" "}
      </h1>
      <div className="flex justify-center items-center gap-1">
        <MdOutlineLocationOn size={20} color="white" />
        <p className="text-white/80 text-sm">{data?.location || "-"}</p>
      </div>
    </div>
  );
};

export default CardFriend;
