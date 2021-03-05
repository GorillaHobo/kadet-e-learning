import { DiReact as Icon } from "react-icons/di";

const NavbarIcon = () => {
  return (
    <div className="text-white flex flex-column justify-center content-center ">
      <h1 className="text-xl font-bold text-white">Kadet</h1>
      <Icon className="text-white" />
    </div>
  );
};

const NavbarMenu = () => {
  const items: string[] = ["Home", "Blog", "Help", "Contact Us"];
  return (
    <ul className="flex justify-between text-white">
      {items.map((item, index) => (
        <li className="p-2 text-white uppercase" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-700 flex justify-between items-center">
      <NavbarMenu />
      <NavbarIcon />
    </nav>
  );
};

export default Navbar;
