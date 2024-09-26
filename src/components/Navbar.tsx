import React from "react";

// import Logo from "./Logo";
import useDeviceType from "../hooks/usedeviceType";

import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
// import logo from "../assets/logo.svg";
const Navbar: React.FC = () => {
  const deviceType: string = useDeviceType();
  const [showDropdown, setShowDropdown] = React.useState(false);
  return (
    <div className="flex items-center justify-between  lg:w-9/12 w-11/12 h-12 m-auto pt-3">
      <div className="">
        {/* <Logo /> */}
        <a
          className=" font-sans lg:text-xl text-base text-white font-bold"
          href="/"
        >
          Ewan | Pizza6inch
        </a>
      </div>
      {deviceType === "PC" && (
        <div>
          <ul className="flex items-center space-x-6">
            {["About", "Experience", "Project", "Contact"].map(
              (item, index) => (
                <li key={index}>
                  <a className="text-slate-400 hover:text-white cursor-pointer lg:text-xl">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
      {deviceType === "mobile" && (
        <div className="relative ">
          <img
            src={showDropdown ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setShowDropdown(!showDropdown)}
          ></img>
          <ul
            className={`${
              !showDropdown ? " hidden  " : " absolute top-12 -left-8 slide-in"
            }  bg-white shadow-lg py-1`}
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Menu item 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Menu item 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Menu item 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
