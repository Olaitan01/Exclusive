import data from "/src/json/db.json";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

function Search() {
  const [searchItem, setSearchItem] = useState("");

  // Combine all products from different categories
  const allProducts = [
    ...data.products.Products,
  ];

  // Filter products based on search input
  const filteredProducts = allProducts.filter((val) => {
    if (searchItem === "") {
      "";
    } else if (val.name.toLowerCase().includes(searchItem.toLowerCase())) {
      return val;
    }
    return null;
  });

  return (
    <div>
      <div className="inline-block relative">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="desktop:block hidden w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-[#A0A3BD] ring-1 ring-inset ring-[#D9DBE9] bg-[#EFF0F6] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#D9DBE9] sm:text-sm sm:leading-6 font-light"
          onChange={(event) => setSearchItem(event.target.value)}
        />
        <BsSearch
          color="#000000"
          className="desktop:absolute top-1/4 right-2"
        />
      </div>
      <div className="">
        {filteredProducts.map((val, index) => (
          <div key={index}>
            <div>{val.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
