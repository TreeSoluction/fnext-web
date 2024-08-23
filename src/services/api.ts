import axios, { AxiosInstance } from "axios";

const request = () => {
  // TODO: Criar lógica para resgatar token aqui
  const token = "token";

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  if (token) {
    api.defaults.headers["authentication"] = `Bearer ${token}`;
  }

  return api;
};

const api: AxiosInstance = request();

export default api;
