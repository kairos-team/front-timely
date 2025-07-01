"use client"

import BottomMenu from "@/components/dashboard/BottomMenu";
import ProgressCircle from "@/components/dashboard/ProgressCircle";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiOutlineChevronRight } from "react-icons/hi";


export default function DashboardPage() {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-col w-full h-full gap-8 overflow-x-hidden px-5 pt-5 pb-6">
        <div className="flex items-start justify-between">
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-customNeutral-200 bg-[#FBFBFB] hover:bg-gray-100 cursor-pointer">
            <svg width={24} height={24} fill="currentColor"><use href="/icons/bell.svg" /></svg>
          </button>
          <div className="text-end font-inter font-normal text-sm text-customNeutral-200">
            Boas-vindas,<br />
            <span className="font-outfit font-bold text-customBlue-400 text-xl">Julia Noleto!</span>
          </div>
        </div>

        <div className="w-full h-42 items-center justify-center bg-customBlue-400 rounded-3xl ">
          <div className="w-[90%] max-w-md min-h-42 bg-customBlue-400 rounded-3xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="text-left font-inter font-normal text-lg text-[#FFF9EB] w-2/3 leading-tight">
              Ótimo, você já atendeu boa parte dos pacientes!
            </div>
            <ProgressCircle progress={82} />
          </div>
        </div>

        <div className="flex flex-col w-full h-full gap-4 relative">
          <span className="flex font-inter font-bold text-customBlue-400 text-lg text-start">Resumo do Dia</span>
          <div className="flex flex-row w-full gap-5">
            <div className="flex flex-col w-full justify-between gap-5 z-10">
              <div className="flex flex-col w-full min-h-25 border border-customBlue-400 bg-[#FFFFFF] rounded-[20px] relative">
                <div className="flex flex-row absolute mt-2.5 right-3">
                  <button className="self-end w-[19px] h-[19px] flex items-center justify-center border-[0.46px] border-customBlue-400 bg-customBlue-300 rounded-[5px] cursor-pointer" onClick={() => router.push("")}>
                    <HiOutlineChevronRight size={11} color="#233267" />
                  </button>
                </div>

                <div className="flex flex-col text-center pb-3 pt-3 gap-1.5 font-inter font-bold text-xs text-customNeutral-300">
                  <span>Próximo <br />atendimento</span>
                  <span className="font-normal text-customNeutral-200">Maria Silva <br />15.00 - 15.30</span>
                </div>
              </div>

              <div className="flex w-full min-h-[195px] bg-[#F0F9FF] rounded-[22px] p-4 relative overflow-hidden">
                <div className="flex flex-col justify-between z-10">
                  <span className="flex text-start font-inter font-medium text-sm text-[#343434] leading-tight">Relatórios de
                    Atendimento</span>
                </div>

                <Image src="/images/girl.svg" alt="Garota do Atendimento" width={192} height={192} className="absolute bottom-0 right-0 z-0"></Image>
              </div>
            </div>

            <div className="flex flex-col w-full gap-5">
              <div className="flex flex-col w-full min-h-[195px] bg-[#FFE9E9] rounded-[22px] px-5 py-2 relative overflow-hidden">
                <div className="flex flex-row items-center w-28 gap-2.5 z-10 text-center">
                  <div className="font-outfit font-bold text-[40px]">24</div>
                  <div className="flex flex-col gap-2 font-inter font-bold text-xs text-customNeutral-200">
                    <span>
                      Segunda
                    </span>
                    <span>
                      Jan 2025
                    </span>
                  </div>
                </div>

                <div className="flex text-start font-inter font-normal text-[10px] text-customNeutral-200">
                  8 atendimentos
                  previstos
                </div>

                <Image src="/images/boy.svg" alt="Garota do Atendimento" width={192} height={192} className="absolute bottom-0 right-0 z-0"></Image>
              </div>

              <div className="flex flex-col w-full justify-center items-center min-h-25 bg-[#1D1D1D] rounded-[20px] font-inter text-[#FFFFFF]">
                <div className="flex flex-col items-start text-left gap-2.5">
                  <span className="font-medium text-xs cursor-pointer">Ver mais</span>
                  <span className="font-normal text-[10px] text-left">+7 atendimentos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BottomMenu/>

      </div>
    </>
  )
}