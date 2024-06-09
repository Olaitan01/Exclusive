import Hero from "../components/Hero";
import SaleCountdown from "../components/SaleCountdown";
import FlashSalesProducts from "../components/FlashSalesProducts";
import Category from "../components/Category";
const HomePage = () => {
  return (
    <>
      <Hero />
      <SaleCountdown />
      <FlashSalesProducts />
      <Category />
    </>
  );
};

export default HomePage;
