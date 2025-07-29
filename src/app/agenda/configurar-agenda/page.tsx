"use client"

import RoundedReturnButtton from "@/components/RoundedReturnButton";
import { useRouter } from "next/navigation";

export default function CalendarSettingsPage() {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full p-5 gap-10">
        <div className="flex flex-row justify-between w-full">
          <div className="flex">
            <RoundedReturnButtton onClick={() => router.push("/agenda")} />
          </div>

          <div className="flex text-end font-poppins">
            <span className="font-normal text-sm text-customGray-380">Organize seus horários, <br /> <span className="font-semibold text-lg text-customGray-750">Configure sua Agenda</span></span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full gap-2.5">
          <div className="flex w-full text-start text-customNeutral-200">
            Nome da Agenda
          </div>

          <div>
            
          </div>
        </div>
      </div>

    </>
  )
}
