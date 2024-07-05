import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTab } from "../../../Store/Slices/DataSlices";

const Button = ({ children, className, id }) => {
  const dispatch = useDispatch();
  const { selectedTab } = useSelector((state) => state.data);
  const [active, setActive] = useState(selectedTab === id);

  useEffect(() => {
    setActive(selectedTab === id);
  }, [selectedTab, id]);

  function handleClick() {
    if (selectedTab !== id) {
      dispatch(setSelectedTab(id));
    }
  }

  return (
    <button
      className={`w-full rounded-md p-2 font-Text-Regular ${
        active ? "bg-primary" : "hover:bg-light-2h dark:hover:bg-dark-2h"
      } ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
