// import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

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

import { addToCart, decreamentCartItem } from "../slice/CartSlice";

function ProductDetailsPage({ _data }) {
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
  const cart = useSelector((state) => state.cart);

  const addItemToCart = (item) => {
    dispatch(addToCart(item));

    // console.log("product added to cart:", product);
  };

  const incrementItemQuantity = (item) => {
    dispatch(addToCart(item));
  };

  const decrementItemQuantity = (item) => {
    dispatch(decreamentCartItem(item));
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
            className="flex flex-col desktop:flex-row gap-[10em] items-start "
          >
            <div>
              <div className="flex gap-[6em] items-stretch">
                <div className="flex flex-col gap-6">
                  <div style={itemsStyle}>
                    <img
                      src={imageMap[item.imageUrl]}
                      alt={item.name}
                      className="w-20"
                    />
                  </div>
                  <div style={itemsStyle}>
                    <img
                      src={imageMap[item.imageUrl]}
                      alt={item.name}
                      className="w-20"
                    />
                  </div>
                  <div style={itemsStyle}>
                    <img
                      src={imageMap[item.imageUrl]}
                      alt={item.name}
                      className="w-20"
                    />
                  </div>
                  <div style={itemsStyle}>
                    <img
                      src={imageMap[item.imageUrl]}
                      alt={item.name}
                      className="w-20"
                    />
                  </div>
                </div>
                <div className="w-full bg-productBg p-[2em] flex justify-center items-center">
                  <img
                    src={imageMap[item.imageUrl]}
                    alt={item.name}
                    className="w-[20vw]   "
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-3xl">{item.name}</h1>
              <div>stars/reviews/in stock</div>
              <span className="text-xl font-medium">${item.price}.00</span>
              <hr />
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
                <div className="flex items-stretch gap-4 my-4">
                  <div className="border-2 border-gray-400 border-collapse w-28 flex justify-between items-center text-2xl font-bold text-center ">
                    <button
                      className="font-normal border-r-2 border-solid border-gray-400 px-2 w-8 cursor-pointer hover:bg-buttonColor flex items-center justify-center"
                      onClick={() => decrementItemQuantity(item)}
                    >
                      -
                    </button>
                    <span className="w-20">
                      {cart.cartItems?.map((cartItem, index) => (
                        <div key={index}>
                          {cartItem.cartQuantity === 0
                            ? 1
                            : cartItem.cartQuantity}
                        </div>
                      ))}
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
                      className="bg-buttonColor  rounded-sm text-center text-primary py-1 w-40 font-medium text-xl"
                      onClick={() => addItemToCart(item)}
                    >
                      Buy Now
                    </button>{" "}
                  </div>
                  <div>heart Emoji</div>
                </div>
                <div>
                  <div>
                    <div></div>
                    <div>
                      <span>Free Delivery</span>
                      <span className="underline">
                        Enter your postal code for Delivery Availability
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div></div>
                    <div>
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
  _data: PropTypes.object,
};
