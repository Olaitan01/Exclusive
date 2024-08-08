import ViewAllBtn from "./ViewAllBtn";
import jblSpeaker from "../assets/images/Frame 694.png";
function CategoryFlier() {
  return (
    <div className="flex flex-col-reverse desktop:flex-row justify-between items-center w-[90vw] m-auto bg-black p-12 my-10">
      <div className="flex flex-col gap-8">
        <span className="text-[0.8rem] text-lime block">Categories</span>
        <span className="text-2xl desktop:text-5xl font-bold text-primary block w-[60%] overflow-hidden ">
          Enhance Your Music Experience
        </span>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12  rounded-full bg-primary text-center flex flex-col items-center justify-center">
            <span className="font-bold text-[0.8rem]">23</span>
            <span className="text-[0.6rem]">Hours</span>
          </div>
          <div className="h-12 w-12  rounded-full bg-primary text-center flex flex-col items-center justify-center">
            <span className="font-bold text-[0.8rem]">05</span>
            <span className="text-[0.6rem]">Days</span>
          </div>
          <div className="h-12 w-12  rounded-full bg-primary text-center flex flex-col items-center justify-center">
            <span className="font-bold text-[0.8rem]">59</span>
            <span className="text-[0.6rem]">Minutes</span>
          </div>
          <div className="h-12 w-12  rounded-full bg-primary text-center flex flex-col items-center justify-center">
            <span className="font-bold text-[0.8rem]">35</span>
            <span className="text-[0.6rem]">Seconds</span>
          </div>
        </div>
        <ViewAllBtn buttonText="Buy now" bg="bg-lime" m="m-0" borderColor="border-lime" />
      </div>
      <div>
        <img
          src={jblSpeaker}
          alt="JBL speaker"
          className="max-w-full"
        />
      </div>
    </div>
  );
}

export default CategoryFlier;
