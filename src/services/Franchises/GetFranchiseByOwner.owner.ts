import api from "../api";

export async function GetFranchiseByOwner(id: string) {
  const result = await api.get("/franchise/owner/" + id);
  const parseResult = {
    ...result.data.data,
  };
  return parseResult;
}
