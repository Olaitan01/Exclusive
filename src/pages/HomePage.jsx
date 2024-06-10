import Hero from "../components/Hero";
import SaleCountdown from "../components/SaleCountdown";
import FlashSalesProducts from "../components/FlashSalesProducts";
import Category from "../components/Category";
import BestSelling from "../components/BestSelling";
const HomePage = () => {
  return (
    <>
      <Hero />
      <SaleCountdown />
      <FlashSalesProducts />
      <Category />
      <BestSelling/>
    </>
  );
};

export default HomePage;
