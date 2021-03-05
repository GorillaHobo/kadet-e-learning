import {
  useState,
  createContext,
  useContext,
  SetStateAction,
  Dispatch,
  ReactNode,
} from "react";

interface IMenuItem {
  menu: string;
  desc?: string;
}

const initialMenuItems: IMenuItem[] = [
  {
    menu: "Overview",
    desc: "Ongoing Courses",
  },
  {
    menu: "Find Courses",
    desc: "Available Courses",
  },
  {
    menu: "Bookmark",
    desc: "Bookmarked Courses",
  },
  {
    menu: "Announcements",
    desc: "Announcements",
  },
];

interface IMenu {
  current: number;
  menuItems: IMenuItem[];
}

interface IProps {
  menu: IMenu;
  setMenu: Dispatch<SetStateAction<IMenu>>;
}

const MenuContext = createContext<IProps | undefined>(undefined);

const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState({
    current: 0,
    menuItems: initialMenuItems,
  });

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("Can't use this hook outside of provider.");
  }
  return context;
};

export { MenuProvider, useMenuContext };
