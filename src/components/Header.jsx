import { NavLink } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Search from "./Search";
import logo from "../assets/images/exclusive-logo.png";
import { useSelector } from "react-redux";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Header() {
  const activeLink = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid black" : "",
    };
  };

  //user details
  const [userDetails, setUserDetails] = useState(null);

  //navigate
  const navigate = useNavigate();
  const profileRef = useRef();

  const toggleProfileInfo = () => {
    profileRef.current.classList.toggle("info");
  };

  //display user data if user is signed in
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "Users", user.uid);
      const docsnap = await getDoc(docRef);

      if (docsnap.exists()) {
        setUserDetails(docsnap.data());
        console.log(docsnap.data());
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  //sign out
  const signOut = async () => {
    try {
      await auth.signOut();
      profileRef.current.classList.toggle("info");
      setUserDetails(!userDetails);
      navigate("/auth");
      toast.success("signed out successfully", {
        position: "bottom-center",
      });
      burgermenu();
    } catch (err) {
      profileRef.current.classList.toggle("info");

      toast.error(err.message, {
        position: "bottom-center",
      });
    }
  };

  // menu toggle icon
  const [icon, setIcon] = useState(false);

  // menu toggle
  const mobileMenu = useRef();

  const burgermenu = () => {
    mobileMenu.current.classList.toggle("menu");
    setIcon(!icon);
  };

  const { cartTotalQuantity } = useSelector((state) => state.cart);

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
          className="z-[10] desktop:z-0 flex flex-col fixed gap-6  desktop:gap-0 inset-x-[100em] desktop:inset-0 pl-[3em] pt-[8em] desktop:pl-0 desktop:pt-0 desktop:bg-transparent   desktop:flex-row desktop:static desktop:justify-between desktop:items-center desktop:w-[55em]"
        >
          <div>
            <ul className=" flex flex-col gap-6 desktop:gap-0 tablet:gap-8 desktop:flex-row  desktop:justify-between  font-normal text-3xl   desktop:text-[1rem]  desktop:w-[20vw] ">
              <li>
                <NavLink
                  to="/"
                  className=" hover:border-b-[0.1px] hover:border-solid hover:border-[#000000] hidden tablet:hidden desktop:block"
                  onClick={burgermenu}
                  style={activeLink}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className=" hover:border-b-[0.1px] hover:border-solid hover:border-[#000000]"
                  onClick={burgermenu}
                  to={"/ContactPage"}
                  style={activeLink}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className=" hover:border-b-[0.1px] hover:border-solid hover:border-[#000000]"
                  onClick={burgermenu}
                  to={"/about"}
                  style={activeLink}
                >
                  About
                </NavLink>
              </li>
              <li>
                {userDetails ? (
                  ""
                ) : (
                  <NavLink
                    className=" hover:border-b-[0.1px] hover:border-solid hover:border-[#000000]"
                    onClick={burgermenu}
                    to={"/auth"}
                    style={activeLink}
                  >
                    Sign Up
                  </NavLink>
                )}
              </li>
              <li>
                {userDetails && (
                  <div className="block tablet:block desktop:hidden">
                    <NavLink onClick={signOut}>Sign Out</NavLink>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="flex desktop:gap-[2em]  desktop:justify-between items-center desktop:pl-2 desktop:pr-2 ">
            {/* search box */}
            <div className="hidden tablet:hidden desktop:block">
              <Search />
            </div>
            {/* likes button */}
            <button className="m-4 hidden tablet:hidden desktop:block">
              <BsHeart color="#000000" />
            </button>
            {/* cart button */}
            <button className="hidden tablet:hidden desktop:block">
              <NavLink to={"/cart"}>
                <BsCart3 color="#000000" />
                <p className="absolute top-0 text-center font-bold text-sm p-0.5  text-primary bg-buttonColor rounded-full ml-3">
                  {cartTotalQuantity}
                </p>
              </NavLink>
            </button>
            {/* profile button */}
            <div>
              {userDetails ? (
                <div className="hidden tablet:hidden desktop:block">
                  <button onClick={() => toggleProfileInfo()}>
                    <VscAccount
                      color="#000000"
                      size={20}
                      className="hover:bg-buttonColor rounded-full"
                    />
                  </button>
                </div>
              ) : (
                ""
              )}
              <div className="hidden tablet:hidden desktop:block">
                {userDetails && (
                  <div
                    ref={profileRef}
                    className=" flex-col gap-2 absolute right-6 top-20 z-10 bg-primary p-4 rounded-sm shadow-xl shadow-slate-700 hidden "
                  >
                    <span className="text-sm font-normal">
                      {userDetails.name}
                    </span>
                    <span className="text-sm font-normal">
                      {userDetails.email}
                    </span>
                    <NavLink className=" underline" onClick={signOut}>
                      Sign Out
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* mobile hambugger menu */}
        <button
          className=" desktop:hidden z-10 block"
          onClick={() => burgermenu()}
        >
          {!icon ? <RxHamburgerMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
