import SectionHeader from "./SectionHeader";
import CategoryChildren from "./CategoryChildren";

import phone from "../assets/images/Category-CellPhone.png";
import smartwatch from "../assets/images/Category-SmartWatch.png";
import camera from "../assets/images/Category-Camera (1).png";
import computer from "../assets/images/Category-Computer.png";
import gamepad from "../assets/images/Category-Gamepad.png";
import headphone from "../assets/images/Category-Headphone.png";
function Category() {
  const categories = [
    {
      productName: "Phones",
      imgUrl: phone,
    },
    {
      productName: "Computers",
      imgUrl: computer,
    },
    {
      productName: "SmartWatch",
      imgUrl: smartwatch,
    },
    {
      productName: "Camera",
      imgUrl: camera,
    },
    {
      productName: "Headphones",
      imgUrl: headphone,
    },
    {
      productName: "Gaming",
      imgUrl: gamepad,
    },
  ];

  return (
    <div className="border-b-2 border-gray-100 border-solid w-[90vw] m-auto mb-4 pb-6 overflow-hidden">
      <SectionHeader
        headerTitle="Browse By Category"
        title="Categories"
        marginTop="mt-8"
        isFlashSales={true}
      />
      <CategoryChildren categories={categories}/>
    </div>
  );
}

export default Category;
