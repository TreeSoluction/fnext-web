import { APP_ROUTES } from "@/constants/app-route";
import Cookies from "js-cookie";

export function userLogout(): void {
  Cookies.remove("token");
  // @ts-ignore
  window.location = APP_ROUTES.public.login;
}
