import Schedule from "../entity/Schedule";
import { ApiResponse } from "./ApiResponse";

export type GetScheduleByProfessionalId = {
  Request: { id: string, selectDay: string };
  Response: ApiResponse<Schedule[]>;
};