const Header = ({ currentPage }: { currentPage: string }) => {
  return (
    <div className="flex justify-between px-5 pt-5 bg-purple-400 text-xl text-[3A3A3A]">
      <h1 className="capitalize">{currentPage}</h1>
      <h1>Raff Peters ^</h1>
    </div>
  );
};

export default Header;
