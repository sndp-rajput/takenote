import TreeButton from "./resuable/TreeButton";
import TreeInputBtn from "./resuable/TreeInputBtn";
import { useSelector } from "react-redux";

const CategoriesTree = () => {
  const { folPending, folders } = useSelector((state) => state.data);

  return (
    <div className="h-full py-3 sidebar overflow-y-auto max-h-full">
      <ul className="h-full">
        {folPending && <TreeInputBtn />}
        {folders.map((item) => {
          return <TreeButton id={item.id} name={item.name} key={item.id} />;
        })}
        <br />
      </ul>
    </div>
  );
};

export default CategoriesTree;
