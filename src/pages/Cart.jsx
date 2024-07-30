import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import ViewAllBtn from "../components/ViewAllBtn";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

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
import {
  addToCart,
  decreamentCartItem,
  getTotal,
  removeFromCart,
} from "../slice/CartSlice";
import { useEffect } from "react";

function Cart() {
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

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const removeItem = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const incrementItemQuantity = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const decrementItemQuantity = (cartItem) => {
    dispatch(decreamentCartItem(cartItem));
  };

  return (
    <div className="w-[90vw] m-auto">
      <div className="flex gap-2 items-center my-8 text-xs">
        <span className="cursor-pointer text-gray-300">
          <NavLink to={"/"}>Home</NavLink>
        </span>
        <span className="text-gray-300">/</span>
        <span className="cursor-pointer">
          <NavLink to={"/cart"}>Cart</NavLink>
        </span>
      </div>

      <div className="my-8">
        <div>
          {cart.cartItems.length === 0 ? (
            <div className="flex justify-center flex-col items-center my-[10em] gap-2">
              <p className="text-center text-primaryBlk text-6xl font-extrabold overflow-hidden">
                Your cart is empty
              </p>
              <NavLink to={"/"} style={{ textDecoration: "underline" }}>
                return home
              </NavLink>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center border-2 bg-primary  rounded-md shadow-xl shadow-productBg p-4 text-sm font-medium text-center">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>

              {cart.cartItems?.map((cartItem, index) => (
                <div key={index}>
                  <div className="flex  justify-between items-center my-4 border-2 bg-primary  rounded-md shadow-xl shadow-productBg p-4 text-sm  ">
                    <div className="flex flex-col desktop:flex-row gap-2 desktop:items-center  w-full relative">
                      <img
                        src={imageMap[cartItem.imageUrl]}
                        alt={cartItem.name}
                        className="max-w-full w-10 object-fill"
                      />
                      <div className="flex flex-col gap-2">
                        <span className="text-xs desktop:text-sm text-wrap ">
                          {cartItem.name}
                        </span>
                        <button
                          className="border-2 border-solid border-slate-400 rounded-sm w-20 text-xs font-medium"
                          onClick={() => removeItem(cartItem)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className=" w-full text-left">
                      <span className="text-sm pl-2">${cartItem.price}</span>
                    </div>
                    <div className="flex gap-2 items-center border-[0.5px] border-solid rounded-sm p-2 justify-center  w-40">
                      <span>{cartItem.cartQuantity}</span>
                      <div className="flex flex-col gap-1 ">
                        <button onClick={() => incrementItemQuantity(cartItem)}>
                          <IoIosArrowUp size={10} />
                        </button>
                        <button onClick={() => decrementItemQuantity(cartItem)}>
                          <IoIosArrowDown size={10} />
                        </button>
                      </div>
                    </div>
                    <div className="justify-self-end w-full text-right">
                      <span>${cartItem.price * cartItem.cartQuantity}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center my-8">
                <NavLink to={"/"}>
                  <ViewAllBtn
                    buttonText="Return To Shop"
                    bg="bg-transparent"
                    text="text-primaryBlk"
                    borderColor="border-primaryBlk"
                  />
                </NavLink>
                <ViewAllBtn
                  buttonText="Update Cart"
                  bg="bg-transparent"
                  text="text-primaryBlk"
                  borderColor="border-primaryBlk"
                />
              </div>
              <div className="flex flex-col desktop:flex-row gap-8 justify-between items-start">
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="border-2 border-primaryBlk bg-inherit rounded-sm py-2 text-sm placeholder:text-gray-400 placeholder:text-[1rem] font-light w-60 "
                  />
                  <ViewAllBtn buttonText="Apply Coupon" />
                </div>
                <div className="border-2 border-primaryBlk rounded-md w-full  desktop:w-80 p-4">
                  <h3 className="font-medium py-2">Cart Total</h3>
                  <div className="flex justify-between my-2">
                    <span>Subtotal:</span>
                    <span>${cart.cartTotalAmount}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between my-2">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <hr />
                  <div className="flex justify-between my-2">
                    <span>Total:</span>
                    <span>${cart.cartTotalAmount}</span>
                  </div>
                  <NavLink to={"/checkout"}>
                    {" "}
                    <ViewAllBtn buttonText="Proceed to checkout" />
                  </NavLink>{" "}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
