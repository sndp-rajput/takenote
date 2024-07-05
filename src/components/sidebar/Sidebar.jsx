import Button from "./resuable/Button";
import Textellipsis from "./resuable/Textellipsis";
import ThemeHandler from "./ThemeHandler";
import Tabs from "./Tabs";
import Categories from "./Categories";

const Sidebar = () => {
  return (
    <nav className="sidebar font-cursive  overflow-y-scroll grid grid-rows-[auto_auto_1fr_auto_auto] w-[300px] text-dark-txt dark:text-light-txt  bg-light-2 dark:bg-dark-2 max-h-screen">
      <Tabs />
      <hr className="border-0 h-[2px] dark:bg-dark bg-light" />
      <Categories />
      <hr className="border-0 h-[2px] dark:bg-dark bg-light" />
      <div className="p-2 grid gap-3 ">
        <ThemeHandler />
        <Button
          className={"grid grid-cols-[auto_1fr] items-center gap-2"}
          id={"folder-profile"}
        >
          <img
            src="/user.jpg"
            className="h-9 rounded-full"
            alt="takeNote logo"
          />
          <Textellipsis>Sandeep Rajput</Textellipsis>
        </Button>
      </div>
    </nav>
  );
};

export default Sidebar;
