"use client";

import PrivateRoute from "@/components/PrivateRoute";
import { checkIsPublicRoute } from "@/functions/check-is-public-route";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPublicRoute = checkIsPublicRoute(pathname);

  return (
    <html lang="pt-br">
      <body>
        {isPublicRoute ? children : <PrivateRoute>{children}</PrivateRoute>}
      </body>
    </html>
  );
}
