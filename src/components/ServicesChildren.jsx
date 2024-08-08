import PropTypes from "prop-types"

function ServicesChildren({services, text="text-base",border="border-0",width="w-initial",bg ,iconBg}) {
  return (
    <div className="flex justify-center desktop:justify-between tablet:justify-between tablet:w-full tablet:gap-2 items-center m-auto w-[70vw] my-20 flex-wrap gap-8  ">
    {services.map((service, index) => (
      <div
        key={index}
        className={`serviceCard flex  flex-col gap-2 items-center justify-center ${border} border-gray-400 rounded-sm ${width} p-4 cursor-pointer hover:${bg} transition-all duration-[0.5s] ease-in-out`}
      >
        <div className={`serviceIcon h-14 w-14 bg-primaryBlk rounded-full flex justify-center items-center border-[.4em] border-solid border-gray-300 overflow-hidden hover:${iconBg} `}>
          {service.icon}
        </div>
        <span className={`font-medium ${text}`}>{service.feature}</span>
        <span className="text-xs font-normal">{service.pecks}</span>
      </div>
    ))}
  </div>  )
}

ServicesChildren.propTypes = {
    services: PropTypes.array,
    text: PropTypes.string,
    border:PropTypes.string,
    width: PropTypes.string,
    bg:PropTypes.string,
    iconBg: PropTypes.string
}
export default ServicesChildren