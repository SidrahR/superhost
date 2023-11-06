import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LogoDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <Image
        src={"/small_logo.png"}
        width={"30"}
        height={"30"}
        alt="logo"
        onClick={toggleDropdown}
      />

      <div
        className={`${
          isDropdownOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 translate-y-10"
        } absolute top-8 right-0 z-10 p-6 bg-gray-200 transition-all duration-500`}
      >
        {/* Dropdown content */}
        <div className="flex flex-col space-y-3 text-center">
          {/* Home button */}
          <Link
            href="/"
            className="px-2 py-1 bg-[#2B3D85] text-[#F5F5F5] text-sm"
          >
            Home
          </Link>
          {/* Logout button */}
          <Link
            href="/"
            className="px-2 py-1 bg-[#2B3D85] text-[#F5F5F5] text-sm"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogoDropdown;
