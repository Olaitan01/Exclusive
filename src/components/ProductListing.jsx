import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import AddToCartbtn from "./AddToCartbtn";
import fiveStars from "../assets/images/Five star.png";

function ProductListing(prop) {
  return (
    <div className="  my-10 justify-center w-full">
      <div className="flex justify-between items-start gap-6">
        {prop.products.map((flashProduct, index) => (
          <div key={index} className="product  w-full cursor-pointer">
            <div>
              <div className="bg-productBg  relative h-[30vh]  flex items-center justify-center  rounded-md overflow-hidden">
                <img
                  src={prop.imageMap[flashProduct.imageUrl]}
                  alt={flashProduct.name}
                  className="max-w-full"
                />
                <span className="absolute top-2 left-4 rounded-[.5em] bg-buttonColor px-3 py-1 text-primary text-[0.7rem] font-light">
                  {flashProduct.percentage}
                </span>
                <div className="absolute top-2 right-4 gap-2 flex flex-col">
                  <CiHeart className="bg-primary p-[0.5px] rounded-full" />
                  <IoEyeOutline className="bg-primary p-[0.5px] rounded-full" />
                </div>
                <AddToCartbtn />
              </div>
              <div className="py-4 px-2 font-medium flex flex-col gap-1">
                <span className=" text-primaryBlk text-sm">
                  {flashProduct.name}
                </span>
                <div className="text-[0.8rem] flex gap-2 ">
                  <span className="text-buttonColor   ">
                    {flashProduct.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    {flashProduct.discount}
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

export default ProductListing;
