import PropTypes from "prop-types"

function CategoryChildren({categories}) {
    return (
        <div>
         
          <div className="flex flex-wrap desktop:flex-nowrap  desktop:gap-0 gap-8 justify-center text-center items-stretch desktop:justify-between my-8 ">
            {categories.map((category, index) => (
              <div
                key={index}
                className="cursor-pointer hover:bg-buttonColor hover:text-primary flex flex-col  justify-center align-center desktop:w-[160px]  p-2    border-2 border-gray-400 border-solid rounded-md"
              >
                <img
                  src={category.imgUrl}
                  alt={category.productName}
                  className="max-w-full w-20 object-fill m-auto"
                />
                <span className="text-sm">{category.productName}</span>
              </div>
            ))}
          </div>
        </div>
      );
}

CategoryChildren.propTypes = {
    categories: PropTypes.array
}
export default CategoryChildren