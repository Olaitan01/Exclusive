// import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { SlRefresh } from "react-icons/sl";

import fiveStars from "../assets/images/Five star.png";
import imageMap from "../components/ImageMap";

import { addToCart, decreamentCartItem } from "../slice/CartSlice";
import { useState } from "react";

function ProductDetailsPage({ _data }) {

  const { name } = useParams();

  const itemsStyle = {
    border: "2px solid  #f4f4f6 ",
    padding: "1em",
    background: " #f4f4f6 ",
    display: "flex",
    justifyContent: "center",
    items: "center",
  };

  const sizesStlye = {
    border: "1px solid #000000",
    padding: ".2em",
    alignText: "center",
    fontWeight: "400",
    fontSize: ".8rem",
    borderRadius: ".5em",
    width: "2em",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  };

  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addToCart(item));

  };

  const [isQuantity, setIsQuantity] = useState(0);

  const incrementItemQuantity = (item) => {
    setIsQuantity(isQuantity + 1);
    dispatch(addToCart(item));
  };

  const decrementItemQuantity = (item) => {
    if (isQuantity === 0) {
      return;
    } else {
      setIsQuantity(isQuantity - 1);
      dispatch(decreamentCartItem(item));
    }
  };

  return (
    <div className="w-[90vw] m-auto my-10 ">
      <div className="flex gap-2 items-center mb-14 text-xs">
        <span className="cursor-pointer">
          <NavLink to={"/"}>Account</NavLink>
        </span>
        <span>/</span>
        <span className="cursor-pointer">
          <NavLink to={"/cart"}>{name}</NavLink>
        </span>
      </div>
      {_data
        .filter((card) => card.name === name)
        .map((item, index) => (
          <div
            key={index}
            className="flex flex-col desktop:flex-row tablet:flex-row ipad:flex-row ipadmini:flex-row desktop:gap-[10em] gap-4 items-start "
          >
            <div>
              <div className="flex flex-col-reverse desktop:flex-row tablet:flex-row  desktop:gap-[6em] gap-4 items-stretch">
                <div className="flex flex-row desktop:flex-col tablet:flex-col gap-6">
                  <div style={itemsStyle}>
                    <img
                      src={imageMap[item.imageUrl]}
                      alt={item.name}
                      className="w-20 desktop:w-40"
                    />
                  </div>
                  <div style={itemsStyle}>
                    <img
                      src={imageMap[item.imageUrl]}
                      alt={item.name}
                      className="w-20 desktop:w-40"
                    />
                  </div>
                  <div style={itemsStyle}>
                    <img
                      src={imageMap[item.imageUrl]}
                      alt={item.name}
                      className="w-20 desktop:w-40"
                    />
                  </div>
                  <div style={itemsStyle}>
                    <img
                      src={imageMap[item.imageUrl]}
                      alt={item.name}
                      className="w-20 desktop:w-40"
                    />
                  </div>
                </div>
                <div className="w-full bg-productBg p-[2em] flex justify-center items-center">
                  <img
                    src={imageMap[item.imageUrl]}
                    alt={item.name}
                    className="desktop:w-[20vw] w-full    "
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-3xl">{item.name}</h1>
              <div className="text-sm font-normal text-gray-400 flex items-center gap-4">
                <img
                  src={fiveStars}
                  alt="five stars review"
                  className="w-20 max-w-full"
                />
                <span>(150 reviews)</span>
                <span>|</span>
                <span className="text-green-300">in stock</span>
              </div>
              <span className="text-xl font-medium">${item.price}.00</span>
              <hr className="border-gray-400 border-[0.8px]" />
              <div>
                <span className="flex items-center gap-4  font-normal text-xl">
                  Colours:{" "}
                  <input
                    type="color"
                    name="color"
                    id=""
                    className="w-4 h-4 rounded-full"
                  />{" "}
                  <input
                    type="color"
                    name="color"
                    id=""
                    className="w-4 h-4 rounded-full"
                  />
                </span>
              </div>
              <div className="">
                <div className="flex items-center gap-4">
                  <span className="font-normal text-xl">Size:</span>
                  <div className="flex gap-4 ">
                    <span style={sizesStlye} className="hover:bg-buttonColor">
                      XS
                    </span>
                    <span style={sizesStlye} className="hover:bg-buttonColor">
                      S
                    </span>
                    <span style={sizesStlye} className="hover:bg-buttonColor">
                      M
                    </span>
                    <span style={sizesStlye} className="hover:bg-buttonColor">
                      L
                    </span>
                    <span style={sizesStlye} className="hover:bg-buttonColor">
                      XL
                    </span>
                  </div>
                </div>
                <div className="flex  items-stretch gap-4 my-4">
                  <div className="border-2 border-gray-400 border-collapse w-28 flex justify-between items-center text-2xl font-bold text-center ">
                    <button
                      className="font-normal border-r-2 border-solid border-gray-400 px-2 w-8 cursor-pointer hover:bg-buttonColor flex items-center justify-center"
                      onClick={() => decrementItemQuantity(item)}
                    >
                      -
                    </button>
                    <span className="w-20">
                      {/* {cart.cartItems?.map((cartItem, index) => (
                        <span key={index}>
                          {cartItem.name == name && cartItem.cartQuantity}
                        </span>
                      ))} */}
                      {isQuantity}
                    </span>
                    <button
                      className=" font-normal border-l-2 border-solid border-gray-400 px-2 w-8 cursor-pointer hover:bg-buttonColor flex justify-center items-center"
                      onClick={() => incrementItemQuantity(item)}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button
                      className="bg-buttonColor  rounded-sm text-center text-primary py-1 w-24 desktop:w-40 font-medium text-xl"
                      onClick={() => addItemToCart(item)}
                    >
                      Buy Now
                    </button>{" "}
                  </div>
                  <div className="flex justify-center items-center">
                    <button>
                      <CiHeart
                        className=" p-[0.5px]  border-2 border-solid border-gray-400 rounded-sm "
                        size={30}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-4 border-2 border-solid border-gray-400 rounded-md my-[1.5em] ">
                  <div className="flex items-center gap-6 p-2">
                    <div>
                      <TbTruckDelivery color="#000000" size={30} />
                    </div>
                    <div className="flex flex-col gap-4">
                      <span>Free Delivery</span>
                      <span className="underline">
                        Enter your postal code for Delivery Availability
                      </span>
                    </div>
                  </div>
                  <hr className="border-gray-400 border-[0.8px]" />

                  <div className="flex items-center gap-6 p-2">
                    <div>
                      <SlRefresh color="#000000" size={30} />
                    </div>
                    <div className="flex flex-col gap-4">
                      <span>Return Delivery</span>
                      <span>
                        Free 30 Days Delivery Returns.{" "}
                        <span className="underline">Details</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductDetailsPage;
ProductDetailsPage.propTypes = {
  _data: PropTypes.array,
};
