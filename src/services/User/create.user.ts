import api from "../api";

export const CreateUser = async (data: any) =>
  await api.post("/exemplo-de-rota", data);
