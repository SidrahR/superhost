"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Pages } from "./pageData";
function Sidebar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex">
        <div
          className={`fixed flex flex-col justify between ${
            isOpen ? "w-40" : "w-20"
          }  bg-pink-100 h-screen py-3 pl-3`}
        >
          {/* Sidebar */}
          <div className="flex flex-col items-start justify-between h-full ">
            {/* Logo */}
            <Link href="/">
              <Image
                src={isOpen ? "/long_logo.png" : "/small_logo.png"}
                width={isOpen ? "120" : "30"}
                height={isOpen ? "70" : "30"}
                alt="logo"
                className="shrink-0"
              />
            </Link>

            {/* List of pages */}
            {isOpen ? <Pages /> : null}

            {/* Toggle arrows */}
            <button onClick={toggleSidebar} className=" bg-neutral-200 ">
              <Image
                src={"/arrows.png"}
                height={30}
                width={30}
                alt="arrows"
                className={`mx-auto ${isOpen ? "rotate-0" : "rotate-180"}`}
              />
            </button>
          </div>
        </div>
      </div>
      <main className={`${isOpen ? "ml-40" : "ml-20"}`}>{children}</main>
    </div>
  );
}

export default Sidebar;
