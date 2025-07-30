import { GetProfessionalById } from "@/model/contracts/User"

export default function userService() {
  const getProfessionalById = async (params: GetProfessionalById['Request']): Promise<GetProfessionalById['Response']> => {
    return {
      message: "Ok",
      status: 200,
      data: {
        id: params.id,
        name: "João",
        role: "Escravo"
      }
    }
  }

  return {
    getProfessionalById
  }
}
