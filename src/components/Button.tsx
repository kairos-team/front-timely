"use client";

import { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  type?: "submit" | "button" | "reset";
  children: ReactNode;
  onClick: () => void
}

export default function Button({ variant, children, type = "button", onClick }: ButtonProps) {
  const variants = {
    primary: "bg-customBlue-400 text-customWhite-100",
    secondary: "bg-customWhite-100 text-customGray-300"
  }
  return (
    <button className={`${variants[variant]} py-3.5 font-outfit w-full text-base rounded-xl cursor-pointer font-medium`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
