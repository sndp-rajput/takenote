import { useState, useRef, useEffect } from "react";
import Textellipsis from "./Textellipsis";
import { FaRegFolder } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTab, folderRename } from "../../../Store/Slices/DataSlices";

const TreeButton = ({ id, name }) => {
  const [rename, setRename] = useState(false);
  const [folderName, setFolderName] = useState(name);
  const { selectedTab } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const elem = useRef(null);

  function handleKey(e) {
    if (e.key === "Enter") {
      if (folderName === "") {
        setFolderName(name);
      }
      setRename(false);
    }
  }
  if (!rename) {
    document.documentElement.removeEventListener("click", documentClick);
  } else {
    document.documentElement.addEventListener("click", documentClick);
  }

  function documentClick(e) {
    if (elem.current !== e.target) {
      if (rename) {
        if (folderName === "") {
          setFolderName(name);
          setRename(false);
        } else {
          dispatch(folderRename([id, folderName]));
        }
        setRename(false);
      }
    }
  }

  useEffect(() => {
    if (elem.current) {
      elem.current.select();
    }
  }, [rename]);

  return (
    <li className="w-full">
      {rename ? (
        <div
          className={`w-full pl-5 gap-2 flex items-center ${
            selectedTab === id && "bg-primary"
          }  py-1.5 pr-1`}
        >
          {selectedTab === id ? <FaRegFolderOpen /> : <FaRegFolder />}
          <input
            className="focus:outline-none w-full text-black h-5 bg-light dark:bg-dark-2 dark:text-light-txt border border-dark dark:border-light"
            type="text"
            ref={elem}
            maxLength={25}
            value={folderName}
            onChange={(e) => {
              setFolderName(e.target.value);
            }}
            onKeyUp={(e) => {
              handleKey(e);
            }}
          />
        </div>
      ) : (
        <button
          className={`w-full pl-5 gap-2 flex items-center  ${
            selectedTab === id
              ? "bg-primary"
              : "hover:bg-light-2h dark:hover:bg-dark-2h"
          }  py-1`}
          onClick={() => {
            dispatch(setSelectedTab(id));
          }}
          onDoubleClick={(e) => {
            e.stopPropagation();
            setRename(true);
          }}
        >
          {selectedTab === id ? <FaRegFolderOpen /> : <FaRegFolder />}
          <Textellipsis>{folderName}</Textellipsis>
        </button>
      )}
    </li>
  );
};

export default TreeButton;
