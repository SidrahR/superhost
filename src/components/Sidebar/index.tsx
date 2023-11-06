"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PageList } from "@/components/PageList";
function Sidebar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex">
        <div
          className={`fixed flex flex-col justify between h-screen py-3 pl-4 transition-all duration-500
           ${isOpen ? "w-40" : "w-20"}
          `}
        >
          {/* Sidebar */}
          <div className="flex flex-col items-start justify-between h-full ">
            {/* Logo */}
            <Link href="/" className="">
              <Image
                src={isOpen ? "/long_logo.png" : "/small_logo.png"}
                width={isOpen ? "120" : "30"}
                height={isOpen ? "70" : "30"}
                alt="logo"
                className={` ${isOpen ? "" : "mt-2"} `}
              />
            </Link>

            {/* List of pages */}
            {isOpen ? <PageList /> : null}

            {/* Toggle arrows */}
            <button onClick={toggleSidebar} className=" ">
              <Image
                src={"/arrows.png"}
                height={30}
                width={30}
                alt="arrows"
                className={`transition-all transform duration-300 ${
                  isOpen ? "rotate-0" : "rotate-180"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      <main
        className={`${isOpen ? "ml-40" : "ml-20"} transition-all duration-500`}
      >
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
