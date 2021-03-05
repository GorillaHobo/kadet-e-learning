import { useMenuContext } from "../contexts/menuContext";

import CardContainer from "./CoursesMenu";
import Search from "./Search";

const Courses = () => {
  const { menu } = useMenuContext();
  return (
    <div className="w-full">
      <div className="pb-5 flex justify-between items-center">
        <h1 className="font-bold text-xl ">
          {menu.menuItems[menu.current].desc}
        </h1>
        <Search />
      </div>
      <CardContainer />
    </div>
  );
};

export default Courses;
