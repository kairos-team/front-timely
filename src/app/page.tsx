"use client"

import Button from "@/components/Button";
// import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Page() {
  const router = useRouter()
  return (
    <>
      <div className="w-75 h-full flex flex-col gap-14 items-center justify-center my-auto">
        {/* <Image src="/images/logo.svg" alt="Logo da empresa" width={293.27} height={128} /> Precisa mudar a logo*/}

        <div className="flex flex-col w-full gap-5">
          <Button type="button" variant="primary" onClick={() => router.push("/auth/login")}>
            Acessar conta
          </Button>
          <Button type="button" variant="secondary" onClick={() => router.push("/auth/registro")}>
            Criar conta
          </Button>
        </div>

        <div className="w-full text-center">
          <span className="text-sm font-light font-league-spartan text-[#070707] max-w-44">Para continuar, leia nossa <br /><span className="underline cursor-pointer">Política de Privacidade.</span></span>
        </div>
      </div>
    </>
  );
}