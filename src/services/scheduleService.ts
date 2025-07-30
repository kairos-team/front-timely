import { GetScheduleByProfessionalId } from "@/model/contracts/Schedule";

export default function scheduleService() {

  const getScheduleByProfessionalId = async (params: GetScheduleByProfessionalId['Request']): Promise<GetScheduleByProfessionalId['Response']> => {
    const { selectDay } = params
    return {
      message: "Ok",
      status: 200,
      data: [
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
        ]
    }
  }

  return {
    getScheduleByProfessionalId
  }
}
