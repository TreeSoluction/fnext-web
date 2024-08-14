import api from "../api";
import { ICreateFranchises } from "../interfaces/IFranchises";

export const CreateFranchises = async (data: ICreateFranchises) =>
  await api.post("/franchises", data);
