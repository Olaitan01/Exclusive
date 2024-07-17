import img1 from "../assets/images/Frame 874.png";
import img2 from "../assets/images/Frame 875.png";
import img3 from "../assets/images/Frame 876.png";

import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: false,
          },
        }}
        modules={[Pagination]}
        loop={true}
      >
        {teamDetails.map((detail, index) => (
          <SwiperSlide key={index} className="mySwiper flex flex-col gap-2 ">
            <div>
              <div>
                <img
                  src={detail.img}
                  alt={detail.name}
                  className="object-fill  max-w-[100%] w-full"
                />
              </div>
              <div>
                <span className="text-2xl font-medium leading-none">
                  {detail.name}
                </span>
              </div>
              <div className="text-sm">{detail.role}</div>
              <div className="flex gap-4">
                <CiTwitter className="cursor-pointer" />
                <IoLogoInstagram className="cursor-pointer" />
                <RiLinkedinLine className="cursor-pointer" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Team;
