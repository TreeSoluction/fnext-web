import { APP_ROUTES } from "@/constants/app-route";

/**
 * Checks if a given route is a public route.
 * @param route - The route to check.
 * @returns {boolean} True if the route is a public route, false otherwise.
 */
export const checkIsPublicRoute = (route: string): boolean => {
  return Object.values(APP_ROUTES.public).includes(route);
};
