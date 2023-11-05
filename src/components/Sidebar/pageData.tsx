import { pages_data, PagesData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const Pages = () => {
  const currentPath = usePathname();
  return (
    <div className="w-full bg-red-400 min-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {pages_data.map((page: PagesData) => (
        <div key={page.id} className="mb-8">
          <Link href={page.href} className="flex">
            <Image src={page.image} width={30} height={30} alt="page" />
            <h3
              className={`${
                page.href === currentPath ? "underline underline-offset-2" : ""
              }`}
            >
              {page.text}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
