import ps5 from "../assets/images/ps5-slim-goedkope-playstation_large 1.png";
import womenscollection from "../assets/images/attractive-woman-wearing-hat-posing-black-background_1-removebg-preview.png";
import speaker from "../assets/images/Frame 707.png";
import perfume from "../assets/images/Frame 706.png";
function ArrivalGrid() {
  const buttonStyle = {
    cursor: "pointer",
    borderBottom: "2px solid #ffffff ",
    width: "5rem",
  };
  const textStyle = {
    position: "absolute",
    bottom: "2em",
    color: "#ffffff",
    left: "1em",
    display: "flex", // Corrected from "flex"
    flexDirection: "column", // Corrected from "flex-col"
    gap: ".4em", // Changed from "flexGap"
  };

  return (
    <div className=" w-[90vw] m-auto flex flex-col desktop:flex-row justify-between items-stretch gap-4 my-4">
      <div className=" bg-primaryBlk w-full  justify-center relative">
        <div>
          <img src={ps5} alt="playstation 5" className="object-fit max-w-full" />
        </div>
        <div style={textStyle}>
          <p className="font-medium text-2xl">PlayStation 5</p>
          <p className="font-light text-sm w-60">
            Black and White version of the PS5 coming out on sale.
          </p>
          <button style={buttonStyle}>Shop Now</button>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center w-full ">
        <div className="bg-[#0D0D0D]  justify-center relative w-full ">
          <div>
            <img
              src={womenscollection}
              alt="womens collection"
              className="object-fit max-w-full"
            />
          </div>
          <div style={textStyle}>
            <p className="font-medium text-2xl">Women&apos;s Collections</p>
            <p className="font-light text-sm w-60">
              Featured woman collection that give you another vibe
            </p>
            <button style={buttonStyle}>Shop Now</button>
          </div>
        </div>
        <div className="flex flex-col desktop:flex-row tablet:flex-row gap-4 desktop:gap-2 tablet:gap-2  items-center ">
          <div className="bg-[#0D0D0D]  justify-center relative w-full">
            <div>
              <img
                src={speaker}
                alt="speaker"
                className="object-fit max-w-full"
              />
            </div>
            <div style={textStyle}>
              <p className="font-medium text-2xl"> Speakers</p>
              <p className="font-light text-sm w-60">
                Amazon Wireless Speakers
              </p>
              <button style={buttonStyle}>Shop Now</button>
            </div>
          </div>
          <div className="bg-[#0D0D0D]  justify-center relative w-full">
            <div>
              <img
                src={perfume}
                alt="perfume"
                className="object-fit max-w-full"
              />
            </div>
            <div style={textStyle}>
              <p className="font-medium text-2xl">Perfume</p>
              <p className="font-light text-sm w-60">GUCCI INTENSE OUD EDP</p>
              <button style={buttonStyle}>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArrivalGrid;
