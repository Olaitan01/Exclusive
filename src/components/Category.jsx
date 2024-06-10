import SectionHeader from "./SectionHeader";
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
    <div className="border-b-2 border-gray-100 border-solid w-[90vw] m-auto mb-4 pb-6">
      <SectionHeader
        headerTitle="Browse By Category"
        title="Categories"
        marginTop="mt-8"
        isFlashSales={true}
      />
      <div className="flex  text-center items-stretch justify-between my-8">
        {categories.map((category, index) => (
          <div key={index} className="cursor-pointer hover:bg-buttonColor hover:text-primary flex flex-col  justify-center align-center desktop:w-[160px] w-full p-2    border-2 border-gray-400 border-solid rounded-md">
            <img src={category.imgUrl} alt={category.productName} className="max-w-full w-20 object-fill m-auto"/>
            <span>{category.productName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
