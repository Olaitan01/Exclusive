
function ViewAllBtn({ px = 'px-7' }) {
  return (
    <div>
      <button
        className={`${px} flex m-auto bg-buttonColor text-primary rounded-md py-2 text-center`}
      >
        View All Products
      </button>
    </div>
  );
}



export default ViewAllBtn;
