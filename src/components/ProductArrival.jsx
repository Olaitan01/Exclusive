import SectionHeader from "./SectionHeader";
import ArrivalGrid from "./ArrivalGrid";
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
      <ArrivalGrid />
    </div>
  );
}

export default ProductArrival;
