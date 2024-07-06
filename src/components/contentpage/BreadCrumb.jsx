import { FaChevronRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTab } from "../../Store/Slices/DataSlices";

const BreadCrumb = () => {
  const dispatch = useDispatch();
  const { selectedTab, selectedFile, folders, tabs } = useSelector(
    (state) => state.data
  );

  const folderName =
    selectedTab.length < 20
      ? tabs.filter((item) => item === selectedTab)[0]
      : folders.filter((item) => item.id === selectedTab)[0].name;

  function homeHandler() {
    dispatch(setSelectedTab("folder-notes"));
  }

  return (
    <div>
      <div
        className={`font-cursive w-fit grid ${
          selectedFile
            ? "grid-cols-[auto_auto_auto_auto_auto]"
            : "grid-cols-[auto_auto_auto]"
        }  max-w-[580px] items-center gap-1 rounded px-3 py-1 border-[1px] border-black/20 dark:border-white/20 dark:text-light text-dark`}
      >
        <button
          onClick={() => {
            homeHandler();
          }}
        >
          Home
        </button>
        <FaChevronRight size={"10px"} />

        <button className="whitespace-nowrap overflow-hidden text-ellipsis text-start">
          {folderName}
        </button>
        {selectedFile && (
          <>
            <FaChevronRight size={"10px"} />
            <button className="whitespace-nowrap overflow-hidden text-ellipsis text-start">
              Note
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BreadCrumb;
