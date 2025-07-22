"use client";

import { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "third";
  type?: "submit" | "button" | "reset";
  children: ReactNode;
  onClick: () => void
}

export default function Button({ variant, children, type = "button", onClick }: ButtonProps) {
  const variants = {
    primary: "bg-customBlue-400 text-customWhite-100",
    secondary: "bg-customWhite-100 text-customNeutral-300",
    third: "bg-customNeutral-50 font-poppins text-[#343434] font-semibold text-[14.42px]"
  }
  return (
    <button className={`${variants[variant]} py-3.5 font-outfit w-full text-base rounded-xl cursor-pointer font-medium`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
