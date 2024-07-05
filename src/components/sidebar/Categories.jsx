import { IoMdAdd } from "react-icons/io";
import CategoriesTree from "./CategoriesTree";

const Categories = () => {
  return (
    <div className="overflow-hidden min-h-[140px]">
      <div className="grid grid-cols-[1fr_auto] px-5 pt-3 ">
        <p className="font-SF-Regular font-semibold">CATEGORIES</p>
        <button className="hover:bg-light-2h dark:hover:bg-dark-2h  w-6 h-6 rounded-full flex items-center justify-center ">
          <IoMdAdd />
        </button>
      </div>
      <CategoriesTree />
    </div>
  );
};

export default Categories;
