import api from "../api";

export async function GetById(id: string) {
  const result = await api.get("/franchise/" + id);
  const parseResult = {
    ...result.data.data,
  };
  return parseResult;
}
