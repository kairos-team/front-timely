import { useState, useEffect } from "react";
import ScheduleTimeline from "./ScheduleTimeline";
import { getScheduleByProfessionalId } from "@/services/scheduleService";
import Schedule from "@/model/entity/Schedule";

export default function SchedulingDay({ selectDay }: { selectDay: string }) {
  const [schedulingOfDay, setSchedulingOfDay] = useState<Schedule[]>([]);

  useEffect(() => {
    let isMounted = true;

    async function fetchSchedule() {
      try {
        const scheduling = await getScheduleByProfessionalId({ id: "0", selectDay });
        if (scheduling.data && isMounted) {
          setSchedulingOfDay(scheduling.data);
        }
      } catch (err) {
        console.error("Erro ao buscar agendamentos:", err);
      }
    }

    fetchSchedule();

    return () => {
      isMounted = false;
    };
  }, [selectDay]);

  return (
    <div className="flex w-full overflow-y-auto no-scrollbar">
      <ScheduleTimeline scheduling={schedulingOfDay} />
    </div>
  );
}
