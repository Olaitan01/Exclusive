import { createSlice } from "@reduxjs/toolkit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//initial state of cart
const initialState = {
  //localstorage for the cartItems: when browser is refreshed the cart doesn't return to zero
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  productDetails: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );

      console.log(itemIndex)
      //if index/item had already been added, increase quanitity instead
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        <ToastContainer
          limit={3}
          toastClassName={toast.info(
            `increased ${state.cartItems[itemIndex].name} product quantity`,
            {
              position: "bottom-left",
              autoClose: 500,
            }
          )}
        />;

        //if index/item hadn't been added or is less that zero, add the item to the cart
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        state.cartTotalQuantity += 1;
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
          autoClose: 500,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.error(`${action.payload.name} removed from cart`, {
        position: "bottom-left",
        autoClose: 500,
      });
    },
    decreamentCartItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info(`decreased ${action.payload.name} from cart quantity`, {
          position: "bottom-left",
          autoClose: 500,
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        toast.error(`${action.payload.name} removed from cart`, {
          position: "bottom-left",
          autoClose: 500,
        });
      }
    },
    getTotal(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    productDetails(state, action) {
      const itemIndex = state.productDetails.findIndex(
        (item) => item.name === action.payload.name
      );

      if (itemIndex > 0) {
        state.productDetails.pop(itemIndex);
      } else if (itemIndex < 0) {
        state.productDetails.push(action.payload);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreamentCartItem,
  getTotal,
  productDetails,
} = cartSlice.actions;
export const { cartTotalQuantity } = initialState;
export default cartSlice.reducer;
