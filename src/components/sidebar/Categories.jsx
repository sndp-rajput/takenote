import { RiFolderCloseLine } from "react-icons/ri";
import CategoriesTree from "./CategoriesTree";
import { FiFolderPlus } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleFolPending } from "../../Store/Slices/DataSlices";

const Categories = () => {
  const dispatch = useDispatch();
  const { folPending } = useSelector((state) => state.data);

  return (
    <div className="grid grid-rows-[auto_1fr] overflow-hidden min-h-[140px]">
      <div className="grid grid-cols-[1fr_auto] px-5 py-1 items-center">
        <p className="font-SF-Regular font-semibold">CATEGORIES</p>
        <button
          onClick={() => {
            dispatch(handleFolPending(!folPending));
          }}
          className="hover:bg-light-2h dark:hover:bg-dark-2h  w-8 h-8 rounded-full flex items-center justify-center "
        >
          {folPending ? <RiFolderCloseLine /> : <FiFolderPlus />}
        </button>
      </div>
      <CategoriesTree />
    </div>
  );
};

export default Categories;
