import SectionHeader from "./SectionHeader";
import phone from "../assets/images/Category-CellPhone.png";
import smartwatch from "../assets/images/Category-SmartWatch.png";
import camera from "../assets/images/Category-Camera.png";
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
      imgUrl:smartwatch ,
    },
    {
      productName: "Camera",
      imgUrl: camera,
    },
    {
      productName: "Headphones",
      imgUrl: headphone ,
    },
    {
      productName: "Gaming",
      imgUrl: gamepad
    },
  ];

  return (
    <>
      <SectionHeader
        headerTitle="Browse By Category"
        title="Categories"
        marginTop="mt-8"
        isFlashSales={true}
      />
      <div className="flex align-center  w-[90vw] m-auto text-center items-stretch justify-between my-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col  justify-center align-center w-[10%] p-4    border-4 border-gray-100 border-solid rounded-md">
            <img src={category.imgUrl} alt={category.productName} className="max-w-full"/>
            <span>{category.productName}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
