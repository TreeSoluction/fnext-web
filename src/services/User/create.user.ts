import api from "../api";
import { notifyError } from "../notification";

export const CreateUser = async (data: any) => {
  await api
    .post("/user", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      notifyError(error.response.data.messages[0].message);
      throw new Error(error);
    });
};
