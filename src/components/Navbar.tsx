import React from "react";

import useDeviceType from "../hooks/useDeviceType";

import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
const Navbar: React.FC = () => {
  const deviceType: string = useDeviceType();
  const [showDropdown, setShowDropdown] = React.useState(false);
  return (
    <nav className=" flex top-0 w-full h-fit z-10">
      <div className="flex items-center justify-between m-auto  lg:w-9/12 w-11/12 h-12 pt-8">
        <div className="">
          {/* <Logo /> */}
          <a className=" font-sans text-xl  text-white font-bold" href="#hero">
            Ewan | Pizza6inch
          </a>
        </div>
        {deviceType === "PC" && (
          <div>
            <ul className="flex items-center space-x-6">
              {["About", "Experience", "Works", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      className="text-slate-400 hover:text-white cursor-pointer text-xl"
                      href={`#${item.toLocaleLowerCase()}`}
                    >
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
                !showDropdown
                  ? " hidden  "
                  : " absolute top-12 -left-28 slide-in"
              }  black-gradient py-1 w-36 rounded-xl z-20`}
            >
              {["About", "Experience", "Work", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    className="block px-4 py-4  text-white cursor-pointer"
                    href={`#${item.toLocaleLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
