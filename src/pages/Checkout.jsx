import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTotal } from "../slice/CartSlice";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const Navigation = useNavigate();
  const cartTotal = useSelector((state) => state.cart.cartTotalAmount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [cartTotal, dispatch]);

  const publicKey = "pk_test_b29e19ee9aaec577d1abd5330e2dba1413a57cb8";

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const amount = cartTotal;

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      fullName,
      number,
      address,
    },
    publicKey,
    onSuccess: () => Navigation("/cart"),
  };

  const style = {
    input:
      "w-full rounded-md placeholder:text-sm placeholder:text-gray-400 p-1 border-2 border-solid border-gray-400 my-2",
    button: "w-full rounded-sm text-primary bg-buttonColor text-sm p-2 my-10",
  };

  return (
    <div className="w-[40vw] mx-auto my-[6em] ">
      <h1 className="font-semibold text-3xl my-4">Checkout details</h1>
      <div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            placeholder="Full name"
            onChange={(e) => setFullName(e.target.value)}
            className={style.input}
          />
        </div>
        <div>
          <label htmlFor="Email">Email Address</label>
          <input
            type="Email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            className={style.input}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            placeholder="+234"
            onChange={(e) => setNumber(Number(e.target.value))}
            className={style.input}
          />
        </div>
        <div>
          <label htmlFor="">Delivery Address</label>
          <input
            type="text"
            placeholder="delivery address"
            onChange={(e) => setAddress(e.target.value)}
            className={style.input}
          />
        </div>
        <div className="my-2">
          <span className="font-semibold text-2xl">Total: ${cartTotal}</span>
        </div>
      </div>
      <PaystackButton className={style.button} {...componentProps}>
        Make Payment
      </PaystackButton>
    </div>
  );
}

export default Checkout;
