import { FaChevronRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setSelectedTab } from "../../Store/Slices/DataSlices";

const BreadCrumb = () => {
  const dispatch = useDispatch();

  function homeHandler() {
    dispatch(setSelectedTab("folder-notes"));
  }

  return (
    <div>
      <div className="w-fit flex items-center gap-2 rounded px-5 py-1 border-[1px] border-black/20 dark:border-white/20 dark:text-light text-dark">
        <button
          onClick={() => {
            homeHandler();
          }}
        >
          Home
        </button>
        <FaChevronRight size={"10px"} />
        <button>Categories</button>
        <FaChevronRight size={"10px"} />
        <button>Note</button>
      </div>
    </div>
  );
};

export default BreadCrumb;
