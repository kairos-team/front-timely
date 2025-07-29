"use client";

interface InputProps {
  type?: "email" | "password" | "text";
  value?: string;
  disabled?: boolean;
  placeholder: string;
}

export default function InputText({ type, value, disabled = false , placeholder }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      className="p-5 bg-customWhite-100 rounded-[18px] w-full focus:outline-customBlue-400 font-inter font-medium text-customNeutral-300 text-base"
    />
  )
}