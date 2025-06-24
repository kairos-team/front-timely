"use client"

import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-col items-center justify-center relative w-full h-full overflow-hidden">
        <div className="flex flex-col absolute left-5 top-5 gap-5">
          <Image src="/images/logo.svg" alt="Logo da empresa" width={218} height={95} className="hidden md:block" />

          <BackButton onClick={() => router.push("/")}></BackButton>
        </div>

        <div className="absolute -right-52 -top-40 w-[500px] h-[500px] rounded-full bg-[#F8F9FF]" />
        <div className="absolute -right-2 top-1 w-[400px] h-[400px] rounded-full border-4 border-[#F8F9FF]" />

        <div className="flex flex-col items-center justify-center gap-10 w-full z-50">
          <div className="flex flex-col w-full text-center">
            <h1 className="font-bold text-[32px] text-customBlue-400 font-outfit">Olá! Cadastre-se para começar</h1>
          </div>

          <div className="flex flex-col items-center justify-center w-75 gap-5">
            <InputText type="text" placeholder="Nome Completo" />
            <InputText type="email" placeholder="E-mail" />
            <div className="flex flex-col w-75">
              <InputText type="password" placeholder="Digite sua senha" />
            </div>
            <InputText type="password" placeholder="Confirmação de senha" />
          </div>

          <div className="w-75">
            <Button variant="primary" onClick={() => console.log("Conta criada!")}> Criar Cadastro</Button>
          </div>

          <div className="font-inter font-bold text-sm text-customNeutral-300 pt-5">
            Já tem uma conta? <span className="text-customBlue-400underline cursor-pointer" onClick={() => router.push("/auth/login")}>Acesse aqui</span>
          </div>
        </div>
      </div >
    </>
  );
}