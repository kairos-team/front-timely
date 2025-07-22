import { useState, useEffect } from "react";
import ScheduleTimeline from "./ScheduleTimeline";

interface SchedulingProps {
  name: string;
  from: string;
  to: string;
  date: string;
  avatars: string[];
}

export type { SchedulingProps };

export default function SchedulingDay({ selectDay }: { selectDay: string }) {
  const [schedulingOfDay, setSchedulingOfDay] = useState<SchedulingProps[]>([]);

  useEffect(() => {
    const mockScheduling: SchedulingProps[] = [
      {
        name: "João Silva",
        from: "09:00",
        to: "10:30",
        date: selectDay,
        avatars: ["/avatars/boy.svg"],
      },
      {
        name: "Maria Souza",
        from: "11:00",
        to: "12:00",
        date: selectDay,
        avatars: ["/avatars/girl.svg"],
      },
      {
        name: "Raimunda",
        from: "18:00",
        to: "19:00",
        date: selectDay,
        avatars: ["/avatars/girl.svg"],
      },
      {
        name: "Joana",
        from: "20:00",
        to: "21:00",
        date: selectDay,
        avatars: ["/avatars/girl.svg"],
      },
    ];

    setSchedulingOfDay(mockScheduling);
  }, [selectDay]);

  return (
    <div className="flex w-full overflow-y-auto no-scrollbar">
      <ScheduleTimeline scheduling={schedulingOfDay} />
    </div>
  );
}