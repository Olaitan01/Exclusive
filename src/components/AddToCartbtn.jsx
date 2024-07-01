import PropTypes from "prop-types";

function AddToCartbtn({ product, onAddToCart }) {

  const addCartBtn = (event) => {
    event.stopPropagation();
    onAddToCart(product);
  };

  return (
    <>
      <button
        className="addToCart w-full bg-primaryBlk text-cnter absolute -bottom-10 text-primary font-normal text-sm py-2"
        onClick={addCartBtn}
      >
        Add To Cart
      </button>
    </>
  );
}

AddToCartbtn.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
export default AddToCartbtn;
