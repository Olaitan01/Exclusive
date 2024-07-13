import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";

import ServicesChildren from "./ServicesChildren";
function Services() {
  const services = [
    {
      icon: <TbTruckDelivery color="#ffffff" size={30} className="icon" />,
      feature: "FREE AND FAST DELIVERY",
      pecks: "Free delivery for all orders over $140",
    },
    {
      icon: <RiCustomerServiceLine color="#ffffff" size={30} className="icon"/>,
      feature: "24/7 CUSTOMER SERVICE",
      pecks: "Friendly 24/7 customer support",
    },
    {
      icon: <GoShieldCheck color="#ffffff" size={30} className="icon"/>,
      feature: "MONEY BACK GUARANTEE",
      pecks: "We return money within 30 days",
    },
  ];
  return (
    <div >
    <ServicesChildren services={services}/>
    </div>
  );
}

export default Services;
