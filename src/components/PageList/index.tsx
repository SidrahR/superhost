import { pages_data, PagesData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const PageList = () => {
  const currentPath = usePathname();
  return (
    <div className="w-full h-full lg:h-[75vh] overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-400 scrollbar-track-gray-200 px-5 lg:px-0 bg-[#f2f2f2]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 sm:gap-x-3">
        {pages_data.map((page: PagesData) => (
          <div
            key={page.id}
            className="mb-4 bg-white rounded-lg lg:rounded-none p-3 lg:p-0 lg:bg-transparent"
          >
            <Link href={page.href} className="flex items-center gap-3 lg:gap-1">
              <Image src={page.image} width={20} height={20} alt="page_icon" />
              <h3
                className={`relative before:absolute before:block before:w-full before:h-[1.5px] 
              before:bottom-0 before:left-1/2 before:bg-black before:transform before:-translate-x-1/2
               before:ease-in-out before:duration-300 before:origin-center
              ${
                page.href === currentPath
                  ? ""
                  : "before:scale-x-0 before:hover:scale-x-100"
              }              
              text-sm lg:text-base `}
              >
                {page.text}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
