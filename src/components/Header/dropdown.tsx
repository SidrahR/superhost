import { AiOutlineDown } from "react-icons/ai";

export default function Dropdown() {
  return (
    <div className="relative group">
      <button className="text-[0.9rem] ">
        Raff Peters
        <span>
          <AiOutlineDown className="ml-2 inline-block" />
        </span>
      </button>

      <div className="opacity-0 invisible absolute right-0 z-10 group-hover:visible group-hover:opacity-100 p-6 bg-gray-200 transition-all duration-500 group-hover:translate-y-0 translate-y-10">
        {/* Dropdown content */}
        <button className="px-2 py-1 bg-[#2B3D85] text-[#F5F5F5] text-sm">
          Logout
        </button>
      </div>
    </div>
  );
}
