import { NavLink } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Search from "./Search";
import logo from "../assets/images/exclusive-logo.png";
import PropTypes from "prop-types";

function Header({ itemNo }) {
  // menu toggle icon
  const [icon, setIcon] = useState(false);

  // menu toggle
  const mobileMenu = useRef();

  const burgermenu = () => {
    mobileMenu.current.classList.toggle("menu");
    setIcon(!icon);
  };

  return (
    <div className=" border-b-2 border-solid border-gray-300  ">
      <div className="overflow-hidden flex items-center m-auto  w-[90vw] justify-between mt-6 mb-4 ">
        {/* logo */}
        <div>
          <NavLink to="/">
            {" "}
            <img src={logo} alt="Exclusive logo" className="w-full" />
          </NavLink>
        </div>
        {/* Header Navs */}
        <div
          ref={mobileMenu}
          className="z-[10] desktop:z-0 flex flex-col absolute gap-6  desktop:gap-0 inset-x-[100em] desktop:inset-0 pl-[3em] pt-[8em] desktop:pl-0 desktop:pt-0 bg-menuBg desktop:bg-transparent h-full  bottom-0 w-full  desktop:flex-row desktop:static desktop:justify-between desktop:items-center desktop:w-[55em]"
        >
          <div>
            <ul className=" flex flex-col gap-6 desktop:gap-0 desktop:flex-row desktop:justify-between font-normal text-2xl  desktop:text-[1rem]  desktop:w-[20vw] ">
              <li>
                <NavLink
                  to="/"
                  className=" hover:border-b-[0.1px] hover:border-solid hover:border-[#000000]"
                  onClick={burgermenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className=" hover:border-b-[0.1px] hover:border-solid hover:border-[#000000]"
                  onClick={burgermenu}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className=" hover:border-b-[0.1px] hover:border-solid hover:border-[#000000]"
                  onClick={burgermenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className=" hover:border-b-[0.1px] hover:border-solid hover:border-[#000000]"
                  onClick={burgermenu}
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex gap-[2em]  desktop:justify-between items-center pl-2 pr-2 ">
            {/* search box */}
            <div>
              <Search />
            </div>
            {/* likes button */}
            <button className="m-4">
              <BsHeart color="#000000" />
            </button>

            {/* cart button */}
            <button className="">
              <NavLink to={"/cart"}>
                <BsCart3 color="#000000" />
                <p className="absolute top-6 text-center font-bold text-sm p-0.5  text-primary bg-buttonColor rounded-full ml-3">
                  {itemNo}
                </p>
              </NavLink>
            </button>
          </div>
        </div>

        {/* mobile hambugger menu */}
        <button
          className="tablet:hidden desktop:hidden z-10 block"
          onClick={() => burgermenu()}
        >
          {!icon ? <RxHamburgerMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
      </div>
      <Outlet />
    </div>
  );
}

Header.propTypes = {
  itemNo: PropTypes.number,
};
export default Header;
