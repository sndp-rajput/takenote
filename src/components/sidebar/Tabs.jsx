import { MdAddCircleOutline } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Button from "./resuable/Button";
import Textellipsis from "./resuable/Textellipsis";

const Tabs = () => {
  return (
    <div className="p-2 flex flex-col gap-8">
      <div>
        <Button
          className={`grid grid-cols-[auto_1fr_auto] gap-2 items-center`}
          id={"new"}
        >
          <div>
            <img src="/logo.svg" className="h-5 " alt="takeNote logo" />
          </div>
          <Textellipsis>New Note</Textellipsis>

          <MdAddCircleOutline size={"20px"} />
        </Button>
      </div>
      <div>
        <Button
          className={"grid grid-cols-[auto_1fr] items-center gap-2"}
          id={"folder-notes"}
        >
          <FiBook />
          <Textellipsis>Notes</Textellipsis>
        </Button>
        <Button
          className={"grid grid-cols-[auto_1fr] items-center gap-2"}
          id={"folder-fav"}
        >
          <FaRegStar />
          <Textellipsis>Favorites</Textellipsis>
        </Button>
        <Button
          className={"grid grid-cols-[auto_1fr] items-center gap-2"}
          id={"folder-del"}
        >
          <MdDelete />
          <Textellipsis>Trash</Textellipsis>
        </Button>
      </div>
    </div>
  );
};

export default Tabs;
