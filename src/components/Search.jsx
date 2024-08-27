import data from "/src/json/db.json";

import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import imageMap from "./ImageMap";

function Search({ handleVisibility, isVisible }) {
  // State to store the user's search query
  const [searchItem, setSearchItem] = useState("");

  // State to track if the search input is focused
  const [isFocused, setIsFocused] = useState(false);

  const Searchstyle = useRef();

  const allProducts = [...data.products.Products];

  // Filter products based on the search term
  const filteredProducts = searchItem
    ? allProducts.filter((val) =>
        val.name.toLowerCase().includes(searchItem.toLowerCase())
      )
    : allProducts;

  // Handle focus on the search input
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Handle product selection from search results
  const handleSearchResultClick = () => {
    setIsFocused(false);
    handleVisibility(isVisible);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="inline-block relative w-full">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-[#A0A3BD] ring-1 ring-inset ring-[#D9DBE9] bg-[#EFF0F6] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#D9DBE9] sm:text-sm sm:leading-6 font-light"
          onChange={(event) => {
            setSearchItem(event.target.value);
          }}
          onFocus={handleFocus}
          value={searchItem}
        />
        <BsSearch color="#000000" className="absolute top-1/4 right-2" />
      </div>
      {isFocused && searchItem && (
        <div
          ref={Searchstyle}
          className="bg-productBg flex flex-col gap-4   p-8 absolute  right-4 w-full desktop:w-[40%] rounded-sm  "
        >
          {filteredProducts.map((val, index) => (
            <div key={index}>
              <NavLink to={`/productDetailsPage/${val.name}`}>
                <ul
                  className="flex justify-between items-center text-sm cursor-pointer hover:bg-red-50"
                  onClick={() => {
                    handleSearchResultClick();
                  }}
                >
                  <li>
                    <img src={imageMap[val.imageUrl]} alt="" className="w-10" />
                  </li>
                  <li>{val.name}</li>
                  <li>${val.price}</li>
                </ul>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;

Search.propTypes = {
  isVisible: PropTypes.bool,
  handleVisibility: PropTypes.func,
};
