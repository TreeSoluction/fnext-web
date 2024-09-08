"use client";

import PrivateRoute from "@/components/PrivateRoute";
import LoadingSpinner from "@/components/Util/LoadingSpinner";
import { AuthProvider } from "@/contexts/auth.context";
import { checkIsPublicRoute } from "@/functions/check-is-public-route";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const isPublicRoute = checkIsPublicRoute(pathname);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="pt-br">
      <body>
        <AuthProvider>
          {loading ? (
            <LoadingSpinner />
          ) : isPublicRoute ? (
            children
          ) : (
            <PrivateRoute>{children}</PrivateRoute>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
