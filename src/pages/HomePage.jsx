import Hero from "../components/Hero";
import SaleCountdown from "../components/SaleCountdown";
import FlashSalesProducts from "../components/FlashSalesProducts";
import Category from "../components/Category";
import BestSelling from "../components/BestSelling";
import CategoryFlier from "../components/CategoryFlier";
import Products from "../components/Products";
import ProductArrival from "../components/ProductArrival";
import Services from "../components/Services";
const HomePage = () => {
  return (
    <div >
      <Hero />
      <SaleCountdown />
      <FlashSalesProducts />
      <Category />
      <BestSelling />
      <CategoryFlier />
      <Products />
      <ProductArrival />
      <Services />
      
    </div>
  );
};

export default HomePage;
