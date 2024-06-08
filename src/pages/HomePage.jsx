import Hero from "../components/Hero";
import SaleCountdown from "../components/SaleCountdown";
import FlashSalesProducts from "../components/FlashSalesProducts";
const HomePage =()=> {
  return (
    <>
      <Hero />
      <SaleCountdown/>
        <FlashSalesProducts/>
    </>
  );
}

export default HomePage;
