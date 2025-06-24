"use client"

import BackButton from "@/components/BackButton"
import Button from "@/components/Button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function SuccessPage() {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-col items-center justify-center relative w-full h-full overflow-hidden">
        <div className="flex flex-col absolute left-5 top-5 gap-5">
          <Image src="/images/logo.svg" alt="Logo da empresa" width={218} height={95} className="hidden md:block" />

          <BackButton onClick={() => router.push("/auth/login")}></BackButton>
        </div>

        <div className="absolute -right-52 -top-40 w-[500px] h-[500px] rounded-full bg-[#F8F9FF]" />
        <div className="absolute -right-2 top-1 w-[400px] h-[400px] rounded-full border-4 border-[#F8F9FF]" />


        <Image src={"/images/success.svg"} alt="Imagem de sucesso" width={430} height={260} className="z-50" />

        <div className="flex flex-col items-center justify-center gap-14 z-50">
          <div className="flex flex-col text-center gap-4 w-[305px]">
            <h1 className="font-outfit font-bold text-customBlue-400 text-[32px]">Senha Alterada!</h1>
            <span className="font-inter font-medium text-customNeutral-200 text-base">Sua senha foi modificada com sucesso.</span>
          </div>

          <div className="w-75">
            <Button variant="primary" type="button" onClick={() => router.push("/")}>Voltar para o Início</Button>
          </div>
        </div>
      </div>
    </>
  )
}