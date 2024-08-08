import { GoHome } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileSearchModal from "./MobileSearchModal";

function Mobilemenu() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-between w-full bg-primary bottom-0 fixed p-6 desktop:hidden">
      <div>
        <NavLink to={"/"}>
          <GoHome size={25} />
        </NavLink>
      </div>
      <div>
        {/* pop up modal for search */}
        <MobileSearchModal />
      </div>
      <div>
        <GoHeart size={25} />
      </div>
      <div className="relative  overflow-visible">
        <NavLink to={"/cart"} onClick={goToTop}>
          <IoCartOutline size={25} />
          <span className="absolute -top-3 z-50 text-center font-bold text-sm p-0.5  text-primary bg-buttonColor rounded-full ml-3">
            {cartTotalQuantity}
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default Mobilemenu;
