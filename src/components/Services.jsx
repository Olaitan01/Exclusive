import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";

function Services() {
  const services = [
    {
      icon: <TbTruckDelivery color="#ffffff" size={30} />,
      feature: "FREE AND FAST DELIVERY",
      pecks: "Free delivery for all orders over $140",
    },
    {
      icon: <RiCustomerServiceLine color="#ffffff" size={30} />,
      feature: "24/7 CUSTOMER SERVICE",
      pecks: "Friendly 24/7 customer support",
    },
    {
      icon: <GoShieldCheck color="#ffffff" size={30} />,
      feature: "MONEY BACK GUARANTEE",
      pecks: "We return money within 30 days",
    },
  ];
  return (
    <div className="flex justify-center desktop:justify-between items-center m-auto w-[70vw] my-20 flex-wrap gap-8 ">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex  flex-col gap-2 items-center justify-center"
        >
          <div className="h-10 w-10 bg-primaryBlk rounded-full flex justify-center items-center border-4 border-solid border-gray-400 overflow-hidden ">
            {service.icon}
          </div>
          <span className="font-medium text-base">{service.feature}</span>
          <span className="text-xs font-normal">{service.pecks}</span>
        </div>
      ))}
    </div>
  );
}

export default Services;
