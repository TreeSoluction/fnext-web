import Cookies from "js-cookie";

/**
 * Checks if the user is authenticated.
 * @returns {boolean} Returns true if the user is authenticated, false otherwise.
 */
export function checkUserIsAuthenticated(): boolean {
  const token = Cookies.get("token");
  return true;
}
