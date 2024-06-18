import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";import apple from "../assets/images/1200px-Apple_gray_logo 1.png";
import iPhone from "../assets/images/hero_endframe__cvklg0xk3w6e_large 2.png";
function Hero() {
  return (
    <div className="flex items-top justify-between m-auto  w-[90vw] gap-8">
      <div className="border-r-2 border-solid border-gray-100 hidden desktop:block">
        <ul className="flex flex-col gap-4 w-60 pt-4 pr-2">
          <li className="flex  items-center justify-between cursor-pointer ">
            Woman&apos;s Fashion <MdOutlineKeyboardArrowRight size={20} />{" "}
          </li>
          <li className="flex items-center justify-between cursor-pointer">
            Men&apos;s Fashion <MdOutlineKeyboardArrowRight size={20} />{" "}
          </li>
          <li className="cursor-pointer">Electronics</li>
          <li className="cursor-pointer">Home & Lifestyle</li>
          <li className="cursor-pointer">Medicine</li>
          <li className="cursor-pointer ">Sports & Outdoor</li>
          <li className="cursor-pointer">Baby&apos;s Toys </li>
          <li className="cursor-pointer">Groceries & Pets</li>
          <li className="cursor-pointer">Health & Beeauty</li>
        </ul>
      </div>
      <div className="flex items-center justify-between bg-black text-[#ffffff] p-4 desktop:px-8 mt-6">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-8">
            <img src={apple} alt="iPhone Apple logo" className="w-max" />
            <span className="text-xs desktop:text-sm font-light">iPhone 14 Series</span>
          </div>
          <p className=" text-2xl desktop:text-5xl leading-[1.2em] font-bold desktop:w-[60%] overflow-hidden">
            Up to 10% Off Voucher
          </p>

          <button className="flex  items-center cursor-pointer">
            <span className="font-light border-b-[0.1px] border-solid border-[#ffffff]">Shop Now</span>
            <GoArrowRight color="#ffffff" className="ml-4"/>
          </button>
        </div>
        <div>
          <img src={iPhone} alt="iphone ads" className="w-full " />
        </div>
      </div>
    </div>
  );
}

export default Hero;
