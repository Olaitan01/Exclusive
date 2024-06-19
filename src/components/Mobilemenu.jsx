import { GoHome } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
function Mobilemenu() {


  return (
    <div className="flex items-center justify-between w-full bg-primary bottom-0 fixed p-6 desktop:hidden">
      <div>
        <GoHome size={25}  />
      </div>
      <div>
        <GoSearch size={25} />
      </div>
      <div>
        <GoHeart size={25} />
      </div>
      <div>
        <IoCartOutline size={25} />
      </div>
    </div>
  );
}

export default Mobilemenu;
