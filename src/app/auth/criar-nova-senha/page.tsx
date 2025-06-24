"use client"

import BackButton from "@/components/BackButton"
import Button from "@/components/Button"
import InputText from "@/components/InputText"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function CreateNewPasswordPage() {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-col items-center justify-center relative w-full h-full overflow-hidden">
        <div className="flex flex-col absolute left-5 top-5 gap-5">
          <Image src="/images/logo.svg" alt="Logo da empresa" width={218} height={95} className="hidden md:block" />

          <BackButton onClick={() => router.push("/auth/codigo-verificacao")}></BackButton>
        </div>

        <div className="absolute -right-52 -top-40 w-[500px] h-[500px] rounded-full bg-[#F8F9FF]" />
        <div className="absolute -right-2 top-1 w-[400px] h-[400px] rounded-full border-4 border-[#F8F9FF]" />

        <div className="flex flex-col items-center justify-center gap-16 z-50">
          <div className="flex flex-col text-center gap-4 w-[305px]">
            <h1 className="font-outfit font-bold text-customBlue-400 text-[32px]">Crie uma nova senha</h1>
            <span className="font-inter font-medium text-customNeutral-200 text-base">Sua nova senha deve ser diferente da última utilizada.</span>
          </div>

          <div className="flex flex-col items-center justify-center w-75 gap-6">

            <div className="flex flex-col items-center justify-center w-full gap-5">
              <InputText type="text" placeholder="Nova senha" />
              <InputText type="text" placeholder="Confirme a nova senha" />
            </div>

            <Button variant="primary" type="button" onClick={() => router.push("/auth/sucesso")}>Cadastrar nova senha</Button>

          </div>

          <div className="font-inter font-bold text-sm text-customNeutral-300 pt-5">
            Lembrou a senha? <span className="text-customBlue-400 underline cursor-pointer" onClick={() => router.push("/auth/login")}>Acesse aqui</span>
          </div>
        </div>
      </div >
    </>
  )
}