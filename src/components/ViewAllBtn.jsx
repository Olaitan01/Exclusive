import PropTypes from "prop-types";

function ViewAllBtn({
  px = "px-7",
  buttonText = "View All Products",
  bg = "bg-buttonColor",
  m = "m-auto",
  text = "text-primary",
  border = "border-[0.5px]",
  borderColor = "border-buttonColor",
}) {
  return (
    <div>
      <button
        className={`${px} flex ${m} ${bg} ${text} ${borderColor} ${border} text-xs desktop:text-sm rounded-md py-2 text-center`}
      >
        {buttonText}
      </button>
    </div>
  );
}

ViewAllBtn.propTypes = {
  px: PropTypes.string,
  buttonText: PropTypes.string,
  bg: PropTypes.string,
  m: PropTypes.string,
  text: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
};

export default ViewAllBtn;
