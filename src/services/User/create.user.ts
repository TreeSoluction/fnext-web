import api from "../api";
import { notifyError } from "../notification";

export const createUser = async (data: any) => {
  try {
    const response = await api.post("/user", data);

    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      notifyError("Erro ao registrar!");
      return null;
    }
  } catch (error) {
    notifyError("Erro ao registrar!");
  }
};
