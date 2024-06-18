import { APP_ROUTES } from "@/constants/app-route";
import { checkUserIsAuthenticated } from "@/functions/check-user-is-authenticated";
import { useRouter } from "next/navigation";
import React from "react";

type PrivateRouteProps = {
  children: React.ReactNode;
};

/**
 * A component that renders its children only if the user is authenticated.
 *
 * @component
 * @param {React.ReactNode} children - The children to be rendered if the user is authenticated.
 * @returns {React.ReactNode} - The rendered children if the user is authenticated, otherwise null.
 */
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const isUserAuthenticated = checkUserIsAuthenticated();

  React.useEffect(() => {
    if (!isUserAuthenticated) {
      router.push(APP_ROUTES.public.login);
    }
  }, [isUserAuthenticated, router]);

  return <>{isUserAuthenticated && children}</>;
};

export default PrivateRoute;
