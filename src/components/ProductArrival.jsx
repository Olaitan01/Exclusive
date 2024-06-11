import SectionHeader from "./SectionHeader";
function ProductArrival() {
  return (
    <div>
      <SectionHeader
        title="Featured"
        headerTitle="New Arrival"
        marginTop="mt-8"
        isFlashSales={true}
        display="hidden"
      />
    </div>
  );
}

export default ProductArrival;
