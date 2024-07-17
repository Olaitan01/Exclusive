import sideImage from "../assets/images/Side Image.png";

function AboutHero() {
  return (
    <div className="flex flex-col-reverse gap-8 desktop:flex-row justify-between items-center my-4">
      <div>
        <h1 className="desktop:text-5xl text-xl font-semibold pb-4 desktop:pb-6">Our Story</h1>
        <p className="desktop:text-lg font-normal pb-4 desktop:w-[70.5%] text-justify leading-6">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.{" "}
        </p>
        <p className="desktop:text-lg font-normal pb-4 desktop:w-[70.5%] text-justify leading-6 ">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <div className="w-full">
        <img
          src={sideImage}
          alt="Two girls excited on their phone with a shopping bag"
          className="w-full max-w-full object-fill"
        />
      </div>
    </div>
  );
}

export default AboutHero;
