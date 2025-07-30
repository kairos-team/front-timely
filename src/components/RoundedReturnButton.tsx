import { GoChevronLeft } from "react-icons/go";

interface ReturnButtonProps {
  type?: "button";
  onClick: () => void;
}

export default function RoundedReturnButtton({ type = "button", onClick }: ReturnButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center justify-center w-16 h-16 border border-customGray-380 rounded-full cursor-pointer">
      <GoChevronLeft size={30} color="#343434" />
    </button>
  )
}
