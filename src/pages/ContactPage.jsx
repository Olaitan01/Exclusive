import { NavLink } from "react-router-dom";

import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
function ContactPage() {
  return (
    <div className="w-[90vw] mx-auto mb-[8em]">
      <div className="flex  gap-2 items-center my-8 text-xs">
        <span className="text-gray-300">
          <NavLink to={"/"}>Home</NavLink>
        </span>
        <span className="text-gray-300">/</span>
        <span className="text-primaryBlk">
          <NavLink to="/ContactPage">Contact</NavLink>
        </span>
      </div>

      <div className="flex flex-col-reverse desktop:flex-row tablet:flex-row desktop:gap-[8em] tablet:gap-[8em] gap-[2em] ">
        <div className="flex flex-col gap-10  p-8 shadow-lg shadow-slate-300">
          <div className="flex flex-col gap-4">
            <div className="flex  gap-2 items-center">
              <IoCallOutline
                size={30}
                color="#ffffff"
                className="border-2 border-solid border-buttonColor bg-buttonColor h-8 w-8 rounded-full p-1"
              />
              <span className="text-sm font-semibold">Call To Us</span>
            </div>
            <span className="text-xs">
              we are available 24/7, 7 days a week
            </span>
            <span className="text-xs">Phone: +8801611112222</span>
          </div>
          <hr className="border-[1px] border-gray-400" />
          <div className="flex flex-col gap-4">
            <div className="flex  gap-2 items-center">
              <CiMail
                size={30}
                color="#ffffff"
                className="border-2 border-solid border-buttonColor bg-buttonColor h-8 w-8 rounded-full p-1"
              />
              <span className="text-sm font-semibold">Write To Us</span>
            </div>
            <span className="text-xs">
              Fill out our form and we will contact you within 24 hours.
            </span>
            <span className="text-xs">Emails: customer@exclusive.com</span>
            <span className="text-xs">Emails: support@exclusive.com</span>
          </div>
        </div>

        <div className="flex flex-col gap-8  drop-shadow-sm shadow-slate-300">
          <div className="flex flex-col desktop:flex-row tablet:flex-row  gap-4 desktop:gap-6 tablet:gap-6 justify-between items-center w-full">
            <input
              type="text"
              placeholder="Your Name"
              className=" bg-productBg placeholder:font-normal placeholder:text-sm placeholder:p-1 rounded-sm w-full desktop:w-60 tablet:w-60 p-2"
              required
            />
            <input
              type="Email"
              placeholder="Your Email"
              className=" bg-productBg placeholder:font-normal placeholder:text-sm placeholder:p-2 rounded-sm w-full desktop:w-60 tablet:w-60 p-2 "
            />
            <input
              type="number"
              placeholder="Your Phone"
              className=" bg-productBg placeholder:font-normal placeholder:text-sm placeholder:p-2 rounded-sm w-full desktop:w-60 tablet:w-60 p-2"
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              className="w-full h-60 p-2 box-border resize-none rounded-sm bg-productBg"
            ></textarea>{" "}
          </div>
          <div className="flex justify-end">
            <button className="bg-buttonColor w-40 rounded-sm p-2 text-primary ">
              Send Message
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
