"use client"

import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center relative w-full h-full overflow-y-auto overflow-x-hidden">
      <Image src="/images/logo.svg" alt="Logo da empresa" width={218} height={95} className="hidden md:block absolute left-5 top-5" />

      <div className="absolute -right-52 -top-40 w-[500px] h-[500px] rounded-full bg-[#F8F9FF]" />
      <div className="absolute -right-2 top-1 w-[400px] h-[400px] rounded-full border-4 border-[#F8F9FF]" />

      <div className="flex flex-col w-75 gap-5 items-center justify-center z-50">
        <div className="flex flex-col w-full gap-5 items-center">
          <h1 className="font-bold text-5xl text-customBlue-400 font-outfit">Acesse aqui</h1>
          <p className="text-2xl font-semibold text-customNeutral-300 text-center">Seja bem-vindo. <br />É ótimo ter você aqui!</p>
        </div>

        <div className="flex flex-col w-full gap-5">
          <InputText type="email" placeholder="E-mail" />
          <div className="flex flex-col w-full gap-1">
            <InputText type="password" placeholder="Digite sua senha" />
            <span className="text-end font-inter font-bold text-sm text-customBlue-400 cursor-pointer">Esqueceu sua senha?</span>
          </div>
        </div>

        <div className="flex flex-col w-full gap-1.5">
          <label className="flex items-center gap-2 relative cursor-pointer">
            <input
              type="checkbox"
              className="peer appearance-none w-5 h-5 rounded-sm border border-[#989494] checked:bg-customGreen-700 checked:border-customGreen-700 focus:ring-0 focus:outline-none cursor-pointer"
            />

            <svg
              className="absolute left-0.5 top-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>

            <span className="text-sm text-[#989494] font-normal font-inter">Permanecer conectado</span>
          </label>

          <Button variant="primary" onClick={() => console.log("Conta criada!")}>
            Acessar conta
          </Button>
        </div>

        <div className="font-inter font-bold text-sm text-customNeutral-300 cursor-pointer pt-5">
          <span onClick={() => router.push("/auth/registro")}>Criar uma nova conta</span>
        </div>
      </div>
    </div>
  )
}
