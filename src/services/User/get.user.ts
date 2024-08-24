import api from "../api";

export const GetUserData = async (userId: any) =>
  await api.get(`/user/${userId}`);
