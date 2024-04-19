import Cookies from "js-cookie";
import { APP_ROUTES } from "@/constants/app-route";

export function userLogout(): void {
    Cookies.remove('token');
    // @ts-ignore
    window.location = APP_ROUTES.public.login;
}