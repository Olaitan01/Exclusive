
import SectionHeader from "./SectionHeader"
import { FetchData } from "../utilis/FetchData"
import ProductListing from "./ProductListing"
import { useState, useEffect } from "react"
import GucciBag from "../assets/images/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png"
import RainCoat from "../assets/images/Frame 605.png"
import CPUCooler from "../assets/images/Frame 610.png"
import BookShelf from "../assets/images/Frame 612.png"
import GamingLaptop from "../assets/images/ideapad-gaming-3i-01-500x500 1.png"
import CanonCamera from "../assets/images/Frame 604.png"
function BestSelling() {
const [isBestSelling, setIsBestSelling] = useState([])

const imageMap = {
    "Rain Coat" : RainCoat,
    "Gucci Bag" : GucciBag,
    "CPU Cooler" : CPUCooler,
    "Small BookShelf": BookShelf,
    "Gaming laptop" : GamingLaptop,
    "CANON Camera": CanonCamera
}

useEffect(()=>{
    const FetchBestSelling= async() =>{
        const data = await FetchData("http://localhost:8000/bestSelling")
        console.log(data.BestSelling[0])
        setIsBestSelling(data.BestSelling)
    }

    FetchBestSelling()
},[])

  return (
    <div className="w-[90vw] m-auto">
        <SectionHeader isFlashSales ={true} headerTitle="Best Selling Products" title="This Month" marginTop="mt-8" isFlashSalesBtn={true}/>
        <ProductListing products={isBestSelling} imageMap={imageMap} display ={"hidden"}/>
    </div>
  )
}

export default BestSelling