import dayjs from "dayjs";
import ScheduleBlock from "./ScheduleBlock";
import Schedule from "@/model/entity/Schedule";

interface ScheduleTimelineProps {
  scheduling: Schedule[];
}

export default function ScheduleTimeline({ scheduling }: ScheduleTimelineProps) {
  const pxPerMinute = 56 / 60;
  const startHour = 8;
  const endHour = 22;
  const totalMinutes = (endHour - startHour) * 60;
  const now = dayjs();
  const timelineHeight = totalMinutes * pxPerMinute;
  const minutesFromStart = now.diff(now.startOf("day").add(startHour, "hour"), "minute");
  const redLineTop = minutesFromStart * pxPerMinute;

  return (
    <div className="relative w-full" style={{ height: `${timelineHeight}px` }}>
      {Array.from({ length: endHour - startHour + 1 }, (_, i) => {
        const hour = startHour + i;
        const top = i * 60 * pxPerMinute;

        return (
          <div
            key={hour}
            className="absolute left-0 text-right text-xs text-customNeutral-200 pr-2"
            style={{ top: `${top}px` }}
          >
            {hour.toString().padStart(2, "0")}:00
          </div>
        );
      })}

      {now.hour() >= startHour && now.hour() < endHour && (
        <>
          <div
            className="absolute left-1 right-2 h-[2px] mt-1.75 bg-[#EE786B] z-10"
            style={{ top: `${redLineTop}px` }}
          />
          <div
            className="absolute w-[9px] h-[9px] rounded-full bg-[#EE786B] z-10"
            style={{ top: `calc(${redLineTop}px + 3.5px)` }}
          />
        </>
      )}

      {scheduling.map((s, i) => {
        const start = dayjs(`${s.date}T${s.from}`);
        const end = dayjs(`${s.date}T${s.to}`);
        const top = (start.hour() * 60 + start.minute() - startHour * 60) * pxPerMinute;
        const height = end.diff(start, "minute") * pxPerMinute;

        return (
          <div
            key={i}
            className="absolute left-14 right-2"
            style={{ top: `${top}px`, height: `${height}px` }}
          >

            <ScheduleBlock
              key={i}
              name={s.name}
              from={s.from}
              to={s.to}
              date={s.date}
              avatars={s.avatars}
            />
          </div>
        );
      })}
    </div>
  );
}

