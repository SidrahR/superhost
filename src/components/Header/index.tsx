import Dropdown from "./dropdown";

const Header = ({ currentPage }: { currentPage: string }) => {
  return (
    <div>
      <div className="flex items-end justify-between px-10 pt-5 text-xl text-[#3A3A3A] ">
        <h1 className="capitalize">{currentPage}</h1>
        <Dropdown />
      </div>
    </div>
  );
};

export default Header;
