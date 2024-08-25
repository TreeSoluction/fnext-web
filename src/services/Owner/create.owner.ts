import api from "../api";

export const CreateOwner = async (data: any) => await api.post("/owner", data);
