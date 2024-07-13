import img1 from "../assets/images/Frame 874.png";
import img2 from "../assets/images/Frame 875.png";
import img3 from "../assets/images/Frame 876.png";

import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
function Team() {
  const teamDetails = [
    {
      img: img1,
      name: "Tom Cruise",
      role: "Founder & Chairman",
    },
    {
      img: img2,
      name: "Emma Watson",
      role: "Managing Director",
    },
    {
      img: img3,
      name: "Will Smith",
      role: "  product designer",
    },
  ];

  return (
    <div className="flex justify-center gap-10 items-center my-[8em]">
      {teamDetails.map((detail, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div>
            <img src={detail.img} alt={detail.name} />
          </div>
          <div>
            <span className="text-2xl font-medium leading-none">{detail.name}</span>
          </div>
          <div className="text-sm">{detail.role}</div>
          <div className="flex gap-4">
            <CiTwitter className="cursor-pointer" />
            <IoLogoInstagram className="cursor-pointer" />
            <RiLinkedinLine className="cursor-pointer"/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
