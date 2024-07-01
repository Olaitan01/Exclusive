import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import ViewAllBtn from "./ViewAllBtn";
import { FetchData } from "../utilis/FetchData";
import ProductListing from "./ProductListing";
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
function Products() {
  const [isProducts, setIsProducts] = useState([]);

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

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await FetchData("http://localhost:8000/products");

      setIsProducts(data.Products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-[90vw] m-auto">
      <SectionHeader
        title="Our Products"
        headerTitle="Explore Our Products"
        isFlashSales={true}
        marginTop="mt-8"
      />
      <ProductListing
        products={isProducts}
        imageMap={imageMap}
        display="hidden"
        flex="flex-wrap"
      />
      <ViewAllBtn />
    </div>
  );
}

export default Products;
