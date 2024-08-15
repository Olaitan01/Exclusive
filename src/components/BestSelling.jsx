import SectionHeader from "./SectionHeader";
import { FetchData } from "../utilis/FetchData";
import ProductListing from "./ProductListing";
import { useState, useEffect } from "react";

import imageMap from "./ImageMap";
function BestSelling() {
  const [isBestSelling, setIsBestSelling] = useState([]);

  const bestSellingApi = import.meta.env.VITE_PRODUCTAPI;
  useEffect(() => {
    const FetchBestSelling = async () => {
      const res = await FetchData(bestSellingApi);

      setIsBestSelling(res[1].bestSelling.BestSelling);
    };

    FetchBestSelling();
  });

  return (
    <div className="w-[90vw] m-auto ">
      <SectionHeader
        isFlashSales={true}
        headerTitle="Best Selling Products"
        title="This Month"
        marginTop="mt-8"
        isFlashSalesBtn={true}
      />
      <ProductListing
        products={isBestSelling}
        imageMap={imageMap}
        display={"hidden"}
        flex="flex-wrap"
      />
    </div>
  );
}

export default BestSelling;
