import PropTypes from "prop-types";

function ViewAllBtn({
  px = "px-7",
  buttonText = "View All Products",
  bg = "bg-buttonColor",
  m = "m-auto",
}) {
  return (
    <div>
      <button
        className={`${px} flex ${m} ${bg}  text-primary rounded-md py-2 text-center`}
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
};

export default ViewAllBtn;
