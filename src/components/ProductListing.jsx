import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import AddToCartbtn from "./AddToCartbtn";
import fiveStars from "../assets/images/Five star.png";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/CartSlice";
import { NavLink } from "react-router-dom";

function ProductListing({
  products,
  imageMap,
  display = "block",
  flex = "flex-nowrap",
}) {
  const dispatch = useDispatch();
  // const navigate = useNavigate();


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));

    // console.log("product added to cart:", product);
  };

  // const handleProductDetails = (product) => {
  //   dispatch(productDetails(product));
  //   navigate("/productDetailsPage");

  //   // console.log("product added to cart:", product);
  // };

  return (
    <div className="  my-8 justify-center w-full">
      <div
        className={`flex   items-stretch  overflow-hidden desktop:w-full justify-center gap-2 desktop:justify-between  desktop:gap-6 ${flex}`}
      >
        {products.map((flashProduct, index) => (
          <div
            key={flashProduct.id || index}
            className={`product w-[48%] desktop:w-[15%] cursor-pointer `}
          >
            <div>
              <div className="bg-productBg  relative  h-[30vh]  flex items-center justify-center  rounded-md overflow-hidden">
                <NavLink to={`/productDetailsPage/${flashProduct.name}`}>
                <img
                  src={imageMap[flashProduct.imageUrl]}
                  alt={flashProduct.name}
                  className="max-w-full  object-fill p-2"
                  // onClick={() => handleProductDetails(flashProduct)}
                />
                </NavLink>
                <span
                  className={`${display} absolute top-2 left-4 rounded-[.5em] bg-buttonColor px-3 py-1 text-primary text-[0.7rem] font-light`}
                >
                  {flashProduct.percentage}
                </span>
                <div className="absolute top-2 right-4 gap-2 flex flex-col">
                  <CiHeart className="bg-primary p-[0.5px] rounded-full" />
                  <IoEyeOutline className="bg-primary p-[0.5px] rounded-full" />
                </div>
                <AddToCartbtn
                  product={flashProduct}
                  onAddToCart={handleAddToCart}
                />
              </div>
              <div className="py-4 px-2 font-medium flex flex-col gap-1">
                <span className=" text-primaryBlk text-sm">
                  {flashProduct.name}
                </span>
                <div className="text-[0.8rem] flex gap-2 ">
                  <span className="text-buttonColor   ">
                    ${flashProduct.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    ${flashProduct.discount}
                  </span>
                </div>
                <div className="text-gray-400 text-[0.8rem] flex gap-2">
                  <img src={fiveStars} alt="Yellow five stars" />
                  <span>({flashProduct.quantity})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ProductListing.propTypes = {
  products: PropTypes.array.isRequired,
  imageMap: PropTypes.object.isRequired,
  display: PropTypes.string,
  flex: PropTypes.string,
};

export default ProductListing;
