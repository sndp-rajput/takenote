const Header = () => {
  return (
    <header className="font-cursive w-full flex items-center justify-center ">
      <div className="flex py-3 gap-3  text-2xl items-center select-none">
        <img
          src="/logo.svg"
          alt="takenote icon"
          className="h-7"
          draggable={false}
        />
        <h1 className=" font-bold flex items-center text-dark dark:text-light ">
          TakeNote
        </h1>
      </div>
    </header>
  );
};

export default Header;
