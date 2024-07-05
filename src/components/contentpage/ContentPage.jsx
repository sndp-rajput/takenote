import { useState } from "react";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ContentPage = () => {
  const [file, setFile] = useState(true);

  return (
    <div
      className={`grid grid-rows-[auto_1fr_auto]  max-h-screen gap-2 ${
        file ? "grid-rows-[auto_1fr_auto]" : "grid-rows-[auto_1fr]"
      }`}
    >
      <Header />
      <div className="texteditor-scroll grid grid-rows-[auto_1fr] gap-3 max-h-full overflow-y-auto overflow-x-hidden ">
        <div className="grid grid-cols-[1fr_auto] items-center mx-3">
          <BreadCrumb />
          <div className="flex w-20 justify-between">
            <button className="w-9 h-8 flex items-center justify-center border-[1px] rounded border-black/20 dark:border-white/20 dark:text-light text-dark dark:hover:bg-dark-2 hover:bg-light-2">
              <IoIosSearch
                className="text-dark dark:text-light"
                size={"20px"}
              />
            </button>
            <button className="w-9 h-8 flex items-center justify-center border-[1px] rounded border-black/20 dark:border-white/20 dark:text-light text-dark dark:hover:bg-dark-2 hover:bg-light-2">
              <HiOutlineDotsVertical className="text-dark dark:text-light" />
            </button>
          </div>
        </div>
        <div className="text-container">
          {/* {file ? <TextEditor /> : <Folder />} */}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
