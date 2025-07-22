"use client"

import Button from "@/components/Button";
import BottomMenu from "@/components/dashboard/BottomMenu";
import dayjs from "dayjs";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import "dayjs/locale/pt-br";
import useCalendar from "@/hook/useCalendar";
import { useRouter } from "next/navigation";
import SchedulingDay from "@/components/calendar/SchedulingDay";

dayjs.locale("pt-br");

export default function CalendarPage() {
  const {
    currentMonthLabel,
    currentYearLabel,
    selectDay,
    setSelectDay,
    scrollMonth,
    handleMouseUp,
    handleMouseMove,
    handleMouseLeave,
    handleMouseDown,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    updateMonthFromScroll,
    dayWidth,
    daysContainerRef,
    isDragging,
    visibleDays,
    wasDragged
  } = useCalendar()

  const selectDayObj = dayjs(selectDay)

  const router = useRouter()
  return (
    <>
      <div className="flex flex-col w-full h-full gap-8 overflow-x-hidden px-5 pt-5 pb-6">
        <div className="flex flex-col items-center gap-7 w-full min-h-[269.52px] bg-customBlue-400 rounded-[29.75px] px-[16.23px] pt-9 pb-7.5 font-poppins font-semibold text-customNeutral-50">
          <div className="flex flex-row w-full">
            <button className="flex flex-1 justify-start" onClick={() => scrollMonth(-1)}>
              <HiOutlineChevronLeft size={21.63} color="#FFFFFF" cursor="pointer" />
            </button>
            <span className="text-center capitalize">{currentMonthLabel} - {currentYearLabel}</span>
            <button className="flex flex-1 justify-end" onClick={() => scrollMonth(1)}>
              <HiOutlineChevronRight size={21.63} color="#FFFFFF" cursor="pointer" />
            </button>
          </div>

          <div className="flex justify-center w-81 min-h-[66.7px] overflow-x-hidden overflow-y-auto">
            <div
              ref={daysContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                userSelect: isDragging.current ? "none" : "auto",
                pointerEvents: "auto",
                willChange: "scroll-position"
              }}
              className={`flex gap-2.5 overflow-x-auto whitespace-nowrap no-scrollbar px-2 max-w-[calc(100%-32px)] h-full ${isDragging.current ? "cursor-grabbing" : "cursor-grab"
                }`}
            >
              {visibleDays.map((day, index) => {
                const dayStr = day.format("YYYY-MM-DD");
                const isSelected = selectDay === dayStr;

                return (
                  <div
                    key={`${dayStr}-${index}`}
                    onClick={() => {
                      if (wasDragged.current || !daysContainerRef.current) return;
                      setSelectDay(dayStr);

                      const container = daysContainerRef.current;
                      const rawScroll = index * dayWidth - container.clientWidth / 2 + dayWidth / 2;
                      const scrollTo = Math.max(
                        0,
                        Math.min(rawScroll, container.scrollWidth - container.clientWidth)
                      );

                      container.scrollTo({ left: scrollTo, behavior: "smooth" });

                      setTimeout(updateMonthFromScroll, 500);
                    }}
                    className={`inline-flex flex-col items-center justify-center w-[48.68px] relative rounded-xl shrink-0 transition-all border-[0.9px] border-[rgb(255,255,255,0.4)] duration-200 ${isSelected ? "bg-customNeutral-50 text-[#343434]" : "bg-customBlue-400 text-customNeutral-50"
                      }`}
                  >
                    <span className={`text-[9.01px] font-normal capitalize ${isSelected ? "text-[#626262]" : "text-customNeutral-50"}`}>
                      {day.format("ddd")}
                    </span>
                    <span>{day.format("D")}</span>
                    <span className={`absolute mt-7 ${isSelected ? "text-customBlue-400" : "text-customRed-500"}`}>.</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full min-h-[57px]">
            <Button variant="third" onClick={() => router.push("/agenda/configurar-agenda")}>
              Configurar agenda
            </Button>
          </div>
        </div>

        <div className="flex flex-col w-full min-h-92.5 gap-8">
          <span className="flex w-full font-inter font-bold text-lg text-[#1D1D1D] text-start">{selectDayObj.format("D")}, {selectDayObj.format("dddd")}</span>

          <div className="flex w-full overflow-y-auto">
            <SchedulingDay selectDay={selectDay} />
          </div>
        </div>


        <BottomMenu />
      </div>
    </>
  );
}
