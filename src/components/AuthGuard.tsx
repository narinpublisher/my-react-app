//  📁 src/components/AuthGuard.tsx

import { ReactNode } from "react";
import { useAuthStore } from "../stores/authStore";
import { Navigate } from "react-router-dom";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const user = useAuthStore((s) => s.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}