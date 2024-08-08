import { useState, useEffect } from "react";
import imageMap from "./ImageMap";
import ProductListing from "./ProductListing";
import ViewAllBtn from "./ViewAllBtn";
import { FetchData } from "../utilis/FetchData";

function FlashSalesProducts() {
  const [flashProducts, setFlashProducts] = useState([]);

  const flashProductsApi = "/api/flashSales";
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await FetchData(flashProductsApi);
      setFlashProducts(data.flashProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="desktop:ml-16 desktop:pb-10 p-6 desktop:p-0  border-b-2 border-solid border-gray-100 overflow-hidden">
      <ProductListing
        products={flashProducts}
        imageMap={imageMap}
        flex="flex-wrap"
      />
      <ViewAllBtn />
    </div>
  );
}

export default FlashSalesProducts;
