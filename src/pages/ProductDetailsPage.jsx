// import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

// import { NavLink } from "react-router-dom";
function ProductDetailsPage() {
  //   const cart = useSelector((state) => state.cart);
//   const cart = useSelector((state) => state.cart);

const {name} = useParams()

  return (
    <div className="w-[90vw] m-auto ">
        <h2>{name}</h2>
      {/* {cart.productDetails?.map((details, index) => (
        <div key={index}>
          <div className="flex gap-2 items-center my-8 text-xs">
            <span className="cursor-pointer">
              <NavLink to={"/"}>Account</NavLink>
            </span>
            <span>/</span>
            <span className="cursor-pointer">
              <NavLink to={"/cart"}>{details.name}</NavLink>
            </span>
          </div>
        </div>
      ))} */}

    </div>
  );
}

export default ProductDetailsPage;
