"use client";

import { BiChevronLeft } from "react-icons/bi";


interface BackButtonProps {
  type?: "button";
  onClick: () => void
}

export default function BackButton({ type = "button", onClick }: BackButtonProps) {
  return (
    <button className={`self-start w-10 h-10 flex items-center justify-center border border-customGray-300 rounded-xl cursor-pointer`} type={type} onClick={onClick}>
      <BiChevronLeft size={30} color="#233267" />
    </button>
  );
}
