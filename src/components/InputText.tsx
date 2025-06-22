"use client";

interface InputProps {
  type?: "email" | "password" | "text"
  placeholder: string
}

export default function InputText({ type, placeholder }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-5 bg-customWhite-100 rounded-[18px] w-full focus:outline-customBlue-400 font-inter font-medium text-customNeutral-300 text-base"
    />
  )
}