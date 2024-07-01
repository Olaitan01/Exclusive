import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

function RoundedButtons() {
  return (
    <div className="flex gap-4 ">
        <button className="bg-gray-100 rounded-full flex items-center justify-center h-8 w-8"><AiOutlineArrowLeft/></button>
        <button className="bg-gray-100 rounded-full flex items-center justify-center h-8 w-8"><AiOutlineArrowRight/></button>
    </div>
  )
}

export default RoundedButtons