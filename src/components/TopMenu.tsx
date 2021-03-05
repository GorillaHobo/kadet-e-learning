import { useMenuContext } from "../contexts/menuContext";
import { useSearchContext } from "../contexts/searchContext";

const TopMenuItems = () => {
  const { menu, setMenu } = useMenuContext();
  const { searchDispatch } = useSearchContext();

  const menuHandler = (index: number) => {
    searchDispatch({ type: "RESET" });
    setMenu({ ...menu, current: index });
  };
  return (
    <ul className="flex items-center px-5 mt-5">
      {menu.menuItems.map((item, index) => (
        <li
          className={`px-4 pb-2 cursor-pointer ${
            index === menu.current ? "border-b-2 border-yellow-500" : ""
          }`}
          key={index}
          onClick={() => menuHandler(index)}
        >
          {item.menu}
        </li>
      ))}
    </ul>
  );
};

const TopMenu = () => {
  return (
    <div>
      <TopMenuItems />
      <div
        style={{ zIndex: -1 }}
        className="h-0.5 w-screen bg-gray-500 top-0"
      />
    </div>
  );
};

export default TopMenu;
