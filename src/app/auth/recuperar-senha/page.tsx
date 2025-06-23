"use client"

import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function PasswordRecoveryPage() {
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

        <div className="flex flex-col items-center justify-center gap-20 z-50">
          <div className="flex flex-col text-center gap-4 w-[345px]">
            <h1 className="font-outfit font-bold text-customBlue-400 text-[32px]">Esqueceu a senha?</h1>
            <span className="font-inter font-medium text-customNeutral-200">Não se preocupe! Isso acontece. Por favor, insira o e-mail vinculado a sua conta.</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 w-75">
            <InputText type="email" placeholder="Insira o seu e-mail" />
            <Button variant="primary" type="button" onClick={() => console.log("Codigo do e-mail")}>Enviar Código</Button>
          </div>

          <div className="flex text-center font-inter font-bold text-sm text-customNeutral-300">
            Lembrou a senha? <span className="text-customBlue-400 underline cursor-pointer" onClick={() => router.push("/auth/login")}>Acesse aqui</span>
          </div>
        </div>
      </div >
    </>
  )
}