import { useState, useEffect } from "react"
import SectionHeader from "./SectionHeader"
import ViewAllBtn from "./ViewAllBtn"
import { FetchData } from "../utilis/FetchData"
import ProductListing from "./ProductListing"
import dogsFood from "../assets/images/Frame 604 (1).png"
import camera from "../assets/images/Frame 604.png"
import laptop from "../assets/images/ideapad-gaming-3i-01-500x500 1.png"
import curology from "../assets/images/curology-j7pKVQrTUsM-unsplash 1.png"
import kidsCar from "../assets/images/Frame 608.png" 
import jacket from "../assets/images/Frame 608 (3).png"
 import boots from "../assets/images/Frame 608 (1).png"
 import pads from "../assets/images/Frame 608 (2).png"
function Products() {
const [isProducts, setIsProducts] = useState([])

const imageMap ={
    "Dog Food": dogsFood,
    "CANON Camera": camera,
    "Asus Laptop": laptop,
    "Curology product" : curology,
    "Kids Car" : kidsCar,
    "Boots": boots,
    "pad": pads,
    "Jacket" : jacket

}

useEffect(()=>{
    const fetchProducts=async()=>{
            const data = await FetchData("http://localhost:8000/products")
        
            setIsProducts(data.Products)
    }

    fetchProducts()
},[])

  return (
    <div className="w-[90vw] m-auto">
        <SectionHeader title="Our Products" headerTitle="Explore Our Products" isFlashSales={true} marginTop="mt-8"/>
        <ProductListing products={isProducts} imageMap={imageMap} display="hidden" flex="flex-wrap"/>
        <ViewAllBtn/>
    </div>
  )
}

export default Products