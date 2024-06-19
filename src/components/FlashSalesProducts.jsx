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
    const fetchProducts = async() => {
      const data = await FetchData("http://localhost:8000/flashSales");
      setFlashProducts(data.flashProducts);
    };
  

    fetchProducts();
  }, []);

  return (
    <div className="desktop:ml-16 desktop:pb-10 p-6 desktop:p-0  border-b-2 border-solid border-gray-100 overflow-hidden">
      <ProductListing products={flashProducts} imageMap={imageMap}  flex="flex-wrap"   />
      <ViewAllBtn />
    </div>
    
  );
}

export default FlashSalesProducts;
