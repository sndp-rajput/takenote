import Textellipsis from "./Textellipsis";
import { FaRegFolder } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";

const TreeButton = ({ id, name, active, handleBtn }) => {
  return (
    <li className="w-full">
      <button
        className={`w-full pl-5 gap-2 flex items-center ${
          active === id && "bg-primary"
        }  py-1`}
        onClick={() => {
          handleBtn(id);
        }}
      >
        {active === id ? <FaRegFolderOpen /> : <FaRegFolder />}
        <Textellipsis>{name}</Textellipsis>
      </button>
    </li>
  );
};

export default TreeButton;
