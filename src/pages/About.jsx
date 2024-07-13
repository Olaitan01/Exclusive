import { NavLink } from "react-router-dom";
import AboutHero from "../components/AboutHero";
import Services from "../components/Services";
import ServicesChildren from "../components/ServicesChildren";

import { BiStore } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import Team from "../components/Team";

function About() {
  const services = [
    {
      icon: <BiStore color="#ffffff" size={30} className="icon" />,
      feature: "10.5k",
      pecks: "Sellers active on our site",
    },
    {
      icon: <FaDollarSign color="#ffffff" size={30} className="icon" />,
      feature: "33k",
      pecks: "Monthly Product Sale",
    },
    {
      icon: <RiShoppingBag4Line color="#ffffff" size={30} className="icon" />,
      feature: "45.5k",
      pecks: "Customer active on our site",
    },
    {
      icon: <FaSackDollar color="#ffffff" size={30} className="icon" />,
      feature: "25k",
      pecks: "Annual gross sale in our site",
    },
  ];

  return (
    <div className="w-[90vw] m-auto">
      <div className="flex gap-2 items-center my-8 text-xs">
        <span className="cursor-pointer text-gray-300">
          <NavLink to={"/"}>Home</NavLink>
        </span>
        <span className="text-gray-300">/</span>
        <span className="cursor-pointer">
          <NavLink to={"/about"}>About</NavLink>
        </span>
      </div>

      <div>
        <AboutHero />
        <ServicesChildren
          services={services}
          text="text-3xl"
          border="border-2"
          width="w-60"
          bg="bg-buttonColor"
          iconBg="bg-#ffffff"
        />
        <Team />
        <Services />
      </div>
    </div>
  );
}

export default About;
