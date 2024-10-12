import api from "../api";

export const LoginUser = async (data: any) =>
  (await api.post(`/auth/login`, data)).data;
