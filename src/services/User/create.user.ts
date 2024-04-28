import api from "../api";

export const CreateUser = async (data: any) => await api.post("/user", data);
