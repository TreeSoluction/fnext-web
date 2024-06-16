import api from "../api";

export const UpdateUserData = async (data: any) =>
  await api.put(`/user/`, data);
