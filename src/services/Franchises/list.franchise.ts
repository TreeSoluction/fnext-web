import api from "../api";

export const ListFranchise = async () => {
  const result = await api.get("/franchise");
  return result.data.data;
};
