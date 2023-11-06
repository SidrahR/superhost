"use client";
import { useEffect, useState } from "react";
import LogoDropdown from "./logodropdown";
import { AiOutlineDown } from "react-icons/ai";
import { PageList } from "@/components/PageList";
const MobileHeader = ({ currentPage }: { currentPage: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="flex items-end justify-between px-5 pt-5 text-xl text-[#3A3A3A] lg:hidden">
      <button className="capitalize" onClick={toggleModal}>
        {currentPage}
        <span>
          <AiOutlineDown className="ml-2 text-[0.9rem] inline-block" />
        </span>
      </button>
      <LogoDropdown />

      <div
        className={`fixed top-20 left-0 pb-20 w-full min-h-full max-h-screen overflow-y-auto transition-all transform duration-500 ${
          isModalOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        {/* Modal content */}
        <div className="">
          <PageList /> {/* Render your list of pages here */}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
