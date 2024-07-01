import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//initial state of cart
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );

      //if index/item had already been added, increase quanitity instead
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        //toast/toastify is a cute pop up info
        toast.info("increased product quantity", {
          position: "bottom-left",
        });

        //if index/item hadn't been added or is less that zero, add the item to the cart
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        state.cartTotalQuantity += 1;
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const { cartTotalQuantity } = initialState;
export default cartSlice.reducer;
