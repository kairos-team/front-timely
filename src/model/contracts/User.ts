import User from "../entity/User";
import { ApiResponse } from "./ApiResponse";

export type GetProfessionalById = {
  Request: { id: string };
  Response: ApiResponse<User>;
};