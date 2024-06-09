import { useState, useEffect } from "react";
import Gamepad from "../assets/images/Frame 611.png";
import keyboard from "../assets/images/ak-900-01-500x500 1.png";
import GamingMonitor from "../assets/images/g27cq4-500x500 1.png";
import ComfortChair from "../assets/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png";
import GamingLaptop from "../assets/images/ideapad-gaming-3i-01-500x500 1.png";
import GucciBag from "../assets/images/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png";
import ProductListing from "./ProductListing";
import ViewAllBtn from "./ViewAllBtn";
import { FetchData } from "../utilis/FetchData";

function FlashSalesProducts() {
  const [flashProducts, setFlashProducts] = useState([]);

  const imageMap = {
    Gamepad: Gamepad,
    keyboard: keyboard,
    "Gaming-monitor": GamingMonitor,
    "Comfort chair": ComfortChair,
    "Gaming laptop": GamingLaptop,
    "Gucci bag": GucciBag,
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await FetchData("http://localhost:8000/flashProducts");
      setFlashProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="ml-16 pb-10 border-b-2 border-solid border-gray-100">
      <ProductListing products={flashProducts} imageMap={imageMap} />
      <ViewAllBtn />
    </div>
    // <div className=" ml-16 my-10 justify-center w-full">
    //   <div className="flex justify-between items-start gap-4">
    //     {flashProducts.map((flashProduct, index) => (
    //       <div key={index} className="product  w-full cursor-pointer">
    //         <div>
    //           <div className="bg-productBg  relative h-[30vh]  flex items-center justify-center  rounded-md overflow-hidden">
    //             <img
    //               src={imageMap[flashProduct.imageUrl]}
    //               alt={flashProduct.name}
    //               className="max-w-full"
    //             />
    //             <span className="absolute top-2 left-4 rounded-[.5em] bg-buttonColor px-3 py-1 text-primary text-[0.7rem] font-light">
    //               {flashProduct.percentage}
    //             </span>
    //             <div className="absolute top-2 right-4 gap-2 flex flex-col">
    //               <CiHeart className="bg-primary p-[0.5px] rounded-full" />
    //               <IoEyeOutline className="bg-primary p-[0.5px] rounded-full" />
    //             </div>
    //             <AddToCartbtn />
    //           </div>
    //           <div className="py-4 px-2 font-medium flex flex-col gap-1">
    //             <span className=" text-primaryBlk text-sm">
    //               {flashProduct.name}
    //             </span>
    //             <div className="text-[0.8rem] flex gap-2 ">
    //               <span className="text-buttonColor   ">
    //                 ${flashProduct.price}
    //               </span>
    //               <span className="text-gray-400 line-through">
    //                 ${flashProduct.discount}
    //               </span>
    //             </div>
    //             <div className="text-gray-400 text-[0.8rem] flex gap-2">
    //               <img src={fiveStars} alt="Yellow five stars" />
    //               <span>({flashProduct.quantity})</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default FlashSalesProducts;
