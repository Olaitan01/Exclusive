import data from "/src/json/db.json";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import dogsFood from "../assets/images/Frame 604 (1).png";
import camera from "../assets/images/Frame 604.png";
import laptop from "../assets/images/ideapad-gaming-3i-01-500x500 1.png";
import curology from "../assets/images/curology-j7pKVQrTUsM-unsplash 1.png";
import kidsCar from "../assets/images/Frame 608.png";
import jacket from "../assets/images/Frame 608 (3).png";
import boots from "../assets/images/Frame 608 (1).png";
import pads from "../assets/images/Frame 608 (2).png";
import GucciBag from "../assets/images/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png";
import RainCoat from "../assets/images/Frame 605.png";
import CPUCooler from "../assets/images/Frame 610.png";
import BookShelf from "../assets/images/Frame 612.png";
import GamingLaptop from "../assets/images/ideapad-gaming-3i-01-500x500 1.png";
import Gamepad from "../assets/images/Frame 611.png";
import keyboard from "../assets/images/ak-900-01-500x500 1.png";
import GamingMonitor from "../assets/images/g27cq4-500x500 1.png";
import ComfortChair from "../assets/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png";

function Search() {
  const [searchItem, setSearchItem] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const Searchstyle = useRef();
  // Combine all products from different categories
  const allProducts = [...data.products.Products];

  // Filter products based on search input
  const filteredProducts = allProducts.filter((val) => {
    if (searchItem === "") {
      ("");
    } else if (val.name.toLowerCase().includes(searchItem.toLowerCase())) {
      return val;
    }
    return null;
  });

  //Hanlde input focus and change bg of the list
  const handleFocus = () => {
    setIsFocused(true);
  };

  const imageMap = {
    "Dog Food": dogsFood,
    "CANON Camera": camera,
    "Asus Laptop": laptop,
    "Curology product": curology,
    "Kids Car": kidsCar,
    Boots: boots,
    pad: pads,
    Jacket: jacket,
    "Rain Coat": RainCoat,
    "Gucci Bag": GucciBag,
    "CPU Cooler": CPUCooler,
    "Small BookShelf": BookShelf,
    "Gaming laptop": GamingLaptop,
    Gamepad: Gamepad,
    keyboard: keyboard,
    "Gaming-monitor": GamingMonitor,
    "Comfort chair": ComfortChair,
    "Gucci bag": GucciBag,
  };

  return (
    <div>
      <div className="inline-block relative ">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="desktop:block hidden w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-[#A0A3BD] ring-1 ring-inset ring-[#D9DBE9] bg-[#EFF0F6] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#D9DBE9] sm:text-sm sm:leading-6 font-light"
          onChange={(event) => {
            setSearchItem(event.target.value);
          }}
          onFocus={handleFocus}
          value={searchItem}
        />
        <BsSearch
          color="#000000"
          className="desktop:absolute top-1/4 right-2"
        />
      </div>
      {isFocused && searchItem && (
        <div
          ref={Searchstyle}
          className="bg-productBg flex flex-col gap-4   p-8 absolute  right-4 w-[40%] rounded-sm  "
        >
          {filteredProducts.map((val, index) => (
            <div key={index}>
              <ul className="flex justify-between items-center text-sm cursor-pointer hover:bg-red-50">
                <li>
                  <img src={imageMap[val.imageUrl]} alt="" className="w-10" />
                </li>
                <li>{val.name}</li>
                <li>${val.price}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
