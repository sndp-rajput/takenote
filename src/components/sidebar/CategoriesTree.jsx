import TreeButton from "./resuable/TreeButton";
import { useState } from "react";

const folders = [
  { id: "folder-sjeybdd222", name: "Just for test" },
  { id: "folder-sjeybdd422", name: "Not completed" },
  { id: "folder-sjeybdd522", name: "it means pending" },
];

const CategoriesTree = () => {
  const [active, setActive] = useState("folder-sjeybdd422");

  function handleActive(id) {
    setActive(id);
  }

  return (
    <div className="h-full sidebar overflow-y-auto max-h-full">
      <ul>
        {folders.map((item) => {
          return (
            <TreeButton
              id={item.id}
              name={item.name}
              active={active}
              key={item.id}
              handleBtn={handleActive}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesTree;
