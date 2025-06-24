"use client"

import BackButton from "@/components/BackButton"
import Button from "@/components/Button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useRef } from "react"


export default function OTPVerificationPage() {
  const router = useRouter()
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value

    if (value.length === 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1]?.focus()
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center relative w-full h-full overflow-hidden">
        <div className="flex flex-col absolute left-5 top-5 gap-5">
          <Image src="/images/logo.svg" alt="Logo da empresa" width={218} height={95} className="hidden md:block" />

          <BackButton onClick={() => router.push("/auth/recuperar-senha")}></BackButton>
        </div>

        <div className="absolute -right-52 -top-40 w-[500px] h-[500px] rounded-full bg-[#F8F9FF]" />
        <div className="absolute -right-2 top-1 w-[400px] h-[400px] rounded-full border-4 border-[#F8F9FF]" />

        <div className="flex flex-col items-center justify-center gap-16 z-50">
          <div className="flex flex-col text-center gap-4 w-[356px]">
            <h1 className="font-outfit font-bold text-customBlue-400 text-[32px]">Verificação de código</h1>
            <span className="font-inter font-medium text-base text-customNeutral-200">Insira o código de verificação que nós enviamos para o seu e-mail</span>
          </div>

          <div className="flex flex-col items-center justify-center w-75 gap-8">
            <div className="flex flex-row gap-4 w-full h-14 font-urbanist font-bold text-customBlue-400 text-xl">
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  type="text"
                  placeholder=""
                  maxLength={1}
                  ref={(el) => { inputRefs.current[i] = el }}
                  onChange={(e) => handleChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="text-center w-16 rounded-md border border-customBlue-200 bg-[#FFFFFF] placeholder-shown:bg-customNeutral-100 placeholder-shown:border-[#D1D1D1] text-border focus:outline-none" />
              ))}
            </div>

            <Button variant="primary" type="button" onClick={() => router.push("/auth/criar-nova-senha")}>Verificar</Button>
          </div>

          <div className="font-inter font-bold text-customNeutral-300 text-sm">
            Não recebeu o código? <span className="underline text-customBlue-400 cursor-pointer">Reenvie aqui</span>
          </div>
        </div>
      </div>
    </>
  )
}