import api from "../api";

export const VerifyBusiness = async (userId: any) =>
  await api.get(`/user/verifyBusiness/${userId}`);
