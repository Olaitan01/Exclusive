import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import ViewAllBtn from "./ViewAllBtn";
import { FetchData } from "../utilis/FetchData";
import ProductListing from "./ProductListing";

import imageMap from "./ImageMap";
function Products() {
  const [isProducts, setIsProducts] = useState([]);

  const productApi = import.meta.env.VITE_PRODUCTAPI;
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await FetchData(productApi);

      setIsProducts(res[2].products.Products);
    };

    fetchProducts();
  },[productApi]);

  return (
    <div className=" w-[90vw] m-auto ">
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
