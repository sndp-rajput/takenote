import { useRef, useState, useEffect } from "react";
import {
  createFolder,
  handleFolPending,
} from "../../../Store/Slices/DataSlices";
import { useDispatch } from "react-redux";

const TreeInputBtn = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const elem = useRef(null);
  const initialMount = useRef(true);
  const inputRef = useRef(input);

  // Update the ref whenever input changes
  useEffect(() => {
    inputRef.current = input;
  }, [input]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      if (input !== "") {
        dispatch(createFolder(input));
        dispatch(handleFolPending());
      }
    }
  };

  const documentClick = (e) => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }
    if (e.target !== elem.current) {
      if (inputRef.current === "") {
        dispatch(handleFolPending());
      } else {
        dispatch(createFolder(inputRef.current));
        dispatch(handleFolPending());
      }
    }
  };

  useEffect(() => {
    document.documentElement.addEventListener("click", documentClick);

    return () => {
      document.documentElement.removeEventListener("click", documentClick);
    };
  }, []);

  return (
    <li>
      <div className="w-full pl-5 gap-2 flex items-center py-0.5 pr-1 bg-black/10">
        <input
          ref={elem}
          className="focus:outline-none w-full text-black h-6 bg-light dark:bg-dark-2 dark:text-light-txt border border-dark dark:border-light"
          type="text"
          maxLength={25}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={handleKey}
          autoFocus={true}
        />
      </div>
    </li>
  );
};

export default TreeInputBtn;
